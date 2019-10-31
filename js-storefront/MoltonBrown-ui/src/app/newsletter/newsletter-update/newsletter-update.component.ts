import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {RegistrationForm} from '../../forms/registration.form';
import { Router,ActivatedRoute } from '@angular/router';
import { SingletonService } from "../../services/singleton.service";
import {NewsLetterComponentService} from '../../newsletter-signup/newsletter.service';
import { MetaService } from "../../services/meta.service";
import {
  Validators,
  FormControl
} from "@angular/forms";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../app.constant";
import * as _ from "lodash";
import "../../../assets/js/sapContentPage.js";
@Component({
  selector: 'appNewsletterUpdate',
  templateUrl: './newsletter-update.component.html',
  styleUrls: ['./newsletter-update.component.scss']
})
export class NewsletterUpdateComponent implements OnInit,AfterViewInit {
  newsLetterForm:FormGroup;
  confirmation:boolean;
  recipientName:string;
  countries:Array<any>;
  ukSpecificForm:boolean;
  usSpecificForm:boolean;
  days:Array<any>;
  months:Array<any>;
  years:Array<any>;
  constructor( public router: Router,
  public route: ActivatedRoute,
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public ymarketingServ:NewsLetterComponentService,
    public singletonServ: SingletonService,
    public metaService: MetaService
  ) { 
    this.newsLetterForm = this.fb.group(customerForm.ymarketingUnsubscribeForm());
    const days=[]
    for(let i=1;i<=31;i++){
      let count='';
      if(i>=10){
        const obj ={day:''+i}
        days.push(obj);
      }else{
        const obj ={day:'0'+i}
        days.push(obj); 
      }
    }
    this.days=days;
    const monthBox=[];
    const yearBox=[];
    for(let i=1;i<=12;i++){
      if(i>=10){
        const obj ={month:''+i}
        monthBox.push(obj);
      }else{
        const obj ={month:'0'+i}
        monthBox.push(obj); 
      }
    }
    this.months=monthBox;
    const date=new Date();
    let birthYear=date.getFullYear()-14;
    let _year=birthYear;
    for(let k=1;k<=65;k++){
        _year=_year-1;
        const obj ={year:_year}
        yearBox.push(obj); 
    }
    this.years=yearBox; 
  }
  ngOnInit() {
    this.metaService.createCanonicalURL();
    this. setCountry();
  }
  ngAfterViewInit(){
    const url = "assets/js/sapContentPage.js";
    this.appendScript(url);
   }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  setCountry() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      this.ukSpecificForm = true;
      this.usSpecificForm = false;
      this.countries = this.nestedCopy(countries);
      const _isoCode = baseSite.isoCode;
        const _index = _.findIndex(this.countries, function(o) {          
          return o.isocode == _isoCode;
        });
        if (_index != -1) {
        this.newsLetterForm.controls["country"].patchValue(
          this.countries[_index]
        );
   
      }
    } else if (baseSite.isoCode === "EU") {
      this.ukSpecificForm = false;
      this.usSpecificForm = false;
      this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
    } else if (baseSite.isoCode === "DE") {
      this.ukSpecificForm = false;
      this.usSpecificForm = false;
      this.countries = this.nestedCopy(DE_COUNTRIES);
      this.newsLetterForm.controls["country"].patchValue(this.countries[0]);
    } else if (baseSite.isoCode === "US") {
      this.ukSpecificForm = false;
      this.usSpecificForm = true;
      this.countries = this.nestedCopy(US_COUNTRIES);
      const _isoCode = baseSite.isoCode;
     
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        if (_index != -1) {
        this.newsLetterForm.controls["country"].patchValue(
          this.countries[_index]
        );    
      }
      this.newsLetterForm.controls["district"].setValidators([Validators.required]);
      this.newsLetterForm.controls['district'].updateValueAndValidity();
  

    }
  }
  onSubmitForm(event) {  
    
  }
  appendScript(url){
    let googleMapsScript = document.createElement('script')
     googleMapsScript.setAttribute('src', url)
     document.body.appendChild(googleMapsScript)
  }
  isMyScriptLoaded(url) {
    if (!url) url = "../../../assets/js/sapContentPage.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
  onUnsubsribe(){
      this.ymarketingServ.generateToken().subscribe((tokenId)=>{
          const token = tokenId["access_token"];
          this.ymarketingServ.unSubscribeNewsletter(token,'vbnj@vbnj.com').subscribe((resposne)=>{
        },err=>{
  
        });
      });
  }
}
