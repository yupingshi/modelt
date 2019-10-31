import { Component, OnInit,ViewEncapsulation,ChangeDetectionStrategy,AfterViewInit,SecurityContext,HostListener,ElementRef,ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { SingletonService } from "../services/singleton.service";
import {PickMixTravelComponentService} from './pick-mix-travel.service';
import * as _ from 'lodash';
declare var $: any;
declare var AmpCa :any;
@Component({
  selector: 'app-pick-mix-travel',
  templateUrl: './pick-mix-travel.component.html',
  styleUrls: ['./pick-mix-travel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickMixTravelComponent implements OnInit {
  @ViewChild('scrollbarRef') scrollRef: ElementRef;
  current:boolean;
  pickMix:boolean; 
  collection:any;
  pack:boolean;
  pickItems:boolean;
  viewMode:string ='pick';
  collectionData:any;
  pickStore:boolean=true;
  pickPackPrice:string;
  pickmixAmpContent:boolean;
  switchMode:string;
  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    public titleService:Title,
    public pickMixServ:PickMixTravelComponentService
  ) {
    const baseSite=this.singletonServ.catalogVersion;
    this.getPickMixContent();
    this.pickMix=false;

    if(this.singletonServ.getStoreData(baseSite.reg)){
      if( this.singletonServ.getStoreData(baseSite.regPickMix)){
        this. switchMode='localStore';
      }else{
        this. switchMode='emptyStore';
      }
   }else{
         if(this.singletonServ.getStoreData(baseSite.guestPickMix)){
          this. switchMode='localStore';
        }else{
          this. switchMode='emptyStore';
        }
   }
   }
   onChecKToCart(){
     this.viewMode='pick&Buy';
   }
   onStart(){
    const baseSite=this.singletonServ.catalogVersion;
    // this.singletonServ.removeItem('pick-buy');
    if(this.singletonServ.getStoreData(baseSite.reg)){
      if( this.singletonServ.getStoreData(baseSite.regPickMix)){
          this.singletonServ.removeItem(baseSite.regPickMix);
      }
      this.viewMode='pick';
      this.pickMix=true; 
   }else{
    this.singletonServ.removeItem(baseSite.guestPickMix); 
    this.viewMode='pick';
    this.pickMix=true;        
   }

   }

   onViewModeChange(container){ 
    this.viewMode=container;
    this.pack=false; 
  }
  ngOnInit() {
    this.titleService.setTitle('Pick & Mix Travel Toiletries | Holiday Toiletries | Molton Brown UK')
    this.pickMix=false;
  }
  getPickMixContent(){
    AmpCa.utils = new AmpCa.Utils();
   
    const baseSite=this.singletonServ.catalogVersion;
    AmpCa.utils.getHtmlServiceData({
      auth: {
        baseUrl: "https://c1.adis.ws",
        id: "12400cd8-5f67-4c86-b8f1-93c3d87f4018",
        store: "moltonbrown",
        templateName: "acc-template-banner",
        locale:baseSite.locale
      },
      callback: function(data) {
        this.pickmixAmpContent=true;
        document.querySelectorAll("#pickmix-amp-content")[0].innerHTML = data;
        AmpCa.utils.postProcessing.execHtmlService('banner'); 
      }
    });
  }
  onChangeCollection(data){     
    this.viewMode='pick'; 
    this.pack=false; 
  }
  setCollection(data){
   this.collection=data;
   this.viewMode='pick&Buy';
   this.pack=true;
  }
  onStartPickMix(){
    const baseSite=this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData(baseSite.reg)){
      if( this.singletonServ.getStoreData(baseSite.regPickMix)){
          this.singletonServ.removeItem(baseSite.regPickMix);
      }
      this.viewMode='pick';
      this.pickMix=true; 
   }else{
    this.singletonServ.removeItem(baseSite.guestPickMix); 
    this.viewMode='pick';
    this.pickMix=true;        
   }
 
  }
  onContinue(){
    this.viewMode='pick';
    this.pickMix=true;  
  }
  onActivate(e,parent){
    parent.scrollTop = 0;
  }
}
