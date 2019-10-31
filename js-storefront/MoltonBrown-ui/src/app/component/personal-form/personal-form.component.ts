import {
  Component,
  NgZone,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../app.constant";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { patternValidator } from '../../forms/pattern-validator';
import { RegistrationForm } from "../../forms/registration.form";
import { profileComponentService } from "../profile-form/profile.service";
import * as _ from "lodash";
import { SingletonService } from "../../services/singleton.service";
import { DeviceDetectorService } from "ngx-device-detector";
declare const google: any;
@Component({
  selector: "app-personal-form",
  templateUrl: "./personal-form.component.html",
  styleUrls: ["./personal-form.component.scss"]
})
export class PersonalFormComponent implements OnInit, OnChanges,AfterViewInit {
  @Input() profileData: any;
  @Output() cancelUpdate: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("myInput") myInput: ElementRef;
  registrationForm: FormGroup;
  usSpecificForm: boolean;
  deviceInfo: any;
  mobileDevice: boolean;postCodeError:boolean;
  desktopDevice: boolean;
  countries: Array<any>;
  ukSpecificForm: boolean;
  postalAddresses: Array<any>;
  loading: boolean;
  postCodeStatus: boolean;
  searchTerm: string;
  stateList: Array<any>;
  registrationFormInvalid: boolean;
  isValidFormSubmitted: boolean;
  dlModes: any;
  dlCode: string;
  regUserInfo:any;
  ukLoopBtnStatus:boolean;
  loadGMscript:boolean;
  constructor(
    private zone: NgZone,
    public location: Location,
    public titleService: Title,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public profileServ: profileComponentService,
    public deviceService: DeviceDetectorService
  ) {
    const baseSite = this.singletonServ.catalogVersion;
    this.loading = false;
    this.postCodeStatus = true;
    this.registrationForm = this.fb.group(this.customerForm.profileForm());
    if(baseSite.isocode==="US"){
      this.registrationForm.controls["district"].setValidators([Validators.required]);
      this.registrationForm.controls['district'].updateValueAndValidity();
    }else{
      this.registrationForm.controls["district"].setValidators(null);
      this.registrationForm.controls['district'].updateValueAndValidity();
    }
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
      if (_isoCode != -1) {
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        this.registrationForm.controls["country"].patchValue(
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
      this.registrationForm.controls["country"].patchValue(this.countries[0]);
    } else if (baseSite.isoCode === "US") {
      this.ukSpecificForm = false;
      this.usSpecificForm = true;
      this.countries = this.nestedCopy(US_COUNTRIES);
        const _isoCode = baseSite.isoCode;      
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        if (_index != -1) {
          this.registrationForm.controls["country"].patchValue(
            this.countries[_index]
          );
          if (this.countries[_index].isocode == "US") {
            this.registrationForm.controls["district"].setValidators([Validators.required]);
            this.registrationForm.controls['district'].updateValueAndValidity();
            this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,10}$/)]);
            this.registrationForm.controls['postalCode'].updateValueAndValidity();
          }else{
            this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
            this.registrationForm.controls['postalCode'].updateValueAndValidity();
          }
      }
    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const baseSite = this.singletonServ.catalogVersion;
    this.setCountry();
    if (changes["profileData"]) {
      if (changes["profileData"]["currentValue"] != undefined) {
        let _data = changes["profileData"]["currentValue"];
        this.regUserInfo=_data;
        this.registrationForm.patchValue(_data);
        const _isoCode =changes["profileData"]["currentValue"]["country"]["isocode"];
          if(_isoCode ==="GB"){
            this.ukLoopBtnStatus=true;
          }else{
            this.ukLoopBtnStatus=false;
          }
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
          if (baseSite.isoCode == "US") {
          if (this.countries[_index].isocode === "US") {
            this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,10}$/)]);
            this.registrationForm.controls['postalCode'].updateValueAndValidity();
            this.ukLoopBtnStatus=false;
          }else{
            this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
            this.registrationForm.controls['postalCode'].updateValueAndValidity();
          }
        }
          if(this.countries[_index]['states']){
            this.stateList=this.countries[_index]['states'];
            if( _data.district ){
              const _stateId = _.findIndex(this.countries[_index]['states'], function(o) {
                return o.name == _data.district;
              });

              if (_stateId != -1) {
                this.registrationForm.controls["district"].patchValue(
                  this.countries[_index]['states'][_stateId]
                );
              }else{
                if (_isoCode == "US" || _isoCode == "CA") {
                  this.registrationForm.controls["district"].patchValue('');
                }
              }
           }
          }
        }else{
          this.registrationForm.controls["country"].patchValue('');        
        }
        if (_data.shippingMethod) {
          this.dlCode = _data.shippingMethod;
        }
      }
    }
  }
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    this.titleService.setTitle('My Account | Molton Brown');
    this.getDeviceInfo();
    if (baseSite.isoCode == "US") {
      this.ukLoopBtnStatus=false;
      this.usSpecificForm = true;
      this.ukSpecificForm = false;
      const isoCode=this.regUserInfo.country.isocode;     
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == isoCode;
      });
      if(_index !=-1){
        this.getDlUSMethods(this.countries[_index]['id']);
      }else{
        this.getDlUSMethods(this.countries[0]['id']);
      }

    } else if (baseSite.isoCode == "GB") {
      if(this.regUserInfo.isocode =="GB"){
        this.ukLoopBtnStatus=true;
        this.usSpecificForm = false;
        this.ukSpecificForm = true;
      }
      this.getDlMethods(baseSite.isoCode);
    } else if (baseSite.isoCode == "DE" ) {
      this.ukLoopBtnStatus=false;
      this.usSpecificForm = false;
      this.ukSpecificForm = false;
      const isoCode=this.regUserInfo.country.isocode;
      this.getDlEUDEMethods(isoCode);
    } if( baseSite.isoCode == "EU"){
      this.ukLoopBtnStatus=false;
      this.usSpecificForm = false;
      this.ukSpecificForm = false;
      const isoCode=this.regUserInfo.country.isocode;
      this.getDlEUDEMethods(isoCode);  
    }

  }


  getDlMethods(isocode) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if(user.code){
      this.retrieveDlMethods(user.token,user.email,user.code,isocode);
     } else {
      const _emptyObj={}
      this.profileServ
      .generateCartId(user.token,user.email)
      .subscribe(
        emptyCart => {
          user['code']=emptyCart['code'];
          this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
          this.retrieveDlMethods(user.token,user.email,user.code,isocode);
        },error=>{

        });        
     }
   }
  }

  retrieveDlMethods(token,email,code,isocode){
    this.profileServ.getDlMethod(token,email,code).subscribe(
      response => {
        if (response) {
          this.dlModes = response["deliveryModes"];
          const code = (this.regUserInfo.shippingMethod)?this.regUserInfo.shippingMethod:isocode;
          if (code) {
              const _codeIndex = _.findIndex(this.dlModes, function(o) {
              return o.code == code.code;
            });
            if(_codeIndex!=-1){
              this.registrationForm.controls["dlMode"].patchValue(
                this.dlModes[_codeIndex]
              );
            }
          }
        }
      },
      err => {}
    );
  }
  getDlUSMethods(deliveryGroup) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (deliveryGroup) {
          if(user.code){
         this.retreiveDlUsMethods(user.token, user.email,user.code, deliveryGroup);
        } else {
          const _emptyObj={}
          this.profileServ
          .generateCartId(user.token,user.email)
          .subscribe(
            emptyCart => {
              user['code']=emptyCart['code'];
              this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
              this.retreiveDlUsMethods(user.token, user.email,user.code, deliveryGroup);

            },error=>{

            });
       }
     }
    }
  }

  retreiveDlUsMethods(token, email,code, deliveryGroup){
            
    this.profileServ
    .getDlUSMethod(token, email,code, deliveryGroup)
    .subscribe(
      response => {
        if (response) {
          this.dlModes = response;
          const code = (this.regUserInfo.shippingMethod)?this.regUserInfo.shippingMethod:deliveryGroup;
          if (code) {
              const _codeIndex = _.findIndex(this.dlModes, function(o) {
                if(code.code){
                 return o.code == code.code;
               }else{
                 return o.id == code;
               }
            });
            if(_codeIndex!=-1){
              this.registrationForm.controls["dlMode"].patchValue(
                this.dlModes[_codeIndex]
              );
            }
          }
        }
      },
      err => {}
    );
  }
  getDlEUDEMethods(isocode) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if(user.code){
        this.retrieveEUDEMethods(user.token, user.email,user.code, isocode);
      } else {
        const _emptyObj={}
        this.profileServ
        .generateCartId(user.token,user.email)
        .subscribe(
          emptyCart => {
            user['code']=emptyCart['code'];
            this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
            this.retrieveEUDEMethods(user.token, user.email,user.code, isocode);
          },error=>{

          });
      }
    }
  }

  retrieveEUDEMethods(token, email,code, isocode){
    this.profileServ
    .getDlEUDEMethods(token, email,code, isocode)
    .subscribe(
      response => {
        if (response) {
          this.dlModes = response["internationalShippingServices"];
          const code = (this.regUserInfo.shippingMethod)?this.regUserInfo.shippingMethod:isocode;
          if (code) {
              const _codeIndex = _.findIndex(this.dlModes, function(o) {
                if(code.zoneName){
                 return o.zoneName == code.zoneName;
               }else{
                 return o.id == code;
               }
            });
            if(_codeIndex!=-1){
              this.registrationForm.controls["dlMode"].patchValue(
                this.dlModes[_codeIndex]
              );
            }
          }
        }
      },
      err => {}
    );
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

  onChangeCountry(event) {
    const _index=event.target.selectedIndex-1;
    const country = this.countries[_index];
    if (this.countries[_index].isocode == "US") {
      this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
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
        if (this.countries[_index].isocode == "US" || this.countries[_index].isocode == "CA") {
          this.registrationForm.controls["district"].patchValue('');
        }
      } else {
        this.stateList = undefined;
        this.registrationForm.controls["district"].setValue("");
      }
      this.getDlUSMethods(country.id);

    } else if (!this.usSpecificForm && !this.ukSpecificForm) {
      this.getDlEUDEMethods(country.isocode);
      
    } else if (this.ukSpecificForm) {
      this.ukSpecificForm = true;     
      if(country.isocode !="GB"){
        this.ukLoopBtnStatus=false;
      }else{
        this.ukLoopBtnStatus=true;
      }
      this.getDlMethods(country.isocode);
    }


  }
  setAddress(addrObj) {
    const that = this;
    this.zone.run(() => {
      that.registrationForm.controls["postalCode"].setValue(
        addrObj.postal_code
      );
    });
  }

  onSubmitForm(event) {
    event.stopPropagation();
    this.loading = true;
     const _address = this.registrationForm.value;
    let state = "";
    if (_address.district) {
      if (typeof _address.district == "object") {
        state = _address.district.name;
      } else {
        state = _address.district;
      }
    }
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
    if (this.registrationForm.valid) {
      const regUser = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      const _body = {
        firstName: _address.firstName,
        lastName: _address.lastName,
        titleCode: _address.titleCode,
        agegroup: _address.agegroup,
        gender: _address.gender
      };
      this.profileServ
        .updateProfile(baseSiteid, regUser.token, regUser.email, _body)
        .subscribe(
          resp => {
            const addressId = this.profileData.id;

            _address['district']= state;


            this.profileServ
              .updateProfileAddress(
                baseSiteid,
                regUser.token,
                regUser.email,
                addressId,
                _address
              )
              .subscribe(
                address => {
                    _address["deliveryMethod"] = _address.dlMode.code;
                    if (!_address.dlMode.code) {
                      _address["deliveryMethod"] = _address.dlMode.zoneName;
                    }
                    this.profileServ
                      .postDeliveryMethod(regUser.token, regUser.email, _address.dlMode)
                      .subscribe(
                        dlMode => {
                          this.cancelUpdate.emit();
                        },
                        err => {
                          this.cancelUpdate.emit();
                        }
                      );
                },
                err => {}
              );
          },
          err => {}
        );
    } else {
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
    event.preventDefault();
   if (event.key === "Enter") {
     this.myInput.nativeElement.focus(); 
     this.findAddress(event);
    }
 }
  findAddress(event) {
    event.preventDefault();
    const val = this.registrationForm.value;
          this.registrationForm.controls["address"].setValidators([]);

    this.myInput.nativeElement.focus();
    if (this.registrationForm.controls["postalCode"].valid) {
      this.postCodeError = false;
    const postcode = val["postalCode"];
    this.profileServ.getPostCode(postcode).subscribe(
      response => {
        if (response["Items"][0]){
        if (response["Items"][0]["Error"]) {
          this.registrationForm.controls["address"].setValidators([]);
          this.registrationForm.controls["address"].updateValueAndValidity();
          this.postCodeStatus = false;
        } else {
          this.postCodeStatus = true;
          this.registrationForm.controls["address"].setValue("");
          this.postalAddresses = response["Items"];
            let i;
            for (i = 0; i < response["Items"].length; i++) {
              if (
                response["Items"][i]["StreetAddress"].indexOf(val["line1"]) !=
                -1
              ) {
                this.registrationForm.controls["line1"].setValue("");
                break;
              }
          }
        }
      } else {
        this.postCodeStatus = false;
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
    this.profileServ.retrievePostalAddress(id).subscribe(
      resp => {
        this.postalAddresses = undefined;
        let _addresses = resp["Items"][0];

        this.registrationForm.controls["town"].setValue(_addresses["PostTown"]);
        if (_addresses["Company"].length == 0) {
          this.registrationForm.controls["line1"].setValue(_addresses["Line1"]);
          this.registrationForm.controls["line2"].setValue(_addresses["Line2"]);
        } else {
          this.registrationForm.controls["line1"].setValue(
            _addresses["Company"]
          );
          this.registrationForm.controls["line2"].setValue(_addresses["Line1"]);
        }
        this.registrationForm.controls["postalCode"].setValue(
          _addresses["Postcode"]
        );
        this.registrationForm.controls["district"].setValue(
          _addresses["County"]
        );
      },
      err => {}
    );
  }
  onUpdate() {
    this.cancelUpdate.emit();
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
