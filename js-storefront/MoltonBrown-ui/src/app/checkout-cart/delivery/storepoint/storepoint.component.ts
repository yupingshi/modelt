import {
    Component,
    OnInit,
    EventEmitter,
    ViewEncapsulation,
    Output,
    ViewChild,
    ElementRef,
    NgZone,
    AfterViewInit
  } from "@angular/core";
  import { StorePointComponentService } from "./storepoint.service";
  import * as _ from "lodash";
  import { SingletonService } from "../../../services/singleton.service";
  import {ShipmentForm} from '../../../forms/shipmentForm.form';
  import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
  import { TranslateServiceSubService } from "../../../pipe/translate-service-sub.service";
  declare const google: any;
  @Component({
    selector: "app-storepoint",
    templateUrl: "./storepoint.component.html",
    styleUrls: ["./storepoint.component.scss"],
    encapsulation: ViewEncapsulation.None
  })
  export class StorepointComponent implements OnInit,AfterViewInit {
    storePointForm:FormGroup;
    listView: boolean;
    mbPointOfServices: any;
    pointOfServices: any;
    storesList: Array<any> = [];
    emptyStores:boolean;
    pointService: boolean;
    mbpointService: boolean;
    showStores: boolean;
    postCode: string;
    submitted:boolean;
    addressData:any;
    openHourWindow:any;
    renderPost:boolean;
    mbStores:boolean;
    loadGMscript:boolean;
    storeLoad:boolean;
    @Output() selectedStore: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild("search") searchElementRef: ElementRef;
    storeTypeList=[
      {
        name:'Molton Brown Stores - <strong> FREE </strong>(1-4 working days)',
        sortBy:'MBSTORES',
        img:"https://www.moltonbrown.co.uk/MBExternalBinary/DeliveryServiceimages/mb-cc.png",
        checked:false
      },
      {
        name:'Local collection points - £3.95 or <strong>FREE</strong> over £49 (2-3 working days)',
        sortBy:'GFSSTORE',
        img:"https://www.moltonbrown.co.uk/MBExternalBinary/DeliveryServiceimages/DPD-cc.png",
        checked:false
      }];
    constructor(
      public singletonServ: SingletonService,
      public storeServ: StorePointComponentService,
      private zone: NgZone,
      public shipmentForm:ShipmentForm,
      private fb: FormBuilder,
      private translate: TranslateServiceSubService
    ) {
      this.storePointForm = this.fb.group(shipmentForm.storePoint());
      this.listView = true;
      this.showStores = false;
      this.emptyStores=false;
      this.pointService=true;
      this.mbpointService=true;
    }
  
    ngOnInit() {
       const that=this;
       const gfsData=this.singletonServ.gfsData;
       if(gfsData){
        that.emptyStores=false;
        that.showStores=true;
        that.storesList = gfsData.stores;
        that.storeTypeList=gfsData.storeTypeList;
        this.storePointForm.controls['zipcode'].patchValue(gfsData.postCode);
        }  
        const baseSite=this.singletonServ.catalogVersion;
        if(baseSite){
          this.setLang(baseSite.lngCode);
        }
     }
     setLang(lang: string) {
      this.translate.use(lang);
    }

    onSearchKeyUp(event) {
      this.emptyStores=false;
     if (event.key === "Enter") {
       if(this.storePointForm.valid){
         this.storePointForm.controls['zipcode'].patchValue(event.target.value);
         this.storeLoad=true;
         this.onPostCodeClick(event);
       }
      }
   }
   
    setAddress(addrObj) {
      const that = this;
      const _input=this.searchElementRef.nativeElement.value; 
      this.storeLoad=true;
      this.zone.run(() => {
        that.postCode = addrObj.postal_code;
        this.addressData=addrObj;
        const _obj={
          postCode:addrObj.postal_code,
          latitude:addrObj.latitude,
          longitude:addrObj.longitude
       } 
       if(_obj.postCode){
          this.storePointForm.controls['zipcode'].patchValue(addrObj.formatted_address);
          that.showGfS(_obj);
        } else  {
          that.getPostCodeByLatLng(addrObj.latitude,addrObj.longitude);
        }
      });
    }
    getPostCodeByLatLng(lan ,longe) {
          const that=this;
           var latlng = new google.maps.LatLng(lan,longe);
           var geocoderrr = new google.maps.Geocoder();
           geocoderrr.geocode({'latLng': latlng}, function(results1, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                const data = results1[0]['address_components'].filter((obj)=>{
                  return  obj['types'][0] =="postal_code"       
                 });
                 if(data.length !=0){
                  const _obj={
                    latitude:lan,
                    longitude:longe
                 } 
                  _obj['postCode']=data[0]['short_name'];
                  that.storeLoad=true;
                  that.showGfS(_obj);  
                } else {
                  this.storeLoad=false;
                  that.emptyStores=true;
                  that.storesList=[];
                }
                   }
               if (status == "ZERO_RESULTS") {
                that.emptyStores=true;
                this.storeLoad=false;
                that.storesList=[];
               }
             });
            }

    onFocus(){
      this.emptyStores=false;
    }
  
  
    emitselectedStore(data) {
      this.selectedStore.emit(data);
    }
    onChangePostcode(event){
      this.emptyStores=false;
    }
    onPostCodeClick(event) {
      event.preventDefault();  
      const that=this;  
      if(this.storePointForm.valid){
        this.storeLoad=true;   
      const geocoder = new google.maps.Geocoder();
      const _input=this.searchElementRef.nativeElement.value;   
      this.storesList=[];      
       geocoder.geocode( { 'address': _input}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {     
         if(results[0]){
              const _obj={
                postCode:_input,
                latitude:results[0].geometry.location.lat(),
                longitude:results[0].geometry.location.lng()
              }
              const data = results[0]['address_components'].filter((obj)=>{
               return  obj['types'][0] =="postal_code"       
              });
              if(data.length !=0){
                _obj['postCode']=data[0]['short_name'];
                that.showGfS(_obj);  
              } else {
                that.getPostCodeByLatLng(results[0].geometry.location.lat() ,results[0].geometry.location.lng());
              }

            }	 else { 
              this.storeLoad=false;
              that.emptyStores=true;
              that.storesList=[];
            }     
        } else {  
          this.storeLoad=false;       
            that.emptyStores=true;
            that.storesList=[];
        }
      });     
      this.submitted = true;    
    } else {
      this.validateAllFormFields(this.storePointForm); 
    }
    }
  
   
  
  validateAllFormFields(formGroup: FormGroup) {        
      Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);             
        if (control instanceof FormControl) {             
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {      
          this.validateAllFormFields(control);            
        }
      });
  }

    showGfS(storeInfo) {
      const baseSite = this.singletonServ.catalogVersion;
      this.storesList=[];
      this.mbPointOfServices=[];
      this.pointOfServices=[];
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const data = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        this.getGfsData(data.token,data.email,data.code, storeInfo);  
      } else {      
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const data = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.getGfsData(data.token,'anonymous',data.guid, storeInfo);
        }
      }
    }

    getGfsData(token,email,code, storeInfo){
      this.showStores = false;
      this.storeServ.getGFSData(token,email,code, storeInfo).subscribe(
        resp => {
          this.storeLoad=false;
          this.mbStores=true;
          const stores =_.filter(resp['pointOfServices'], function(o) { 
            return (o.storeType =='MBSTORES' ||o.storeType =='GFSSTORE'); 
          });
          stores.map((obj,k) => {
            let  storeAssetInfo=this.getImageIcon(obj['storeType']);
            obj["storeIcon"]=storeAssetInfo.image;
            obj["iconUrl"]=storeAssetInfo.icon;
            obj['address']['id']='GFSSTORE'+k; 
          });
          stores.sort((a,b)=>{
            if (a['storeType'] > b['storeType']) {
              return -1;
          }
          if (b['storeType'] > a['storeType']) {
              return 1;
          }
          return 0;
        });
        this.storeTypeList.map((item)=>{
          if(item.sortBy=='MBSTORES'){
              const _mbStoreData= stores.filter((_obj)=>{
                return _obj.storeType=='MBSTORES'
            }); 
            item['stores']=_mbStoreData;
            item['checked']=(_mbStoreData.length !=0)?true:false;
          }else {
            const _GfsStoreData= stores.filter((_obj)=>{
                return _obj.storeType=='GFSSTORE'
            }); 
            item['stores']=_GfsStoreData;
            item['checked']=(_GfsStoreData.length !=0)?true:false;
          }
      });  
          this.getStores(stores,storeInfo);          
        },
        error => {
          this.storeLoad=false;
          this.storesList=[];    
          if(error.error.errors[0]['message']=="No sotres found"){
            this.mbStores=false;
            this.emptyStores=true;
            this.storesList=[];
          }
        }
      );
    }


    getImageIcon(_storeType){
      
      if(_storeType =='MBSTORES'){
     let _obj={
         image: "../../../../assets/imgs/mb-cc.png",
         icon:{
         url: "../../../../assets/imgs/MBstore_pinicon.png",
         scaledSize: {
           height: 56,
           width: 47
         }}
         
     }
        return _obj
      }else if(_storeType =='GFSSTORE'){
       let _obj={
         image:'../../../../assets/imgs/DPD-cc.png',
         icon:{
         url: "../../../../assets/imgs/DPD-cc.png",
         scaledSize: {
           height: 40,
           width: 40
         }
        }
     }
        return _obj
      }

    }
      
    getStores(stores,storeInfo){
      if(stores){
          this.storesList = stores;
          this.singletonServ.gfsData={
              storeInfo:storeInfo,
              stores:stores,
              storeTypeList:this.storeTypeList
            }
            this.emptyStores=false;
            this.showStores=true;
      }
    }
    onShowStoreList(bol) {
      this.listView = bol;
    }

    checkMBStores(event,data,k){  
      event.preventDefault();
      const that=this;
      this.storeTypeList[k]['checked']=event.target.checked;
      if(event.target.checked){
         const _list= _.unionBy(that.storesList, data.stores);
        _.uniq(_list);
        _list.sort((a,b)=>{
          if (a['storeType'] > b['storeType']) {
            return -1;
        }
        if (b['storeType'] > a['storeType']) {
            return 1;
        }
        return 0;
      });
        that.storesList=_list;
       }else{
        that.storesList = that.storesList.filter(function( obj ) {
           return data.sortBy !== obj.storeType;
         });
         that.storesList.sort((a,b)=>{
          if (a['storeType'] > b['storeType']) {
            return -1;
        }
        if (b['storeType'] > a['storeType']) {
            return 1;
        }
        return 0;
      });
       }
     }

    onShowMapsOpenHour(data){
      this.listView=false;
      this.openHourWindow=data;
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
