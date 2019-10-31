import { 
   Component,
   OnInit,
   AfterViewInit,
   ViewChild,
   ElementRef,
   OnDestroy
  } from "@angular/core";
import { BasketPageComponentService } from "./basketpage.service";
import { SingletonService } from "../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute} from "@angular/router";
import { GuestForm } from "../../forms/guestForm.form";
import { DeviceDetectorService } from "ngx-device-detector";
import { Subscription } from "rxjs";
import { Title } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import * as _ from "lodash";
@Component({
  selector: "app-basketpage",
  templateUrl: "./basketpage.component.html",
  styleUrls: ["./basketpage.component.scss"]
})
export class BasketpageComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild("lastMinutTreats") lastMinutTreats: ElementRef;
  @ViewChild("customeAlsoBought") customeAlsoBought: ElementRef;
  isPromoCodeError: boolean;
  basketForm: FormGroup;
  toggle: boolean;
  subscription: Subscription;
  createBundleSubscription:Subscription;
  updateBundleSubscription:Subscription;
  cartSubscription:Subscription;
  createCartSubscription:Subscription;
  entryCartSubscription:Subscription;
  generateCartSubscription:Subscription;
  deviceInfo: any;
  mobileDevice: boolean;
  entries: boolean;
  submitted: boolean;
  cart: any;
  cartCode: any;
  slideConfig: any;
  slideConfig2: any;
  cartTitle: "LAST MINUTE TREAT?";
  promoSuccesMsg: string;
  promocodeSuccess: boolean;
  refreshBasket:boolean;
  outStockEntries:Array<any>;
  localData:any;
  constructor(
    public basketServ: BasketPageComponentService,
    public singletonServ: SingletonService,
    public location: Location,
    public _promocodeDetails: GuestForm,
    private fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    private title: Title,
    public deviceService: DeviceDetectorService
  ) {
    this.entries = false;
    this.basketForm = this.fb.group(_promocodeDetails.getPromoCodeForm());
    this.wrapFRslots();
  }
  setLang(lang: string) {
    this.basketServ.getStaticContent(lang).subscribe(response => {
      this.singletonServ.appLocaleData = response;
      this.localData=response;
    });
  }
  wrapFRslots(){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    this.basketServ.getFRContent(baseSite.lngCode).subscribe((response:any)=>{
      if(response){
        that.customeAlsoBought.nativeElement.innerHTML = response.basketPage.customerAlsoBought.slotId;      
        that.lastMinutTreats.nativeElement.innerHTML = response.basketPage.lastMinuteTreats.slotId;      
      }
    },err=>{

    });
  }
  ngAfterViewInit() {
    this.subscription = this.singletonServ.getMessage().subscribe(message => {
      if (message.refreshBasket) {
        this.fetchCartInfo();
      }else if(message.updateBasketEntry){
        this.setCartDetail(message.cartObj,null);
      }
    });
  }
  ngOnInit() {
    const that=this;
    this.title.setTitle('Molton Brown - Shopping Basket');
    this.refreshBasket=false;
    let entryObj={ "totalPrice" : {
      "currencyIso" : "GBP",
      "formattedValue" : "£0.00",
      "priceType" : "BUY",
      "value" : 0.0
   }}
    this.cart = (this.singletonServ.cartObj)?this.singletonServ.cartObj:entryObj;
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.localData=this.singletonServ.appLocaleData;
      if(!this.localData){
       this.setLang(baseSite.lngCode);
     }
     this.fetchCartInfo();
     document.addEventListener("create-entry", function(e) {
      that.addToBasket(e);   
    });
    }
  }
  fetchCartInfo() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if(_user.token&&_user.code){
        this.fetchBasket(_user.token, _user.email, _user.code);
      }else{
        this.cart=undefined;
      }
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
         const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
         if(_user.token&&_user.guid){
          this.fetchBasket(_user.token, "anonymous", _user.guid);
         }else{
          this.cart=undefined;
         }
     }else{
      this.cart=undefined;
     }
    }
  }
  fetchBasket(token, email, code) {
   this.cartSubscription= this.basketServ.retrieveCartDetails(token, email, code).subscribe(
      response => {
        this.setCartDetail(response,null);
      },
      error => {}
    );
  }

  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  setCartDetail(data,bol) {
    const cart=this.singletonServ.setupEntryStream(data);
    if(cart.entries){
        this.outStockEntries=_.filter(cart.entries,(entry)=>{
          if(!entry['product'].length){
            if(entry['product'].stock){
              return entry['product'].stock.stockLevelStatus !='inStock'
            }
          }else{
            return entry.stock.stockLevelStatus !='inStock'
          }
      });
  }
  if(cart['appliedVouchers']){
        if(cart['appliedVouchers'].length !=0){
          this.promocodeSuccess=true;
          this.promoSuccesMsg="<b class='coupon-code'>"+cart['appliedVouchers'][0]['code']+" </b>&nbsp;"+" Coupon has been applied sucessfully";
          this.basketForm.controls.promoCode.patchValue(cart['appliedVouchers'][0]['code']);
        }
    }
    this.refreshBasket=false;
    this.cart = cart;
    this.singletonServ.cartObj = cart;
    const obj = { updateBasketCount: true,cart:cart };
    this.singletonServ.sendMessage(obj);
    this.cartCode = cart["code"];
    this.entries = true;
    // if(bol){
    //    const obj = { updateCart: true };
    //    this.singletonServ.sendMessage(obj);
    // }
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
  onDecreaseCount(data, k) {
    const baseSite = this.singletonServ.catalogVersion;
    let _count = this.cart["entries"][k]["quantity"] - 1;
    this.refreshBasket=true;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (!user.code) {
      } else {
        if (this.cart["entries"][k]["quantity"] == 1) {
          this.onDeleteEntry(data);
        } else {
          if(data.isBundle){
            this.decreasebundleItem(user.token,user.email, user.code, data);
           }else{
            this.updateBasket(user.token, user.email, user.code, data, _count);
           }
        }
      }
    } else if (this.singletonServ.getStoreData(baseSite.guest)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      if (this.cart["entries"][k]["quantity"] == 1) {
        this.onDeleteEntry(data);
      } else {
           if(data.isBundle){
            this.decreasebundleItem(user.token, "anonymous", user.guid, data);
           }else{
            this.updateBasket(user.token, "anonymous", user.guid, data, _count);
           }
      
      }
    }
  }
  onAddItem(data, k) {
    this.refreshBasket=true;
    const baseSite = this.singletonServ.catalogVersion;
    let _count = this.cart["entries"][k]["quantity"] + 1;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (!user.code) {
      } else {
        if(data.isBundle){
          this.updatebundleItem(user.token, user.email, user.code, data);
        }else{
          this.updateBasket(user.token, user.email, user.code, data, _count);
        }

      }
    } else if (this.singletonServ.getStoreData(baseSite.guest)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      if(data.isBundle){
        this.updatebundleItem(user.token, "anonymous", user.guid, data);
      }else{
        this.updateBasket(user.token, "anonymous", user.guid, data, _count);
      }
    }
  }

  decreasebundleItem(token, email, code, item){
    let bundleNo=item.bundleNo;
    let qty=this.getBundleQuantity(item);
    let quantity=qty-1;
    let _codes=[];
    item.product.map(bundle => {
      let qty=bundle.quantity/item.quantity;        
        for(let k=0;k<qty;k++){
          _codes.push(bundle.product.code); 
         }     
    });
    let body={
      "productcodes":_codes
    }
    this.createBundleSubscription= this.basketServ.updateBundleItem(token,email,code,body, bundleNo,quantity).subscribe((response)=>{
      this.fetchCartInfo();
      // const obj = { updateCart: true };
      // this.singletonServ.sendMessage(obj);
    },err=>{
     console.log('DEV :Something gone wrong');
     this.refreshBasket=false;
    });
  }
  updatebundleItem(token, email, code, item){
    let bundleNo=item.bundleNo;
    let qty=this.getBundleQuantity(item);
    let quantity=qty+1;
    let _codes=[];
    item.product.map(bundle => {
      let qty=bundle.quantity/item.quantity;        
        for(let k=0;k<qty;k++){
          _codes.push(bundle.product.code); 
         }     
    });
    let body={
      "productcodes":_codes
     }
     this.updateBundleSubscription = this.basketServ.updateBundleItem(token,email,code,body, bundleNo,quantity).subscribe((response)=>{
      this.fetchCartInfo();
   
    },err=>{
     console.log('DEV :Something gone wrong');
     this.refreshBasket=false;
    });
  }
  getBundleProductQuntity(entry,bottle){
    return  bottle.quantity/entry.quantity;   
  }
  getBundleStock(entry){

    let i;
    for (i = 0; i < entry["product"].length; i++) {
      if(entry["product"][i]['product'].stock){
      if (
        entry["product"][i]['product'].stock.stockLevelStatus !='inStock'
      ) {
            return entry["product"][i]['product'].stock
        break;
      }
    }
    }
  }
  getBundleQuantity(entry){
    let p=0;
    let i;
    for( i=0;i<entry.product.length;i++){
      if(!entry.product[i]['product']['isSample']){
       let qty=entry.product[i].quantity;
         p = p + qty ;
      }
    }

    if(entry.bundleTemplateId){
      if (entry.bundleTemplateId.indexOf("6") != -1) {
         p=p/6
      } else {
        p=p/3
      }
    }
    return p;
  }
  updateBasket(token, email, code, item, count) {
    const entry = item["entryNumber"];
    const productObj = {
      product: { code: item["product"]["code"] },
      quantity: parseInt(count)
    };
    this.basketServ
      .updateEntry(token, email, code, productObj, entry)
      .subscribe(
        response => {
          this.fetchCartInfo();
          // const obj = { updateCart: true };
          // this.singletonServ.sendMessage(obj);
        },
        err => {
          this.refreshBasket=false;
        }
      );
  }

  onChangeQuant(event,data) {
    this.refreshBasket=true;
    const baseSite = this.singletonServ.catalogVersion;
    let _count = event.target.value;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (!user.code) {
      } else {
        if(data.isBundle){
          this.updatebundleItem(user.token, user.email, user.code, data);
        }else{
          this.updateBasket(user.token, user.email, user.code, data, _count);
        }

      }
    } else if (this.singletonServ.getStoreData(baseSite.guest)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      if(data.isBundle){
        this.updatebundleItem(user.token, "anonymous", user.guid, data);
      }else{
        this.updateBasket(user.token, "anonymous", user.guid, data, _count);
      }
    }
  }

  onDeleteEntry(item) {
    this.refreshBasket=true;
    const baseSite = this.singletonServ.catalogVersion;
    const entry = item["entryNumber"];
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (item.isBundle) {
        this.removeBundleEntry(
          user.token,
          user.email,
          user.code,
          item["bundleNo"]
        );
      } else {
        this.removeCartEntry(user.token, user.email, user.code, entry);
      }
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        if (item.isBundle) {
          this.removeBundleEntry(
            user.token,
            "anonymous",
            user.guid,
            item["bundleNo"]
          );
        } else {
          this.removeCartEntry(user.token, "anonymous", user.guid, entry);
        }
      }
    }
  }
  removeCartEntry(token, email, cartCode, entry) {
    this.basketServ.removeEntry(token, email, cartCode, entry).subscribe(
      response => {
        this.fetchCartInfo();
        // const obj = { updateCart: true };
        // this.singletonServ.sendMessage(obj);
      },
      err => {
        this.refreshBasket=false;
      }
    );
  }

  onContinueShoppingEvent() {
    this.router.navigate(["store"]);
  }

  onSecureCheckout() {
    window.scrollTo(0, 0);
    let _outofstock=_.find(this.cart.entries,(obj)=>{
      if(!obj.product.length){
        return obj.product.stock.stockLevelStatus != "inStock"
       }
    });
   if(!_outofstock){
    this.router.navigate(["store", "mbcart", "mbSamples"]);
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
  onShowProductDtls(event,searchItem) {
    event.preventDefault();
    let url = "/store" + searchItem.url.replace("/p/", "/");
    if(event.ctrlKey && event.which === 1){
      window.open(url); 
   } else {
     this.router.navigate([url]);
   }
  }

  onSpliceBundleItem(product) {
    const baseSite = this.singletonServ.catalogVersion;
    this.generateCartSubscription =this.basketServ.generateCartToken().subscribe(
      res => {
        const tokenId = res["access_token"];
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.removeBundleEntry(
            tokenId,
            _user.email,
            _user.code,
            product["bundleNo"]
          );
        } else {
          const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.removeBundleEntry(
            tokenId,
            "anonymous",
            _guest.guid,
            product["bundleNo"]
          );
        }
      },
      err => {
        this.refreshBasket=false;
      }
    );
  }

  getBundleContent(text) {
    if (text.bundleTemplateId) {
      if (text.bundleTemplateId.indexOf("6") != -1) {
        return "Pick & Mix x 6";
      } else {
        return "Pick & Mix x 3";
      }
    }
    return "Pick & Mix x 3";
  }
  removeBundleEntry(token, email, code, bundleNo) {
    this.basketServ.removeBundle(token, email, code, bundleNo).subscribe(
      response => {
        this.fetchCartInfo();
        // const obj = { updateCart: true };
        // this.singletonServ.sendMessage(obj);
      },
      err => {
        this.refreshBasket=false;
      }
    );
  }
  getProdPrice(entry) {
    if (entry.product.price){
    if (entry.product.price.value != 0) {
      if(entry.product.originalPrice){
        return ` <span class="price-format-discount">
        <del class="price-format-discount-retail-price" >${entry.product.originalPrice}</del> &nbsp;
        <span class="ds-price">${entry.product.price.formattedValue}</span>
    </span>`
      }
      return entry.product.price.formattedValue;
    } else {
      return "FREE";
    }
  }
  }
  getTotalPrice(entry) {
    if (entry.totalPrice.value != 0) {
      return entry.totalPrice.formattedValue;
    } else {
      return "FREE";
    }
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
      const _price = "&#163;&nbsp;" + (data.bundlePrice*this.getBundleQuantity(data));

      return _price;
    } else if (baseSite.isoCode === "EU") {
      const _price = (data.bundlePrice*this.getBundleQuantity(data)) + "&nbsp;&#128;";

      return _price;
    } else if (baseSite.isoCode === "DE") {
      const _price = (data.bundlePrice*this.getBundleQuantity(data)) + "&nbsp;&#8364;";

      return _price;
    }
  }
