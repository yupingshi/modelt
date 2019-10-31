import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChange,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { HeaderComponentService } from "../header.service";
import { SingletonService } from "../../../services/singleton.service";
import { BasketPageComponentService } from "../../../checkoutpage/basketpage/basketpage.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import * as _ from "lodash";
import { TranslateService } from '../../../translate.service';
declare var $: any;
declare var window: any;
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent  implements OnInit, AfterViewInit,OnChanges,OnDestroy {
  @Output() onDiscardSubscription: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("scrollContainer") scrollCartContainer: ElementRef;
  @ViewChild("storeCartCount") cartCountElement: ElementRef;
  @Input() renderCart:boolean;
  @Input() message:any;
  cartMessage:any;
  subscription: Subscription;
  cart: any;
  totalAmount: number;
  cartStatus: boolean;
  showCartBlock: boolean;
  toggleCartBox: boolean;
  productCode:string;
  refreshBasket:boolean;
  animate:boolean;
  basketEmptyContent:string;
  constructor(
    public headerServ: HeaderComponentService,
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public basketServ: BasketPageComponentService,
    private translate: TranslateService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.cart=this.singletonServ.cartObj;
  }
  onViewBasket() {
    this.toggleCartBox = false;
    this.router.navigate(["store", "mbcart"]);
  }
 
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that=this;
    if (changes["message"]) {
      if (changes["message"]["currentValue"] != undefined) {
        that.cartMessage = changes["message"]["currentValue"];
      }
    }
  }
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) { 
      if (baseSite.lngCode == "de"){
        this.basketEmptyContent="Der Warenkorb ist leer";
      } else if(baseSite.lngCode == "eu"){
        this.basketEmptyContent="Basket is empty";
      }else if(baseSite.lngCode == "us"){
        this.basketEmptyContent="Basket is empty";
      }else if(baseSite.lngCode == "en"){
        this.basketEmptyContent="Basket is empty";
      }
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
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngAfterViewInit() { 
    this.singletonServ.getMessage().subscribe(message => {
      if (message.refreshCartDetail) {
        this.retrieveCartDetails();
      }
    });
  }

  /* get user history cart to show previous cart */
  fetchRelavantBasket(token,email) {
    const baseSite = this.singletonServ.catalogVersion;
    const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
    this.headerServ
      .getCurrentUserRelevantCart(token,email)
      .subscribe(
        resp => {
          if (resp["carts"]) {
            if (resp["carts"][0]) {
              const code = resp["carts"][0]["code"];
              user["code"] = code;
              this.singletonServ.setStoreData(baseSite.reg 
              , JSON.stringify(user));
              this.fetchBasket(token,email,resp["carts"][0]["code"]);
            }
          }
        },
        error => {}
      );
  }

  retrieveCartDetails() {
     const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if(user.token){
          if (user.code) {
            this.fetchBasket(user.token,user.email,user.code);
          } else {
            this.cart=undefined;
            this.singletonServ.cartObj=undefined;
          }
      }else{
        this.headerServ.generateCartToken().subscribe(
          resp => {
             const token = resp["access_token"];
             user.token= resp["access_token"];
             this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user)); 
             if (user.code) {
              this.fetchBasket(user.token,user.email,user.code);
            } else {
              this.cart=undefined;
              this.singletonServ.cartObj=undefined;
            }
          },err=>{

          });
      }
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        if(user.token){
         this.fetchBasket(user.token,'anonymous',user.guid);
        }
      }else{
         this.cart=undefined;
         this.singletonServ.cartObj=undefined;
      }
    }
  }
