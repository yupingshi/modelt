import { Component, OnInit,NgZone, ElementRef,ViewChild } from '@angular/core';
import { PaymentGateWayForm } from '../../../forms/paymentCard.form';
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
import { SingletonService } from "../../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { PaymentService } from "../payment.service";
import * as _ from "lodash";
import { countries,EUROPEAN_COUNTRIES,DE_COUNTRIES,US_COUNTRIES  } from "../../../app.constant";
import { patternValidator } from '../../../forms/pattern-validator';
@Component({
  selector: 'app-edit-payment-card',
  templateUrl: './edit-payment-card.component.html',
  styleUrls: ['./edit-payment-card.component.scss']
})
export class EditPaymentCardComponent implements OnInit {
  @ViewChild("myInput") myInput: ElementRef;
  breadcrumb: Array<any>;
  orgMenu:boolean;
  addressList: Array<any>;
  updateSaveCard:FormGroup;
  defaultCard:boolean;
  cards:any;
  updatePayment:boolean;
  public paymentDetailsList: boolean;
  ukSpecificForm:boolean;
  cardDetail:any;
  countries:Array<any>;
  manualAdress:boolean;
  usSpecificForm:boolean;
  submitted:boolean;
  stateList:Array<any>;
  expireMonth:Array<any>;
  expireYear:Array<any>;
  postCodeError:boolean;
  postCodeStatus:boolean;
  expiredYear:Array<any>;
  postalAddresses:any;
  postalAddressEnable:boolean;
  searchTerm:string;
  defaultCardDetail:any;
  ukLoopBtnStatus:boolean;
  constructor(
    private zone: NgZone,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private _paymentService: PaymentService,
    public singletonServ: SingletonService,
    public _updatePaymentDetails:PaymentGateWayForm,
    private fb: FormBuilder
  ) {
    this.postCodeStatus=true;
    this.paymentDetailsList = true;
    this.updatePayment =true;
    this.updateSaveCard=this.fb.group(this._updatePaymentDetails.getSavedCard());
    this.updateSaveCard.controls["cvv"].setValidators(null);
    this.updateSaveCard.controls['cvv'].updateValueAndValidity();
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
    for (let k = 1; k <= 24; k++) {
      const obj = { year: date.getFullYear() + k };
      yearBox.push(obj);
    }
    this.expireYear = yearBox;
    const expireYearBox = [];
    for (let k = 0; k <= 10; k++) {
      const obj = { year: date.getFullYear() - k };
      expireYearBox.push(obj);
    }
    this.expiredYear = expireYearBox;
  }

