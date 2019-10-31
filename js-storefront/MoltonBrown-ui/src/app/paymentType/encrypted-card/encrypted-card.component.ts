import { Component, OnInit,ViewChild,ElementRef, Input, OnChanges,SimpleChange,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { cardFormComponentService } from "../card-form/card-form.service";
import { SingletonService } from "../../services/singleton.service";
import * as _ from "lodash";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { profileComponentService } from "../../component/profile-form/profile.service";
import {EncryptComponentService} from './encrypted-card.service';
import { countries,EUROPEAN_COUNTRIES,DE_COUNTRIES,US_COUNTRIES  } from "../../app.constant";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import { patternValidator } from '../../forms/pattern-validator';
declare var $:any;
@Component({
  selector: 'app-encrypted-card',
  templateUrl: './encrypted-card.component.html',
  styleUrls: ['./encrypted-card.component.scss']
})
export class EncryptedCardComponent implements OnInit,OnChanges {
@Input() expressForm:any;
@Input() cards:Array<any>;
@Input() group: FormGroup;
@Output() changeCardType: EventEmitter<any> = new EventEmitter<any>();
@Output() addNewCard: EventEmitter<any> = new EventEmitter<any>();
@Output() cancelEMit: EventEmitter<any> = new EventEmitter<any>();
@Output() editCardDetail: EventEmitter<any> = new EventEmitter<any>();
@ViewChild("myInput") myInput: ElementRef;
switchMode:string;
editCard:boolean;
addressId:any;
newAddress:boolean;
cardDetailForm:FormGroup;
updateCardForm:FormGroup;
checkAddressId:any;
addressList:Array<any>;
newCard:boolean;
cardList:any;
cardForm:FormGroup;
_value = '';
billingAddress:boolean;
addressData:any;
expireMonth:Array<any>;
expireYear:Array<any>;
cardData:any;
savedBillingForm:boolean;
loading:boolean;
editAddressList:boolean;
addAddress:boolean;
maxLength:any;
countries:any;
stateList:any;
cardId:any;
newCardOption:boolean=true;
switchBillingAddresType:string;
editAddresData:any;
propagateChange:any = () => {};
@Input() label: string;
writeValue(value: any) {
  if( value ){
   this._value = value;  
  }
}
registerOnChange(fn) {
  this.propagateChange = fn;
}
registerOnTouched(fn: () => void): void { }

onChange(event){
  this.propagateChange(event.target.value);
}
  constructor(
    public location: Location,
    public router: Router,
    public singletonServ: SingletonService,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public _checkOutForm: PaymentGateWayForm,
    public cyberService: cardFormComponentService,
    public encryptCardServ:EncryptComponentService,
    public translate: TranslateServiceSubService
  ) { 
    this.maxLength=3;
    this.savedBillingForm=true;
    this. switchMode='encryptCard';
    this.newCard=false;
    this.cardDetailForm = this.fb.group({paymentCard:this.fb.group(this._checkOutForm.getCardForm())});
    this.updateCardForm=this.fb.group(this._checkOutForm.getSavedCard());
    const monthBox = [];
    const yearBox = [];
    for (let i = 1; i <= 12; i++) {
      if (i >= 10) {
        const obj = { month: "" + i };
        monthBox.push(obj);
      } else {
        const obj = { month: "0" + i };
        monthBox.push(obj);
      }
    }
    this.expireMonth = monthBox;
    const date = new Date();
    for (let k = 0; k <= 24; k++) {
      const obj = { year: date.getFullYear() + k };
      yearBox.push(obj);
    }
    this.expireYear = yearBox;
  }

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    this.setCountry();
    if(this.singletonServ.getStoreData(baseSite.reg)){
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.getUserAddressList(user.email, user.token);
    }
    if (baseSite) {
      const lngCode = baseSite.lngCode;
      this.setLang(lngCode);
    }
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }


getUserAddressList(email, token) {
  this.addressData = undefined;
  this.encryptCardServ.getUserAddress(token, email).subscribe(
    resp => {
      if (resp) {
        if (resp["addresses"]) {
          this.addressList = resp["addresses"];
          this.addressList.map(obj => {
            if (obj.defaultAddress) {
              this.addressData = obj;
            }
            if (this.checkAddressId) {
              if (obj.id == this.checkAddressId) {
                obj.defaultAddress = true;
                this.addressData = obj;
              } else {
                obj.defaultAddress = false;
              }
            }
          });
        }
      }
    },
    error => {
    }
  );
}
editBlAddress(data) {
  this.addressId = data.id;
  this.editAddresData=data;
  this.newAddress=true;
  this.switchBillingAddresType="editAddress";
  this.editAddressList=true;
  this.cardDetailForm = this.fb.group({
    paymentCard:this.fb.group(this._checkOutForm.getCardForm()),
    billingForm:this.fb.group(this._checkOutForm.getCCForm())
 });
  this.cardDetailForm.controls['billingForm'].patchValue(data);
  this.cardDetailForm.controls['billingForm']['controls']['country'].patchValue('')
}
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if(changes['cards']){
      if (changes["cards"]["currentValue"] != undefined) {
        this.cardList=changes["cards"]["currentValue"];
        this.newCard=false;
      }
    }
    if (changes["group"]) {
      if (changes["group"]["currentValue"] != undefined) {                  
        this.cardForm=changes["group"]["currentValue"];
      }
    }
    if(changes['expressForm']){
      if (changes["expressForm"]["currentValue"] != undefined) {
        this.billingAddress=changes["expressForm"]["currentValue"];
      }
    }
  }
  onAddressChange(address) {
    this.addressList.map(obj => {
      if (obj.id == address.id) {
        obj["defaultAddress"] = true;
      } else {
        obj["defaultAddress"] = false;
      }
    });
    this.addressData = address;
  }

nestedCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

onCancelEditCard(){
  $('html, body').animate({
    scrollTop: $("#mb_payment_header").offset().top-75
  }, 100);
  this.switchMode='encryptCard';
  this.cancelEMit.emit({getCard:false}); 
}
  onChangeCardtypo(card){
    if(card.cardType == 'amex'){
      this.maxLength=4;
    }else{
      this.maxLength=3;
    }
    this.updateCardForm.reset();
    this.updateCardForm.controls.cvv.setErrors({ 'incorrect': false });
    this.cardList.map((obj) => {
      if (obj.profileID == card.profileID) {
        obj['isDefault'] = true;
      } else {
        obj['isDefault'] = false;
      }
    });
    this.changeCardType.emit({cardList:this.cardList,cardId:card.profileID});
  }

  onAddNewCard(){
    this.switchMode="updateCard";
    this.switchBillingAddresType="retrieveAddress";
    this.newCard=true;
    let _cardForm ={
      cardType:new FormControl('',{validators:Validators.required,updateOn: 'blur'}),
      cardNumber:new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16),patternValidator(/[0-9\+\-\ ]/)]),
      firstName:new FormControl('', {
                                       validators:[
                                       Validators.required,
                                       patternValidator(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                                      ],
                                      updateOn: 'blur'}),
      lastName:new FormControl('', {
                                       validators:[
                                          Validators.required,
                                          patternValidator(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,space/?:;' ]+$/)
                                        ],
                                       updateOn: 'blur'}), 
      month:new FormControl('',{validators:Validators.required,updateOn: 'blur'}),
      year:new FormControl('',{validators:Validators.required,updateOn: 'blur'}),
      cvv:new FormControl('')
    };

    this.cardDetailForm = this.fb.group({paymentCard:this.fb.group(_cardForm)});
    this.addNewCard.emit();
  }
  onSubmitCdDetails(event){
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
     if( this.cardDetailForm.controls.paymentCard.valid){
      if(this.singletonServ.getStoreData(baseSite.reg)){
            this.singletonServ.sendMessage({setLoading:{status:true}});
            const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
            const cardForm=this.cardDetailForm.controls.paymentCard.value;
            const _default=_.find(this.addressList,(def)=>{
              return def.defaultAddress
            });  
            const obj = {
                accountHolderName: cardForm['firstName'] + "" + cardForm['lastName'],
                cardNumber: cardForm['cardNumber'],
                cardType: {
                  code: cardForm['cardType']
                },
                firstName:cardForm['firstName'],
                lastName:cardForm['lastName'],
                expiryMonth: cardForm['month'],
                expiryYear: cardForm['year'],
                issueNumber:cardForm['cvv'],
                defaultPayment: true,
                billingAddress:_default
            }
          if(this.cardDetailForm.controls.paymentCard.valid || this.cardDetailForm.controls.billingForm.valid){
            this.cyberService.postCardDetails(user.token,user.email,obj).subscribe((cardId:any)=>{
            if(cardId){
              this.getSavedCards(user.token,user.email,cardId);
             }
          },err=>{
            this.singletonServ.sendMessage({setLoading:{status:false}});
          });
        }else{
          let formControls = this.cardDetailForm.controls;
          for (let k in formControls) {
            if ( k=="paymentCard" || k=="billingForm") {
              this.validateAllFormFields(formControls[k]);
            }
          }
        }
      }
   
    }else{
      let formControls = this.cardDetailForm.controls;
      for (let k in formControls) {
        if ( k=="paymentCard") {
          this.validateAllFormFields(formControls[k]);
        }
      }
    }
  }
  getSavedCards(token,email,id){
    this.cyberService.getUserSavedCards(token, email).subscribe((response:any) => {
      if (response) {
          response.map((obj)=>{
            if(obj.profileID == id){
              obj['isDefault']=true;
            }else{
              obj['isDefault']=false;
            }
          });
        this.singletonServ.sendMessage({payTypeCardDetails:true,cardList:response,setLoading:{status:false}});  
        this.cardList = response;
        this.newCard=false;
        this.switchMode="encryptCard";
        this.cancelEMit.emit({cardList:response});
     }
    }, err => {          
      this.loading = false;
      this.singletonServ.sendMessage({setLoading:{status:false}});
      if(err.errors){
        const _baseSite = this.singletonServ.catalogVersion;
        if(err.errors[0]['type']== "InvalidTokenError"){
          if(this.singletonServ.getStoreData(_baseSite.guest)){
            this.singletonServ.removeItem(_baseSite.guest);
           } else if(this.singletonServ.getStoreData(_baseSite.reg)){
            this.singletonServ.removeItem(_baseSite.reg);
            }
           this.router.navigate(['store','global',"sessionExpired"]);
        }
      }
    });
  }
  validateAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


  getSecureLength(val){
    if(val =="amex"){
      return 4;
    }else{
      return 3;
    }
  }
  changeCard(data){
      if(data.val =="amex"){
        this.cardDetailForm.controls.paymentCard['controls']["cardNumber"].setValidators([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15)
      ]);
    }else{
      this.cardDetailForm.controls.paymentCard['controls']["cardNumber"].setValidators([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]);
    }
    this.cardDetailForm.controls.paymentCard['controls']["cvv"].setValidators([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ]);
      this.cardDetailForm.controls.paymentCard['controls']["cardNumber"].updateValueAndValidity();
      this.cardDetailForm.controls.paymentCard['controls']["cvv"].updateValueAndValidity();
    
  }

  onAddNewBlAddess(event){
   this.cardDetailForm = this.fb.group({
     paymentCard:this.fb.group(this._checkOutForm.getCardForm()),
     billingForm:this.fb.group(this._checkOutForm.getCCForm())
  });
  this.addAddress=true;
  this.newAddress=true;
  this.switchBillingAddresType="newAddress";
  }



  setCountry(){
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite){
    if(baseSite.isoCode ==='GB'){
      this.countries= this.nestedCopy(countries);
    }else if(baseSite.isoCode ==='EU'){
      this.countries=this.nestedCopy(EUROPEAN_COUNTRIES);
    }else if(baseSite.isoCode ==='DE'){
      this.countries=this.nestedCopy(DE_COUNTRIES);
    }else if(baseSite.isoCode=="US"){
      this.countries=this.nestedCopy(US_COUNTRIES);
    }
    }
  }
  onCancel(){
    if(this.editAddressList){
       this.newAddress=false;
       this.editAddressList=false;
    }else
    if(this.billingAddress){
      this.billingAddress=false;
      this.newAddress=false;
    }
    else if(!this.billingAddress){
      this.newCard=false;
      this.newAddress=false;
      $('html, body').animate({
        scrollTop: $("#mb_payment_header").offset().top-75
      }, 100);
      this. switchMode='encryptCard';
      this.cancelEMit.emit({getCard:false});
      this.cardDetailForm = this.fb.group(this._checkOutForm.getCardForm());
    }
}
discardCCAddressForm(event){
    if(this.switchMode == 'updateCard'){
        this.switchBillingAddresType="retrieveAddress";
        this.newAddress=false;
    } else  if(this.switchMode == 'editCard'){
        this.savedBillingForm=true;
  }
}
onEditbillingAddress(data){
    this.savedBillingForm=false;
    this.updateCardForm=this.fb.group({
      cardType:new FormControl('',{validators:Validators.required}),
      billingForm:this.fb.group(this._checkOutForm.getCCForm())
    });
    this.updateCardForm.controls["cardType"].patchValue(data);
    this.updateCardForm.controls['billingForm'].patchValue(data.billingAddress); 
}
submitAddressForm(data){
    if(this.editAddressList){
      this.submitEditaddress(data);
   }else  if(this.addAddress){
      this.addNewAddress(data);
   } else if(this.switchMode == 'editCard'){
     this.onSubmitUpdateCdDetails();
   }
}
onSubmitUpdateCdDetails(){
    const baseSite = this.singletonServ.catalogVersion;
    const _val=this.updateCardForm.value;
    const _obj={
      accountHolderName:_val.firstName+' ' +_val.lastName,
      cardNumber:this.cardData.ccaccountnumber,
      firstName : _val.firstName,
      lastName:_val.lastName,
      cardType:{
          code:_val.cardType.cardType
      },  
      defaultPayment:true
    }
    if(this.savedBillingForm){
      _obj["expiryMonth"]=_val.month.month;
      _obj["expiryYear"]=_val.year.year;
      _obj[ "billingAddress"]=this.cardData.billingAddress;
    }else{
      _obj["expiryMonth"]=this.cardData.expirationmonth;
      _obj["expiryYear"]=this.cardData.expirationyear;
      _obj[ "billingAddress"]=this.updateCardForm.value.billingForm;
    }
    if(this.updateCardForm.valid){
      this.singletonServ.sendMessage({setLoading:{status:true}});
      this.loading=true;
      if(this.singletonServ.getStoreData(baseSite.reg)){
        const _user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        const _id=this.cardData.profileID;
        this.encryptCardServ.updateCardData(_user.token,_user.email,_id,_obj).subscribe((resp)=>{
            if(this.savedBillingForm){
              this.getSavedCards(_user.token,_user.email,_id);
              }else{
              this.retrieveCardData(_obj,resp);
              this.singletonServ.sendMessage({setLoading:{status:false}});
            }
            this.loading=false;
        },err=>{
          this.singletonServ.sendMessage({setLoading:{status:false}});
          this.loading=false;
          if(err.errors){
            const _baseSite = this.singletonServ.catalogVersion;
            if(err.errors[0]['type']== "InvalidTokenError"){
              if(this.singletonServ.getStoreData(_baseSite.guest)){
                this.singletonServ.removeItem(_baseSite.guest);
               } else if(this.singletonServ.getStoreData(_baseSite.reg)){
                this.singletonServ.removeItem(_baseSite.reg);
                }
               this.router.navigate(['store','global',"sessionExpired"]);
            }
          }
        });
      }
    }
  }
  retrieveCardData(obj,resp){
     this.cardData.billingAddress=obj[ "billingAddress"];
     this.cardData.billingAddress['firstName']=obj['firstName'];
     this.cardData.billingAddress['lastName']=obj['lastName'];
     this.savedBillingForm=true;
     this.updateCardForm=this.fb.group(this._checkOutForm.getSavedCard());
     this.onEditCardForm(this.cardData);
     this.cancelEMit.emit(); 
 }
 onEditCardForm(data){
  this.cardData=data;  
  const creditCardinfo=data;
  creditCardinfo['month']=data.expirationmonth;
  creditCardinfo['year']=data.expirationyear;
  this.editCardDetail.emit();
  this.updateCardForm.patchValue(creditCardinfo);
    const _expireMonthId=_.findIndex(this.expireMonth,(obj)=>{
          return obj.month ==data.expirationmonth
    });
    if(_expireMonthId !=-1){
      this.updateCardForm.controls.month.patchValue(this.expireMonth[_expireMonthId]);
    }
    const _expireYearId=_.findIndex(this.expireYear,(obj)=>{
      return obj.year ==data.expirationyear
   });
    if(_expireYearId !=-1){
      this.updateCardForm.controls.year.patchValue(this.expireYear[_expireYearId]);
    }
  

  this.updateCardForm.controls['cardType'].setValue(data);
  this.updateCardForm.controls["cvv"].setValidators(null);
  this.updateCardForm.controls["country"].setValidators(null);
  this.updateCardForm.controls["postCode"].setValidators(null);
  this.updateCardForm.controls["line1"].setValidators(null);
  this.updateCardForm.controls["town"].setValidators(null);
  this.updateCardForm.controls["phonenumber"].setValidators(null);
  this.updateCardForm.controls["address"].setValidators(null);
  this.updateCardForm.controls["address"].updateValueAndValidity();
  this.updateCardForm.controls["country"].updateValueAndValidity();
  this.updateCardForm.controls["postCode"].updateValueAndValidity();
  this.updateCardForm.controls["line1"].updateValueAndValidity();
  this.updateCardForm.controls["town"].updateValueAndValidity();
  this.updateCardForm.controls["phonenumber"].updateValueAndValidity();
  this.updateCardForm.controls["cvv"].updateValueAndValidity();
  this.switchMode='editCard';
 }
  addNewAddress(data){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData(baseSite.reg)){
      const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          const _address =data;
        _address['firstName']= this.addressList[0]['firstName'];
        _address['lastName']= this.addressList[0]['lastName'];
      that.cyberService.createUserAddress(_address,user.token,user.email).subscribe((resp:any)=>{
        this.addressId = resp.id;
       this. getAddress();
      },err=>{
        if(err.errors){
          const _baseSite = this.singletonServ.catalogVersion;
          if(err.errors[0]['type']== "InvalidTokenError"){
            if(this.singletonServ.getStoreData(_baseSite.guest)){
              this.singletonServ.removeItem(_baseSite.guest);
             } else if(this.singletonServ.getStoreData(_baseSite.reg)){
              this.singletonServ.removeItem(_baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
          }
        }
      });
    }
  }

  submitEditaddress(data){
    const baseSite = this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData(baseSite.reg)){
      const _address =data;
      const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
       this.cyberService.updateUserAddress(_address,user.token,user.email,this.addressId).subscribe((resp)=>{
         this. getAddress();
      },err=>{
        if(err.errors){
          const _baseSite = this.singletonServ.catalogVersion;
          if(err.errors[0]['type']== "InvalidTokenError"){
            if(this.singletonServ.getStoreData(_baseSite.guest)){
              this.singletonServ.removeItem(_baseSite.guest);
             } else if(this.singletonServ.getStoreData(_baseSite.reg)){
              this.singletonServ.removeItem(_baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
          }
        }
      });
    }
  }  
  getAddress(){
    const baseSite = this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData(baseSite.reg)){
      const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        this.cyberService.getUserAddress(user.token,user.email).subscribe((address)=>{
          if(address){
             this.addressList=address['addresses'];
             if(this.addressId){
            this.addressList.map((obj)=>{
              if (obj.id ==  this.addressId) {
                 obj.defaultAddress = true;
               }
           });
           this.switchBillingAddresType="retrieveAddress";
           this.newAddress=false;
           this.editAddressList=false;
           this.addAddress=false;
        }
      }    
    },err=>{
      if(err.errors){
        const _baseSite = this.singletonServ.catalogVersion;
        if(err.errors[0]['type']== "InvalidTokenError"){
          if(this.singletonServ.getStoreData(_baseSite.guest)){
            this.singletonServ.removeItem(_baseSite.guest);
           } else if(this.singletonServ.getStoreData(_baseSite.reg)){
            this.singletonServ.removeItem(_baseSite.reg);
            }
           this.router.navigate(['store','global',"sessionExpired"]);
        }
      }
    });
  }
  }
  replaceEncryptNumber(data){
    if(data){
      const _number = new Array(data.length-3).join('x') + data.substr(data.length-4, 4);
      const _cardNumber =_number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return _cardNumber;
    }else{
      return 'xxxx xxxx xxxx xxxx';
    }
    return 'xxxx xxxx xxxx xxxx'
  }
}
