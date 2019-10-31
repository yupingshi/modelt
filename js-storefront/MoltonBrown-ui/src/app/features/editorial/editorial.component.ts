import { Component, OnInit,ViewEncapsulation,HostListener,ElementRef,ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {SingletonService} from '../../services/singleton.service';
import * as _ from 'lodash';
declare var $: any;
declare var AmpCa :any
@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class EditorialComponent implements OnInit {
  
  @ViewChild('editorialTemplatewrapper') editorialTemplatewrapper:ElementRef;
    htmlStr: string ;
    safeUrl:  SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,public singletonServ:SingletonService) { }
  name:string;
  @HostListener("window:scroll", ['$event'])
  windowScroll(event) {
    var navbar = document.getElementById("scroll-navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };
  ngOnInit() {
    this.getcardFromRenderingServ();
    
  }
  

 myFunction() {

}
  getcardFromRenderingServ(){
    const that=this;
    
    const baseSite=this.singletonServ.catalogVersion;
    AmpCa.utils = new AmpCa.Utils();
    AmpCa.utils.getHtmlServiceData({
        auth: {
            baseUrl: 'https://c1.adis.ws',
            id: '4cb5ab83-7900-4641-a59c-f0996ae1bcd4',
            store: 'moltonbrown',
            templateName: 'acc-template-homepage',
            locale:baseSite.locale
        },
        callback: function (htm) {
          //  document.querySelectorAll("#editorial_template-wrappper")[0].innerHTML = data;
          that.editorialTemplatewrapper.nativeElement.innerHTML=htm;
           AmpCa.utils.postProcessing.execHtmlService('homepage', {});     
        }
    });
  }
}
