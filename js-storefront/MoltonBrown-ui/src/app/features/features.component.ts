import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import {FeatureComponentService} from "./features.service";
import {MetaService} from "../services/meta.service";
import { SingletonService } from "../services/singleton.service";
declare var AmpCa: any;
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(
    public singletonServ: SingletonService,
    public metaService: MetaService,
    public titleService: Title,
    public featureServ:FeatureComponentService
  ) { }



  ngOnInit() {
    this.metaService.createCanonicalURL();
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
  }
  setLang(lng) {
    this.featureServ.getStaticContent(lng).subscribe(response => {
      this.singletonServ.appLocaleData = response;
      const _data = response["feature"]['Feature'];
      _data.sort((a, b) => {
        return a.order - b.order;
      });
      this.setAmpContent(_data);
    });
  }
  setAmpContent(data) {
    const baseSite = this.singletonServ.catalogVersion;
    data.forEach(obj => {
      AmpCa.utils = new AmpCa.Utils();
      AmpCa.utils.getHtmlServiceData({
        auth: {
          baseUrl: "https://c1.adis.ws",
          id: obj.content,
          store: "moltonbrown",
          templateName: obj.templateName,
          locale: baseSite.locale
        },
        callback: function(data) {
          if (data) {
            document.querySelectorAll(obj.identifier)[0].innerHTML = data;
          }
        }
      });
    });
  }
}
