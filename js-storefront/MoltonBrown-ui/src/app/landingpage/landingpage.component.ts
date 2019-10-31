import { Component, OnInit,ViewEncapsulation,HostListener, OnDestroy } from '@angular/core';
import {SingletonService} from '../services/singleton.service';
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import {MetaService} from "../services/meta.service";
import * as _ from 'lodash';
import { Title } from "@angular/platform-browser";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var AmpCa :any;
declare var window:any;
declare var crl8:any;
declare var $:any;
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class LandingpageComponent implements OnInit,OnDestroy {
  @HostListener("window:scroll", ["$event"])
  windowScroll(event) {
    var scrollDistance = $(window).scrollTop();
    var scroll = $(window).scrollTop();
    var $window = $(window);  
    var $sidebar = $(".amp-dc-card-wrap"); 
    if($sidebar ){
    var $sidebarHeight = $sidebar.innerHeight(); 
    var $sidebarOffset = $sidebar.offset();
    if( $sidebarOffset){
        var hT = $sidebarOffset.top,
        wH = $(window).height(),
        hH = $('.amp-dc-card-wrap').outerHeight();
        console.log((wH-hT) , $window.scrollTop());
        if($window.scrollTop() > 450) {
          $sidebar.addClass("fade-wrapper");
        }  else {
          $sidebar.removeClass("fade-wrapper");
      }
   }
      
    // Calc current offset and get all animatables
    // var offset = $(window).scrollTop() + $(window).height(),
    //     $animatables = $('.amp-dc-card-wrap');
    
    // // Unbind scroll handler if we have no animatables
    // // if ($animatables.length == 0) {
    // //   $(window).off('scroll', doAnimations);
    // // }
    
    // // Check all animatables and animate them if necessary
		// $animatables.each(function(i) {
    //    var $animatable = $(this);
		// 	if (($animatable.offset().top + $animatable.height() - 20) < offset) {
    //     $animatable.addClass('fade-wrapper');
		// 	} else{
    //    $animatable.removeClass('fade-wrapper')
    //   }
    // });
  }
  }
  constructor(
    public singletonServ:SingletonService,
    public location: Location,
    public titleService: Title,
    public router: Router,
    public route: ActivatedRoute,
    public metaService:MetaService
    ) { }

  ngOnInit() {
    this.titleService.setTitle('Molton Brown® UK | Luxury Beauty, Fragrance, Bath & Body Gift Sets');
    this.getcardFromRenderingServ(); 
    this.setBVScript();
    this.metaService.createCanonicalURL();
  }
  setBVScript(){
    let baseSite=this.singletonServ.catalogVersion;
    if(baseSite.bv){
        let head= document.getElementsByTagName('head')[0];
        let script= document.createElement('script');
        script.type= 'text/javascript';
        script.src= baseSite.bv;
        head.appendChild(script);
    }
 }
  getcardFromRenderingServ(){
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
          if(  document.querySelectorAll(".landing_template_wrappper")[0]){
            document.querySelectorAll(".landing_template_wrappper")[0].innerHTML = data;
          }
            // AmpCa.utils.postProcessing.execHtmlService('splitBlock'); 
           }
        //     crl8.ready(function() {
        //      crl8.createExperience('custom-homepage');
        //  });
       
        }
    });
  }
  isMyScriptLoaded(url) {
    if (!url) url = "http://cdn.curalate.com/sites/moltonbrown-pabiml/site/latest/site.min.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
removejscssfile(filename, filetype){
  var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" ;
  var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
  var allsuspects=document.getElementsByTagName(targetelement);
  for (var i=allsuspects.length; i>=0; i--){ 
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
      allsuspects[i].parentNode.removeChild(allsuspects[i]) ;
  }
}


replacejscssfile(oldfilename, newfilename, filetype){
  var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
  var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
  var allsuspects=document.getElementsByTagName(targetelement)
  for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
          var newelement=this.createjscssfile(newfilename, filetype)
          allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i]);
      }
  }
}
createjscssfile(filename, filetype){
  if (filetype=="js"){ //if filename is a external JavaScript file
      var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript")
      fileref.setAttribute("src", filename)
  }
  else if (filetype=="css"){ //if filename is an external CSS file
      let fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", filename)
  }
  return fileref
}
ngOnDestroy(){
    // crl8.ready(function() {
    //   crl8.destroyExperience('custom-homepage');
    // });
}
}
