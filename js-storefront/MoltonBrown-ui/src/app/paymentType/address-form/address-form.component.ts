import { 
   Component, 
   OnInit, 
   Input,
   OnChanges,
   SimpleChange,
   ViewChild,
   EventEmitter,
   ElementRef, 
   Output
  } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup,
  FormControl,
  Validators 
} from "@angular/forms";
import { SingletonService } from "../../services/singleton.service";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import { countries,EUROPEAN_COUNTRIES,DE_COUNTRIES,US_COUNTRIES  } from "../../app.constant";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import * as _ from "lodash";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { DeliveryComponentService } from "../../checkout-cart/delivery/delivery.service";
import { patternValidator } from '../../forms/pattern-validator';
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit,OnChanges {
  @Input() billingForm:FormGroup;
  @Input() detail:any;
  @ViewChild('myInput') myInput: ElementRef; 
  @Output() discardAddressForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitAddressForm: EventEmitter<any> = new EventEmitter<any>();
  ccForm:FormGroup;
  manualAdress:boolean;
  ukSpecificForm:boolean;
  usSpecificForm:boolean;
  stateList:Array<any>;
  countries:Array<any>;
  deviceInfo:any;
  mobileDevice:boolean;
  desktopDevice:boolean;
  postCodeError:boolean;
  postCodeStatus:boolean;
  postalAddresses:any;
  editAddress:boolean;
  constructor(
    public location: Location,
    public router: Router,
    public translate: TranslateServiceSubService,
    public singletonServ: SingletonService,
    public route: ActivatedRoute,
    public deviceService: DeviceDetectorService,
    public deliveryServ: DeliveryComponentService,
    private fb: FormBuilder,
    public _checkOutForm: PaymentGateWayForm
  ) {
    this.editAddress=false;
    this.postCodeStatus = true;
    this.manualAdress = true;
    this.ccForm =this.fb.group(this._checkOutForm.getCCForm());
    this.  setForm();
   }

  addressManual() {
    this.manualAdress = false;
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if(changes['detail']){
      if (changes["detail"]["currentValue"] != undefined) {
       let _dtl=changes["detail"]["currentValue"];
       this.manualAdress = false;
 
       this.ccForm.patchValue(_dtl);
       this.  patchCountry(_dtl);
       this.editAddress=true;
      }
    }
  }
  setForm(){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite){
    if(baseSite.isoCode ==='GB'){
      this.ukSpecificForm=true;
      this.countries= this.nestedCopy(countries);
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.ccForm.controls["country"].patchValue(this.countries[_index]);
      }
    }else if(baseSite.isoCode ==='EU'){
      this.ukSpecificForm=false;
      this.manualAdress=false;
      this.usSpecificForm=false;
      this.countries=this.nestedCopy(EUROPEAN_COUNTRIES);
    }else if(baseSite.isoCode ==='DE'){
      this.ukSpecificForm=false;
      this.manualAdress=false;
      this.usSpecificForm=false;
      this.countries=this.nestedCopy(DE_COUNTRIES);
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.ccForm.controls["country"].patchValue(this.countries[_index]);
      }
    }else if(baseSite.isoCode=="US"){
      this.ukSpecificForm=false;
      this.manualAdress=false;
      this.countries=this.nestedCopy(US_COUNTRIES);
      this.usSpecificForm=true;
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.ccForm.controls["country"].patchValue(this.countries[_index]);
       const _states=_.find(this.countries, function(o) { return o.isocode == _isoCode; });
       this.stateList=_states.states;
       if (this.countries[_index].isocode === "US") {
        this.ccForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
        this.ccForm.controls['postalCode'].updateValueAndValidity();
      }else{
        this.ccForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
        this.ccForm.controls['postalCode'].updateValueAndValidity();
      }
      if(this.countries[_index].isocode === "US"||this.countries[_index].isocode == "CA"){
        if(this.detail.district){
          const _stateId=_.find(this.stateList, function(o) { return o.name ==  that.detail.district; });
          this.ccForm.controls["district"].patchValue(that.stateList[_stateId]);
        }
      }
      }
    }
    }

  }
  onChangeCountry(event) {
    const _index=event.target.selectedIndex-1;
    const _isocode = this.countries[_index]['isocode'];
    if (this.countries[_index].isocode === "US") {
      this.ccForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
      this.ccForm.controls['postalCode'].updateValueAndValidity();
    }else{
      this.ccForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
      this.ccForm.controls['postalCode'].updateValueAndValidity();
    }
    if (_isocode != "GB") {
      this.manualAdress = false;
      this.ukSpecificForm = false;
      if(this.usSpecificForm){

              if (this.countries[_index].states) {
                this.stateList = this.countries[_index].states;
              } else {
                this.stateList = undefined;
                this.ccForm.controls['district'].setValue('');
              }
      }
    } else {
      this.ukSpecificForm = true;
    }
    let _obj=[
      {name:'line1',validator:null},
      {name:'line2',validator:null},
      {name:'postalCode',validator:null},
      {name:'town',validator:null},
      {name:'district',validator:null}
    ];
    this.resetAddressFields(_obj);
  }
  resetAddressFields(data){
    data.map((obj)=>{
      this.ccForm.controls[obj.name].reset();
    });
    this.ccForm.controls['district'].setValue('');
  }


  onSearchByPostal() {
    this.ccForm.controls["line1"].setValue("");
    this.ccForm.controls["line2"].setValue("");
    this.ccForm.controls["district"].setValue("");
    this.ccForm.controls["town"].setValue("");
    this.manualAdress = true;
  }
  onPostCodeKeyUp(el) {
    if (!el || !el.target.value) return;
    el.target.value = el.target.value.toUpperCase();
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    this.getDeviceInfo();
    if (baseSite) {
      const lngCode = baseSite.lngCode;
      this.setLang(lngCode);
    }
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    if (isMobile || isTablet) {
      this.mobileDevice = true;
    } else {
      this.mobileDevice = false;
    }
    if (isDesktopDevice) {
      this.desktopDevice = true;
    } else {
      this.desktopDevice = false;
    }
  }

  findAddress(event) {
    event.preventDefault();
    const val = this.ccForm.value;
    this.myInput.nativeElement.focus();
    if(this.ccForm.controls['postalCode'].valid){  
      this.postCodeError=false; 
    const postcode = val["postalCode"];
    this.deliveryServ.getPostCode(postcode).subscribe(
      response => {
       if (response["Items"][0]) {
        this.ccForm.controls["address"].setValue(null);
        if (response["Items"][0]["Error"]) {
          this.postCodeStatus = false;
        } else {
          this.postCodeStatus = true;
          this.postalAddresses = response["Items"];
          if(val["line1"] !=""){
          for (let i = 0; i < response["Items"].length; i++) {
            console.log(   response["Items"][i]["StreetAddress"].indexOf(val["line1"]) != -1);
            if (response["Items"][i]["StreetAddress"].indexOf(val["line1"]) != -1) {
                 this.onSelectPlace(response["Items"][i]['Id']);       
                 break;
            }
          }
        }else{
       
        }
        }
      }else{
        this.postCodeError = true;
        this.postCodeStatus = false;
     }
      },
      error => {}
    );}else{
      this.postCodeError=true;
       this.myInput.nativeElement.focus();
          }
  }
  onSelectPlace(val) {
    const id = val;
    this.deliveryServ.retrievePostalAddress(id).subscribe(
      resp => {
        const _postAddress = resp["Items"];
        if (!_postAddress[0].Error) {
          this.postalAddresses = resp["Items"];
          this.postalAddresses = undefined;
          this.manualAdress = false;
          let _addresses = resp["Items"][0];
          this.ccForm.controls["town"].setValue(_addresses["PostTown"]);
          if (_addresses["Company"].length == 0) {
            this.ccForm.controls["line1"].setValue(_addresses["Line1"]);
            this.ccForm.controls["line2"].setValue(_addresses["Line2"]);
          } else {
            this.ccForm.controls["line1"].setValue(_addresses["Company"]);
            this.ccForm.controls["line2"].setValue(_addresses["Line1"]);
          }
          this.ccForm.controls["postalCode"].setValue(_addresses["Postcode"]);
          this.ccForm.controls["district"].setValue(_addresses["County"]);
        } else {
          alert("please enter valid postCode");
        }
      },
      err => {}
    );
  }

  patchCountry(userData) {
    if (userData) {
      const _isoCode = userData.country.isocode;
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == _isoCode;
      });
      if (_index != -1) {
        this.ccForm['controls']["country"].patchValue(
          this.countries[_index]
        );
        this.stateList = this.countries[_index]["states"];
        if(this.stateList){
        const _stateIndex = _.findIndex(this.stateList, function(o) {
          return o.name == userData.district;
        });
        if (_stateIndex != -1) {
          this.ccForm['controls']["district"].patchValue(
            this.stateList[_stateIndex]
          );
        }
       }
      }
      if (userData.country.isocode == "US") {
        this.ccForm['controls']["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[0-9 ]{5,6}$/)
        ]);
        this.ccForm['controls']["postalCode"].updateValueAndValidity();
      } else {
        this.ccForm['controls']["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.ccForm['controls']["postalCode"].updateValueAndValidity();
      }
    }
  }
  onSubmitAddresForm(event){
    event.preventDefault();
    const _billingForm=this.ccForm.value;
    let state='';
    if (_billingForm.district) {
      if (typeof _billingForm.district == "object") {
        state = _billingForm.district.name;
      } else {
        state = _billingForm.district;
      }
    }
    _billingForm['titleCode']="mr";
    _billingForm['district']=state; 
    this.submitAddressForm.emit(_billingForm);
  }
  onResetForm(){
    this.discardAddressForm.emit();
  }
}
