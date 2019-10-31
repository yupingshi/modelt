import { Component, ViewEncapsulation,OnInit } from "@angular/core";
import { SingletonService } from "../services/singleton.service";
import {AmpHomePageService} from './amp-homepage.service';
declare var AmpCa: any;
@Component({
  selector: "app-amp-homepage",
  templateUrl: "./amp-homepage.component.html",
  styleUrls: ["./amp-homepage.component.scss"],  
  encapsulation: ViewEncapsulation.None
})
export class AmpHomepageComponent implements OnInit {
  constructor(
    public singletonServ: SingletonService,
   public ampHomeServ:AmpHomePageService
  ) {}

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
  }
  setLang(lng) {
    this.ampHomeServ.getStaticContent(lng).subscribe(response => {
      this.singletonServ.appLocaleData = response;
      const _data = response["ampHome"];
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
