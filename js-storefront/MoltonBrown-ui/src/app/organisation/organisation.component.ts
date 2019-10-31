import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { HeaderComponentService } from "../component/header/header.service";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { SingletonService } from "../services/singleton.service";
import { MetaService } from "../services/meta.service";
import {OrganisationComponentService} from "./organisation.service";
import * as _ from "lodash";
declare var $: any;
declare var AmpCa: any;
@Component({
  selector: "app-organisation",
  templateUrl: "./organisation.component.html",
  styleUrls: ["./organisation.component.scss"]
})
export class OrganisationComponent implements OnInit,AfterViewInit {
  @ViewChild("orgnaisationEl") orgnaisationEl: ElementRef;
  orgMenu: boolean;
  searchByData ;
  deviceInfo: any;
  mobileDevice: boolean;
  constructor(
    public location: Location,
    public orgServ: OrganisationComponentService,
    public singletonServ: SingletonService,
    public deviceService: DeviceDetectorService,
    public router: Router,
    public route: ActivatedRoute,
    private titleService: Title,
    public metaService: MetaService
  ) {
    this.orgMenu = true;
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }
ngAfterViewInit(){

}
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.getStaticCntnt(baseSite.lngCode);
    }
    this.getDeviceInfo();

  }
  getContent(){
    const that=this;
    let _catData = that.searchByData;
    this.route.params.subscribe(params => {
    for (let obj of _catData) {
        const result = that.dfs(obj, params.sitename);
        if (result) {
          this.renderTemplate(result);
          break;
        }
      }
    });
  }
  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isMobile || isTablet) {
      this.mobileDevice = true;
      this.orgMenu = false;
    } else {
      this.mobileDevice = false;
      this.orgMenu = true;
    }
  }
  dfs(obj, targetId) {
    if (obj["filterBy"] === targetId) {
      return obj;
    }
    if (obj.children) {
      for (let item of obj.children) {
        let check = this.dfs(item, targetId);
        if (check) {
          return check;
        }
      }
    }
    return null;
  }
  renderTemplate(data) {
    const that = this;
    const content = data;
    AmpCa.utils = new AmpCa.Utils();
    that.titleService.setTitle(data.titleName);
    const baseSite = this.singletonServ.catalogVersion;
    AmpCa.utils.getHtmlServiceData({
      auth: {
        baseUrl: "https://c1.adis.ws",
        id: data.templateId,
        store: "moltonbrown",
        templateName: data.templateName,
        locale: baseSite.locale
      },
      callback: function(htm) {
        that.orgnaisationEl.nativeElement.innerHTML = htm;

        if (content.contentType != "text")
          AmpCa.utils.postProcessing.execHtmlService(content.contentType, {});
      }
    });
    this.metaService.createCanonicalURL();
  }
  getRouterMenuPath(data){
    if (!this.mobileDevice) {
      if(!data.header){
        if(data.route=="store/company/stores"){
           let route =data.route.split('/');
           return '/'+data.route;
        }else{
        const _url ="/store/"+ data.filterBy;
        return _url
        }
      }
    }
  }
  onMenuContentClick(data, k) {
    if (!this.mobileDevice) {
      if(!data.header){
        if(data.route=="store/company/stores"){
           let route =data.route.split('/');
           this.router.navigate(route);
        }else{
          this.router.navigate(["store", data.filterBy]);
        }
      }
    } else {
      if (data.children) {
        this.searchByData[k]["show"] = !this.searchByData[k]["show"];
      }
    }
  }
  getRouterPath(data){
    if(data.filterBy =="careers/faqs"){
      const url='http://www.kaocareers.com/';

    }else{
      const _url = "/store/"+ data.filterBy;
      return _url;
    }
  }
  onSubMenuContentClick(event, data) {
    event.stopPropagation();
    if(data.filterBy =="careers/faqs"){
      const url='http://www.kaocareers.com/';
      window.location.href=url;
    }else{
      this.router.navigate(["store", data.filterBy]);
    }

  }
  onCollapseMenu() {
    if (this.orgMenu) {
      this.orgMenu = false;
    } else {
      this.orgMenu = true;
    }
  }
  getStaticCntnt(lang: string){
    this.orgServ.getStaticContent(lang).subscribe((response)=>{
      this.searchByData=response['organisation'];
      this.getContent();
    });
  } 
}