setPromocode(token,email,code,val){
  this.basketServ
  .applyPromoCode(token,email,code, val)
  .subscribe(
    response => {
      if(response){
        for (let res in response){
             if(res=="errorMessage"){
              this.isPromoCodeError = true;
              this.promocodeSuccess = false;
             }else{
              this.refreshBasket=true;
              this.promoSuccesMsg=response['successMessage'];
              this.promocodeSuccess = true;
              this.isPromoCodeError = false;
              this.fetchCartInfo();
              // const obj = { updateCart: true };
              // this.singletonServ.sendMessage(obj);
             }
        }
        

      }

    },
    err => {
      this.refreshBasket=false;
      this.promocodeSuccess = false;
      if (err.error.errors[0]["type"] == "VoucherOperationError") {
        this.isPromoCodeError = true;
      }
    }
  )
}
  applyPromoCode() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.basketForm.valid) {
     
      this.submitted = true;
      const val = this.basketForm.value.promoCode;
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        if(user.token){
        if(!this.promocodeSuccess){
          this.setPromocode(user.token,user.email,user.code,val);
        }else{
          this.removePromo(user.token,user.email,user.code,val);
        }
      }else{
        this.generateCartSubscription=    this.basketServ.generateCartToken().subscribe((token)=>{
          const _token = token["access_token"];
          user.token=_token;
          this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
          if(!this.promocodeSuccess){
            this.setPromocode(user.token,user.email,user.code,val);
         }else{
          this.removePromo(user.token,user.email,user.code,val);
         }
        },err=>{

        });
      }
   
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          if(guest.token){
              if(!this.promocodeSuccess){
                this.setPromocode(guest.token,'anonymous',guest.guid,val);
            }else{
              this.removePromo(guest.token,'anonymous',guest.guid,val);
            }
        }else{
          this.generateCartSubscription= this.basketServ.generateCartToken().subscribe((token)=>{
            const _token = token["access_token"];
              guest.token=_token;
              if(!this.promocodeSuccess){
                this.setPromocode(guest.token,'anonymous',guest.guid,val);
              }else{
                this.removePromo(guest.token,'anonymous',guest.guid,val);
             }

          },err=>{

          });
        }
        }
      }
    } else {
      this.validateAllFormFields(this.basketForm);
    }
  }

  onFocusPromoCode() {
    this.isPromoCodeError = false;
  }
  removePromo(token,email,code,val){
    this.refreshBasket=true;
    this.basketServ.removePromoCode(token,email,code,val).subscribe((response)=>{
      this.basketForm.reset();
      this.promocodeSuccess = false;
      this.isPromoCodeError = false;
      this.fetchCartInfo();
      // const obj = { updateCart: true };
      // this.singletonServ.sendMessage(obj);
    },err=>{
      this.refreshBasket=false;
    });
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

  getPixMixImageJpg(entry){
    if(entry.bundleTemplateId){
      if(entry.bundleTemplateId.indexOf('6') !=-1 ){
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel6_uk_pick-mix-travel-6_image_01?$smallImg$&amp;fmt=jpg"
      }else{
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=jpg"
      }
    }
      return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=jpg"
    
   }




   addToBasket(event) {
    const baseSite = this.singletonServ.catalogVersion;
    const productObj = event.detail;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.singletonServ.loggedIn = true;
          if (!user.code) {       
            this.createCart(user.email,productObj,true);
          } else {
            if(user["token"]){
              this.addToCart(user["token"],user.email,user.code,productObj);
            }else{  
              this.generateCartSubscription=      this.basketServ.generateCartToken().subscribe(
                resp => {
                   const token = resp["access_token"];
                   user.token= resp["access_token"];
                   this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user)); 
                   this.addToCart(token,user.email,user.code,productObj);
                },err=>{
  
                });
            }
          }
        } else {
          
          if (!this.singletonServ.getStoreData(baseSite.guest)) {
            this.createCart('anonymous',productObj,false);
          } else {
            const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            const cartId =  _guest["guid"];
            const tokenId =_guest["token"];
            if(tokenId){
              this.addToCart(tokenId,'anonymous',cartId,productObj);
            }else{
              this.createCart('anonymous',productObj,false);
            }
        }
        }
  
  }
  createCart(email,productObj,logged){
     const baseSite = this.singletonServ.catalogVersion;
   this.generateCartSubscription= this.basketServ.generateCartToken().subscribe(
      resp => {
        const token = resp["access_token"];
  
        this.createCartSubscription= this.basketServ.generateCartId(resp["access_token"],email).subscribe(
          data => {
            if(logged){
              const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
              user['code']=data['code'];
              user['guid']=data["guid"];
              user['token']=token;
              this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user));
              this.addToCart(token,email,user['code'],productObj);
            }else{
              const _user = {token:'',guid:''};
              _user["guid"]=data["guid"];
              _user['code']=data['code'];
              _user['token']=resp["access_token"];
              this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_user));
              this.addToCart(resp["access_token"],email,data["guid"],productObj);
            }
           
          },err=>{
  
          });
        },
        error => {}
      );
  }

  addToCart(token,email,code,productObj){
    this.createCartSubscription=  this.basketServ.addToBasket(token,email,code,productObj).subscribe((response)=>{
      this.basketServ.retrieveCartDetails(token, email, code).subscribe(
        response => {
          this.setCartDetail(response,true);
        },
        error => {}
      );
    },err=>{
 
   });
 }
 ngOnDestroy(){
   if(this.subscription){
  this.subscription.unsubscribe();
  }
  if(this.updateBundleSubscription){
    this.updateBundleSubscription.unsubscribe();
  } 
   if ( this.createBundleSubscription){
  this.createBundleSubscription.unsubscribe();
  }
  if(  this.cartSubscription){
  this.cartSubscription.unsubscribe();
}
if(  this.generateCartSubscription){
  this.generateCartSubscription.unsubscribe();
}
if( this.createCartSubscription){
  this.createCartSubscription.unsubscribe();
}
 }
}
