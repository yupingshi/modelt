import { Component, OnInit } from "@angular/core";
import { RegistrationForm } from "../../forms/registration.form";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { profileComponentService } from "../profile-form/profile.service";
import { CustomerAccountService } from "../customer-account/customer-account.service";
import { SingletonService } from "../../services/singleton.service";
import { Router, ActivatedRoute } from "@angular/router";
import {confirmPasswordValidator} from '../../forms/registrationValidator';
@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"]
})
export class CustomerDetailComponent implements OnInit {
  updatePassword:boolean;
  updateForm: FormGroup;
  registrationForm: FormGroup;
  updateProfile: boolean;
  submitted: boolean;
  user: any;
  customerId: string;
  profileData: any;
  showCrentialError:boolean;
  constructor(
    public singletonServ: SingletonService,
    public customerServ:CustomerAccountService,
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public profilServ: profileComponentService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.updateProfile = true;
    this.updateForm = this.fb.group(customerForm.updatePassword(),{ validator: confirmPasswordValidator});
    this.registrationForm = this.fb.group(customerForm.addressForm());
  }
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      const email = user.email;
      if(user.token){
       this.getUserData(user.token,email);
      }else{
        this.profilServ.generateToken().subscribe((token)=>{
          const tokenId = token["access_token"];
          user['token']=tokenId;
          this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
          this.getUserData(tokenId,email);
        },err=>{

        });
      }
   }
  }

  getUserData(tokenId, id) {
    const baseSite = this.singletonServ.catalogVersion;
    this.profilServ.getUserData(tokenId, id).subscribe(
      resp => {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        if(resp['isExpressCheckout']){
        user['isExpressCheckout']=resp['isExpressCheckout'];
        this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
       }
        this.user = resp;
        this.singletonServ.userDetail=resp;
      },
      error => {}
    );
  }
  OnUpdateProfile(data) {
    let _user = this.user;
    let defaultAddress = this.user.defaultAddress;
    let _address = undefined;
    if (defaultAddress) {
      delete defaultAddress["firstName"];
      delete defaultAddress["lastName"];
      _address = Object.assign({}, _user, defaultAddress);
      _address["uid"] = _user.displayUid;
      this.profileData = _address;
      this.customerId = this.user.defaultAddress.id;
      this.updateProfile = false;
    }
    this.updateProfile = false;
  }
  
  

  OnUpdateCardDetails() {
    this.router.navigate(["store", "myaccount", "profile", "paymentInfo"]);
  }
  OnUpdateAddress() {
    this.router.navigate(["store", "myaccount", "profile", "addressBook"]);
  }
  cancelUpdate(bol) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      const email = user.email;
      this.getUserData(user.token,email);
    }
    this.updateProfile = true;
  }
  onSubmitField(event){
   this.showCrentialError=false;
  }
  onSubmitForm() {
    const _form = this.updateForm.value;
    const baseSite = this.singletonServ.catalogVersion;
    if (this.updateForm.valid) {
      if(this.singletonServ.getStoreData(baseSite.reg)){ 
         const _user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg)); 
         this.customerServ.changePassword(_user.token,_user.email,_form).subscribe((response)=>{
            this.updateForm.reset();
            this.updatePassword=true;
            this.showCrentialError=false;
            window.scroll(0,0);
          },(error)=>{
            const err = error.error["errors"][0];
            if(err['type'] == 'PasswordMismatchError'){
              this.showCrentialError=true;
            }
          });
    }
     this.submitted = true; 
    }else {
      this.validateAllFormFields(this.updateForm); 
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
  replaceEncryptNumber(data){
    if(data){
      const _number = new Array(data.length-3).join('x') + data.substr(data.length-4, 4);
      const _cardNumber =_number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return _cardNumber;
     }else{
      return 'xxxx xxxx xxxx xxxx';
     }
     return 'xxxx xxxx xxxx xxxx';
  }
}
