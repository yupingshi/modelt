import { Component,  NgZone, OnInit,ViewChild,ElementRef, AfterViewInit } from "@angular/core";
import { StorefinderService } from "../storefinder/storefinder.service";
import { SingletonService } from "../services/singleton.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import {RegistrationForm} from '.././forms/registration.form';
import * as _ from "lodash";
declare const google: any;
@Component({
  selector: "app-storefinder",
  templateUrl: "./storefinder.component.html",
  styleUrls: ["./storefinder.component.scss"]
})
export class StorefinderComponent implements OnInit,AfterViewInit {
  @ViewChild("findStore") fsElementRef: ElementRef;
  @ViewChild("storeFinderFeed") storeFinderFeed: ElementRef;
  stores: any;
  sorryErrMsgBlock:boolean;
  postCode:string;
  emptyErrMsgBlocks:boolean;
  submitted:boolean;
  storeSuggestionBlock:boolean;
  storeForm:FormGroup;
  descriptionBlock:boolean;
  loadGMscript:boolean;
  constructor(
    private zone: NgZone,
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public storeServ: StorefinderService,
    public singletonServ: SingletonService,
    public router: Router

  ) {
    
    this.storeForm = this.fb.group(customerForm.storesForm());
  }
  ngOnInit() {
    this.wrapFRslots();
    this.findDstore();
    this.descriptionBlock=true;
  }


  onShowStoreEvents(event){
    this.router.navigate(['store','store-events']);
  }
  wrapFRslots(){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    this.storeServ.getStaticContent(baseSite.lngCode).subscribe((response:any)=>{
      if(response){
        that.storeFinderFeed.nativeElement.innerHTML = response.storeFinder.slotId; 
      }
    },err=>{

    });
  }
  findDstore() {
    const baseSite = this.singletonServ.catalogVersion;
    this.storeServ.getStores().subscribe(
      response => {
        const store = response["kaoStores"];
        const currentIndex = _.findIndex(store, res => {
          return res.country == baseSite.name;
        });
        store.sort();
        this.stores = store;
        if (currentIndex != -1) {
          this.stores[currentIndex]["show"] = true;
          if (this.stores[currentIndex]["stores"]) {
            this.stores[currentIndex]["stores"][0]["show"] = true;
          }
        }
      },
      err => {}
    );
  }
  onStoretyeClick(event, k, l) {
    event.stopPropagation();
    event.preventDefault();
    this.stores[k]["stores"].map((obj, index) => {
      if (index == l) {
        obj["show"] = !obj["show"];
      } else {
        obj["show"] = false;
      }
    });
  }
  onCountryTyeClick(event, k) {
    event.preventDefault();
    this.stores.map((obj, id) => {
      if (id == k) {
        obj["show"] = !obj["show"];
      } else {
        obj["show"] = false;
      }
    });
  }
  onCheckStore(storeName) {
    this.storeServ.checkStore(storeName).subscribe(
      response => {
        const url = "store/" + "store-finder/" + response["url"];
        this.singletonServ.storeDetail = response;
        this.router.navigate([url]);
      },
      err => {}
    );
  }
  setAddress(addrObj) {
    const that=this;
    this.zone.run(() => {
      that.findMBstores(addrObj.latitude,addrObj.longitude);
    });
  }
  onSearchKeyUp(event) {
      let _storeval=this.storeForm.value.storeName.value;
      if(this.storeForm.value.storeName.value){
      if(_storeval.length !=0){
        _storeval.trim();
      }
    
    if (event.key === "Enter") {
      if(_storeval.length!=0){
          this.storeSuggestionBlock=false;
          this.emptyErrMsgBlocks=false;
          this.onSearchStore(event);
      }
      else{
        this.storeSuggestionBlock=true;
        this.emptyErrMsgBlocks=true;
      }
       
     }
    }
  }
  onSearchStore(event){    
       event.preventDefault();
       const that=this;
       const geocoder = new google.maps.Geocoder();
       const _input=this.fsElementRef.nativeElement.value;    
        geocoder.geocode( { 'address': _input}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {   
             if(that.storeForm.valid)  {     
             that.findMBstores(results[0].geometry.location.lat(),results[0].geometry.location.lng());
             that.emptyErrMsgBlocks=false;
             that.storeSuggestionBlock=true;        
             that.descriptionBlock=false;
            }else{
              that.emptyErrMsgBlocks=true;
              that.sorryErrMsgBlock=false;
              that.storeSuggestionBlock=true;        
              that.descriptionBlock=false;
            }
          } else {          
          }
        });  
     
  }
  findMBstores(lat,lng){
    const _postCode=this.fsElementRef.nativeElement.value;
    if(lat && lng){
      this.singletonServ.setStoreData('kaoStoreLtLng',JSON.stringify({lat,lng,postCode:_postCode}));
      this.storeServ.findStore(lat,lng).subscribe((response)=>{
        this.storeSuggestionBlock=false;
        if(response['stores']){
          this.singletonServ.setStoreData(
            "kaoStoreLtLng",
            JSON.stringify({lat,lng, postCode: _postCode })
          );
          let stores=response['stores'];       
          this.singletonServ.mbStores=stores;
          this.sorryErrMsgBlock=false;
          this.router.navigate(['store','company','results']);
        }else{
          const _input=this.fsElementRef.nativeElement.value;  
          this.postCode=_input; 
          this.storeSuggestionBlock=true;
          this.sorryErrMsgBlock=true;
        }
      },err=>{
        const _input=this.fsElementRef.nativeElement.value;  
          this.postCode=_input; 
          this.storeSuggestionBlock=true;
          this.sorryErrMsgBlock=true;
      });
   }
  }


  getImageIcon(_storeType){
    if(_storeType =='MBSTORES'){
     let _obj={
       image:'../../assets/imgs/detail-tabstore.png',
       icon:{
       url: "../../assets/imgs/MBstore_pinicon.png",
       scaledSize: {
         height: 40,
         width: 40
       }}
       
   }
      return _obj
    }else if(_storeType =='AIRPORTS'){
     let _obj={
       image:'../../assets/imgs/airport-icon.png',
       icon:{
       url: "../../assets/imgs/Airports_pinicon.png",
       scaledSize: {
         height: 40,
         width: 40
       }
      }
   }
      return _obj
    }else if(_storeType =='STOCKISTS'){
     let _obj={
       image:'../../assets/imgs/stockists_icon.png',
       icon:{
       url: "../../assets/imgs/Stockists_pinicon.png",
       scaledSize: {
         height: 40,
         width: 40
       }
      }
   }   
      return _obj;
    }else if(_storeType =='HOTELS'){
     let _obj={
       image:'../../assets/imgs/hotel-icon.png',
       icon:{
       url: "../../assets/imgs/hotel_pinicon.png",
       scaledSize: {
         height: 40,
         width: 40
       }
      }
   }
      return _obj;
    }
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
