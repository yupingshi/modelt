import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChange,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { PaymentGateWayForm } from "./../../forms/paymentCard.form";
import { SingletonService } from "../../services/singleton.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { PaymentService } from "../payment-detail/payment.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../app.constant";
import * as _ from "lodash";
import { patternValidator } from "../../forms/pattern-validator";
@Component({
  selector: "app-payment-new-saved-card",
  templateUrl: "./payment-new-saved-card.component.html",
  styleUrls: ["./payment-new-saved-card.component.scss"]
})
export class PaymentNewSavedCardComponent implements OnInit, OnChanges ,AfterViewInit{
  @ViewChild("myInput") myInput: ElementRef;
  @Input() addresses: Array<any>;
  @Output() updateCard: EventEmitter<any> = new EventEmitter<any>();
  addressList:Array<any>;
  updateSaveCard: FormGroup;
  expireMonth: Array<any>;
  expireYear: Array<any>;
  expiredYear: Array<any>;
  submitted: boolean;
  ukLoopBtnStatus: boolean;
  postCodeError: boolean;
  searchTerm: string;
  countries: Array<any>;
  ukSpecificForm: boolean;
  manualAdress: boolean;
  usSpecificForm: boolean;
  stateList: Array<any>;
  isValidFormSubmitted: boolean;
  postCodeStatus: boolean;
  postalAddresses: Array<any>;
  loadGMscript:boolean;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public _updatePaymentDetails: PaymentGateWayForm,
    private fb: FormBuilder,
    public singletonServ: SingletonService,
    public payService: PaymentService
  ) {
    this.postCodeStatus = true;
    this.updateSaveCard = this.fb.group(
      _updatePaymentDetails.getPaymentSavedCard()
    );
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
    const expireYearBox = [];
    for (let k = 0; k <= 10; k++) {
      const obj = { year: date.getFullYear() - k };
      expireYearBox.push(obj);
    }
    this.expiredYear = expireYearBox;
  }
  setAddress(event){}
  ngOnInit() {
    this.setCountry();
    let _obj=[
      {name:'line1',validator:null},
      {name:'country',validator:null},
      {name:'postCode',validator:null},
      {name:'town',validator:null},
      {name:'phone',validator:null}
    ];
     this.setFormValidator(_obj);
  }
  ngAfterViewInit(){
    const  url = "https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyDHfkdOsaMspf8lm0fNW_GyGb7MdAM5gs0";
    const _checkUrl = this.singletonServ.isMyScriptLoaded(url);
    setTimeout(()=>{
    if(!_checkUrl){
    this.loadScript(url);
    }else{
    this.loadGMscript=true;
    }
  });
}
loadScript(url){
    this.singletonServ.loadScript(url).then(() => {
      this.loadGMscript=true;
    });
}
setFormValidator(data){
    data.map((obj)=>{
      let _validate=obj.validator;
     if(_validate){
      this.updateSaveCard.controls[obj.name].setValidators(_validate);
      this.updateSaveCard.controls[obj.name].updateValueAndValidity();
     }else{
      this.updateSaveCard.controls[obj.name].setValidators(null);
      this.updateSaveCard.controls[obj.name].updateValueAndValidity();
     }
    });
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes["addresses"]) {
      if (changes["addresses"]["currentValue"] != undefined) {
            let _data = changes["addresses"]["currentValue"];
            this.addressList=_data;
            const _default=_.find(_data,(def)=>{
              return def.defaultAddress
            });
            if(!_default){
              this.addressList[0]['defaultAddress']=true;
            }
            this.resetBillForm();
         }
     }
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  onEnterNewAddress(event) {
    const baseSite = this.singletonServ.catalogVersion;
    let _obj=[
      {name:'line1',validator:[Validators.required]},
      {name:'country',validator:[Validators.required]},
      {name:'postCode',validator:[Validators.required]},
      {name:'line1',validator:[Validators.required]},
      {name:'town',validator:[Validators.required]},
      {name:'phone',validator:[Validators.required,  Validators.minLength(10),
        Validators.maxLength(14),
        patternValidator(/^((\\+91-?)|0)?[0-9]{10,14}$/)]}
    ];

    if (baseSite.isoCode == "US") {
      _obj.push({name:'district',validator:[Validators.required]});
      let _id= _.findIndex(_obj,resp=>{
        return resp.name=='postCode'
      });  
      _obj[_id]= {name:'postCode',validator:[Validators.required,patternValidator(/^[0-9]{5,6}$/)]};
    }else{
      let index= _.findIndex(_obj,resp=>{
        return resp.name=='district'
      });   
       _obj.splice(index,1);
    }
     this.setFormValidator(_obj);
     this.addressList.map((obj) => {
        obj.defaultAddress = false;     
    });
  }
  onSetaddress(index) {
    this.resetBillForm();
    this.addressList.map((obj, k) => {
      if (k == index) {
        obj.defaultAddress = true;
      } else {
        obj.defaultAddress = false;
      }
    });
  }
  resetBillForm(){
    let _obj=[
      {name:'country',validator:null},
      {name:'postCode',validator:null},
      {name:'line1',validator:null},
      {name:'town',validator:null},
      {name:'phone',validator:null},
      {name:'district',validator:null}
    ];
     this.setFormValidator(_obj);
  }
  onChangeCardType(event) {
    if (event.target.value == "amex") {
      this.updateSaveCard.controls["cardNumber"].setValidators([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15)
      ]);
    } else {
      this.updateSaveCard.controls["cardNumber"].setValidators([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]);
    }
    this.updateSaveCard.controls["cardNumber"].updateValueAndValidity();
    this.updateSaveCard.controls["issueNumber"].updateValueAndValidity();
  }
  setCountry() {
    const that = this;
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      if (baseSite.isoCode == "GB") {
        this.ukLoopBtnStatus = true;
        this.ukSpecificForm = true;
        this.countries = this.nestedCopy(countries);
        const _isoCode = baseSite.isoCode;
        if (_isoCode != -1) {
          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          this.updateSaveCard.controls["country"].patchValue(
            this.countries[_index]
          );
        }
      } else if (baseSite.isoCode === "EU") {
        this.ukLoopBtnStatus = false;
        this.ukSpecificForm = false;
        this.manualAdress = false;
        this.usSpecificForm = false;
        this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
      } else if (baseSite.isoCode === "DE") {
        this.ukLoopBtnStatus = false;
        this.ukSpecificForm = false;
        this.manualAdress = false;
        this.usSpecificForm = false;
        this.countries = this.nestedCopy(DE_COUNTRIES);
        const _isoCode = baseSite.isoCode;
        if (_isoCode != -1) {
          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          this.updateSaveCard.controls["country"].patchValue(
            this.countries[_index]
          );
        }
      } else if (baseSite.isoCode == "US") {
        this.ukLoopBtnStatus = false;
        this.ukSpecificForm = false;
        this.manualAdress = false;
        this.countries = this.nestedCopy(US_COUNTRIES);
        this.usSpecificForm = true;
        const _isoCode = baseSite.isoCode;
        if (_isoCode != -1) {

          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          if(_index !=-1){

            this.updateSaveCard.controls["country"].patchValue(
              that.countries[_index]
            );
            const _states = _.find(this.countries, function(o) {
              return o.isocode == _isoCode;
            });
            this.stateList = _states.states;
            if (this.countries[_index].isocode === "US") {
              this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
              this.updateSaveCard.controls['postCode'].updateValueAndValidity();
            }else{
              this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
              this.updateSaveCard.controls['postCode'].updateValueAndValidity();
            }
         }
       
       }
      }
    }
  }

  /* *Setup the assosiated state and enabling lookup address . */
  onChangeCountry(event) {
    const _index=event.target.selectedIndex-1;
    const country = this.countries[_index];
    if (this.countries[_index].isocode === "US") {
      this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
      this.updateSaveCard.controls['postCode'].updateValueAndValidity();
    }else{
      this.updateSaveCard.controls["postCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9]*$/)]);
      this.updateSaveCard.controls['postCode'].updateValueAndValidity();
    }
    if (this.usSpecificForm) {
      this.ukLoopBtnStatus = false;
      this.ukSpecificForm = false;
      if (country.states) {
        this.stateList = country.states;
      } else {
        this.stateList = undefined;
        this.updateSaveCard.controls["district"].setValue("");
      }
    } else if (this.ukSpecificForm) {
      this.ukSpecificForm = true;
      const _index = event.target.selectedIndex - 1;
      const country = this.countries[_index];
      if (country.isocode != "GB") {
        this.ukLoopBtnStatus = false;
      } else {
        this.ukLoopBtnStatus = true;
      }
    }
  }
  onSubmitForm(event) {
    event.stopPropagation();
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
    const _form = this.updateSaveCard.value;
    let _formControlName=[
      {name:'startDateMonth',reset:false},
      {name:'startDateYear',reset:false},
      {name:'month',reset:false},
      {name:'year',reset:false},
      {name:'cardType',reset:false},
      {name:'country',reset:false},
      {name:'district',reset:false},
    ];
    this.submitted = true;
    const _default=_.find(this.addressList,(def)=>{
      return def.defaultAddress
    });
    let _raiseCardMonthValidatn=false;
    const date = new Date();
    if(parseInt(_form.year) == date.getFullYear() ){
      if(parseInt(_form.month) <= date.getMonth() ){
        _raiseCardMonthValidatn=true;
      } 
    }
     if (this.updateSaveCard.valid) {
     if( !_raiseCardMonthValidatn){
      if (!_default) {
        let state = "";
        if (_form.district) {
          if (typeof _form.district == "object") {
            state = _form.district.name;
          } else {
            state = _form.district;
          }
        }
        const _body = {
          accountHolderName: _form.cardHolderFirstName + " " + _form.cardHolderLastName,
          firstName: _form.cardHolderFirstName,
          lastName: _form.cardHolderLastName,
          cardNumber: _form.cardNumber,
          cardType: {
            code: _form.cardType
          },
          expiryMonth: _form.month,
          expiryYear: _form.year,
          issueNumber:_form.issueNumber,
          billingAddress: {
            firstName: _form.cardHolderFirstName,
            lastName: _form.cardHolderLastName,
            country: {
              isocode: _form.country.isocode,
              name:_form.country.name
            },
            postalCode: _form.postCode,
            town: _form.town,
            phone: _form.phone,
            line1: _form.line1,
            line2: _form.line2,
            titleCode: "miss",
            district: state,
            defaultAddress:true
          }
        };
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          let user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.payService
            .postCardDetails(user.token, user.email, _body)
            .subscribe(
              response => {
                this.updateSaveCard.reset(); 
                this.resetAddressFields(_formControlName);               
                const _isoCode = baseSite.isoCode;
                if (_isoCode != -1) {
                  const _index = _.findIndex(this.countries, function(o) {
                    return o.isocode == _isoCode;
                  });
                  this.updateSaveCard.controls["country"].patchValue(
                    this.countries[_index]
                  );
                }else{
                  this.updateSaveCard.controls["country"].patchValue("");
                }
                this.updateSaveCard.controls["district"].patchValue("");
                this.updateCard.emit();
                window.scroll(10, 10);
              },
              err => {
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
              }
            );
        }
      } else {
        const _body = {
          accountHolderName:
            _form.cardHolderFirstName + " " + _form.cardHolderLastName,
          firstName: _form.cardHolderFirstName,
          lastName: _form.cardHolderLastName,
          cardNumber: _form.cardNumber,
          cardType: {
            code: _form.cardType
          },
          issueNumber:_form.issueNumber,
          expiryMonth: _form.month,
          expiryYear: _form.year,
          billingAddress: _default
        };
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          let user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.payService
            .postCardDetails(user.token, user.email, _body)
            .subscribe(
              response => {
                this.updateSaveCard.reset();
                this.resetAddressFields(_formControlName);
                const _isoCode = baseSite.isoCode;
                if (_isoCode != -1) {
                  const _index = _.findIndex(this.countries, function(o) {
                    return o.isocode == _isoCode;
                  });
                  this.updateSaveCard.controls["country"].patchValue(
                    this.countries[_index]
                  );
                }else{
                  this.updateSaveCard.controls["country"].patchValue("");
                }
                this.updateSaveCard.controls["district"].patchValue("");
                this.updateCard.emit();
                window.scroll(10, 10);
              },
              err => {
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
              }
            );
        }
      }
      
      this.submitted = true;
    } else {
      this.updateSaveCard.controls['month'].setErrors({'incorrect': true});
      this.validateAllFormFields(this.updateSaveCard);
    }
  }else{
    this.validateAllFormFields(this.updateSaveCard); 
  }
}
resetAddressFields(data){
  data.map((obj)=>{
    this.updateSaveCard.controls[obj.name].setValue('');
  });
  
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

  onLookupAddress(event) {
    this.updateSaveCard.controls["address"].setValidators([
      Validators.required
    ]);
    this.updateSaveCard.controls["address"].updateValueAndValidity();
    this.findAddress(event);
  }

  onSearchKeyUp(event) {
    if (event.key === "Enter") {
     this.updateSaveCard.controls['postCode'].patchValue(event.target.value);
      this.myInput.nativeElement.focus(); 
      this.findAddress(event);
     }
  }
  findAddress(event) {
    event.preventDefault();
    const val = this.updateSaveCard.value;
    this.myInput.nativeElement.focus();
    if (this.updateSaveCard.controls["postCode"].valid) {
      this.postCodeError = false;
      const postcode = val["postCode"];
      this.payService.getPostCode(postcode).subscribe(
        response => {
          if (response["Items"][0]){
          if (response["Items"][0]["Error"]) {
            this.updateSaveCard.controls["address"].setValue("");
            this.postCodeStatus = false;
          } else {
            this.postCodeStatus = true;
            this.postalAddresses = response["Items"];
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
        } else {
          this.postCodeError=true;
          this.myInput.nativeElement.focus();
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
    this.payService.retrievePostalAddress(id).subscribe(
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
}
