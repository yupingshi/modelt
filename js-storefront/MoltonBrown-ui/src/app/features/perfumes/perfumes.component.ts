import { Component, OnInit } from '@angular/core';
import { SingletonService } from "../../services/singleton.service";
declare var AmpCa: any;
@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.scss']
})
export class PerfumesComponent implements OnInit {

  constructor(    public singletonServ: SingletonService) { }

  ngOnInit() {
  }
renderAmpCntnt(){
  AmpCa.utils = new AmpCa.Utils();
  const baseSite=this.singletonServ.catalogVersion;
  AmpCa.utils.getHtmlServiceData({
      auth: {
          baseUrl: 'https://c1.adis.ws',
          id: '3188a40c-c79b-47c9-9863-6e1d79616c03',
          store: 'moltonbrown',
          templateName: 'acc-template-homepage',
          locale:baseSite.locale
      },
      callback: function (data) {
        if(data){
          document.querySelectorAll(".landing_template_wrappper")[0].innerHTML = data;
         }   
      }
  });
}
}
