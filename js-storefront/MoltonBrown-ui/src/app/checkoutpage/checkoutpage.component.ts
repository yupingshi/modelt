import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateServiceSubService } from '.././pipe/translate-service-sub.service';
import {SingletonService} from '.././services/singleton.service';
@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent implements OnInit,AfterViewInit {
  deviceInfo:any;
  mobileDevice:boolean;
  desktopDevice:boolean;
  cuurent:boolean;
  basket:boolean;
  sample:boolean;
  confirmation:boolean;
  constructor(private deviceService: DeviceDetectorService,
    private translate: TranslateServiceSubService,public singletonServ:SingletonService) { }
    setLang(lang: string) {
      this.translate.use(lang);
    }
  ngOnInit() {
    const splitPath=window.location.pathname.split('/');
    let page= splitPath[splitPath.length-1];
    if(page=="basket"){
      this.cuurent=true;
      this.basket=true;
      this.sample=false;
      this.confirmation=false;
    }else if(page=="mbSamples"){
      this.cuurent=true;
      this.basket=false;
      this.sample=true;
      this.confirmation=false;
    }else{
      this.cuurent=true;
      this.basket=false;
      this.sample=false;
      this.confirmation=true;
    }
    this.getDeviceInfo();
    const baseSite=this.singletonServ.catalogVersion;
    if(baseSite){
      this.setLang(baseSite.lngCode);
    }
  }
  ngAfterViewInit(){

  }
  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    if(isMobile || isTablet){
      this.mobileDevice=true;
     }else{
       this.mobileDevice=false;
     }
     if(isDesktopDevice){
       this.desktopDevice =true;
     }else{
       this.desktopDevice =false;
     }

 
  }
  getBasketTabText(tabText:string){
    if(this.mobileDevice && this.basket ||this.desktopDevice ){
       
          return tabText
    } else{
          return '1'
    }
    }
  
    getBasketTabTextSample(tabText:string){
    if(this.mobileDevice && this.sample ||this.desktopDevice ){
       
          return tabText
    } else{
          return '2'
    }
    }
    getBasketTabTextCheckout(tabText:string){
    if(this.mobileDevice && this.confirmation ||this.desktopDevice){
       
          return tabText
    } else{
          return '3'
    }
    }
}
