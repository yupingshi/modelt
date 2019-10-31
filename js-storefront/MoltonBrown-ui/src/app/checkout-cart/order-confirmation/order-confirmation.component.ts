import { Component, OnInit,   NgZone,ViewEncapsulation, OnDestroy,HostListener } from "@angular/core";
import { SingletonService } from "../../services/singleton.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { ConfirmationComponentService } from "./order-confirmation.service";
import * as _ from "lodash";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import { GuestForm } from "../../forms/guestForm.form";
import { DeviceDetectorService } from "ngx-device-detector";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { NgbTypeaheadWindow } from "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window";
@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html",
  styleUrls: ["./order-confirmation.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OrderConfirmationComponent implements OnInit, OnDestroy {
  guestUser: boolean;
  guestEmail: string;
  orderDetails: Array<any>;
  order: any;
  guest: any;
  deviceInfo: any;
  mobileDevice: boolean;
  desktopDevice: boolean;
  deSiteSpecific: boolean;
  customerCenter: string;
  guestForm: FormGroup;
  duplicateUser: boolean;
  display: boolean = false;
  usSpecific: boolean;
  favourites:any;
  userCreation:boolean;
  constructor(
    public singletonServ: SingletonService,
    public router: Router,
    public titleService: Title,
    public orderServ: ConfirmationComponentService,
    public route: ActivatedRoute,
    public deviceService: DeviceDetectorService,
    private translate: TranslateServiceSubService,
    public _guest: GuestForm,
    private fb: FormBuilder,
    public zone:NgZone
  ) {
    this.guestUser=false;
    this.guestForm = this.fb.group(_guest.orderRegisterForm());
    this.userCreation=true;
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.titleService.setTitle('Molton Brown - Order Confirmation');
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      this.getFavourites();
    }else{
     this.setupOCDtls();
    }
    if(this.singletonServ.getStoreData('accCreationDtl')){
      let user = JSON.parse(this.singletonServ.getStoreData("accCreationDtl"));
      this.guestEmail=user.email;
      this.userCreation=false;
    }
  }
  onShowProductDtls(event,product){
    event.preventDefault();
    if (product.url.indexOf("/c/") != -1) {
    } else {
      const _url = "/store" + product.url.replace("/p/", "/");
      if(event.ctrlKey && event.which === 1){
        window.open(_url); 
     } else {
       this.router.navigate([_url]);
     }
    }


  }
  setupOCDtls(){
    const baseSite = this.singletonServ.catalogVersion;
    this.getDeviceInfo();
    if (baseSite) {
      if (baseSite.isoCode == "DE") {
        this.deSiteSpecific = true;
      } else {
        this.deSiteSpecific = false;
      }
      this.communicationDtl();
      this.setLang(baseSite.lngCode);
    }
    if (baseSite.isoCode == "US") {
      this.usSpecific = true;
    }   
    const _guestcookie = this.singletonServ.getCookie(baseSite.guest);
    const _usercookie = this.singletonServ.getCookie("user");
    const queryStatus = this.route.snapshot.queryParamMap.get("PayerID");
     if (queryStatus) {
      this.retireivePaypalDtl(queryStatus);
     }

    if (this.singletonServ.getStoreData("order")) {
     this.setOrderDtl();
    }
    this.updateSessionDetail();

  }
  communicationDtl(){
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode == "GB") {
      this.customerCenter = "+44 (0) 808 178 1188";
    } else if (baseSite.isoCode == "DE") {
      this.customerCenter = "customer@moltonbrown.com";
    } else if (baseSite.isoCode == "EU") {
      this.customerCenter = "00 800 4585 00 76";
    } else if (baseSite.isoCode == "US") {
      this.customerCenter = "1-866-933-2344";
    }
  }
  retireivePaypalDtl(queryStatus){
    this.orderServ.generateCartToken().subscribe(
      response => {
        this.display = true;
        const token = response["access_token"];
        if (this.singletonServ.getStoreData("paypalReg")) {
          this.guestUser = false;
          let user = JSON.parse(this.singletonServ.getStoreData("paypalReg"));
          let email = user.email;
          let code = user.code;

          this.getOrderCode(token, email, code, queryStatus, user);
        } else {
          if (this.singletonServ.getStoreData("paypalGuest")) {
            this.guestUser = true;
            let user = JSON.parse(this.singletonServ.getStoreData("paypalGuest"));
            let guid = user.guid;
            this.getOrderCode(token, "anonymous", guid, queryStatus, user);
          }
        }
      },
      err => { }
    );
  }
  setOrderDtl(){
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
    const _order = JSON.parse(this.singletonServ.getStoreData("order"));
    if (_order.reg) {
      this.guestUser = false;
      this.getOrderDetail(_order.token, _order.code, _order.user.uid);
    } else {
      this.guest = _order;
      this.guestUser = true;
      this.getGuestOrderDetail(baseSiteid, _order.token, _order);
    }
  }
  updateSessionDetail(){
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      let user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));

      if (user.guid) {
        delete user.guid;
      }
      if (user.code) {
        delete user.code;
      }
      this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user));
      this.singletonServ.removeItem(baseSite.guest);
    } else {
      this.singletonServ.removeItem(baseSite.guest);
    }
  }
  getBundleProductQuantity(entry, bottle) {
    return bottle.quantity / entry.quantity;
  }
  getOrderCode(token, email, code, payerId, user) {
    this.orderServ.getOrderCode(token, email, code, payerId).subscribe(
      response => {
        this.getCartDetail(response);
        this.display = false;
        if (this.guestUser) {
          this.guestEmail = response["user"]["uid"].split("|")[1];
        }
      },
      err => {
        this.display = false;
      }
    );
  }
  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    if (isMobile || isTablet) {
      this.mobileDevice = true;
    } else {
      this.mobileDevice = false;
    }
    if (isDesktopDevice) {
      this.desktopDevice = true;
    } else {
      this.desktopDevice = false;
    }
  }
  getGuestOrderDetail(cVrsnid, tokenId, order) {
    this.orderServ
      .getOrderData(cVrsnid, tokenId, order["code"])
      .subscribe(resp => {
        this.getCartDetail(resp);
        this.guestEmail = resp["user"]["uid"].split("|")[1];
      });
  }
  getOrderDetail(tokenId, order, emailId) {
    this.orderServ.orderService(tokenId, order, emailId).subscribe(
      resp => {
        this.getCartDetail(resp);
      },
      error => { }
    );
  }
  goToAccount() {
    const baseSite = this.singletonServ.catalogVersion;
    const obj = { checkoutStatus: true, store: true, updateCart: true,account:true };
    this.singletonServ.sendMessage(obj);
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      delete _user['code'];
      delete _user['token'];
      this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_user));
    }
  }
  onNavigateHome(event) {
    if(event.ctrlKey && event.which === 1){
        let url = "/store/index";
        window.open(url); 
    }else{
      this.router.navigate(["store", "index"]);
    }
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  getCartDetail(data) {
    let cart=this.singletonServ.setupEntryStream(data);
    cart.entries.map((obj)=>{
       if(!obj.isBundle){
          const _fav = _.find(this.favourites, function(o) {
              return o.code == obj.product.code;
            });
            if(_fav){
              obj.product['favourite'] =true
            }
      }
    });
    this.order = cart;
  }

  getBundleQuantity(entry) {
    let p = 0;
    let i;
    for (i = 0; i < entry.product.length; i++) {
      if (!entry.product[i]["product"]["isSample"]) {
        let qty = entry.product[i].quantity;
        p = p + qty;
      }
    }

    if (entry.bundleTemplateId) {
      if (entry.bundleTemplateId.indexOf("6") != -1) {
        p = p / 6;
      } else {
        p = p / 3;
      }
    }
    return p;
  }

  getBundlePrice(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      const _price = "&#163;&nbsp;" + Math.ceil(data.bundlePrice);

      return _price;
    } else if (baseSite.isoCode === "EU") {
      const _price = Math.ceil(data.bundlePrice) + "&nbsp;&#128;";

      return _price;
    } else if (baseSite.isoCode === "DE") {
      const _price = Math.ceil(data.bundlePrice) + "&nbsp;&#8364;";

      return _price;
    }
  }
  getBundleTotalPrice(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      const _price =
        "&#163;&nbsp;" + data.bundlePrice * this.getBundleQuantity(data);

      return _price;
    } else if (baseSite.isoCode === "EU") {
      const _price =
        data.bundlePrice * this.getBundleQuantity(data) + "&nbsp;&#128;";

      return _price;
    } else if (baseSite.isoCode === "DE") {
      const _price =
        data.bundlePrice * this.getBundleQuantity(data) + "&nbsp;&#8364;";

      return _price;
    }
  }
  getProdPrice(entry) {
    if (entry.product.price.value != 0) {
      return entry.product.price.formattedValue;
    } else {
      return "FREE";
    }
  }

  getTotalPrice(entry) {
    if (entry.totalPrice.value != 0) {
      return entry.totalPrice.formattedValue;
    } else {
      return "FREE";
    }
  }
  getProductPrice(entry) {
    if (entry.product.price.value != 0) {
      return entry.product.price.formattedValue;
    } else {
      return "FREE";
    }
  }
  getPixMixImage(entry) {
    if (entry.bundleTemplateId) {
      if (entry.bundleTemplateId.indexOf("6") != -1) {
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel6_uk_pick-mix-travel-6_image_01?$smallImg$&amp;fmt=webp";
      } else {
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=webp";
      }
    }
    return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=webp";
  }
  onSubmitForm(event) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.guestForm.valid) {
      let _form = this.guestForm.value;
      const body = this.order.deliveryAddress;
      const _userBody = {
        uid: this.guestEmail,
        password: _form.password,
        titleCode: body.titleCode ? body.titleCode : "mr",
        firstName: body.firstName ? body.firstName : "not yet complete",
        lastName: body.lastName ? body.lastName : "not yet complete"
      };

      this.orderServ.generateCartToken().subscribe(
        token => {
          const tokenId = token["access_token"];
          this.orderServ.createUser(tokenId, _userBody,this.order.code).subscribe(
            user => {
              let _user = { email: this.guestEmail, token: tokenId };
              this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_user));
              this.singletonServ.setStoreData('accCreationDtl',JSON.stringify({email: this.guestEmail}))
              this.orderServ
                .createUserAddress(body, tokenId, this.guestEmail)
                .subscribe(
                  address => {
                     this.guest =undefined;
                    this.userCreation=false;
                    this.guestUser = false;
                    const queryStatus = this.route.snapshot.queryParamMap.get("PayerID");
                    if (queryStatus) {
                      let user = JSON.parse(this.singletonServ.getStoreData("paypalGuest"));
                      let email = user.email;
                      let code = user.code;
                      this.getOrderCode(token, email, code, queryStatus, user);
                    }else{
                      if(this.singletonServ.getStoreData("order")){
                         const _order = JSON.parse(this.singletonServ.getStoreData("order"));
                         _order.reg=true;
                         this.singletonServ.setStoreData('order',JSON.stringify(_order));
                            this.getOrderDetail(_order.token, _order.code, this.guestEmail );
                    }
                    }
                  },
                  err => {
                    this.userCreation=false;
                    const queryStatus = this.route.snapshot.queryParamMap.get("PayerID");
                    if (queryStatus) {
                      let user = JSON.parse(this.singletonServ.getStoreData("paypalGuest"));
                      let email = user.email;
                      let code = user.code;
                      this.getOrderCode(token, email, code, queryStatus, user);
                    }else{
                      if(this.singletonServ.getStoreData("order")){
                         const _order = JSON.parse(this.singletonServ.getStoreData("order"));
                         this.getOrderDetail(_order.token, _order.code, this.guestEmail );
                      }
                    }
                  }
                );
            },
            err => {
              if (err.error["errors"][0]["type"] == "DuplicateUidError") {
                this.duplicateUser = true;
              }
            }
          );
        },
        err => { }
      );
    } else {
      this.validateAllFormFields(this.guestForm);
    }
  }
  onShowProfilePage(event){
    this.singletonServ.removeItem('accCreationDtl');
    if(event.ctrlKey && event.which === 1){
      let url = "/store/myaccount/profile";
      window.open(url); 
   }else{
    this.router.navigate(["store", "myaccount", "profile"]);
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
  getPixMixImageJpg(entry) {
    if (entry.bundleTemplateId) {
      if (entry.bundleTemplateId.indexOf("6") != -1) {
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel6_uk_pick-mix-travel-6_image_01?$smallImg$&amp;fmt=jpg";
      } else {
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=jpg";
      }
    }
    return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=jpg";
  }
  onCloseModal() {
    this.display = false;
  }
  addToFavourite(event, data) {
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
    if(!data.product.favourite){
    const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
    this.orderServ
      .addToFavourite(user.token, user.email, data.product.code)
      .subscribe(
        resp => {
          let cart =this.order;
          cart.entries.map((obj)=>{
            if(!obj.isBundle){
                  if(data.product.code==obj.product.code){
                   obj.product['favourite'] =true
                 }
           }
         });
         this.order = cart;
        },
        error => {
          const err = error.error["errors"][0];
          if(err== "InvalidTokenError"){
            // this.orderServ.generateCartToken().subscribe((resp)=>{
            //   user['token']=resp["access_token"];
            //   this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(user));
            //   this.addToFavourite(event, data)
            // })
            if(this.singletonServ.getStoreData(baseSite.guest)){
              this.singletonServ.removeItem(baseSite.guest);
             } else if(this.singletonServ.getStoreData(baseSite.reg)){
              this.singletonServ.removeItem(baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
        
          }
        }
      );
}
  }
  getFavourites() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      let user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.orderServ
        .getFavourites(user.token, user.email)
        .subscribe(
          response => {
            this.singletonServ.favourites = response["products"];
            this.favourites=response["products"];
            this.setupOCDtls();
          },
          error => {
            this.favourites=[];
            this.setupOCDtls();
          }
        );
    }
  }

  onClickFavourite() {
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: true,favourite:true };
    this.singletonServ.sendMessage(obj);
  }

  ngOnDestroy() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      let _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      delete _user['code'];
      delete _user['token'];
      this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_user));
    }
  }
  getRouterPath(data){
  if(!data.isBundle){
    if (data.product.url.indexOf("/c/") != -1) {
      if (data.category) {
        let _constructUrl = data.product.category.url.slice(1).split("/");
        _constructUrl.splice(-2, 2);
        const _produrl = _constructUrl.join("/");
        const _url = "/store/" + _produrl + "/" + data.name + "/" + data.code;
        return _url;
      }
    } else {
      const _url = "/store" + data.product.url.replace("/p/", "/");
      return _url;
    }
   
  }
  return ""
}
gotoMyAccount(event) {
  const that = this;
  if(event.ctrlKey && event.which === 1){
   window.open('/store/myaccount/profile');
   }else {
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: true,orderDetail:{code: that.order.code} };
    this.singletonServ.sendMessage(obj);
  }

}
goToResetPassword(event){
  if(event.ctrlKey && event.which === 1){
    let url = "/store/myaccount/profile/passwordReset";
    window.open(url); 
 }else{
  this.router.navigate(["store", "myaccount", "profile","passwordReset"]);
 }
}
retreiveUser(uid){
  const _user=uid.split('|');
   const _email =_user[_user.length-1];
   return _email;
}
}
