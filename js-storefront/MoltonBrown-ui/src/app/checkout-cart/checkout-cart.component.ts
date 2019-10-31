import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  HostListener,
  OnDestroy
} from "@angular/core";
import { SingletonService } from "../services/singleton.service";
import { DeliveryComponentService } from "./delivery/delivery.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from "./../translate.service";
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import {PreviousRouteService} from "./previousRouteState.service";
import * as _ from "lodash";
declare var AmpCa: any;
declare var $: any;
@Component({
  selector: "app-checkout-cart",
  templateUrl: "./checkout-cart.component.html",
  styleUrls: ["./checkout-cart.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutCartComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild("policyEl") policyEl: ElementRef;
  deviceInfo: any;
  mobileDevice: boolean;
  desktopDevice: boolean;
  cuurent: boolean;
  login: boolean;
  delivery: boolean;
  confirmation: boolean;
  modalTitle: string;
  deEmail: boolean;
  customerCenter: string;
  footerLinks: Array<any>;
  eventTrigger: boolean;
  bundleCount: number = 0;
  bundleProductCount: number = 0;
  mergeCart: boolean = false;
  callFailTime: number = 0;
  loadOverlay:boolean;
  previousUrl:string;
  controlMouseDown:boolean;
  loadModalOverlay:boolean;
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    
  }
  constructor(
    public deviceService: DeviceDetectorService,
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private translate: TranslateService,
    public deliveryServ: DeliveryComponentService
  ) {
  this.router.events
      .pipe(
        filter((event: NavigationEvent) => {
          return event instanceof NavigationStart;
        })
      )
      .subscribe((event: NavigationStart) => {
        const splitPath = event.url;
        const page = splitPath[splitPath.length - 1];
        if (page === 'login') {
          this.cuurent = true;
          this.login = true;
          this.delivery = false;
          this.confirmation = false;
        } else if (page === 'shipping') {
          this.cuurent = true;
          this.login = false;
          this.delivery = true;
          this.confirmation = false;
        } else if (page === 'confirmation') {
          this.cuurent = true;
          this.login = false;
          this.delivery = false;
          this.confirmation = true;
        }
      });
  }

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
    this.getDeviceInfo();
    this.deliveryServ.getStaticContent(baseSite.lngCode).subscribe(
      staticData => {
        this.footerLinks = staticData["checkoutCart"]["footerLinks"];
        this.getFooterInfo();
      },
      err => { });
    if (baseSite.isoCode == "GB") {
      this.customerCenter = "+44 (0) 808 178 1188";
    } else if (baseSite.isoCode == "DE") {
      this.deEmail = true;
      this.customerCenter = "customer@moltonbrown.com";

    } else if (baseSite.isoCode == "EU") {
      this.customerCenter = "00 800 4585 00 76";
    } else if (baseSite.isoCode == "US") {
      this.customerCenter = "1-866-933-2344";
    }
    const splitPath = window.location.pathname.split("/");
    const page = splitPath[splitPath.length - 1];
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: false };
    this.singletonServ.sendMessage(obj);
    if (page === 'login') {
      this.cuurent = true;
      this.login = true;
      this.delivery = false;
      this.confirmation = false;
    } else if (page === 'shipping') {
      this.cuurent = true;
      this.login = false;
      this.delivery = true;
      this.confirmation = false;
    } else if (page === 'confirmation') {
      this.cuurent = true;
      this.login = false;
      this.delivery = false;
      this.confirmation = true;
    }

  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  getFooterInfo() {
    this.footerLinks.map((obj, k) => {
      const baseSite = this.singletonServ.catalogVersion;
      AmpCa.utils = new AmpCa.Utils();
      AmpCa.utils.getHtmlServiceData({
        auth: {
          baseUrl: 'https://c1.adis.ws',
          id: obj.contentId,
          store: 'moltonbrown',
          templateName: obj.templateName,
          locale: baseSite.locale
        },
        callback: function (htm) {
          obj['htm'] = htm;
        }
      });
    });
    this.singletonServ.footerLinks = this.footerLinks;
  }
  ngAfterViewInit() {
    this.singletonServ.getMessage().subscribe(message => {
      if (message.deliveryreturn) {
        this.modalTitle = this.footerLinks[0].name;
        this.policyEl.nativeElement.innerHTML = this.footerLinks[0].htm;
        // $('#modalCheckoutPopup').animate({
        //   scrollTop: $('.modal-body').offset().top
        // });
        this.loadModalOverlay=true;
        setTimeout(() => {
          const _target ='#UK_dl_Restrictions';
          this.waitForEl(_target, 5);
        });
      }else if(message.toggleOverlay){
        this.loadOverlay=message.toggleOverlay.status;
        if(message.toggleOverlay.orderConfirmation){
          this.confirmation = true;
        }
      }
    })
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
  getCartTabTextWelcome(tabText: string) {
    if ((this.mobileDevice && this.login) || this.desktopDevice) {
      return tabText;
    } else {
      return '1';
    }
  }

  getCartTabTextDelandPay(tabText: string) {
    if ((this.mobileDevice && this.delivery) || this.desktopDevice) {
      return tabText;
    } else {
      return '2';
    }
  }
  getCartTabTextConfirm(tabText: string) {
    if ((this.mobileDevice && this.confirmation) || this.desktopDevice) {
      return tabText;
    } else {
      return "3";
    }
  }

  goToHome(event) {
    event.preventDefault();
    if(event.ctrlKey && event.which === 1){
      this.controlMouseDown=true;
    }
    this.loadOverlay=true;
    const baseSite = this.singletonServ.catalogVersion;
    if (this.location.path() === "/checkout/confirmation") {
      this.singletonServ.removeItem(baseSite.guest);
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        let _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        delete _user['code'];
        delete _user['token'];
        this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_user));
      }
      this.goToStore();
    } else if (this.location.path() === "/checkout/shipping") {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        this.setGuestUserSetUp();
      } else {
        this.goToStore();
      }
    } else {
      this.goToStore();
    }
  }
  onOpenCartModal(data) {
    this.modalTitle = data.name;
    this.policyEl.nativeElement.innerHTML = data.htm;
      if(data.name == "Returns Policy"){
        this.loadModalOverlay=true;
        setTimeout(() => {
          const _target ='#Returns';
          this.waitForEl(_target, 5);
        });

      }

  }

  waitForEl(selector, count) {
    const that=this;
   if ($(selector).length) {
   this.scrollToEl(selector);
   } else {
    //  setTimeout(function() {
       if(!count) {
         count=0;
       }
       count++;
       if(count<10) {
         that.waitForEl(selector,count);
       } else {
         return;
        }
    //  });
   }
 }
 scrollToEl(target){ 
  var elemq = $(target);
  if(elemq){
    if(elemq.offset()){
    this.scrollToElement(elemq);
    }
  }
}
  scrollToElement(element) {
    if($('.chck-modal-body')[0]){
      this.loadModalOverlay=false;
    $('.chck-modal-body')[0].scrollIntoView(true);
    let _elmnt=$(element).offset();
    $('.chck-modal-body').animate({
      scrollTop: $('.chck-modal-body').scrollTop() + _elmnt.top - $('.chck-modal-body').offset().top-25
    }, {
      duration: 'slow',
      easing: 'swing'
    });
  }
}
  setGuestUserSetUp() {
    this.mergeCart = true;
    const baseSite = this.singletonServ.catalogVersion;
    const _obj = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
    this.mergeCart = true;
    this.deliveryServ.generateCartToken().subscribe(
      token => {
        let tokenId = token["access_token"];
        this.deliveryServ.generateCartId(tokenId, 'anonymous').subscribe(
          response => {
            const guid = response["guid"];
            this.mergeGuestCart(tokenId, guid, _obj.guid);
          },
          error => { 

          }
        );
      },
      err => { }
    );
  }

  mergeGuestCart(token, code, oldCode) {
    const baseSite = this.singletonServ.catalogVersion;
    this.deliveryServ.mergeCart(token, code, oldCode).subscribe((response) => {
      const _obj = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      _obj['token']=token;
      _obj['guid']=code;
      this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_obj));
      this.goToStore();
    }, err => {
      alert("DEV: Something went wrong with cart replacement .");
      this.singletonServ.removeItem(baseSite.guest);
      this.goToStore();
    });
  }
  goToSample(){
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: true };
    this.singletonServ.sendMessage(obj);   
    this.mergeCart = false;
    this.loadOverlay=false;
    this.router.navigate(["store","mbcart","mbSamples"]);
  }
  goToStore() {
    if(this.controlMouseDown){
      this.controlMouseDown=false;
      window.open('/store');
    }else{
      this.controlMouseDown=false;
      this.singletonServ.checkoutStatus = true;
      const obj = { checkoutStatus: true, store: true,home:true };
      this.singletonServ.sendMessage(obj);
      this.mergeCart = false;
      this.loadOverlay=false;
    }

  }
  ngOnDestroy(){
  }
}