fetchBasket(token,email,code){
 this.subscription= this.headerServ.retrieveCartDetails(token,email,code).subscribe((response)=>{
    window.scrollTo(0, 0);
    this.getCartDetail(response);
         },err=>{

         });
}
getCartCount() {
    let sum = 0;
    this.totalAmount = 0;
    if (this.cart) {
      if (this.cart.totalItems != 0) {
        for (let i = 0; i < this.cart["entries"].length; i++) {
          if (!this.cart["entries"][i]["product"]["isSample"]) {
            sum += this.cart["entries"][i]["quantity"];
          }
        }
      }
    }
    return sum;
  }
  /*Remove Bundle */
  onSpliceBundleItem(event, entry, k, i) {
    const bundleNo = entry["products"][0]["bundleNo"];
    const baseSite = this.singletonServ.catalogVersion;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.removeBundle(_user.token, _user.email, _user.code, bundleNo);
        } else {
          if (this.singletonServ.getStoreData(baseSite.guest)) {
            const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            this.removeBundle(_user.token, "anonymous", _user.guid, bundleNo);
          }
        }
  }
  removeBundle(token, email, code, bundleNo) {
    this.headerServ.removeBundle(token, email, code, bundleNo).subscribe(
      response => {
        this.showCartBlock=false;
        this.fetchBasket(token,email,code);
      },
      err => {
        this.fetchBasket(token,email,code);
      }
    );
  }

  /* Remove Entry from cart */
  onSpliceItem(event, data,k) {
    event.stopPropagation();
    const baseSite = this.singletonServ.catalogVersion;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          let user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          if(data.isBundle){
            this.removeBundle(            
            user.token,
            user.email,
            user.code,
            data.bundleNo
            )
          }else{    
            this.removeCartEntry(
            user.token,
            user.email,
            user.code,
            data.entryNumber
          );
         }
        } else {
          if (this.singletonServ.getStoreData(baseSite.guest)) {
            const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            if(data.isBundle){
              this.removeBundle(            
                user.token,
                "anonymous",
                user.guid,
                data.bundleNo
                )
            }else{  
              this.removeCartEntry(
              user.token,
              "anonymous",
              user.guid,
              data.entryNumber
            );
            }
          }
        }
  }

  removeCartEntry(token, email, code, entry) {
    this.basketServ.removeEntry(token, email, code, entry).subscribe(
      resp => {
        this.showCartBlock=false;
        this.fetchBasket(token,email,code); 
      },
      err => {
        this.fetchBasket(token,email,code);
      }
    );
  }

  onShowProduct(event, searchItem) {
    event.stopPropagation();
    this.toggleCartBox = false;
    let url = "/store" + searchItem.product.url.replace("/p/", "/");
    if(event.ctrlKey && event.which === 1){
      window.open(url); 
   } else {
     this.router.navigate([url]);
   }
  }

  onHoverCartIcon(event) {
    event.stopPropagation();
    this.toggleCartBox = true;
  }
  onleaveCart(event) {
    event.stopPropagation();
    this.toggleCartBox = false;
    this.showCartBlock = false;
  }

  /*cart data construction */

  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  getCartDetail(data){
    const that=this;
    this.singletonServ.sendMessage({updateBasketEntry:true,cartObj:data});
    const cart=this.singletonServ.setupEntryStream(data);
    let _copyCart=this.nestedCopy(data);
    this.animate=true;
    this.cart=cart;
    this.singletonServ.cartObj=cart;
    if(this.cartMessage){
          if(this.cartMessage.showCartPopUp){
            if(this.cartMessage.code){
              const _target ='#'+this.cartMessage.code;
              this.showCartBlock=true;
              that.waitForEl(_target, 5);

          }
         }
     } 
     else {
      // this.singletonServ.sendMessage({retreiveSamples:true,cartObj:_copyCart});
    }
  // if(this.refreshBasket){    
  //   this.singletonServ.sendMessage({retreiveSamples:true,cartObj:_copyCart});
  //   this.refreshBasket=false;
  // }
  this.onDiscardSubscription.emit()
 }
 waitForEl(selector, count) {
   const that=this;
  if ($(selector).length) {
      this.showCartPopUp();
  } else {
    setTimeout(function() {
      if(!count) {
        count=0;
      }
      count++;
      if(count<10) {
        that.waitForEl(selector,count);
      } else {return;}
    }, 100);
  }
}
 showCartPopUp(){ 
    const that= this; 
    const _target ='#'+this.cartMessage.code;
    var elemq = $(_target);
    if(elemq){
      if(elemq.offset()){
      this.scrollToElement(elemq);
      }
    }
    setTimeout(()=>{
      that.showCartBlock=false;
    },5000);
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
  getPixMixImage(entry){
    if(entry.bundleTemplateId){
    if(entry.bundleTemplateId.indexOf('6') !=-1 ){
      return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel6_uk_pick-mix-travel-6_image_01?$smallImg$&amp;fmt=webp"
    }else{
      return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=webp"
    }
  }
    return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$smallImg$&amp;fmt=webp"
  }

  getBundleContent(text){
    if(text.bundleTemplateId){
    if(text.bundleTemplateId.indexOf('6') !=-1){
      return 'Pick & Mix 6';
    }else{
      return 'Pick & Mix 3';
    }
   }
   return 'Pick & Mix 3';
  }
  getTotalPrice(entry){
    if(entry.product.price){
    if (entry.product.price.value != 0){
      if(entry.product.originalPrice){
        return `<span class="ds-price">${entry.product.price.formattedValue}</span>`
      }
      return entry.product.price.formattedValue;
    }else{
       return 'FREE'
    }
  }
  }
  getBundlePrice(data){
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite.isoCode ==='GB'){
      const _price='&#163;&nbsp;'+Math.ceil(data.bundlePrice);

      return _price;
    }else if(baseSite.isoCode ==='EU'){
      const _price=Math.ceil(data.bundlePrice)+'&nbsp;&#128;';

      return _price
    }else if(baseSite.isoCode ==='DE'){
      const _price=Math.ceil(data.bundlePrice)+'&nbsp;&#8364;';

      return _price
    }
  }
  scrollToElement(element) {
    if($('.cart-list-container')[0]){
    $('.cart-list-container')[0].scrollIntoView(true);
    let _elmnt=$(element).offset();
    $('.cart-list-container').animate({
      scrollTop: $('.cart-list-container').scrollTop() + _elmnt.top - $('.cart-list-container').offset().top-25
    }, {
      duration: 'slow',
      easing: 'swing'
    });
  }
}
ngOnDestroy(){
  if(this.subscription){
   this.subscription .unsubscribe();
  }
}
}
