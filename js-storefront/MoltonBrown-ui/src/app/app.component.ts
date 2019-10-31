import { 
  Component, 
  OnInit,
  HostBinding,
  HostListener, 
  AfterViewInit, 
  OnDestroy } from "@angular/core";
import { SingletonService } from "./services/singleton.service";
import { Subscription } from "rxjs";
import { TranslateService } from "./translate.service";
import { Location } from "@angular/common";
import { environment }     from '../environments/environment';
import { ConfigService } from './services/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ParamMap, RouterOutlet, Router, ActivatedRoute,NavigationStart } from "@angular/router";
import { Meta } from '@angular/platform-browser';
import * as _ from "lodash";
import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { slideInAnimation } from './services/animation';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    slideInAnimation
  ] 
})
export class AppComponent implements OnInit, AfterViewInit,OnDestroy {
  toggleMainMenu: boolean;
  subscription: Subscription;
  contentDeliveryUrl: any;
  public publicKey$: Observable<string>;
  checkoutStatus: boolean;
  countryData:Array<any>=environment.countryJsonData;
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    
  }
  @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
      this.refreshUserData();
    }
    @HostBinding('@.disabled')
    public animationsDisabled = false;
  
    prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

  constructor(
    public singletonServ: SingletonService,
    public location: Location,
    private translate: TranslateService,
    private config: ConfigService,
    public router: Router,
    public route: ActivatedRoute,
    private meta: Meta
  ) {

    this.publicKey$ = config.getConfig().pipe(
      map(configValues => configValues.publicKey)
    );
    this.toggleMainMenu = false;
    translate.use("en").then(() => {
    });
    
    this.router.events.subscribe(
      ( event: NavigationEvent ) : void => {

          if ( event instanceof NavigationEnd ) {

            const _path =    this.location
            .path()
            .slice(1)
            .split("/");
            if( _path[0] === "checkout" ){
              this.checkoutStatus = false;
            } else if (  _path[1] === "storeportal" ) {
              this.checkoutStatus = false;
            } else {
              this.checkoutStatus = true;
            }
       

          }
          window.scrollTo(0, 0);
      }
  );
}
  setLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
     const myParam = urlParams.get('country_store');
    if (myParam) {
      const _index = _.findIndex(this.countryData, function(o) {          
        return o.lngCode == myParam;
      });
      if(_index !=-1){
        this.singletonServ.catalogVersion = this.countryData[_index];
        this.singletonServ.setStoreData("prefered_lng", JSON.stringify(this.countryData[_index]));
      }else if (this.singletonServ.getStoreData("prefered_lng")){
              const _data = JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
              this.singletonServ.catalogVersion = _data;
      }else{
        this.setCatlogVersion();
      }
      
    } else {
      if (this.singletonServ.getStoreData("prefered_lng")){
        const _data = JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
        this.singletonServ.catalogVersion = _data;
      }else{
        this.setCatlogVersion();
      }
    }
  }
  
  
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
  setCatlogVersion(){
    const _obj = {
      countryCode: "gb",
      countryName: "UK",
      catalogversionId: "moltonbrown-gb",
      locale: "en-GB",
      reg: "reg-gb",
      guest: "guest-gb",
      isoCode: "GB",
      store: "store_gb",
      name:"United Kingdom",
      lngCode:'en',
      guestPickMix:'guest-pick-mix-gb',
      regPickMix:'reg-pick-mix-gb',
      bv_locale:'en_gb',
      bv:'https://apps.bazaarvoice.com/deployments/moltonbrown-en_gb/main_site/staging/en_GB/bv.js',
      geoPoint:{
        latitude:51.509865,
        longitude:-0.118092
      },
      query:"https://jsapps.cxur-kaocorpor1-d4-public.model-t.cc.commerce.ondemand.com/store/index"
    };
    this.singletonServ.setStoreData("prefered_lng", JSON.stringify(_obj));
    this.singletonServ.catalogVersion = _obj;
  }
  ngAfterViewInit() {
    this.subscription = this.singletonServ.getMessage().subscribe(message => {
      if (message.moltonSideumenu) {
        window.scroll(0, 0);
        this.toggleMainMenu = message.moltonSideumenu.state;
      } else if (message.checkoutStatus) {
          if (message.store) {
 
            if(message.home){
             this.router.navigate(["store"]);
            } else if(message.basket){
              this.router.navigate(["store", "mbcart"]);
            } else if(message.account) {
              this.router.navigate(["store", "myacc"]);
            } else if(message.orderDetail){
              // this.router.navigate(["store", "myaccount", "profile", "orderDetails"], {
              //   queryParams: { orderId: message.orderDetail.code },
              //   queryParamsHandling: "merge"
              // });
              this.router.navigate(["store", "myaccount", "profile", "detail"]);
            } else if(message.favourite){
              this.router.navigate(["store", "myaccount", "profile", "myFavorites"]);
            }
  
          } else {
 
          }
      }
    });
  }
  scrollHandler() {}

  onActivate(e, parent){
    parent.scrollTop = 0;
  }
  ngOnDestroy(){

  }
  refreshUserData(){
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      delete _user.token;
      this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(_user));
    } else if (this.singletonServ.getStoreData(baseSite.reg)){
      const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      delete _guest.token;
      this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(_guest));
    }
  }
}
