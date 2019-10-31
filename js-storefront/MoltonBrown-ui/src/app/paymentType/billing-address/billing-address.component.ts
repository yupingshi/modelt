import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChange,
  OnChanges,
  ElementRef,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup,FormControl,Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { cardFormComponentService } from "../card-form/card-form.service";
import { SingletonService } from "../../services/singleton.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { DeliveryComponentService } from "../../checkout-cart/delivery/delivery.service";
import { patternValidator } from '../../forms/pattern-validator';
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../app.constant";
import * as _ from "lodash";
@Component({
  selector: "app-billing-address",
  templateUrl: "./billing-address.component.html",
  styleUrls: ["./billing-address.component.scss"]
})
export class BillingAddressComponent implements OnInit, OnChanges {
  @ViewChild("myInput") myInput: ElementRef;
  @Output() onSetBillingAddress: EventEmitter<any> = new EventEmitter<any>();
  @Output() onResetAddress: EventEmitter<any> = new EventEmitter<any>();
  @Input() payType: boolean;
  @Input() shippingUserAddress: any;
  countries: Array<any>;
  ccForm: FormGroup;
  manualAdress: boolean;
  ukSpecificForm: boolean;
  loading: boolean;
  postCodeError: boolean;
  postCodeStatus: boolean;
  postalAddresses: any;
  shippingAddress: any;
  billingAddress: boolean;
  submitted: boolean;
  currentUser: boolean;
  deviceInfo: any;
  mobileDevice: boolean;
  desktopDevice: boolean;
  usSpecificForm: boolean;
  stateList: Array<any>;
  isValidFormSubmitted: boolean;
  copyOfShippingAddress: any;
  clickCollect: boolean;
  ccFormInvalid: boolean;
  constructor(
    public location: Location,
    public router: Router,
    public singletonServ: SingletonService,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public _checkOutForm: PaymentGateWayForm,
    public cyberService: cardFormComponentService,
    public deviceService: DeviceDetectorService,
    public deliveryServ: DeliveryComponentService,
    public translate: TranslateServiceSubService
  ) {
    this.ccForm = this.fb.group(_checkOutForm.getCCForm());
    this.postCodeStatus = true;
    this.manualAdress = true;
    this.loading = false;
  }
  addressManual() {
    this.manualAdress = false;

  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes["shippingUserAddress"]) {
      if (changes["shippingUserAddress"]["currentValue"] != undefined) {
        const _dt = changes["shippingUserAddress"]["currentValue"];
        if (_dt["geoPoint"]) {
          this.clickCollect = (_dt.customerAddress)?false:true;
        } else {
          this.clickCollect = false;
        }
        
        this.shippingAddress = _dt;
        this.copyOfShippingAddress = this.nestedCopy(_dt);
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
      if (this.usSpecificForm) {
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

  onResetForm() {
    this.manualAdress = false;
    this.ccForm.reset();
    this.onResetAddress.emit();
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
    if (baseSite) {
      if (baseSite.isoCode === "GB") {
        this.ukSpecificForm = true;
        this.countries = this.nestedCopy(countries);
        const _isoCode = baseSite.isoCode;
        if (_isoCode != -1) {
          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          this.ccForm.controls["country"].patchValue(this.countries[_index]);
        }
      } else if (baseSite.isoCode === "EU") {
        this.ukSpecificForm = false;
        this.manualAdress = false;
        this.usSpecificForm = false;
        this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
      } else if (baseSite.isoCode === "DE") {
        this.ukSpecificForm = false;
        this.manualAdress = false;
        this.usSpecificForm = false;
        this.countries = this.nestedCopy(DE_COUNTRIES);
        const _isoCode = baseSite.isoCode;
        if (_isoCode != -1) {
          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          this.ccForm.controls["country"].patchValue(this.countries[_index]);
        }
      } else if (baseSite.isoCode == "US") {
        this.ukSpecificForm = false;
        this.manualAdress = false;
        this.countries = this.nestedCopy(US_COUNTRIES);
        this.usSpecificForm = true;
        const _isoCode = baseSite.isoCode;
        if (_isoCode != -1) {
          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          this.ccForm.controls["country"].patchValue(this.countries[_index]);
          const _states = _.find(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          this.stateList = _states.states;
          if (this.countries[_index].isocode === "US") {
            this.ccForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[0-9]{5,6}$/)]);
            this.ccForm.controls['postalCode'].updateValueAndValidity();
          }else{
            this.ccForm.controls["postalCode"].setValidators([Validators.required,patternValidator(/^[a-zA-Z0-9 ]*$/)]);
            this.ccForm.controls['postalCode'].updateValueAndValidity();
          }
        }
      }
    }

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
    if (this.ccForm.controls["postalCode"].valid) {
      this.postCodeError = false;
      const postcode = val["postalCode"];
      this.deliveryServ.getPostCode(postcode).subscribe(
        response => {
          if (response["Items"][0]){
            this.ccForm.controls["address"].setValue(null);
          if (response["Items"][0]["Error"]) {
            this.postCodeStatus = false;
          } else {
            this.postCodeStatus = true;
            if(val["line1"] !=""){
              for (let i = 0; i < response["Items"].length; i++) {
                if (response["Items"][i]["StreetAddress"].indexOf(val["line1"]) != -1) {
                     this.onSelectPlace(response["Items"][i]['Id']);       
                  break;
                }
              }
            }else{
              this.postalAddresses = response["Items"];
            }
            }
          } else {
            this.postCodeError=true;
            this.postCodeStatus=false;
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

  onSubmitCCForm(event) {
    if (this.ccForm.valid) {
      const baseSite = this.singletonServ.catalogVersion;
      this.shippingAddress = {
        customerAddress: ""
      };
      this.shippingAddress["customerAddress"] = this.ccForm.value;
      this.loading = true;
      const address = this.ccForm.value;
      let state = "";
      if (address.district) {
        if (typeof address.district == "object") {
          state = address.district.name;
        } else {
          state = address.district;
        }
      }
      const _address =address;
      _address['titleCode']="mr";
      _address['district']=state;

      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const userData = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        const email = userData.email;
        const cartcode = userData.code;
        if (!this.clickCollect) {
          const _dtls = this.copyOfShippingAddress.customerAddress;
          _address["firstName"] = _dtls["firstName"];
          _address["lastName"] = _dtls["lastName"];
          _address["titleCode"] = _dtls["titleCode"];
          const _msg ={
            address: _address,
            blAddrssUpdate:true
          }
          this.singletonServ.sendMessage(_msg);
          this.addUserBillingAddress(_address, userData.token, email, cartcode);
        } else {
          const _msg ={
            address: _address,
            blAddrssUpdate:true
          }
          this.singletonServ.sendMessage(_msg);
          this.clickCollectAddress(_address, userData.token, email, cartcode);
        }
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const guidData = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          let cartId = guidData["guid"];
          if (!this.clickCollect) {
            const _dtls = this.copyOfShippingAddress.customerAddress;
            _address["firstName"] = _dtls["firstName"];
            _address["lastName"] = _dtls["lastName"];
            _address["titleCode"] = _dtls["titleCode"];
            const _msg ={
              address: _address,
              blAddrssUpdate:true
            }
            this.singletonServ.sendMessage(_msg);
            this.addUserBillingAddress(
              _address,
              guidData.token,
              "anonymous",
              cartId
            );
          } else {
            const _msg ={
              address: _address,
              blAddrssUpdate:true
            }
            this.singletonServ.sendMessage(_msg);
            this.clickCollectAddress(_address, guidData.token, "anonymous", cartId);
          }
        }
      }

      this.submitted = true;
    } else {
      this.validateAllFormFields(this.ccForm);
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

  clickCollectAddress(_address, tokenId, email, code) {
     this.cyberService
      .addCCShippingAddress(tokenId, _address, email, code)
      .subscribe(
        response => {
          this.billingAddress = true;
          this.loading = false;
          const _obj = {
            address: _address
          };
         this.onSetBillingAddress.emit(_obj);
        },
        error => {
          this.loading = false;
        }
      );
  }

  addUserBillingAddress(_address, tokenId, email, code) {
    const that = this;
    this.cyberService
      .addBillingAddress(tokenId, email, code, _address)
      .subscribe(
        response => {
          this.billingAddress = true;
          this.loading = false;
          const _obj = {
            address: response
          };

          this.onSetBillingAddress.emit(_obj);
        },
        error => {
          this.loading = false;
        }
      );
  }
}
