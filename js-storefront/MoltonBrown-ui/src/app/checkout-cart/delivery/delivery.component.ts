import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild
} from "@angular/core";
import { DeliveryComponentService } from "./delivery.service";
import { SingletonService } from "../../services/singleton.service";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { profileComponentService } from "../../component/profile-form/profile.service";
import { TranslateServiceSubService } from "./../../pipe/translate-service-sub.service";
import {
  US_COUNTRIES
} from "../../app.constant";
import{OrderSummaryComponent} from '../order-summary/order-summary.component';
import * as _ from "lodash";
import { Subscription, Subject } from "rxjs";
import { filter, map, take, toArray, takeUntil } from 'rxjs/operators';
@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryComponent implements OnInit, AfterViewInit {
  @ViewChild("cartRefElement") cartCo:OrderSummaryComponent;
  cartObj:any;
  deliverytypeName: string;
  switchServiceType: string;
  switchDeliveryType: string;
  deliveryCost: string;
  paymentBlock: boolean;
  showLoading: boolean;
  expressService: boolean;
  updateCart: any;
  deliveryInfo: any;
  deliveryServiceInfo:any;
  collecionInfo: any;
  editForm: boolean;
  selected: string;
  selectedPayType: string;
  customerInfoUpdate: any;
  overlay: boolean;
  deliveryModeTypes: any;
  siteSpecicShipping: boolean;
  deliverySiteName: string;
  expressCheckout:boolean;
  expressChecService:boolean;
  osDetail:any;
  private unsubscribe$=new Subject<void>();
  private validUnsubscribe$=new Subject<void>();
  pageLoad:boolean;
  loadingPage:boolean=true;
  constructor(
    public deliveryServ: DeliveryComponentService,
    public singletonServ: SingletonService,
    public profileServ: profileComponentService,
    public titleService: Title,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private translate: TranslateServiceSubService
  ) {
    this.paymentBlock = false;
    this.deliveryCost = "TBC";
    this.showLoading = false;
    this.expressService = true;
    this.switchServiceType = "delivery";
    this.switchDeliveryType = "";
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.countryCode === "US" || baseSite.countryCode === "gb") {
      this.pageLoad=true;
    }
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  ngOnInit() {
    const queryStatus = this.route.snapshot.queryParamMap.get(
      "expressCheckout"
    );
    this.titleService.setTitle('Molton Brown - Checkout Delivery');
    const baseSite = this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData('paypalGuest')){
      this.singletonServ.removeItem('paypalGuest');
    }
    if(this.singletonServ.getStoreData('order')){
      this.singletonServ.removeItem('order');
    }
    if (baseSite) {
        const lngCode = baseSite.lngCode;
        this.setLang(lngCode);
        if (baseSite.countryCode === "eu" || baseSite.countryCode === "de") {
          this.siteSpecicShipping = false;
          if(queryStatus){
            this.pageLoad=true;
          }else{
            this.switchDeliveryType = "collect";
          }
        } else {
          this.siteSpecicShipping = true;
          this.switchDeliveryType = "";
        }
  }
   this.getDlMethods();

  }
  showOverLay(data){
    this.pageLoad=data.load;
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  getDlMethods(){
    const baseSite = this.singletonServ.catalogVersion;
    const queryStatus = this.route.snapshot.queryParamMap.get(
      "expressCheckout"
    );
    if (this.singletonServ.getStoreData(baseSite.reg)) { 
        const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        if(_user.token){
            if(queryStatus){
              this.getQueryStatus(true);
            }else{
              this.getDeliveryModeType(_user.token, _user.email, _user.code,null);
            }       
      }else{
        this.deliveryServ.generateCartToken().subscribe((token)=>{
          const _token=token['access_token'];
          _user['token']=_token
          this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(_user));
            if(queryStatus){
              this.getQueryStatus(true);
            }else{
              this.getDeliveryModeType(_user.token, _user.email, _user.code,null);
            }
        },err=>{

        });
      }
    }else{
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            if(_guest.token){
              this.getDeliveryModeType(_guest.token, "anonymous", _guest.guid,null);
            }else{
              this.deliveryServ.generateCartToken().subscribe((token)=>{
                const _token=token['access_token'];
                _guest['token']=_token;
                this.getDeliveryModeType(_guest.token, "anonymous", _guest.guid,null);
              },err=>{

              });
            }
        }
    }
  }
 
  getQueryStatus(payment){
      const baseSite = this.singletonServ.catalogVersion;
      if(this.singletonServ.getStoreData(baseSite.reg)){
        const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
       this.deliveryServ.expressCheckout(user.token,user.email).pipe(takeUntil(this.validUnsubscribe$)).subscribe((response)=>{
         if(response){
          this.deliveryInfo={
            deliveryName:response['shippingMethod'],
            customerAddress:response['defaultShippingAddress'],
            cardForm:response
          };
         let _isocode=this.deliveryInfo.customerAddress.country.isocode;
          const id=response['defaultShippingAddress']['id'];
          this.deliveryServ
           .confirmAddress(
             user.token,
             user.email,
             user.code,
             id
           ).subscribe((del)=>{
             const shippingMethod=response['shippingMethod'];
             let availableShippingDay;
            if(response['availableShippingDay']){
              if(response['availableShippingDay']['date']){
                availableShippingDay=response['availableShippingDay'];
              }else{
                availableShippingDay=false;
              }              
            }  
            this.deliveryInfo['payType']=shippingMethod;
            this.deliveryInfo['availableShippingDay']=availableShippingDay;
            this.deliveryServiceInfo= this.deliveryInfo; 
            this.expressChecService=true;
            this.switchServiceType = "service"; 
            this.expressCheckout=true;  
            if (baseSite.isoCode == "US") {
              if(_isocode){
              let _country = _.find(US_COUNTRIES, obj => {
                return _isocode == obj.isocode;
              });
              this.deliveryInfo["customerAddress"]["country"] = _country;
              }              
            }
            this.expressService=true;             
             if(baseSite.isoCode =="EU" ||baseSite.isoCode =="DE"){
               const   _method="International-Delivery&countryCode="+this.deliveryInfo["customerAddress"]["country"]['isocode'];
               this.getDeliveryModeType(user.token, user.email,user.code,_method);
               this.cartCo.usSaleTax=true;
             }else{
              const _code=response['shippingMethod']['code'];
              this.getDeliveryModeType(user.token, user.email,user.code,_code);
              this.cartCo.usSaleTax=true;
            }
              this.paymentBlock = payment;
          },err=>{
            this.pageLoad=false;
            if(err.errors){
              const _baseSite = this.singletonServ.catalogVersion;
              if(err.errors[0]['type']== "InvalidTokenError"){
                if(this.singletonServ.getStoreData(_baseSite.guest)){
                  this.singletonServ.removeItem(_baseSite.guest);
                 } else if(this.singletonServ.getStoreData(_baseSite.reg)){
                  this.singletonServ.removeItem(_baseSite.reg);
                  }
                 this.router.navigate(['store','global',"sessionExpired"]);
              }
            }
          });
 
      }
    },err=>{
      this.pageLoad=false;
      if(err.errors){
        const _baseSite = this.singletonServ.catalogVersion;
        if(err.errors[0]['type']== "InvalidTokenError"){
          if(this.singletonServ.getStoreData(_baseSite.guest)){
             this.singletonServ.removeItem(_baseSite.guest);
           } else if(this.singletonServ.getStoreData(_baseSite.reg)){
             this.singletonServ.removeItem(_baseSite.reg);
            }
           this.router.navigate(['store','global',"sessionExpired"]);
        }
      }
      })

  }
  }
  getDeliveryModeType(token, email, code,method) {
    this.deliveryServ.getDeliveryModes(token, email, code,method).pipe(takeUntil(this.unsubscribe$)).subscribe(
      response => {
        if(response){
          response['shippingServices'].map(obj => {
            if (obj.deliveryName == "Click & Collect") {
              obj.imageSrc = "assets/imgs/Clickcollect.png";
            } else {
              obj.imageSrc = "assets/imgs/StandardDelivery.png";
            }
          });
          const dlModes=response['shippingServices'];
          dlModes.sort((a,b)=>{
            return a.position-b.position
          });
          this.deliveryModeTypes = dlModes;
          this.osDetail=response;
          this.pageLoad=false;
      }
      },
      err => {
        this.pageLoad=false;
        this.singletonServ.sendMessage({discardDlMethodLoader:true});
        if(err.errors){
          const _baseSite = this.singletonServ.catalogVersion;
          if(err.errors[0]['type']== "InvalidTokenError"){
            if(this.singletonServ.getStoreData(_baseSite.guest)){
              this.singletonServ.removeItem(_baseSite.guest);
             } else if(this.singletonServ.getStoreData(_baseSite.reg)){
              this.singletonServ.removeItem(_baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
          }
        }
      }
    );
  }

  getStandardName(data) {
    const baseSite = this.nestedCopy(this.singletonServ.catalogVersion);
    if (baseSite.countryName == "USA") {
      this.deliverySiteName = "Ship to an address";
      return "Ship to an address";
    } else if (baseSite.countryName == "UK") {
      this.deliverySiteName = data.deliveryName;
      return data.deliveryName;
    }
  }
  getStandardDescription(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode == "GB") {
      return data.deliveryDescription;
    } else if (baseSite.isoCode == "US") {
      return "USA, Canada, Virgin & Outlying Islands ";
    }
  }
  getStdDescrptn(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode == "GB") {
      return data.deliveryCostDescription;
    } else if (baseSite.isoCode == "US") {
      return "FREE standard + express shipping";
    }
  }

  ngAfterViewInit() {
    const baseSite = this.singletonServ.catalogVersion;
    this.singletonServ.getMessage().subscribe(message => {
      if(message.blAddrssUpdate){
       this.deliveryInfo.customerAddress=message.address;
      }
      else
      if(message.overlay){
        this.pageLoad=true;
      }
      else 
      if(message.dismissOverlay){
        this.pageLoad=false;
      }
      else
      if (message.clickCollect) {
        this.switchServiceType = "service";
        this.expressService = false;
        this.collecionInfo = message.selectedStore;
      } 
      else 
      if (message.updateBillingAddress) {

        const _guest = this.singletonServ.getStoreData(baseSite.reg) ? false : true;
        this.customerInfoUpdate = {
          guest: _guest,
          form: message.formData
        };
        this.paymentBlock = false;
        this.switchServiceType = "delivery";
        this.switchDeliveryType = "collect";
      }
      else 
      if(message.updateExpressData){
        this.deliveryInfo.cardForm=message.updateExpressData;
      }
      else
       if(message.updateExpressCart){
        const _user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg)); 
        this.getDeliveryModeType(_user.token, _user.email, _user.code,null);
      }
      else     
      if (message.updatFullCart) {
        
        if(this.singletonServ.getStoreData(baseSite.reg)){
         const _user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg)); 
         const queryStatus = this.route.snapshot.queryParamMap.get(
          "expressCheckout"
        );
        if(queryStatus){
          this.getQueryStatus(true);
        }else{
          this.getDeliveryModeType(_user.token, _user.email, _user.code,null);
        }
         this.cartCo.usSaleTax=true;
        }
        else
        {
          let _user =JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.getDeliveryModeType(_user.token,'anonymous', _user.guid,null);
          this.cartCo.usSaleTax=true;
        }
      }
    });

 
  }
  onViewSummary() {
    this.overlay = !this.overlay;
  }
 
  onEditClkCltInfo(){
    this.deliveryModeTypes.map((obj, k) => {
      if (obj.deliveryName.toLowerCase().search("click") !=-1) {
        obj["selected"] = "enabled";
        this.paymentBlock = false;
        this.switchServiceType = "delivery";
        this.switchDeliveryType = "ship";
        this.deliverytypeName = obj.deliveryName;
      } else {
        obj["selected"] = "disabled";
      }
    });
  }
  onDeleveryType(data, p) {
    this.deliverytypeName = data.deliveryName;
    this.deliveryModeTypes.map((obj, k) => {
      if (p == k) {
        obj["selected"] = "enabled";
      } else {
        obj["selected"] = "disabled";
      }
    });
    this.switchDeliveryType = data.deliveryName.toLowerCase().indexOf("click")
      ? "collect"
      : "ship";
  }
  onDeleveryPayType(pay) {
    this.selectedPayType = pay;
  }
  onupdateCart(data) {
    this.updateCart = {
      cartUpdate: true
    };
    const _obj = {
      updatFullCart: true
    };
    this.singletonServ.sendMessage(_obj);
  }
  onCollectionChange(data) {
    if (data.storeType) {
      const deliveryInfo = data;
      if(this.deliveryInfo){
      if(this.deliveryInfo['deliveryName']){
          deliveryInfo['deliveryName']=this.deliveryInfo['deliveryName'];
          deliveryInfo['customerAddress']=this.deliveryInfo['customerAddress'];
          deliveryInfo['payType']=this.deliveryInfo['payType'];
          deliveryInfo['cardForm']=this.deliveryInfo['cardForm'];          
      }
    }
    this.deliveryInfo=deliveryInfo;
      if(this.singletonServ.cartObj){
        this.deliveryInfo['cartObj']=this.cartObj
      }
    }
    this.paymentBlock = data.payment;
    this.pageLoad=false;
  }
  onSelectedStore(data) {
    const baseSite = this.singletonServ.catalogVersion;
    const queryStatus = this.route.snapshot.queryParamMap.get(
      "expressCheckout"
    );
    this.switchServiceType = "service";
    this.expressService = false;
    this.collecionInfo = data.selectedStore;
            
    if(this.singletonServ.getStoreData(baseSite.reg)){
      let _user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg));

    if(queryStatus){
      this.getQueryStatus(true);
    }else{
      this.getDeliveryModeType(_user.token, _user.email, _user.code,null);
    }
      this.cartCo.usSaleTax=true; 
    }else{
      let _user =JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      this.getDeliveryModeType(_user.token,'anonymous', _user.guid,null);
      this.cartCo.usSaleTax=true;
    }
  }
  onShowDeliveryBlock(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if(this.expressChecService){
      this.expressChecService=true;
      this.switchServiceType = "service";   
      this.deliveryServiceInfo['customerAddress']=data;
      this.deliveryServiceInfo['deliveryType']=this.deliverytypeName;
      this.expressService=true;     
      this.paymentBlock = true;
      this.expressCheckout=true;
       }else{
        const obj = {
          customerAddress: data,
          deliveryType: this.deliverytypeName,
          billingAddress: true
        };
        this.switchServiceType = "service";
        if (baseSite.isoCode == "US") {
          let _country = _.find(US_COUNTRIES, obj => {
            return data.country.isocode == obj.isocode;
          });
          obj["customerAddress"]["country"] = _country;
        }
        const queryStatus = this.route.snapshot.queryParamMap.get(
          "expressCheckout"
        );
        if(queryStatus){
          obj['expressCard']=true;
        }else{
          obj['expressCard']=false;
        }
        this.deliveryServiceInfo = obj;
        this.expressService = true;
   }
   this.pageLoad=false;
  }

  onEditBasket() {
    this.router.navigate(["store", "mbcart"]);
  }

  onEditInfo(data) {
    const baseSite = this.singletonServ.catalogVersion;
    this.paymentBlock = false;
     this.switchServiceType='delivery';
    if (baseSite.countryCode == "eu") {
      this.siteSpecicShipping = false;
      this.switchDeliveryType = "collect";
      if (data.formUpdate) {
        const _guest = this.singletonServ.getStoreData(baseSite.reg) ? false : true;
        this.customerInfoUpdate = {
          guest: _guest,
          form: data.formData
        };
        this.switchDeliveryType = "collect";
      } else {
        this.switchDeliveryType = "";
      }
    } else {
      if (data.formUpdate) {
        const _guest = this.singletonServ.getStoreData(baseSite.reg) ? false : true;
        this.customerInfoUpdate = {
          guest: _guest,
          form: data.formData
        };
        this.switchDeliveryType = "collect";
      } else {
        this.switchDeliveryType = "";
      }
    }
  }
  
  onSecureChanged(data) {
    if (data.hasOwnProperty("payment")) {
      this.paymentBlock = data.payment;
    } else if (data.international) {
      this.paymentBlock = true;
      this.updateCart = {
        cartUpdate: true
      };
      const _obj = {
        updatFullCart: true
      };
      this.singletonServ.sendMessage(_obj);
    }
    if(! this.deliveryInfo){
      this.deliveryInfo={};
      this.deliveryInfo['customerAddress']=this.deliveryServiceInfo['customerAddress'];
      if(this.singletonServ.cartObj){
        this.deliveryInfo['cartObj']=this.cartObj
      }
    }else{
      this.deliveryInfo=this.deliveryServiceInfo;
      if(this.singletonServ.cartObj){
        this.deliveryInfo['cartObj']=this.cartObj
      }
    }
  
}
  postCartData(data){
    this.cartObj=data;
  }
  onUpdateCartData(event){
    const baseSite = this.singletonServ.catalogVersion;
    const queryStatus = this.route.snapshot.queryParamMap.get(
      "expressCheckout"
    );
               
    if(this.singletonServ.getStoreData(baseSite.reg)){
      let _user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg));

    if(queryStatus){
      this.getQueryStatus(true);
    }else{
      this.getDeliveryModeType(_user.token, _user.email, _user.code,null);
    }
      this.cartCo.usSaleTax=true; 
    }else{
      let _user =JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      this.getDeliveryModeType(_user.token,'anonymous', _user.guid,null);
      this.cartCo.usSaleTax=true;
    }
  }
}
