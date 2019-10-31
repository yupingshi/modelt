import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  AfterViewInit
} from "@angular/core";
import { StorefinderService } from "../storefinder/storefinder.service";
import { SingletonService } from "../services/singleton.service";
import { Router } from "@angular/router";
import * as _ from "lodash";
declare const google: any;
@Component({
  selector: "app-storeservicelist",
  templateUrl: "./storeservicelist.component.html",
  styleUrls: ["./storeservicelist.component.scss"]
})
export class StoreservicelistComponent implements OnInit,AfterViewInit {
  openHourWindow: any;
  storePointList:any;
  storesList: any;
  zoom: number;
  copyOfStoreList:Array<any>;
  storePoints: Array<any>;
  uniqStoreList:Array<any>;
  storeTypeList = [
    {
      name: "Stores",
      sortBy: "MBSTORES",
      checked: false
    },
    {
      name: "Stockists",
      sortBy: "STOCKISTS",
      checked: false
    },
    {
      name: "Airports",
      sortBy: "AIRPORTS",
      checked: false
    },
    {
      name: "Hotel",
      sortBy: "HOTELS",
      checked: false
    }
  ];
  enableFilterSort:boolean;
  loadGMscript:boolean;
  storeName:string;
  constructor(
    public storeServ: StorefinderService,
    public zone: NgZone,
    public singletonServ: SingletonService,
    public router: Router
  ) {

  }
  ngOnInit() {
    this.zoom = 12;
  if (this.singletonServ.mbStores) {
    let stores = this.singletonServ.mbStores;
    if (this.singletonServ.getStoreData("kaoStoreLtLng")) {
      const stor = JSON.parse(this.singletonServ.getStoreData("kaoStoreLtLng"));
      this.storeName=stor.postCode;
    }
    this.setUpStore(stores);
  } else {
    if (this.singletonServ.getStoreData("kaoStoreLtLng")) {
      const stor = JSON.parse(this.singletonServ.getStoreData("kaoStoreLtLng"));
      this.findMBstores(stor.lat, stor.lng);
      this.storeName=stor.postCode;
    }
  }
  }
  onShowDt(bol, i) {
    this.storesList[i]["show"] = !this.storesList[i]["show"];
  }
  setAddress(addrObj) {
    const that = this;
    this.zone.run(() => {
      that.findMBstores(addrObj.latitude, addrObj.longitude);
    });
  }
  onSearchKeyUp(event) {
    if (event.key === "Enter") {
      this.onSearchStore(event);
    }
  }
  onSearchStore(event) {
    event.preventDefault();
    const geocoder = new google.maps.Geocoder();
    
    const _input =  this.storeName;
    geocoder.geocode({ address: _input }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        this.findMBstores(
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        );
      } else {
      }
    });
  }

  findMBstores(lat, lng) {
    const _postCode =  this.storeName;
    this.singletonServ.setStoreData(
      "kaoStoreLtLng",
      JSON.stringify({ lat, lng, postCode: _postCode })
    );
    this.storeServ.findStore(lat, lng).subscribe(
      response => {
        if (response) {
          let stores = response["stores"];
          if(stores){
           this.setUpStore(stores);
         }
       }
      },
      err => {}
    );
  }
  setUpStore(stores) {
    let date = new Date();
    date.getDay();
    let _day = date.toDateString().split(" ")[0].toLowerCase();

    stores.map((obj, k) => {
      let storeAssetInfo = this.getImageIcon(obj["storeType"]);
      obj["image"] = storeAssetInfo.image;
      obj["iconUrl"] = storeAssetInfo.icon;
      obj['order']=this.setStoreOrder(obj["storeType"]);
      const currentOpenHour = _.find(obj["kaoOpeningHoursList"], function(o) {
        return o.day.indexOf(_day) != -1;
      });
      if (currentOpenHour != -1) {
        obj["currentOpenHour"] = currentOpenHour;
      }
    });
    let _mbStores = stores.filter(_obj => {
      return _obj.storeType == "MBSTORES";
    });
    if(_mbStores.length!=0){
     _mbStores.unshift({storeType:"MBSTORES",header:true,name:"STORES",order:0});
    }
    let _airports = stores.filter(_obj => {
      return _obj.storeType == "AIRPORTS";
    });
    if(_airports.length!=0){
    _airports.unshift({storeType:"AIRPORTS",header:true,name:"AIRPORTS",order:1});
    }
    let _stocklist = stores.filter(_obj => {
      return _obj.storeType == "STOCKISTS";
    });
    if(_stocklist.length!=0){
    _stocklist.unshift({storeType:"STOCKISTS",header:true,name:"STOCKISTS",order:2});
    }
    let _hotels = stores.filter(_obj => {
      return _obj.storeType == "HOTELS";
    });
    if(_hotels.length!=0){
        _hotels.unshift({storeType:"HOTELS",header:true,name:"HOTELS",order:3});
      }
    let _storelist=[].concat(_mbStores,_airports,_stocklist,_hotels);
    _storelist.sort(function(a, b) {
      return a.order - b.order;
    });
    this.copyOfStoreList=this.nestedCopy(_storelist);
    
    let _copyOfStoreList=this.nestedCopy(_storelist);
    let storesPoint = _copyOfStoreList.filter((obj)=>{
     return  obj.storeType !="HOTELS"
    });
    let _data=JSON.parse(JSON.stringify(storesPoint));
    this.checkStoresCount(_data);
    this.storePointList=storesPoint;
    this.storesList = storesPoint;
    this.storeTypeList.map(item => {
      if (_storelist) {
        let _data = _storelist.filter(_obj => {
          return _obj.storeType == item.sortBy;
        });
        if (_data.length != 0) {
          item["stores"] = _data;
          item["checked"] = true;
          item["disabled"] = false;
        } else {
          item["checked"] = false;
          item["disabled"] = true;
        }
      }
    });
    this.storeTypeList[3]["checked"]=false;

  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  setStoreOrder(_storeType){
    if (_storeType === "MBSTORES") {
      return 0;
    } else if (_storeType === "AIRPORTS") {
      return 1;
    } else if (_storeType === "STOCKISTS") {
      return 2;
    } else if (_storeType === "HOTELS") {
      return 3;
    }
  }
  getImageIcon(_storeType) {
    if (_storeType === 'MBSTORES') {
      const _obj = {
        image: '../../assets/imgs/detail-tabstore.png',
        icon: {
          url: '../../assets/imgs/MBstore_pinicon.png',
          scaledSize: {
            height: 40,
            width: 40
          }
        }
      };
      return _obj;
    } else if (_storeType === 'AIRPORTS') {
      const _obj = {
        image: '../../assets/imgs/airport-icon.png',
        icon: {
          url: '../../assets/imgs/Airports_pinicon.png',
          scaledSize: {
            height: 40,
            width: 40
          }
        }
      };
      return _obj;
    } else if (_storeType == "STOCKISTS") {
      const _obj = {
        image: "../../assets/imgs/stockists_icon.png",
        icon: {
          url: "../../assets/imgs/Stockists_pinicon.png",
          scaledSize: {
            height: 40,
            width: 40
          }
        }
      };
      return _obj;
    } else if (_storeType === 'HOTELS') {
      const _obj = {
        image: '../../assets/imgs/hotel-icon.png',
        icon: {
          url: '../../assets/imgs/hotel_pinicon.png',
          scaledSize: {
            height: 40,
            width: 40
          }
        }
      };
      return _obj;
    }
  }

  onChangeStoreBy(event, data,k) {
    event.preventDefault();
    if (event.target.checked) {
      this.storeTypeList[k]['checked'] = true;
      const _list: any = _.unionBy(this.storePointList, data.stores);
      _.uniq(_list);
      this.storePointList = _list;
      _list.sort(function(a, b) {
        return a.order - b.order;
      });
    const _hotelPoint = this.storesList.filter((obj) => {
      return  obj.storeType === 'HOTELS';
     });
     if ( _hotelPoint.length !== 0) {
      if ( data.storeType === 'HOTELS') {
        const _hotelList: any = _.unionBy(this.storesList, data.stores);
        _.uniq(_hotelList);
        this.storesList = _hotelList;
      }
    }
    } else {
      this.storePointList = this.storePointList.filter(function(obj) {
        return data.sortBy !== obj.storeType;
      });
      this.storeTypeList[k]['checked'] = false;
    }
    const _data = JSON.parse(JSON.stringify(this.storesList));
    this.checkStoresCount(_data);
  }

  onFindStoreDetail(storeData) {
    this.onCheckStore(storeData.name, false);
  }
  onFindStoreDirection(storeData) {
    this.onCheckStore(storeData.name, true);
  }
  onCheckStore(storeName, direction) {
    const that = this;
    this.storeServ.checkStore(storeName).subscribe(
      response => {
        if (direction) {
          const url = 'store/' + 'store-finder/' + response['url'];
          this.singletonServ.storeDetail = response;
          this.router.navigate([url], {
            queryParams: { getDirections: true },
            queryParamsHandling: 'merge'
          });
        } else {
          const url = 'store/' + 'store-finder/' + response['url'];
          this.singletonServ.storeDetail = response;
          that.router.navigate([url]);
        }
      },
      err => {}
    );
  }

  checkStoresCount(data){
    const _arr = data.filter((obj) => {
        return !obj.header;
    });
    this.uniqStoreList = _arr.length;
  }
  ngAfterViewInit(){
    const  url = "https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyDHfkdOsaMspf8lm0fNW_GyGb7MdAM5gs0";
    const _checkUrl = this.singletonServ.isMyScriptLoaded(url);
    setTimeout(()=>{
    if(!_checkUrl){
    this.loadScript(url);
    }else{
    this.loadGMscript=true;
    }
    
  });
}
loadScript(url){
  this.singletonServ.loadScript(url).then(() => {
    this.loadGMscript=true;
  });
}

}
