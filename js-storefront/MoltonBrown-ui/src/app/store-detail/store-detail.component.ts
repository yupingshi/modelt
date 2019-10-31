import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  AfterViewInit
} from "@angular/core";
import { SingletonService } from "../services/singleton.service";
import { StorefinderService } from "../storefinder/storefinder.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { MetaService } from "../services/meta.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import * as _ from "lodash";

@Component({
  selector: "app-store-detail",
  templateUrl: "./store-detail.component.html",
  styleUrls: ["./store-detail.component.scss"]
})
export class StoreDetailComponent implements OnInit,AfterViewInit {
  storeData: any;
  listView: boolean;
  currentOpenHour: any;
  direction: any;
  storeForm: FormGroup;
  loadGMscript:boolean;
  @ViewChild("myPanel") mypanelRefer: ElementRef;
  @ViewChild("storeRoute") myStoreRouteEl: ElementRef;
  public zoom: number;
  show: boolean;
  address:any;
  dir: any;
  public renderOptions = {
    suppressMarkers: true
  };
  public markerOptions = {
    origin: {
      icon: "https://i.imgur.com/7teZKif.png",
      draggable: true
    },
    destination: {
      icon: "https://i.imgur.com/7teZKif.png",
      draggable: true,
      infoWindow: `
          <h4>Hello<h4>
          <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
          `
    }
  };
  public travelMode: string = "DRIVING";
  public transitOptions: any = undefined;
  public drivingOptions: any = undefined;
  public waypoints: object = [];
  public optimizeWaypoints: boolean = true;
  public provideRouteAlternatives: boolean = false;
  public avoidHighways: boolean = false;
  public avoidTolls: boolean = false;
  public visible: boolean = true;
  public panel: object | undefined;
  destroy: boolean;

  constructor(
    private zone: NgZone,
    public singletonServ: SingletonService,
    public storeServ: StorefinderService,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public metaService: MetaService
  ) {
    this.storeData = singletonServ.storeDetail;
    this.listView = true;
    this.zoom = 18;
    this.show = false;
    this.dir = {
      origin: { lat: 24.799748, lng: 120.974021 },
      destination: { lat: 24.792524, lng: 120.975517 }
    };
  }
  onSearchKeyUp(event) {
    if (event.key === "Enter") {

    }
  }
  setAddress(addrObj) {
    this.zone.run(() => {
      const _obj = {
        latitude: addrObj.latitude,
        longitude: addrObj.longitude
      };
    });
  }
  onSubmitForm(event) {
    if (this.storeForm.valid) {
      this.router.navigate(["store", "company", "stores"]);
    }
  }
  ngOnInit() {
    const baseSite =this.singletonServ.catalogVersion;
    this.storeForm = this.fb.group({
      storeName: new FormControl("", { validators: [Validators.required] })
    });
    if (!this.storeData) {
      const _urlPath = this.location
        .path()
        .slice(1)
        .split("/");
      let _storename = _urlPath[_urlPath.length - 2];
      _storename = _storename.replace(/-/g, " ");
      const name = this.titleCase(_storename);
      this.storeServ.checkStore(name).subscribe(
        response => {
          let date = new Date();
          date.getDay();
          const currentOpenHour = _.find(
            response["kaoOpeningHoursList"],
            function(o) {
              let _date=date.toDateString().split(" ")[0].toLowerCase();
              return (
                o.day.indexOf(_date) != -1
              );
            }
          );
          this.currentOpenHour = currentOpenHour;
          const storeData = response;
          storeData["storeAssets"] = this.getImageIcon(response["storeType"]);
          this.storeData = storeData;
          const queryStatus = this.route.snapshot.queryParamMap.get(
            "getDirections"
          );
          if (queryStatus) {
            const _obj = {
              origin: { lat: "", lng: "" },
              destination: {
                lat: this.storeData.geoPoint.latitude,
                lng: this.storeData.geoPoint.longitude
              },
              travelMode: "WALKING"
            };

            _obj['origin']['lat']=baseSite['geoPoint']['latitude'];
            _obj['origin']['lng']=baseSite['geoPoint']['longitude'];
            this.listView =false;
          }
          this.storeForm.controls["storeName"].patchValue(response["name"]);
        },
        err => {}
      );
    } else {
      this.storeData["storeAssets"] = this.getImageIcon(
        this.storeData["storeType"]
      );
      let date = new Date();
      date.getDay();
      const currentOpenHour = _.find(
        this.storeData["kaoOpeningHoursList"],
        function(o) {
          let _date = date.toDateString().split(" ")[0].toLowerCase();
          return (
            o.day.indexOf(_date) != -1
          );
        }
      );
      this.currentOpenHour = currentOpenHour;
      const queryStatus = this.route.snapshot.queryParamMap.get(
        "getDirections"
      );
      if (queryStatus) {
        const _obj = {
          origin: { lat: "", lng: "" },
          destination: {
            lat: this.storeData.geoPoint.latitude,
            lng: this.storeData.geoPoint.longitude
          },
          travelMode: "WALKING"
        };
        _obj['origin']['lat']=baseSite['geoPoint']['latitude'];
        _obj['origin']['lng']=baseSite['geoPoint']['longitude'];
        this.listView =false;
      }
    }
    this.destroy = true;
  }

  titleCase(str) {
    let splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
  getImageIcon(_storeType) {
    if (_storeType == "MBSTORES") {
      let _obj = {
        image: "../../assets/imgs/detail-tabstore.png",
        url: "../../assets/imgs/MBstore_pinicon.png",
        scaledSize: {
          height: 40,
          width: 40
        }
      };
      return _obj;
    } else if (_storeType == "AIRPORTS") {
      let _obj = {
        image: "../../assets/imgs/airport-icon.png",
        url: "../../assets/imgs/Airports_pinicon.png",
        scaledSize: {
          height: 40,
          width: 40
        }
      };
      return _obj;
    } else if (_storeType == "STOCKISTS") {
      let _obj = {
        image: "../../assets/imgs/stockists_icon.png",
        url: "../../assets/imgs/Stockists_pinicon.png",
        scaledSize: {
          height: 40,
          width: 40
        }
      };
      return _obj;
    } else if (_storeType == "HOTELS") {
      let _obj = {
        image: "../../assets/imgs/hotel-icon.png",
        url: "../../assets/imgs/hotel_pinicon.png",
        scaledSize: {
          height: 40,
          width: 40
        }
      };
      return _obj;
    }
  }

  getIcon(storeType) {
    if (storeType == "MBSTORES") {
      return "../../assets/imgs/detail-tabstore.png";
    } else if (storeType == "AIRPORTS") {
      return "../../assets/imgs/airport-icon.png";
    } else if (storeType == "STOCKISTS") {
      return "../../assets/imgs/stockists_icon.png";
    } else if (storeType == "HOTELS") {
      return "../../assets/imgs/airport-icon.png";
    }
  }
  onShowStoreList(status) {
    this.listView = status;
  }
  setDirection(data) {
    this.dir = data;
    this.show = true;
  }
  setOriginName(lat,lng){
      let geocoder = new google.maps.Geocoder;
      let latlng = {lat: lat, lng: lng};
       geocoder.geocode({'location': latlng}, (results, status) => {
       if(results.length !=0){
        this.myStoreRouteEl['searchElementRef'].nativeElement.value=results[0]["formatted_address"];
       }
    });
  }
  ngAfterViewInit(){
    this.metaService.createCanonicalURL();
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
