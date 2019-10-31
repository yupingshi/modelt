import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl,Validators } from "@angular/forms";
import { GuestForm } from "../../forms/guestForm.form";
import { SingletonService } from "../../services/singleton.service";
import { TranslateServiceSubService } from '../../pipe/translate-service-sub.service';
import { Title } from '@angular/platform-browser';
import {CheckoutRegComponentService} from './checkout-registration.service';
@Component({
  selector: "app-checkout-regitstration",
  templateUrl: "./checkout-regitstration.component.html",
  styleUrls: ["./checkout-regitstration.component.scss"]
})
export class CheckoutRegitstrationComponent implements OnInit {
  guestForm: FormGroup;
  emailPattern: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$";
  showCredenialError: boolean;
  errMsg:string;
  pageLoad:boolean;
  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    private title: Title,
    public customerForm: GuestForm,
    private fb: FormBuilder, 
    private translate: TranslateServiceSubService,
    public profileServ: CheckoutRegComponentService
  ) {
    this.pageLoad=false;
    this.showCredenialError = false;
    this.guestForm = this.fb.group(customerForm.getForm());
    this.guestForm.controls["password"].setValidators([Validators.required]);
    this.guestForm.controls['password'].updateValueAndValidity()
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
    this.title.setTitle('Molton Brown - Checkout Login - Molton Brown');
    const baseSite=this.singletonServ.catalogVersion;
    if(baseSite){
      this.setLang(baseSite.lngCode);
    }
    if (this.singletonServ.getStoreData(baseSite.guest)) {   
         const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
         if(_guest.email){
          this.guestForm.controls["email"].patchValue(_guest.email);
         }
    }
  }
  onChangePreference(status) {
    if (status.target.value == "guest") {
      this.guestForm.controls["password"].setValidators(null);
      this.guestForm.controls["password"].updateValueAndValidity();
      this.guestForm.controls["password"].reset();
    } else {
      this.guestForm.controls["password"].setValidators([Validators.required,Validators.minLength(6),
        Validators.maxLength(20)]);
      this.guestForm.controls["password"].updateValueAndValidity();
    }
  }

  onSubmitForm(event) {  
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid=baseSite.catalogversionId;
    const _form = this.guestForm.value;
    const _userForm = {
      email: _form.email,
      password: _form.password
    };
       if(this.guestForm.valid){ 
          if (_form.saveGuest == "guest") { 
            if (this.singletonServ.getStoreData(baseSite.guest)) {   
                const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
                 this.pageLoad=true;
                this.signInAsAnonymous(_guest.token,_guest.guid,_form.email);
              } 
          } else{
             this.signInAsReg(baseSiteid, _userForm);          
          }
  } else{
    this.validateAllFormFields(this.guestForm);
  }
}
validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}
signInAsAnonymous(token,guid,email){
  const baseSite=this.singletonServ.catalogVersion;
  this.profileServ.siteanonymousAuth(token,guid,email).subscribe(
    (response:any) => {
      const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      const _form = this.guestForm.value;
      this.pageLoad=false;
      _guest["email"] = _form["email"];
      _guest['token']=_guest.token;
      this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_guest));
      this.router.navigate(["checkout", "shipping"]);
    },
    (error:any) => {
     if(error){
        if(error.error["errors"]){
          if(error.error["errors"][0]){
            const err = error.error["errors"][0];
            if(err.type == "AccessDeniedError"){
                this.setGuestUserSetUp();
            } if(err.type== "InvalidTokenError") {
              if(this.singletonServ.getStoreData(baseSite.guest)){
                this.singletonServ.removeItem(baseSite.guest);
               } else if(this.singletonServ.getStoreData(baseSite.reg)){
                this.singletonServ.removeItem(baseSite.reg);
                }
               this.router.navigate(['store','global',"sessionExpired"]);
            }else{
              this.pageLoad=false;
            }
          }else{
            this.pageLoad=false;
          }
        } else{
          this.pageLoad=false;
        }
      }else{
        this.pageLoad=false;
      }
     
    }
  );
}

