import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { SingletonService } from "../../../services/singleton.service";
import {CustomerAccountService} from '../../customer-account/customer-account.service';
import {FormControl, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { patternValidator } from '../../../forms/pattern-validator';
import { TranslateService } from "../../../translate.service";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email:string;
  reset:boolean;
  resetForm:FormGroup;
  profileErrorStatus:boolean;
  constructor(
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public customerServ:CustomerAccountService,
    public fb:FormBuilder,    
    private translate: TranslateService
  ) { 
    this.reset=true;
    this.resetForm = this.fb.group({
      uid: new FormControl('', {validators:[Validators.required,
        patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
        updateOn: 'blur'})
    });
  }
  ngOnInit() {
    const baseSite =this.singletonServ.catalogVersion;
    if(baseSite){
      this.setLang(baseSite.lngCode);
    }

  }
  
  setLang(lang: string) {
    this.translate.use(lang);
  }
  onContinueClick(){
    this.router.navigate(['store','myacc','mbLogin']);
  }
  onSubmit(){
     if(this.resetForm.valid){
        const _email=this.resetForm.value.uid;
        this.customerServ.generateCartToken().subscribe((token)=>{
              const tokenId = token["access_token"];
              this.customerServ.retrievePassword(tokenId,_email).subscribe((response)=>{
                  this.reset=false;
                  this.profileErrorStatus=false;
              },(err)=>{
                if(err.error.errors[0]["type"]=="UnknownIdentifierError"){
                  this.profileErrorStatus=true;
                }
              })
        },(err)=>{
        });
    }
  }
  onFocusUid(){
    this.profileErrorStatus=false;
  }
}
