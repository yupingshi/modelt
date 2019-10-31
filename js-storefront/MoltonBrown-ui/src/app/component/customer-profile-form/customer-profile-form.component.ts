import {
  Component,
  NgZone,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChange,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { countries,EUROPEAN_COUNTRIES,DE_COUNTRIES,US_COUNTRIES  } from "../../app.constant";
import { patternValidator } from '../../forms/pattern-validator';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { RegistrationForm } from "../../forms/registration.form";
import { profileComponentService } from "../profile-form/profile.service";
import * as _ from "lodash";
import { SingletonService } from "../../services/singleton.service";
import { TranslateService } from "../../translate.service";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-customer-profile-form",
  templateUrl: "./customer-profile-form.component.html",
  styleUrls: ["./customer-profile-form.component.scss"]
})
export class CustomerProfileFormComponent implements OnInit, OnChanges,AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef; 
  registrationForm: FormGroup;
  @Input() customerData:any;
  @Input() customerId: string;
  @Input() updateAddress: boolean;
  @Output() cancelUpdate: EventEmitter<any> = new EventEmitter<any>();
  breadcrumb: Array<any>;
  countries: Array<any> ;
  addressId: string;
  postalAddresses: Array<any>;
  loadGMscript:boolean;
  postCodeStatus: boolean;
  postCodeError:boolean;
  searchTerm: string;
  ukSpecificForm:boolean;
  deviceInfo: any;
  mobileDevice: boolean;
  ukLoopBtnStatus:boolean;
  desktopDevice: boolean;
  usSpecificForm:boolean;
  stateList:Array<any>;
  registrationFormInvalid:boolean;
  isValidFormSubmitted:boolean;
  constructor(
    private zone: NgZone,
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public profileServ: profileComponentService,
    private translate: TranslateService,
    public deviceService: DeviceDetectorService
  ) {
    this.registrationForm = this.fb.group(customerForm.addressForm());
    this.postCodeStatus = true;
  }

  ngOnInit() {
    this.breadcrumb = ["MY ACCOUNT", " MY PROFILE"];
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite){
      this.setLang(baseSite.lngCode);
    }
    this.getDeviceInfo();
  }
  setCountry(){

    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite.isoCode ==='GB'){
      this.ukLoopBtnStatus=true;
      this.ukSpecificForm=true;
      this.usSpecificForm=false;
      this.countries= this.nestedCopy(countries);
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.registrationForm.controls["country"].patchValue(this.countries[_index]);
      }
    }else if(baseSite.isoCode ==='EU'){
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm=false;
      this.usSpecificForm=false;
      this.countries=this.nestedCopy(EUROPEAN_COUNTRIES);
      this.registrationForm.controls["country"].patchValue(this.countries[0]);
    }else if(baseSite.isoCode ==='DE'){
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm=false;
      this.usSpecificForm=false;
      this.countries=this.nestedCopy(DE_COUNTRIES);
      this.registrationForm.controls["country"].patchValue(this.countries[0]);
    }else if(baseSite.isoCode ==='US'){
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm=false;
      this.usSpecificForm=true;
      this.countries= this.nestedCopy(US_COUNTRIES);
      const _isoCode=baseSite.isoCode;
      if(_isoCode!=-1){
       const _index=_.findIndex(this.countries, function(o) { return o.isocode == _isoCode; });
       this.registrationForm.controls["country"].patchValue(this.countries[_index]);
       const _states=_.find(this.countries, function(o) { return o.isocode == _isoCode; });
       this.stateList=_states.states;
        if (this.countries[_index].isocode === "US") {
          this.registrationForm.controls["district"].setValidators([Validators.required]);
          this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,10}$/)]);
          this.registrationForm.controls['postalCode'].updateValueAndValidity();
          this.registrationForm.controls['district'].updateValueAndValidity();
        }else{
          this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
          this.registrationForm.controls['postalCode'].updateValueAndValidity();
        }
        this.registrationForm.controls['district'].patchValue('');
      }

    }

  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.setCountry();
    if (changes["updateAddress"]) {
      if (changes["updateAddress"]["currentValue"]) {
        if (changes["customerData"]) {
          if (changes["customerData"]["currentValue"]) {
            let _data = changes["customerData"]["currentValue"];
            this.registrationForm.patchValue(_data);
            const _isoCode =_data["country"]["isocode"];
            const _index = _.findIndex(this.countries, function(o) {
              return o.isocode == _isoCode;
            });
            if (_index != -1) {
              this.registrationForm.controls["country"].patchValue(
                this.countries[_index]
              );
              if(this.countries[_index].states){
                this.stateList=this.countries[_index].states;            
                const _stateIndex = _.findIndex(this.stateList, function(o) {
                  return o.name == _data.district;
                });
                if(_stateIndex !=-1){
                  this.registrationForm.controls["district"].patchValue(
                    this.stateList[_stateIndex]
                  );
                }else{
                  this.registrationForm.controls["district"].patchValue('');
                }
              }
              }
        if (changes["customerId"]) {
          if (changes["customerId"]["currentValue"] != undefined) {
            this.addressId = changes["customerId"]["currentValue"];
          }
        }
        this.patchCountry(_data);
      }
      
    }
      }
    }
  }
  patchCountry(userData) {
    if (userData) {
      const _isoCode = userData.country.isocode;
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == _isoCode;
      });
      if (_index != -1) {
        this.registrationForm.controls["country"].patchValue(
          this.countries[_index]
        );
      }
      if (userData.country.isocode == "US") {
        this.registrationForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[0-9 ]{5,10}$/)
        ]);
        this.registrationForm.controls["postalCode"].updateValueAndValidity();
      } else {
        this.registrationForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.registrationForm.controls["postalCode"].updateValueAndValidity();
      }
    }
  }
  onChangeCountry(event) {
    const _index=event.target.selectedIndex-1;
    const country = this.countries[_index];
    if (this.countries[_index].isocode === "US") {
      this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,10}$/)]);
      this.registrationForm.controls['postalCode'].updateValueAndValidity();
    }else{
      this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
      this.registrationForm.controls['postalCode'].updateValueAndValidity();
    }
    if (this.usSpecificForm) {
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      if (country.states) {
        this.stateList = country.states;
      } else {
        this.stateList = undefined;
        this.registrationForm.controls["district"].setValue("");
      }

    } else if (!this.usSpecificForm && !this.ukSpecificForm) {
  
    } else if (this.ukSpecificForm) {
      this.ukSpecificForm = true;
      if(country.isocode !="GB"){
        this.ukLoopBtnStatus=false;
      }else{
        this.ukLoopBtnStatus=true;
      }
    }
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
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  setAddress(addrObj) {
    const that = this;
    this.zone.run(() => {
      that.registrationForm.controls["postalCode"].setValue(
        addrObj.postal_code
      );
    });
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }


  onSubmitForm(event, boolean) {
    event.stopPropagation();
    event.preventDefault();
    let _address = this.registrationForm.value;
    let state='';
    if (_address.district) {
      if (typeof _address.district == "object") {
        state = _address.district.name;
      } else {
        state = _address.district;
      }
    }
    _address['district']=state;
    if (boolean) {
      if (this.registrationForm.valid) {
      
        const baseSite = this.singletonServ.catalogVersion;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          const email = user.email;
          if (!this.updateAddress) {
                const _address = this.registrationForm.value;  
                _address["titleCode"] = "mrs";
                this.profileServ
                  .createUserAddress(_address, user.token, email)
                  .subscribe(
                    response => {
                      this.cancelUpdate.emit(true);
                      this.registrationForm.reset();
                      this.setCountry();
                    },
                    error => {}
                  );
              } else {
                const id = this.customerId;
                _address["titleCode"] = "mrs";
                delete _address["defaultAddress"];
                this.profileServ
                  .updateUserAddress( _address, user.token, email, id)
                  .subscribe(
                    response => {
                      this.cancelUpdate.emit(true);
                      this.registrationForm.reset();
                      this.setCountry();
                    },
                    error => {}
                  );
              }
  
        }
      }
    } else {
      this.registrationForm.controls["line1"].patchValue([""]);
      this.registrationForm.controls["city"].setValue("");
      this.findAddress(event);
    }
    if (this.registrationForm.valid) {
      
  }else {
    this.validateAllFormFields(this.registrationForm); 
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

  onLookupAddress(event) {
    this.registrationForm.controls["address"].setValidators([Validators.required]);
    this.registrationForm.controls["address"].updateValueAndValidity();
    this.findAddress(event);
  }
  onSearchKeyUp(event) {
    if (event.key === "Enter") {
     this.registrationForm.controls['postalCode'].patchValue(event.target.value);
      this.myInput.nativeElement.focus(); 
      this.findAddress(event);
     }
  }
  findAddress(event) {
    event.preventDefault();
     const val = this.registrationForm.value;
     this.myInput.nativeElement.focus();    
    if(this.registrationForm.controls['postalCode'].valid){  
      this.postCodeError=false; 
    const postcode = val["postalCode"];
    this.profileServ.getPostCode(postcode).subscribe(
      response => {
        if (response["Items"][0]){
        if (response["Items"][0]["Error"]) {
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
                this.registrationForm.controls["address"].setValue("");
                this.registrationForm.controls["line1"].setValue("");
                break;
            }
          }
        }
      } else {
        this.myInput.nativeElement.focus();
        this.postCodeError = true;
        this.postCodeStatus = false;
      }
      },
      error => {}
    );
    }
    else{
      this.postCodeError=true;
       this.myInput.nativeElement.focus();
          }
  }
  onChange(data) {}
  onUpdate() {
    if (this.updateAddress) {
      this.cancelUpdate.emit(false);
    } else {
      this.registrationForm.reset();
    }
  }
  onSelectPlace(val) {
    const id = val;
    this.profileServ.retrievePostalAddress(id).subscribe(
      resp => {
        this.postalAddresses = undefined;
        let _addresses = resp["Items"][0];
        if (_addresses["Company"].length == 0) {
          this.registrationForm.controls["line1"].setValue(_addresses["Line1"]);
          this.registrationForm.controls["line2"].setValue(_addresses["Line2"]);
        } else {
          this.registrationForm.controls["line1"].setValue(
            _addresses["Company"]
          );
          this.registrationForm.controls["line2"].setValue(_addresses["Line1"]);
        }
        this.registrationForm.controls["postalCode"].setValue(_addresses["Postcode"]);
        this.registrationForm.controls["district"].setValue(_addresses["County"]);
        this.registrationForm.controls["town"].setValue(_addresses["PostTown"]);
      },
      err => {}
    );
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
}