signInAsReg(baseSiteid, _userForm){
  const baseSite=this.singletonServ.catalogVersion;
  const _form = this.guestForm.value;
  const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
  this.profileServ.siteAuthentication(baseSiteid, _userForm).subscribe(
    user => {
        this.showCredenialError = false;
        const data = {};
        const obj = {
          access_token: user["access_token"],
          email: _userForm.email
        };
        const baseSite = this.singletonServ.catalogVersion;
        this.profileServ.getUserData(_guest.token, _userForm.email).subscribe((response)=>{
                 obj['isExpressCheckout']=response['isExpressCheckout']
                 this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(obj));
                  if(_guest["guid"]){
                    this.mergeGuestToRegCart(_guest.token, data, _form.email,_guest["guid"])
                  }else{
                    this.router.navigate(["checkout", "shipping"]);
                  }
        },error => {
            this.pageLoad=false;
        });

   },(err:any)=>{
            this.pageLoad=false;
            if(err){
            this.showCredenialError = true;
            if(err.error["errors"]){
            if(err.error["errors"][0]){
            }
            }
            }
   });
}
setGuestUserSetUp() {
  const baseSite = this.singletonServ.catalogVersion;
  const _obj = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
  this.profileServ.generateCartToken().subscribe(
    token => {
      let tokenId = token["access_token"];
      this.profileServ.generateCartId(tokenId, 'anonymous').subscribe(
        response => {
          const guid = response["guid"];
          this.mergeGuestCart(tokenId, guid, _obj.guid);
        },
        error => { 

        }
      );
    },
    err => { }
  );
}

mergeGuestCart(token, code, oldCode) {
  const baseSite = this.singletonServ.catalogVersion;
  this.profileServ.swapCart(token, code, oldCode).subscribe((response) => {
    const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
    const _form = this.guestForm.value;
    _guest["email"] = _form["email"];
    _guest['token']=token;
    _guest['guid']=code;
    this.singletonServ.setStoreData(baseSite.guest,JSON.stringify(_guest));
    this.signInAsAnonymous(token, code,_form.email);
  }, err => {
    this.pageLoad=false;
    console.log("DEV: Something went wrong with cart replacement .");
    this.singletonServ.removeItem(baseSite.guest);

  });
}
  mergeGuestToRegCart(token,data,email,guest){
    const _form = this.guestForm.value;
    this.profileServ
    .creatEmptyCart(token,data,email)
    .subscribe(
     res => {
       this.createCurrentUserCart(data, _form.email, token, guest, res);
  },
  err => {
   this.pageLoad=false;
   this.router.navigate(["store"]);
  });
}
createCurrentUserCart(body, _email, token, oldCart, newCart) {
  const baseSite=this.singletonServ.catalogVersion;
  let _ueer = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
  _ueer["token"] = token;
  this.profileServ
    .mergeCart( body, _email, token, oldCart, newCart['guid'])
    .subscribe(
      resp => {
        this.pageLoad=false;
        _ueer["guid"] = resp["guid"];
        _ueer["code"] = resp["code"];
          this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_ueer));
        this.singletonServ.removeItem(baseSite.guest);
        this.singletonServ.setCookie("user", JSON.stringify(_ueer), 1);
        const obj = { updateCart: true };
        this.singletonServ.sendMessage(obj);
        this.router.navigate(["checkout", "shipping"]);
      },
      err => {
        this.pageLoad=false;
        this.router.navigate(["store"]);
      }
    );
}
  onHelpPasswordClick(){
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: true };
    this.singletonServ.sendMessage(obj);
    this.router.navigate(["store", "myaccount", "profile", "passwordReset"]);
  }

  onSubmitField(event){
    if (event.key === "Enter") {
      this.onSubmitForm(event);
    }
  } 
  enableBtn(){
    const _val=this.guestForm.controls;
    if(_val.email.status == "VALID"){
        if(_val.saveGuest.value == "guest" || _val.saveGuest.value == "register"){
          return false
        }else{
          return true
        }
     }else{
       return true
     }
    return true;
  }
}
