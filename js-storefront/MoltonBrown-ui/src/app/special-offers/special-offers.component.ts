import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { SingletonService } from "../services/singleton.service";
import { MetaService } from "../services/meta.service";
import * as _ from "lodash";
declare var $: any;
declare var AmpCa: any;
@Component({
  selector: "app-special-offers",
  templateUrl: "./special-offers.component.html",
  styleUrls: ["./special-offers.component.scss"]
})
export class SpecialOffersComponent implements OnInit {
  @ViewChild("specialOffer") specialOffer: ElementRef;

  constructor(public singletonServ: SingletonService,   public metaService: MetaService) {}
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
        id: "5e146e95-cd82-4db6-95a3-70c228cf268a",
        store: "moltonbrown",
        templateName: "acc-template-homepage",
        locale: baseSite.locale
      },
      callback: function(htm) {
        that.specialOffer.nativeElement.innerHTML = htm;
        AmpCa.utils.postProcessing.execHtmlService("homepage", {});
      }
    });
    this.metaService.createCanonicalURL();
  }
}
