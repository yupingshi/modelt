import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { HeaderComponentService } from "./header.service";
import { SingletonService } from "../../services/singleton.service";
import { BasketPageComponentService } from "../../checkoutpage/basketpage/basketpage.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { environment }     from '../../../environments/environment';
import { TranslateService } from '../../translate.service';
import {CartComponent} from './cart/cart.component';
import { productviewComponentService } from "../productview/productview.service";
import { Subscription, Subject } from "rxjs";
import { filter, map, take, toArray, takeUntil } from 'rxjs/operators';
declare var $: any;
declare var AmpCa: any;
declare var window:any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild("scrollContainer") scrollCartContainer: ElementRef;
  @ViewChild("storeCartCount") cartCountElement:ElementRef;
  @ViewChild("cartRefElement") cartCo:CartComponent;
  @ViewChild('submenuContainer') menuCartCo:ElementRef;
  countryText: any;
  toggle: boolean;
  subscription: Subscription;
  cartSubscription:Subscription;
  createCartSubscription:Subscription;
  entryCartSubscription:Subscription;
  generateCartSubscription:Subscription;
  deliveryText: string;
  loggedIn: boolean;
  countries = environment.countryJsonData;
  currentCountryCode:string;
  sidemenuStatus:boolean;
  renderCart:boolean=true;
  message:any;
  updateBasket:boolean;
  hideCart:boolean;
  localData:any;
  private unsubscribe$=new Subject<void>();
  enableJP:boolean;
  constructor(
    public headerServ: HeaderComponentService,
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public basketServ: BasketPageComponentService,
    public translate: TranslateService,
    public quickServ: productviewComponentService
  ) {
    this.sidemenuStatus = false;
    this.deliveryText = "Free UK Standard Delivery when you spend £49.*";
    this.loggedIn = false;
    
  }

  onSignOut() {  
    const that =this;
    this.singletonServ.removeItem("order");
    let _sessionNames=Object.keys(localStorage);
    if(_sessionNames.length){
      _sessionNames.map((obj)=>{
        console.log(obj);
        if(obj !='prefered_lng'){
           that.singletonServ.removeItem(obj);
        }
      })
    }
    this.cartCo.retrieveCartDetails(); 
    this.router.navigate(["store", "myacc"]);
  }

  ngOnInit() {
    const that=this;
    const baseSite =this.singletonServ.catalogVersion;
    if(baseSite){
      const _isoCode=this.singletonServ.catalogVersion.isoCode;
      this.setLocalLang(baseSite.lngCode);
      this.getTopStaticCntnt(baseSite.lngCode);
      this.countries.map((obj)=>{
        if(_isoCode==obj.isoCode){
          obj['current']=true;
          this.currentCountryCode=obj.countryName;
        }else{
          obj['current']=false;
        }
      });
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        this.loggedIn = true;
        this.singletonServ.loggedIn = true;
      }
    }
    document.addEventListener("add-to-cart", function(e) {
      that.addToBasket(e);   
    });

    this.cartCo.retrieveCartDetails(); 
  }
  setLocalLang(lng) {
    this.headerServ.getStaticContent(lng).subscribe((response:any) => {
      this.singletonServ.appLocaleData = response;
      this.localData=response;

    });
  }
  getTopStaticCntnt(lang: string){
    this.headerServ.getPolicyContent(lang).subscribe((response:any)=>{
      this.getTopHeadCntnt(response.headerPromotion);
    });
  }
 
    /*rendering Amplience Content Using Ampca variable IIFE Function located in assets/js*/
    getTopHeadCntnt(cntnt) {
      AmpCa.utils = new AmpCa.Utils();
      const baseSite=this.singletonServ.catalogVersion;
      AmpCa.utils.getHtmlServiceData({
        auth: {
          baseUrl: "https://c1.adis.ws",
          id: cntnt.content,
          store: "moltonbrown",
          templateName: "slot-contentWrapper",
          locale:baseSite.locale
        },
        callback: function(data) {
          if(document.querySelectorAll(".header-top-amptext")[0]){
          document.querySelectorAll(".header-top-amptext")[0].innerHTML = data;
         }
       }
      });
    }

  ngAfterViewInit() {
    this.subscription = this.singletonServ.getMessage().pipe(takeUntil(this.unsubscribe$)).subscribe(message => {
       if (message.access_token) {
        this.loggedIn = true;
        this.singletonServ.loggedIn = true;
      }else
          if (message.updateCart) {
            this.message=message;
            this.updateBasket=true;
            this.cartCo.retrieveCartDetails(); 
            }else if( message.showCartPopUp) {
              this.message=message;
              this.updateBasket=true;
              this.cartCo.retrieveCartDetails(); 
           }
           else if(message.sampleAdded){
            this.cartCo.retrieveCartDetails(); 
           }else if(message.retrieveAsASM){
            this.cartCo.retrieveCartDetails(); 
           } else if(message.updateBasketCount){
             this.cartCo.cart=message.cart;
           }
    });



  }

  onNewsletterClick() {
    this.router.navigate(["store", "newsletter-sign-up"]);
  }


  onProfileClick() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      this.router.navigate(["store", "myaccount", "profile"]);
    } else {
      this.router.navigate(["store", "myacc"]);
    }
  }
  onCountryChange(data) {
    if(data.isoCode != 'JP'){
      this.countryText = data;
      this.enableJP=false;
    } else {
      this.countryText = data;
      this.enableJP=true;
    }
  }

  onCancelModal(bol) {  
   if(!this.enableJP){
       const baseSite = this.singletonServ.catalogVersion;
        let user;
        if(this.singletonServ.getStoreData(baseSite.reg)){
          user= JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        }
        if (bol) {
          this.singletonServ.setStoreData(
            "prefered_lng",
            JSON.stringify(this.countryText)
          );    
          const _isoCode=this.countryText.isoCode;
          this.countries.map((obj)=>{
            if(_isoCode==obj.isoCode){
              obj['current']=true;
            }else{
              obj['current']=false;
            }
          });  
          const _obj = {
            baseSiteChange: true,
          };
          if(this.singletonServ.getStoreData(baseSite.reg)){
            if(!this.singletonServ.getStoreData(this.countryText.reg)){       
              let currentUser={email:''};
              currentUser.email=user.email;
              this.singletonServ.setStoreData(
                this.countryText.reg,
                JSON.stringify(currentUser)
              );
              if(user.token){
                this.headerServ.getUserData(user.token,user.email).subscribe((response)=>{
                  let userDtls= JSON.parse(this.singletonServ.getStoreData(this.countryText.reg));
                  userDtls['isExpressCheckout']=response['isExpressCheckout'];
                  this.singletonServ.setStoreData(
                    this.countryText.reg,
                    JSON.stringify(currentUser)
                  );
                },err=>{

                })
              }
              this.singletonServ.catalogVersion =  JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
              this.singletonServ.sendMessage(_obj);      
              this.goToStore();
            }else{
              this.singletonServ.catalogVersion =  JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
              this.singletonServ.sendMessage(_obj);      
              this.goToStore();
        }
        }else{
          this.singletonServ.catalogVersion =  JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
          this.singletonServ.sendMessage(_obj);      
          this.goToStore();
        }
    
        }
  } else {
    window.location.href=this.countryText.query;
  }
}
  onleaveRichCart(event){
    this.cartCo.showCartBlock=false;
    this.cartCo.onleaveCart(event);
  }
  onHoverProfileIcon(event) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    this.cartCo.onleaveCart(event);
  }
  onFindStoreClick(){
    this.router.navigate(['store','company','stores']);
  }
  onSidemenutap() {
    this.sidemenuStatus = !this.sidemenuStatus;
    this.toggle=this.sidemenuStatus;
    const toggle = {
      moltonSideumenu: {
        state: this.sidemenuStatus
      }
    };
    this.singletonServ.sendMessage(toggle);
  }
  removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" ;
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
    var allsuspects=document.getElementsByTagName(targetelement);
    for (var i=allsuspects.length; i>=0; i--){ 
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) ;
    }
  }
  goToStore(){
    const baseSite = this.singletonServ.catalogVersion;
    this.removejscssfile(baseSite.bv,'js');
    console.log(baseSite.query);
    window.location.href=baseSite.query;
  }
  
/* Start Add to basket */

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
            this.generateCartSubscription = this.quickServ.generateCartToken().subscribe(
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
 this.generateCartSubscription = this.quickServ.generateCartToken().subscribe(
    resp => {
      const token = resp["access_token"];
      this.createCartSubscription = this.quickServ.generateCartId(resp["access_token"],email).subscribe(
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
   this.entryCartSubscription =this.quickServ.addToBasket(token,email,code,productObj).subscribe((response)=>{
    this.message={
      showCartPopUp:true,
      code:productObj.product.code
    }
 
        this.updateBasket=true;
        this.cartCo.showCartBlock=true;
        this.cartCo.cartMessage={
          code:productObj.product.code
        }
        this.cartCo.retrieveCartDetails(); 
  },err=>{

  });
}

/* End Add to basket */
discardSubscription(event){
  event.preventDefault();
  this.subscription.unsubscribe();
}
ngOnDestroy(){
  if( this.subscription){
  this.subscription.unsubscribe();
}
if(this.createCartSubscription){
  this.createCartSubscription.unsubscribe();
}
if(this.entryCartSubscription){
  this.entryCartSubscription.unsubscribe();
}
if(this.generateCartSubscription){
  this.generateCartSubscription.unsubscribe();
}
}
}
