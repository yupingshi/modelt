import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { DeliveryComponentService } from "../delivery.service";
import { SingletonService } from "../../../services/singleton.service";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../../app.constant";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
declare var $:any;
@Component({
  selector: "app-delivery-service",
  templateUrl: "./delivery-service.component.html",
  styleUrls: ["./delivery-service.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryServiceComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Output() onSecureChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditInfo: EventEmitter<any> = new EventEmitter<any>();
  @Output() onupdateCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() onupdateExpressCart: EventEmitter<any> = new EventEmitter<any>();
  @Input() deliveryInfo: any;
  @Input() expressCheckout: boolean;
  @ViewChild("policyEl") policyEl: ElementRef;
  deliveryTypeChckselected: string;
  deliveryTypeselected: string = "";
  showBlock: boolean;
  serviceBody: boolean;
  shippingInfo: any;
  shippingServices: any;
  deliveryPayments: any;
  payTypeId: number;
  choosenDeliveryService: any;
  outstationDelivery: any;
  outstation: boolean;
  namedDay: any;
  imgPath = "assets/imgs/StandardDelivery.png";
  deliveryModeType: any;
  euSpecific: boolean;
  payselect: boolean;
  modalTitle: string;
  express: boolean;
  countries: Array<any>;
  serviceLoad:boolean;
  nameDayLoad:boolean;
  ukspecific:boolean;
  constructor(
    public delivryServ: DeliveryComponentService,
    public singletonServ: SingletonService,
    public router: Router,
    public route: ActivatedRoute,
  ) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode == "GB") {
      this.ukspecific=true;
     }
    this.express = false;
    this.serviceBody = true;
    this.outstation = false;
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode == "GB") {
      this.ukspecific=true;
     }
     if (changes["deliveryInfo"]) {
      if (changes["deliveryInfo"]["currentValue"] != undefined) {
        this.shippingInfo = changes["deliveryInfo"]["currentValue"];
        this.setCountrySet();
      }
    }

    if (changes["expressCheckout"]) {
      if (changes["expressCheckout"]["currentValue"] != undefined) {
        if (changes["expressCheckout"]["currentValue"]) {          
          this.express = true;
        }
      }
    }
  }
  ngOnInit() {
    if (!this.express) {
     this.serviceLoad=true;
    }else{
      this.serviceBody = false;
    }
    this.fetchDlMethods();
  }
  ngAfterViewInit() {
    const baseSite = this.singletonServ.catalogVersion;
    this.singletonServ.getMessage().subscribe(message => {
      if(message.discardDlMethodLoader){
       this.serviceLoad=false;
       this.nameDayLoad=false;
      }
    });
  }
  setCountrySet() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      this.countries = this.nestedCopy(countries);
    } else if (baseSite.isoCode === "EU") {
      this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
    } else if (baseSite.isoCode === "DE") {
      this.countries = this.nestedCopy(DE_COUNTRIES);
    } else if (baseSite.isoCode == "US") {
      this.countries = this.nestedCopy(US_COUNTRIES);
    }
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  onOpenCartModal() {
    this.singletonServ.sendMessage({deliveryreturn:true});
  }
  fetchDlMethods() {
    let country_code = this.deliveryInfo.customerAddress.country.isocode;
    const baseSite = this.singletonServ.catalogVersion;
    this.euSpecific =
      baseSite.isoCode == "EU" || baseSite.isoCode == "DE" ? true : false;
    if (
      (country_code == "GB" && baseSite.isoCode == "GB") 
    ) {
      this.outstation = false;
      this.getDeliveryMethod();

    } else if( baseSite.isoCode == "US") { 
      this.getDlUSMethods();
    } else {
      this.outstation = true;
      this.getInternationalDeliveryMethod(country_code);
    }
  }
  getDlUSMethods(){
    const baseSite = this.singletonServ.catalogVersion;
    let _country=this.shippingInfo.customerAddress.country;
    let _countryid=_.findIndex(this.countries,(obj)=>{
      return obj.name ==_country.name
      });
      let _dlCountry=this.countries[_countryid];
  
      const _delveryCountryId =
        baseSite.isoCode == "US"
          ? _dlCountry.id
          : false;
      if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
  
 this.delivryServ.
          getDlUSMethod(user.token,user.email,user.code,_delveryCountryId).subscribe((resp)=>{
            if (resp["deliveryModes"]) {
               const dlMethods = resp["deliveryModes"];            
               this.deliveryPayments = dlMethods;
            } else {
              let dlServies:any=resp;
              let _usSortDlMethods =dlServies.sort(function(a, b) {
                return a['position'] - b['position'];
              });
              this.deliveryPayments = _usSortDlMethods;
              this.serviceLoad=false;
            }
          },err=>{
            this.serviceLoad=false;
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
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guestuser = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      this.delivryServ.
      getDlUSMethod(_guestuser.token,'anonymous',_guestuser.guid,_delveryCountryId).subscribe((resp)=>{
        if (resp["deliveryModes"]) {
          const dlMethods = resp["deliveryModes"];
            console.log(dlMethods);
            this.deliveryPayments = dlMethods;
        } else {
          let dlServies:any=resp;
          let _usSortDlMethods =dlServies.sort(function(a, b) {
            return a['position'] - b['position'];
          });
          this.deliveryPayments = _usSortDlMethods;
          this.serviceLoad=false;
        }
      },err=>{
        this.serviceLoad=false;
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
    }   
  }
  getSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}
  getIntcon(data) {
    if (data.description == "International Delivery") {
      return true;
    } else if (data.zoneName) {
      if (data.zoneName.indexOf("Zone") != -1) {
        return true;
      }
      return true;
    }
    return false;
  }
  getStdIcon(data) {
    if (data.code) {
      if (data.code.indexOf("standard")) {
        return true;
      } else if (data.code.indexOf("priority") || data.indexOf("express")) {
        return true;
      }
    }
    return false;
  }
  getImgIcon(data) {
    if (
      data.code == "UK-Standard-Delivery" ||
      data.code == "US-Standard-Delivery"
    ) {
      return "assets/imgs/StandardDelivery.png";
    } else if (data.code == "UK-next-day-named-day-or-Saturday") {
      return "assets/imgs/delivery-next.png";
    } else if (
      data.code == "US-priority-shipping" ||
      data.code == "US-express-shipping"
    ) {
      return "assets/imgs/PriorityTruck.png";
    }
    return "assets/imgs/StandardDelivery.png";
  }

  
  getInternationalDeliveryMethod(country_code) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.getInternationalMethods(
        user.token,
        user.email,
        user.code,
        country_code
      );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.getInternationalMethods(
          _guest.token,
          "anonymous",
          _guest["guid"],
          country_code
        );
      }
    }
  }
  getInternationalMethods(token, email, code, country_code) {
    this.delivryServ
      .getInternationalDelivery(token, email, code, country_code)
      .subscribe(
        response => {
          
          this.outstationDelivery = response["internationalShippingServices"];
          this.serviceLoad=false;
        },
        err => {
          this.serviceLoad=false;
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
  getDeliveryMethod() {
    const baseSite = this.singletonServ.catalogVersion;
    
    let _country=this.shippingInfo.customerAddress.country;
    let _countryid=_.findIndex(this.countries,(obj)=>{
      return obj.name ==_country.name
      });
      let _dlCountry=this.countries[_countryid];
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
  
      const _delveryCountryId =
        baseSite.isoCode == "US"
          ? _dlCountry.id
          : false;
          this.delivryServ
        .getDeliveryMethod(user.token, user.email, user.code, _delveryCountryId)
        .subscribe(
          resp => {
            if (resp["deliveryModes"]) {
              const dlMethods = resp["deliveryModes"];
            
                dlMethods.sort(function(a, b) {
                  return a.position - b.position;
                });
                this.deliveryPayments = dlMethods;
            } else {
              this.deliveryPayments = resp;
            }
          this.serviceLoad=false;
          },
          err => {
            this.serviceLoad=false;
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
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        const _delveryCountryId =
          baseSite.isoCode == "US"
            ? _dlCountry.id
            : false;
            this.delivryServ
          .getDeliveryMethod(
            _guest.token,
            "anonymous",
            _guest.guid,
            _delveryCountryId
          )
          .subscribe(
            resp => {
              if (resp["deliveryModes"]) {
                const dlMethods = resp["deliveryModes"];
                dlMethods.sort((m, k) => {
                  return m.position - k.position;
                });
                this.deliveryPayments = dlMethods;
              } else {
                this.deliveryPayments = resp;
              }
              this.serviceLoad=false;
            },
            err => {
              this.serviceLoad=false;
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
    }
  }

  outstationDt(event, data) {
    event.preventDefault();
    event.stopPropagation();
    const baseSite = this.singletonServ.catalogVersion;
    const countryCode = this.shippingInfo.customerAddress.country.isocode;
    data["dlMode"] = true;
    this.shippingInfo["payType"] = data;
    this.serviceLoad=true;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.setInternationalDeliveryToCart(
        user.token,
        user.email,
        user.code,
        countryCode,
        data
      );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.setInternationalDeliveryToCart(
          _guest.token,
          "anonymous",
          _guest["guid"],
          countryCode,
          data
        );
      }
    }
  }

  setInternationalDeliveryToCart(token, email, code, countryCode, data) {
    let body={
      serviceName:data.serviceName,
      zoneName:data.zoneName,
      description:data.description
    }
    this.delivryServ
      .setInternationalDeliveryToCart(token, email, code, countryCode,body)
      .subscribe(
        resp => {
          this.serviceBody = false;          
          const obj = {
            international: true,
            deliverytype: data
          };
          this.onSecureChanged.emit(obj);   
        },
        err => {
          this.serviceLoad=false;
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
  onSecureDlPaymentCheck(event, data, k) {
    if (this.deliveryPayments.length != 1) {     
      this.onSecureCheck();
    } else {
      if(this.deliveryPayments.length == 1) {
        const _obj = this.deliveryPayments[k];
        const _body = {
          deliveryCode: data.code ? data.code : data.id,
          description:data.description,
          serviceName:data.serviceName
        };
        this.setDlMethodToCart(data, _body, _obj);
      }
      this.onSecureCheck();
    }
  }
  setDlMethodToCart(data, _body, _obj) {
    
    const baseSite = this.singletonServ.catalogVersion;
    
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.setDeliveryMethodToCart(
        data,
        user.token,
        _body,
        _obj,
        user.email,
        user.code
      );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.setDeliveryMethodToCart(
          data,
          _guest.token,
          _body,
          _obj,
          "anonymous",
          _guest.guid
        );
      }
    }
  }
  onDeleveryType(event, data, k) {
    event.preventDefault();
    event.stopPropagation();
    this.namedDay = undefined;
    this.payselect = true;
    this.deliveryTypeselected = data.code
      ? data.code
      : this.deliveryPayments[k].id;
      this.showBlock = true;
      this.deliveryPayments.map((obj, id) => {
        if (id == k) {
          obj["disabled"] = '';
          obj["active"] = true;
          this.payTypeId = id;
        } else {
          obj["disabled"] = 'disable';
          obj["active"] = false;
        }
      });
     const baseSite = this.singletonServ.catalogVersion;
    if (data.code != "UK-next-day-named-day-or-Saturday") {
      if (this.deliveryPayments.length != 1) {
         if (!this.express) {
            this.serviceLoad=true;
            const _obj = this.deliveryPayments[k];
            const _body = {
              deliveryCode: data.code ? data.code : data.id,
              description:data.description,
              serviceName:data.serviceName
            };
            this.setDlMethodToCart(data, _body, _obj);
        }
      }
    } else {
      this.nameDayLoad=true;
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        this.setNamedDayService(user.token, user.email, user.code);
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.setNamedDayService(_guest.token, "anonymous", _guest.guid);
        }
      }
    }
  }

  setDeliveryMethodToCart(data, token, body, obj, email, code) {
    this.deliveryModeType = data;
    this.delivryServ
      .deliverymethodToCart(token, body, obj, email, code)
      .subscribe(
        resp => {      
          const _obj = {
            updatFullCart: true
          };
          this.singletonServ.sendMessage(_obj);
        },
        err => {
          this.serviceLoad=false;
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
  setNamedDayService(token, email, code) {
    
    this.delivryServ.deliveryNamedDayToCart(token, email, code).subscribe(
      resp => {
     
        this.shippingServices = resp["namedShippingServices"];
        this.nameDayLoad=false;
        
      },
      err => {
        this.nameDayLoad=false;
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
  onSecureNamedDayCheck(){
      this.serviceBody = false;
    let _payeeMode = this.deliveryPayments[this.payTypeId];
    _payeeMode["dlMode"] = false;
    if (_payeeMode.code == "UK-next-day-named-day-or-Saturday") {
      _payeeMode = this.namedDay;
    }
    this.shippingInfo["payType"] = _payeeMode;
    const obj = {
      payment: true,
      deliverytype: _payeeMode
    };
   
    if (!this.express) {
       this.onSecureChanged.emit(obj);
     }else{
      this.onupdateExpressCart.emit(obj)
     }
  }
  onSecureCheck() {
    this.serviceBody = false;
    let _payeeMode = this.deliveryPayments[this.payTypeId];
    _payeeMode["dlMode"] = false;
    if (_payeeMode.code == "UK-next-day-named-day-or-Saturday") {
      _payeeMode = this.namedDay;
    }
    this.shippingInfo["payType"] = _payeeMode;
    const obj = {
      payment: true,
      deliverytype: _payeeMode
    };
    $('html, body').animate({
      scrollTop: $("#mb_payment_header").offset().top-75
    }, 100);
    this.onSecureChanged.emit(obj);
  }
  onEditDeliveryServiceType() {
    if (!this.deliveryPayments) {
      const Obj = {
        payment: false,
        service: true
      };
      this.onSecureChanged.emit(Obj);
      this.serviceBody = true;
      this.shippingInfo["payType"] = undefined;
    } else {
      const Obj = {
        payment: false,
        service: true
      };
      this.onSecureChanged.emit(Obj);
      this.serviceBody = true;
      this.shippingInfo["payType"] = undefined;
    }
  }
  onEditDeliveryType(type) {
    const that = this;
    const Obj = {
      payment: false,
      service: false,
      formUpdate: true,
      showDtService: type == "delivery" ? true : false,
      formData: that.shippingInfo.customerAddress
    };
    this.onEditInfo.emit(Obj);
  }
  onSelectNameDay(event,data, id) {
    event.preventDefault();
    this.nameDayLoad=true;
    const baseSite = this.singletonServ.catalogVersion;
    this.shippingServices.map((obj, k) => {
      if (id == k) {
        obj.active = true;
        this.namedDay = data;
      } else {
        obj.active = false;
      }
    });
    const _body = {
      deliveryCode: data.id,
      deliveryDate:data.date,
      serviceName:data.serviceName,
      description:data.description
    };
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));      
      this.setNamedDayServicetoCart(
         user.token,
         user.email, 
         user.code, 
         _body
        );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.setNamedDayServicetoCart(
          _guest.token,
          "anonymous",
          _guest["guid"],
          _body
        );
      }
    }
  }

  setNamedDayServicetoCart(token, email, code, data) {    
    this.delivryServ
      .setNamedDeliveryModeToCart(token, email, code, data)
      .subscribe(
        resp => {
          if (!this.express) {
            this.onupdateCart.emit();
           }else{
            const _obj = {
              updateExpressCart: true
            };
            this.singletonServ.sendMessage(_obj);
           }  
        },
        err => {
          this.nameDayLoad=true;
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
}
