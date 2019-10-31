import { Component, ViewChild, OnInit, ElementRef,SimpleChange } from '@angular/core';
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
  FormControl,

} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import * as _ from "lodash";
import { SingletonService } from "../../services/singleton.service";
import {
  Router,
  ActivatedRoute
} from "@angular/router";
import { ContactFeedbackEnquiry } from "../../forms/contact-feedback-enquiry.form"
import { patternValidator } from '../../forms/pattern-validator';
import { DeviceDetectorService } from "ngx-device-detector";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @ViewChild('myInput') myInput: ElementRef;

  postCodeError:boolean;
  submitted: boolean;
  ukLoopBtnStatus:boolean;
  ukSpecificForm: boolean;
  usSpecificForm: boolean;  deviceInfo: any;
  desktopDevice:boolean;
  countries:Array<any>;
  stateList: Array<any> = [];
  contactEnquiryForm: FormGroup;
  mobileDevice:any;
  constructor(public fb: FormBuilder,
    public titleService: Title,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    public deviceService: DeviceDetectorService,
    public customerForm: ContactFeedbackEnquiry
  ) {

    this.contactEnquiryForm = this.fb.group(customerForm.enquiryForm());

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
        this.contactEnquiryForm.controls["country"].patchValue(
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
      this.contactEnquiryForm.controls["country"].patchValue(this.countries[0]);
    } else if (baseSite.isoCode === "US") {
      this.ukSpecificForm = false;
      this.usSpecificForm = true;
      this.countries = this.nestedCopy(US_COUNTRIES);
      const _isoCode = baseSite.isoCode;
     
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        if (_index != -1) {
        this.contactEnquiryForm.controls["country"].patchValue(
          this.countries[_index]
        );    
      }
      this.contactEnquiryForm.controls["district"].setValidators([Validators.required]);
      this.contactEnquiryForm.controls['district'].updateValueAndValidity();
  

    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.setCountry();
    if (changes["contactEnquiryForm"]) {
      if (changes["contactEnquiryForm"]["currentValue"] != undefined) {
        let _data = changes["contactEnquiryForm"]["currentValue"];
        this.contactEnquiryForm.patchValue(_data);
        const _isoCode = changes["contactEnquiryForm"]["currentValue"]["country"]["isocode"];
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });

        if (_index != -1) {     
          this.contactEnquiryForm.controls["country"].patchValue(
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
        this.contactEnquiryForm.controls["country"].patchValue(
          this.countries[_index]
        );
      }
      if (userData.country.isocode == "US") {
        this.contactEnquiryForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[0-9 ]{5,6}$/)
        ]);
        this.contactEnquiryForm.controls["postalCode"].updateValueAndValidity();
      } else {
        this.contactEnquiryForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.contactEnquiryForm.controls["postalCode"].updateValueAndValidity();
      }
    }
  }
  onChangeCountry(event) {
    const baseSite = this.singletonServ.catalogVersion;
    const _index=event.target.selectedIndex-1;
    const country = this.countries[_index];
    if (this.usSpecificForm) {
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      if (country.states) {
        this.stateList = country.states;
      } else {
        this.stateList = undefined;
        this.contactEnquiryForm.controls["district"].setValue("");
      }

      if (this.countries[_index].isocode === "US") {
        this.contactEnquiryForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,10}$/)]);
        this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
      }else{
        this.contactEnquiryForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
        this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
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
      this.contactEnquiryForm.controls["district"].setValidators([Validators.required]);
      this.contactEnquiryForm.controls['district'].updateValueAndValidity();
    }else{
      this.contactEnquiryForm.controls["district"].setValidators(null);
      this.contactEnquiryForm.controls['district'].updateValueAndValidity();
    }
  }  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  ngOnInit() {
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
        this.contactEnquiryForm.controls["country"].patchValue(
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
      this.contactEnquiryForm.controls["country"].patchValue(this.countries[0]);
    } else if (baseSite.isoCode === "US") {
      this.ukLoopBtnStatus=false;
      this.ukSpecificForm = false;
      this.usSpecificForm = true;
      this.countries = this.nestedCopy(US_COUNTRIES);
      const _isoCode = baseSite.isoCode;
      const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
      });
     this.contactEnquiryForm.controls["country"].patchValue(this.countries[_index]);
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
      this.contactEnquiryForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
      this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
    }else{
      this.contactEnquiryForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]{6,8}$$/)]);
      this.contactEnquiryForm.controls['postalCode'].updateValueAndValidity();
    }
   this.contactEnquiryForm.controls["district"].setValidators([Validators.required]);
   this.contactEnquiryForm.controls['district'].updateValueAndValidity();
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
  onLookupAddress(event) {

    event.preventDefault();
    const that = this;
    const val = this.contactEnquiryForm.value;
    this.myInput.nativeElement.focus();
    if (this.contactEnquiryForm.controls['postalCode'].valid) {
      const postcode = val["postalCode"];

      this.postCodeError = false;
    }
    else {
      this.postCodeError = true;

      this.myInput.nativeElement.focus();
    }
  }
  onSubmit(event, bol) {
    event.stopPropagation();



    if (this.contactEnquiryForm.valid) {


      this.submitted = true;
    } else {
      this.validateAllFormFields(this.contactEnquiryForm);
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
}
