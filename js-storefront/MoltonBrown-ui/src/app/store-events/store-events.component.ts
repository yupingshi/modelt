import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { SingletonService } from "../services/singleton.service";
import { MetaService } from "../services/meta.service";
import * as _ from "lodash";
declare var $: any;
declare var AmpCa: any;
@Component({
  selector: 'app-store-events',
  templateUrl: './store-events.component.html',
  styleUrls: ['./store-events.component.scss']
})
export class StoreEventsComponent implements OnInit {
  @ViewChild("storeEvents") storeEvents: ElementRef;

  constructor(
    public singletonServ: SingletonService,  
    public metaService: MetaService) {}
  ngOnInit() {
    this.renderTemplate();
  }
  renderTemplate() {
    const that = this;
    AmpCa.utils = new AmpCa.Utils();
    const baseSite = this.singletonServ.catalogVersion;
    AmpCa.utils.getHtmlServiceData({
      auth: {
        baseUrl: "https://c1.adis.ws",
        id: "8a52922b-461b-45f5-8f90-0cdf06f7a894",
        store: "moltonbrown",
        templateName: "acc-template-homepage",
        locale: baseSite.locale
      },
      callback: function(htm) {
        that.storeEvents.nativeElement.innerHTML = htm;
        AmpCa.utils.postProcessing.execHtmlService("homepage", {});
      }
    });
    this.metaService.createCanonicalURL();
  }

}