  onChangeCountry(event) {
    const that = this;
    const _index=event.target.selectedIndex-1;
    const country = this.countries[_index];
    if (that.usSpecificForm) {
      that.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      if (country.states) {
        that.stateList = country.states;
      } else {
        that.stateList = undefined;
        that.updateSaveCard.controls["district"].setValue("");
      }
      if (that.countries[_index].isocode == "US") {
        this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
        this.updateSaveCard.controls['postCode'].updateValueAndValidity();
      }else{
        this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
        this.updateSaveCard.controls['postCode'].updateValueAndValidity();
      }
    } else if (!that.usSpecificForm && !that.ukSpecificForm) {
      
    } else if (that.ukSpecificForm) {
      this.ukSpecificForm = true;
      const country = this.countries[_index];
      if(country.isocode !="GB"){
        that.ukLoopBtnStatus=false;
      }else{
        that.ukLoopBtnStatus=true;
      }
    }
  }
  ngOnInit() {
    this.breadcrumb=[{name:'MY ACCOUNT',route:'/store/myacc/mbLogin'},{name:'MY PROFILE'}];
    const baseSite = this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData(baseSite.reg)){
         if(this.singletonServ.cardData){
        this.setSavedForm(this.singletonServ.cardData)
      }else{
        this. getCardDetail();
      }

    }
  }
  getCardDetail(){
    const baseSite = this.singletonServ.catalogVersion;
    const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
    this._paymentService.getUserSavedCards(user.token,user.email).subscribe((resp)=>{
      if(resp){
        const queryStatus = this.route.snapshot.queryParamMap.get(
         "referenceId"
       );
       const _default=_.find(resp,(def)=>{
         return def.profileID==queryStatus
       });
       if(_default){
        this.cardDetail = _default;
         this.setSavedForm(_default);
       }
     }
   },err=>{

   });
  }
  setSavedForm(_default){
    this.defaultCardDetail=_default;
    this. setCountry();
    const _data={
     cardType:_default['cardType'],
     cardNumber:_default.ccaccountnumber,
     firstName:_default.firstName,
     lastName:_default.lastName,
     month:_default.expirationmonth,
     year:_default.expirationyear,
     issueNumber:_default.cvv,
     country :_default.billingAddress.country,
     postCode:_default.billingAddress.postalCode,
     line1 :_default.billingAddress.line1,
     line2 :_default.billingAddress.line2,
     town:_default.billingAddress.town, 
     district :_default.billingAddress.district,
     phonenumber:_default.billingAddress.phone,
     address:_default.billingAddress.address
    };
    this.updateSaveCard.patchValue(_data);

    const _monthIndex = _.findIndex(this.expireMonth, function(o) {
      return o.month == _default.expirationmonth;
    });
    if(_monthIndex !=-1){
      this.updateSaveCard.controls['month'].patchValue(this.expireMonth[_monthIndex]);
    }
    const _yearIndex = _.findIndex(this.expireYear, function(o) {
      return o.year == _default.expirationyear
    });

    if(_yearIndex !=-1){
      this.updateSaveCard.controls['year'].patchValue(this.expireYear[_yearIndex]);
    }
   
      let _obj=[
        {name:'country',validator:[Validators.required]},
        {name:'line1',validator:[Validators.required]},
        {name:'postCode',validator:[Validators.required]},
        {name:'town',validator:[Validators.required]},
        {name:'phonenumber',validator:[Validators.required,  Validators.minLength(10),
          Validators.maxLength(14),
          patternValidator(/^((\\+91-?)|0)?[0-9]{10,14}$/)]}
      ];
      if (_data.country.isocode == "US") {
        _obj.push({name:'district',validator:[Validators.required]});
        let _id= _.findIndex(_obj,resp=>{
          return resp.name=='postCode'
        });  
        _obj[_id]= {name:'postCode',validator:[Validators.required,patternValidator(/^[0-9]{5,6}$/)]};
      }
       this.setFormValidator(_obj);
       this.setEditForm(_data);
       this.validateAllFormFields(this.updateSaveCard);
  }

  setCountry(){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite){
    if(baseSite.isoCode ==='GB'){
      that.ukSpecificForm=true;
      that.countries= that.nestedCopy(countries);
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.updateSaveCard.controls["country"].patchValue(that.countries[_index]);
      }
    }else if(baseSite.isoCode ==='EU'){
      that.ukSpecificForm=false;
      that.manualAdress=false;
      that.usSpecificForm=false;
      that.countries=that.nestedCopy(EUROPEAN_COUNTRIES);
    }else if(baseSite.isoCode ==='DE'){
      that.ukSpecificForm=false;
      that.manualAdress=false;
      that.usSpecificForm=false;
      that.countries=that.nestedCopy(DE_COUNTRIES);
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.updateSaveCard.controls["country"].patchValue(that.countries[_index]);
      }
    }else if(baseSite.isoCode=="US"){
      that.ukSpecificForm=false;
      that.manualAdress=false;
      that.countries=that.nestedCopy(US_COUNTRIES);
      that.usSpecificForm=true;
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.updateSaveCard.controls["country"].patchValue(that.countries[_index]);
       const _states=_.find(this.countries, function(o) { return o.isocode == _isoCode; });
       that.stateList=_states.states;
      }
    }
    }

  }
  setEditForm(_data){
    const that=this;
     const _isoCode =_data["country"]["isocode"];
    const _index = _.findIndex(this.countries, function(o) {
      return o.isocode == _isoCode;
    });
    
     if (_index != -1) {
        this.updateSaveCard.controls["country"].patchValue(
          that.countries[_index]
        );
        if (that.countries[_index].isocode == "US") {
          this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
          this.updateSaveCard.controls['postCode'].updateValueAndValidity();
        }else{
          this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
          this.updateSaveCard.controls['postCode'].updateValueAndValidity();
        }
        if(that.countries[_index].states){
          that.stateList=that.countries[_index].states;
          const _stateIndex = _.findIndex(that.stateList, function(o) {
            return o.name == _data.district;
          });
          if(_stateIndex !=-1){
            this.updateSaveCard.controls['district'].patchValue(that.stateList[_stateIndex]);
            }else{
            }
          }else{
            that.stateList=undefined;
          }
          if(_isoCode !="GB"){
            that.ukLoopBtnStatus=false;
          }else{
            that.ukLoopBtnStatus=true;
          }
      }else{
        this.updateSaveCard.controls["country"].patchValue('');
      }
  }

  setFormValidator(data){
    data.map((obj)=>{
      let _validate=obj.validator;
      if(_validate){
        if(this.updateSaveCard.controls[obj.name]){
      this.updateSaveCard.controls[obj.name].setValidators(_validate);
      this.updateSaveCard.controls[obj.name].updateValueAndValidity();
     }
    }else{
        this.updateSaveCard.controls[obj.name].setValidators(null);
        this.updateSaveCard.controls[obj.name].updateValueAndValidity();  
      }
    });
  }
  setAddress(addrObj) {
    const that = this;
    this.zone.run(() => {
      that.updateSaveCard.controls["postCode"].setValue(
        addrObj.postal_code
      );
    });
  }
  onSearchKeyUp(event) {
    if (event.key === "Enter") {
     this.updateSaveCard.controls['postCode'].patchValue(event.target.value);
      this.myInput.nativeElement.focus(); 
      this.findAddress(event);
     }
  }
  onLookupAddress(event) {
    this.updateSaveCard.controls["address"].setValidators([
      Validators.required
    ]);
    this.updateSaveCard.controls["address"].updateValueAndValidity();
    this.findAddress(event);
  }
  findAddress(event) {
    event.preventDefault();
     const val = this.updateSaveCard.value;
    this.myInput.nativeElement.focus();
    if (this.updateSaveCard.controls["postCode"].valid) {
      this.postCodeError = false;
      const postcode = val["postCode"];
      this._paymentService.getPostCode(postcode).subscribe(
        response => {
          if (response["Items"][0]){
          if (response["Items"][0]["Error"]) {
            this.updateSaveCard.controls["address"].setValidators([]);
            this.updateSaveCard.controls["address"].updateValueAndValidity();
            this.postCodeStatus = false;
          } else {
            this.postCodeStatus = true;
            this.updateSaveCard.controls["address"].setValue(null);
           this.postalAddressEnable=true;
           this.postalAddresses = response["Items"];
            if (val["line1"].length != 0) {
              let i;
              for (i = 0; i < response["Items"].length; i++) {
                if (
                  response["Items"][i]["StreetAddress"].indexOf(val["line1"]) !=
                  -1
                ) {
                  this.updateSaveCard.controls["line1"].setValue("");
                  break;
                }
              }
            }
          }
        }
        },
        error => {}
      );
    } else {
      this.postCodeError = true;
      this.myInput.nativeElement.focus();
    }
  }

  onSelectPlace(val) {
    const id = val;
    this._paymentService.retrievePostalAddress(id).subscribe(
      resp => {
        this.postalAddresses = undefined;
        let _addresses = resp["Items"][0];

        this.updateSaveCard.controls["town"].setValue(
          _addresses["PostTown"]
        );
        if (_addresses["Company"].length == 0) {
          this.updateSaveCard.controls["line1"].setValue(
            _addresses["Line1"]
          );
          this.updateSaveCard.controls["line2"].setValue(
            _addresses["Line2"]
          );
        } else {
          this.updateSaveCard.controls["line1"].setValue(
            _addresses["Company"]
          );
          this.updateSaveCard.controls["line2"].setValue(
            _addresses["Line1"]
          );
        }
        this.updateSaveCard.controls["postCode"].setValue(
          _addresses["Postcode"]
        );
        this.updateSaveCard.controls["district"].setValue(
          _addresses["County"]
        );
      },
      err => {}
    );
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  onContentClick(data) {
    if (data == "profile") {
      this.router.navigate(["store", "myaccount", "profile"]);
    } else if (data == "address") {
      this.router.navigate(["store", "myaccount", "profile", "addressBook"]);
    } else if (data == "payment") {
      this.router.navigate(["store", "myaccount", "profile", "paymentInfo"]);
    } else if (data == "favourites") {
      this.router.navigate(["store", "myaccount", "profile", "myFavorites"]);
    } else if (data == "history") {
      this.router.navigate(["store", "myaccount", "profile", "mbOrderhistory"]);
    }
  }
  onCollapseMenu(){
    if(this.orgMenu){
      this.orgMenu=false;
    }else{
      this.orgMenu=true;
    }
  }
  onSubmitForm(event){
    event.stopPropagation();
    const baseSite = this.singletonServ.catalogVersion;
   if(this.singletonServ.getStoreData(baseSite.reg)){
      let _user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      const cartData=this.updateSaveCard.value;
      let state = "";
      if (cartData.district) {
        if (typeof cartData.district == "object") {
          state = cartData.district.name;
        } else {
          state = cartData.district;
        }
      }
      let _accountHolderName=cartData.firstName+' '+cartData.lastName;
      const _obj={
        accountHolderName:_accountHolderName,
        cardNumber:cartData.cardNumber,
        firstName :cartData.firstName,
        lastName:cartData.lastName,
        cardType:{
            code:cartData.cardType
        },
        expiryMonth:cartData.month.month,
         expiryYear :cartData.year.year,   
         defaultPayment:true,
         billingAddress:{
          country: {
            isocode: cartData.country.isocode,
            name:cartData.country.name
          },
          firstName: cartData.firstName,
          postCode: cartData.postCode, //"55446-3739"
          town: cartData.town,
          lastName: cartData.lastName,
          phone: cartData.phonenumber,
          line1: cartData.line1,
          line2: cartData.line2,
          titleCode: "mr",
          district: state
        }    
    }
    if (this.updateSaveCard.valid) {
      const queryStatus = this.route.snapshot.queryParamMap.get(
        "referenceId"
      );
      this._paymentService.updateCard(_user.token,_user.email,_obj,queryStatus).subscribe(resp=>{
        this.router.navigate(['store','myaccount','profile','paymentInfo']);
      },err=>{

      })
    this.submitted = true;
   } else {
    this.validateAllFormFields(this.updateSaveCard);
  }
   
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
  onCancel(event){
    this.router.navigate(['store','myaccount','profile','paymentInfo']);
  }

  patchCountry(userData) {
    if (userData) {
      const _isoCode = userData.country.isocode;
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == _isoCode;
      });
      if (_index != -1) {
        this.updateSaveCard.controls["country"].patchValue(
          this.countries[_index]
        );
      }
      if (userData.country.isocode == "US") {
        this.updateSaveCard.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[0-9 ]{5,6}$/)
        ]);
        this.updateSaveCard.controls["postalCode"].updateValueAndValidity();
      } else {
        this.updateSaveCard.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.updateSaveCard.controls["postalCode"].updateValueAndValidity();
      }
    }
  }
}
