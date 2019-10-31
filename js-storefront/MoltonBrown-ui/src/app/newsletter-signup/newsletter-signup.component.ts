import { Component, OnInit,ViewEncapsulation,ViewChild,ElementRef } from '@angular/core';
import {RegistrationForm} from '../forms/registration.form';
import { SingletonService } from "../services/singleton.service";
import {NewsLetterComponentService} from './newsletter.service';
import { MetaService } from "../services/meta.service";
import { Router,ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
declare var AmpCa: any;

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class NewsletterSignupComponent implements OnInit {
  @ViewChild("newsLetterEl") newsLetterEl: ElementRef;
  breadcrumb:Array<any>;
  days:Array<any>;
  months:Array<any>;
  years:Array<any>;
  newsLetterForm:FormGroup;
  confirmation:boolean;
  recipientName:string;
  submitted:boolean;
  modalTitle:string;
  constructor(
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public singletonServ: SingletonService,
    public ymarketingServ:NewsLetterComponentService,
    public deviceService: DeviceDetectorService,
    public router: Router,
    public route: ActivatedRoute,
    public metaService: MetaService
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
   
    this.newsLetterForm = this.fb.group(customerForm.ymarketingForm());
    this.breadcrumb=[{name:'NEWSLETTER SIGN UP'}];
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
    console.log(this.days)
    
    const monthBox=[];
    const yearBox=[];
   
        //monthBox.push(monthBox);
    // for(let i=1;i<=12;i++){
    //   if(i>=10){
    //     const obj ={month:''+i}
    //     monthBox.push(obj);
    //   }else{
    //     const obj ={month:'0'+i}
    //     monthBox.push(obj); 
    //   }
    // }
    monthBox.push("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    this.months=monthBox;

    console.log(this.months);

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
    const queryStatus = this.route.snapshot.queryParamMap.get(
      "recipientName"
    );
    if (queryStatus) {
     this.confirmation=true;
     this.recipientName=queryStatus;
    }
    this.metaService.createCanonicalURL();
  }
  getTypeOf(val) {
    if (typeof val == "boolean" && !val) {
      return true;
    }
    return false;
  }
  onSubmitForm(event) {  
    this.submitted = true;
    if (this.newsLetterForm.valid) {
        const _form =this.newsLetterForm.value;
        const _obj={
          id:_form.emailAddress,
          firstName:_form.firstName,
          lastName:_form.lastName,
          emailAddress:_form.emailAddress,
          idOrigin:"ATGWEB",
          dob: _form.day+'/'+_form.month+'/'+_form.year,
          gender:_form.gender,
          marketingArea:"MB",
          newsletterOptIn:_form.newsletterOptIn    
        }
        this.ymarketingServ.newsLetterSignUp(_obj).subscribe((response)=>{
            this.router.navigate(["store", 'newsletter-sign-up', 'confirmation'], {
              queryParams: { recipientName: _form.firstName },
              queryParamsHandling: "merge"
            });
        },(err)=>{

        });  
    }
    else {
      this.getValidation(this.newsLetterForm); 
    }
  }
  getValidation(formGroup: FormGroup) {        
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {      
        this.getValidation(control);            
      }
    });
  }
    onClickPrivacy(){
    const that = this;    
    this.modalTitle = "Privacy & Cookie Policy";
      const baseSite = this.singletonServ.catalogVersion;
      AmpCa.utils = new AmpCa.Utils(); 
      AmpCa.utils.getHtmlServiceData({
        auth: {
          baseUrl: "https://c1.adis.ws",
          id: 'f4e22cd7-8cb7-4d19-b063-5b2a7dde5b8d',
          store: "moltonbrown",
          templateName: "acc-template-homepage",
          locale: baseSite.locale
        },
        callback: function(htm) {
          that.newsLetterEl.nativeElement.innerHTML = htm;
        }
      });
  }
  onClickTerms(){
    const that = this;
    this.modalTitle = "Terms & Conditions";
      const baseSite = this.singletonServ.catalogVersion;
      AmpCa.utils = new AmpCa.Utils(); 
      AmpCa.utils.getHtmlServiceData({
        auth: {
          baseUrl: "https://c1.adis.ws",
          id: 'b3b8c0d7-6131-4594-9ae9-50564435d349',
          store: "moltonbrown",
          templateName: "acc-template-homepage",
          locale: baseSite.locale
        },
        callback: function(htm) {
     
          that.newsLetterEl.nativeElement.innerHTML = htm;
        }
      });
  }
}
