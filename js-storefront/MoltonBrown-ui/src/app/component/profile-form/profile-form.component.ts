import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  SimpleChange,
  OnChanges,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { 
  Router, 
  ActivatedRoute 
} from "@angular/router";
import { patternValidator } from '../../forms/pattern-validator';
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
import { RegistrationForm } from "../../forms/registration.form";
import { profileComponentService } from "./profile.service";
import * as _ from "lodash";
import { SingletonService } from "../../services/singleton.service";
import { DeviceDetectorService } from "ngx-device-detector";
declare var AmpCa: any;
@Component({
  selector: "app-profile-form",
  templateUrl: "./profile-form.component.html",
  styleUrls: ["./profile-form.component.scss"]
})
export class ProfileFormComponent implements OnInit, OnChanges,AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef; 
  @ViewChild("termEl") termEl: ElementRef;
  @ViewChild('el') el:ElementRef;
  breadcrumb: Array<any>;
  countries: Array<any>;
  registrationForm: FormGroup;
  emailPattern: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$";
  loading: boolean;
  postalAddresses: Array<any>;
  postCodeStatus: boolean;
  searchTerm: string;
  ukSpecificForm: boolean;
  deviceInfo: any;
  mobileDevice: boolean;
  postCodeError:boolean;
  ukLoopBtnStatus:boolean;
  submitted: boolean;
  desktopDevice: boolean;
  termsForm:any;
  termsCondition:boolean;
  termsPolicy:boolean;
  termsMoltonbrown:boolean;
  modalTitle:string;
  usSpecificForm: boolean;
  stateList: Array<any> = [];
  loadGMscript:boolean;
  showCrentialError:boolean;
  constructor(
    public zone: NgZone,
    public location: Location,
    public titleService: Title,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    public customerForm: RegistrationForm,
    public fb: FormBuilder,
    public profileServ: profileComponentService,
    public deviceService: DeviceDetectorService
  ) {
    this.postCodeStatus = true;
    this.registrationForm = this.fb.group(customerForm.getForm());
    this.loading = false;
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
        const _index = _.findIndex(this.countries, function(o) {          
          return o.isocode == _isoCode;
        });
        if (_index != -1) {
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
      }
      this.registrationForm.controls["district"].setValidators([Validators.required]);
      this.registrationForm.controls['district'].updateValueAndValidity();
  

    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.setCountry();
    if (changes["registrationForm"]) {
      if (changes["registrationForm"]["currentValue"] != undefined) {
        let _data = changes["registrationForm"]["currentValue"];
        this.registrationForm.patchValue(_data);
        const _isoCode = changes["registrationForm"]["currentValue"]["country"]["isocode"];
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });

        if (_index != -1) {     
          this.registrationForm.controls["country"].patchValue(
            this.countries[_index]
          );
          if(_isoCode !="GB"){
            this.ukLoopBtnStatus=false;
          }else{
            this.ukLoopBtnStatus=true;
          }
        }
        this.patchCountry(_data);
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
          patternValidator(/^[0-9 ]{5,6}$/)
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
    const baseSite = this.singletonServ.catalogVersion;
    const _index=event.target.selectedIndex-1;
    const country = this.countries[_index];
    
    if (this.countries[_index].isocode == "US") {
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
    } else if (this.ukSpecificForm) {
      this.ukSpecificForm = true;
       const _index=event.target.selectedIndex-1;
      const country = this.countries[_index];
      if(country.isocode !="GB"){
        this.ukLoopBtnStatus=false;
      }else{
        this.ukLoopBtnStatus=true;
      }
    }
    if(baseSite.isocode==="US"){
      this.registrationForm.controls["district"].setValidators([Validators.required]);
      this.registrationForm.controls['district'].updateValueAndValidity();
    }else{
      this.registrationForm.controls["district"].setValidators(null);
      this.registrationForm.controls['district'].updateValueAndValidity();
    }
  }
  ngOnInit() {
    this.titleService.setTitle('Registration | Molton Brown');
    this.breadcrumb=[{name:'MY ACCOUNT',route:'/store/myacc/mbLogin'},{name:'MY PROFILE'}];
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      this.ukLoopBtnStatus=true;
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
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      this.usSpecificForm = false;
      this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
    } else if (baseSite.isoCode === "DE") {
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      this.usSpecificForm = false;
      this.countries = this.nestedCopy(DE_COUNTRIES);
      this.registrationForm.controls["country"].patchValue(this.countries[0]);
    } else if (baseSite.isoCode === "US") {
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      this.usSpecificForm = true;
      this.countries = this.nestedCopy(US_COUNTRIES);
      const _isoCode = baseSite.isoCode;

        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        this.registrationForm.controls["country"].patchValue(
          this.countries[_index]
        );
        const _states = _.find(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        this.stateList = _states.states;
      }
    
    this.getDeviceInfo();

    if (baseSite.isoCode === "US") {
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == baseSite.isoCode;
      });
    if (this.countries[_index].isocode === "US") {
      this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
      this.registrationForm.controls['postalCode'].updateValueAndValidity();
    }else{
      this.registrationForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]{6,8}$$/)]);
      this.registrationForm.controls['postalCode'].updateValueAndValidity();
    }

      this.registrationForm.controls["district"].setValidators([Validators.required]);
      this.registrationForm.controls['district'].updateValueAndValidity();

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
  setAddress(addrObj) {
    const that = this;
    this.zone.run(() => {
      that.registrationForm.controls["postalCode"].setValue(
        addrObj.postal_code
      );
    });

  }

  onSubmit(event, bol) {
    event.stopPropagation();
    const email = this.registrationForm.value.uid;
    const user = this.registrationForm.value;
    let state = "";
    if (user.district) {
      if (typeof user.district == "object") {
        state = user.district.name;
      } else {
        state = user.district;
      }
    }
    
    if (this.registrationForm.valid) {

    if (this.registrationForm.valid && bol) {
      this.loading = true;
      const _userBody = {
        uid: user.uid,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        titleCode: user.titleCode,
        agegroup: user.agegroup,
        gender: user.gender,
        marketingOptIn: user.marketingOptIn
      };
      const _address = {
        country: {
          isocode: user.country.isocode
        },
        type: "Home",
        firstName: user.firstName,
        postalCode: user.postalCode, //"55446-3739"
        town: user.town,
        lastName: user.lastName,
        phone: user.phone,
        line1: user.line1,
        line2: user.line2,
        companyName: "",
        shippingAddress: true,
        visibleInAddressBook: true,
        fpo: false,
        recordType: "S",
        titleCode: user.titleCode,
        agegroup: user.agegroup,
        gender: user.gender,
        district: state
      };
      const baseSite = this.singletonServ.catalogVersion;
      this.profileServ.generateToken().subscribe(
        token => {
          const tokenId = token["access_token"];
          this.profileServ.createUser( _userBody, tokenId).subscribe(
            resp => {
              this.profileServ
                .createUserAddress(_address, tokenId, email)
                .subscribe(
                  response => {
                    this.loading = false;
                    const yMarketingObj = JSON.parse(JSON.stringify(_address));
                    yMarketingObj["id"] = this.registrationForm.value.uid;
                    yMarketingObj["idOrigin"] = "ATGWEB";
                    yMarketingObj["marketingArea"] = "MB";
                    yMarketingObj["age"] = user.age;
                    yMarketingObj["gender"] = user.gender;
                    const obj = {
                      access_token: resp["access_token"],
                      email: user.uid,
                      token: token["access_token"]
                    };
                    this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(obj));
                    this.fetchRelavantBasket(obj);
                  },
                  error => {}
                );
            },
            err => {
              if(err){
                if(err.error){
                   if(err.error.errors){
                    if (err.error.errors[0]["type"] == "DuplicateUidError") {
                      this.showCrentialError = true;
                      window.scrollTo(10,10);
                    }
                   }
                }
              }
           
              this.loading = false;
            }
          );
        },
        err => {
          this.loading = false;
        }
      );
    }
    this.submitted = true;
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
  onSearchKeyUp(event) {
   if (event.key === "Enter") {
    this.registrationForm.controls['postalCode'].patchValue(event.target.value);
     this.myInput.nativeElement.focus(); 
     this.onLookupAddress(event);
    }
 }
 

  onLookupAddress(event) {

    event.preventDefault();
    const that = this;
    const val = this.registrationForm.value;      
    this.myInput.nativeElement.focus();
    if(this.registrationForm.controls['postalCode'].valid){
    const postcode = val["postalCode"];
    that.profileServ.getPostCode(postcode).subscribe(
      response => {
        if (response["Items"][0]){
        if (response["Items"][0]["Error"]) {
          this.postCodeStatus = false;
          
        } else {
          this.postCodeStatus = true;
          
          this.registrationForm.controls["address"].setValidators([
            Validators.required
          ]);
          this.registrationForm.controls["address"].updateValueAndValidity();
          that.postalAddresses = response["Items"];
        }
      } else {
        this.postCodeStatus = false;
      }
      },
      error => {}
    );
    this.postCodeError=false;
   }
    else{
      this.postCodeError=true;
      
       this.myInput.nativeElement.focus();
          }
  }
  onSelectPlace(val) {
    const that = this;
    const id = val;
    this.profileServ.retrievePostalAddress(id).subscribe(
      resp => {
        that.postalAddresses = undefined;
        let _addresses = resp["Items"][0];

        that.registrationForm.controls["town"].setValue(_addresses["PostTown"]);
        if (_addresses["Company"].length == 0) {
          that.registrationForm.controls["line1"].setValue(_addresses["Line1"]);
          that.registrationForm.controls["line2"].setValue(_addresses["Line2"]);
        } else {
          that.registrationForm.controls["line1"].setValue(
            _addresses["Company"]
          );
          that.registrationForm.controls["line2"].setValue(_addresses["Line1"]);
        }
        that.registrationForm.controls["postalCode"].setValue(
          _addresses["Postcode"]
        );
        that.registrationForm.controls["district"].setValue(
          _addresses["County"]
        );
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
  fetchRelavantBasket(data) {
    const baseSite = this.singletonServ.catalogVersion;
    const _emptyObj = {};
    if (this.singletonServ.getStoreData(baseSite.guest)) {
      this.profileServ
        .creatEmptyCart(data.token, _emptyObj, data.email)
        .subscribe(
          emptyCart => {
            const guidData = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            this.profileServ
              .mergeCart(
                _emptyObj,
                data.email,
                data.token,
                guidData["guid"],
                emptyCart["guid"]
              )
              .subscribe(resp => {
                const _obj = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
                _obj["code"] = resp["code"];
                this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_obj));
                this.singletonServ.removeItem(baseSite.guest);
                this.router.navigate([
                  "store",
                  "myaccount",
                  "profile",
                  "detail"
                ]);
                this.loading = false;
              });
          },
          error => {
            this.loading = false;
          }
        );
    } else {
      this.router.navigate(["store", "myaccount", "profile", "detail"]);
    }
  }
  getTypeOf(val) {
    if (typeof val == "boolean" && !val) {
      return true;
    }
    return false;
  }

onClickPrivacy(event){
    
  const that = this;    
  that.modalTitle = "Privacy & Cookie Policy";
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
        that.termEl.nativeElement.innerHTML = htm;
      }
    });
}
onChangeTerms(event){
  if(event.target.checked){
    this.registrationForm['controls']['terms'].setValue(true);
  }else{
    this.registrationForm['controls']['terms'].setValue('');
  }
}
onClickTerms(event){
  // event.stopPropagation();
  const that = this;
  that.modalTitle = "Terms & Conditions";
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
        that.termEl.nativeElement.innerHTML = htm;
      }
    });
}
}