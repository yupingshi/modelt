import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  ViewEncapsulation,
  ElementRef,
  ViewChild
} from "@angular/core";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../../app.constant";
import { ShipmentForm } from "../../../forms/shipmentForm.form";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { DeliveryComponentService } from "../delivery.service";
import { profileComponentService } from "../../../component/profile-form/profile.service";
import { SingletonService } from "../../../services/singleton.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { TranslateServiceSubService } from "../../../pipe/translate-service-sub.service";
import { patternValidator } from "../../../forms/pattern-validator";
import * as _ from "lodash";
@Component({
  selector: "app-delivery-form",
  templateUrl: "./delivery-form.component.html",
  styleUrls: ["./delivery-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryFormComponent implements OnInit, OnChanges {
  @ViewChild("myInput") myInput: ElementRef;
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() showOverLay :  EventEmitter<any> = new EventEmitter<any>();
  @Input() customerInfoUpdate: any;
  loading: boolean;
  switchAddressMode: boolean;
  regAddNewAddrsHead: boolean;
  countries: Array<any>;
  shipmentForm: FormGroup;
  manualAdress: boolean;
  deviceInfo: any;
  mobileDevice: boolean;
  desktopDevice: boolean;
  showDeliveryForm: boolean;
  showEditForm: boolean;
  addressList: Array<any>;
  updateAddress: boolean;
  addressId: string;
  addressData: any;
  shippingInfo: any;
  userInfo: any;
  postalAddresses: Array<any>;
  guestUser: boolean;
  currentUser: boolean;
  allItems: any;
  checkAddressId: any;
  postCodeStatus: boolean;
  ukSpecificForm: boolean;
  hazardous: boolean;
  usSpecificForm: boolean;
  stateList: Array<any>;
  hazardousData: any = {
    description: "",
    list: []
  };
  shipmentFormInvalid: boolean;
  postCodeError: boolean;
  guestData: any;
  reguser:boolean;
  constructor(
    public singletonServ: SingletonService,
    public customerForm: ShipmentForm,
    private fb: FormBuilder,
    public deviceService: DeviceDetectorService,
    public profileServ: profileComponentService,
    public deliveryServ: DeliveryComponentService,
    private translate: TranslateServiceSubService
  ) {
    const baseSite = this.singletonServ.catalogVersion;
    this.postCodeStatus = true;
    this.guestUser = false;
    this.manualAdress = true;
    this.showDeliveryForm = false;
    this.updateAddress = false;
    this.shipmentForm = this.fb.group(customerForm.getForm());
    this.loading = false;
    if(this.singletonServ.getStoreData(baseSite.reg)){
       this.reguser=true;
    }else {
      this.reguser=false;
    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes["customerInfoUpdate"]) {
      if (changes["customerInfoUpdate"]["currentValue"] != undefined) {
        const _data = changes["customerInfoUpdate"]["currentValue"];
        if (_data.guest) {
          this.guestData = _data.form;
          this.shipmentForm.patchValue(_data.form);
          this.manualAdress = false;
        } else {
          this.checkAddressId = _data.form.id;
        }
      }
    }
  }

  ngOnInit() {
    this.loading=true;
    const baseSite = this.singletonServ.catalogVersion; 
    this.getDeviceInfo();
    if (baseSite) {
      const lngCode = baseSite.lngCode;
      this.setLang(lngCode);
      this.setCountrySet();
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        this.currentUser = true;
        this.switchAddressMode = true;
        const data = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        const emailid = data.email;
        this.getUserAddressList(emailid, data.token);
      } else {
        this.currentUser = false;
        this.switchAddressMode = false;
        this.showDeliveryForm = true;
        if(this.singletonServ.getStoreData(baseSite.guest)){
          const guidData = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          if(guidData.address){
            this.manualAdress = false;
            this.guestData=guidData.address;
            this.shipmentForm.patchValue(guidData.address);
            this.patchCountry();
          }
        }
        this.loading=false;
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
  setCountrySet() {
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      this.ukSpecificForm = true;
      this.countries = this.nestedCopy(countries);
      const _isoCode = baseSite.isoCode;
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == _isoCode;
      });
      if (_index != -1) {
        this.shipmentForm.controls["country"].patchValue(
          that.countries[_index]
        );
      }
      this.patchCountry();
    } else if (baseSite.isoCode === "EU") {
      this.ukSpecificForm = false;
      this.manualAdress = false;
      this.usSpecificForm = false;
      this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
      this.patchCountry();
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
        this.shipmentForm.controls["country"].patchValue(
          this.countries[_index]
        );
      }
      this.patchCountry();
    } else if (baseSite.isoCode == "US") {
      this.ukSpecificForm = false;
      this.manualAdress = false;
      this.countries = this.nestedCopy(US_COUNTRIES);
      this.usSpecificForm = true;
      const _isoCode = baseSite.isoCode;
      const id = _.findIndex(this.countries, function(o) {
        return o.isocode == _isoCode;
      });
      if (id != -1) {
        if (this.countries[id].isocode === "US") {
          this.shipmentForm.controls["postalCode"].setValidators([
            Validators.required,
            patternValidator(/^[0-9 ]{5,10}$/)
          ]);
          this.shipmentForm.controls["postalCode"].updateValueAndValidity();
        } else {
          this.shipmentForm.controls["postalCode"].setValidators([
            Validators.required,
            patternValidator(/^[a-zA-Z0-9 ]*$/)
          ]);
          this.shipmentForm.controls["postalCode"].updateValueAndValidity();
        }
      } else {
        this.shipmentForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.shipmentForm.controls["postalCode"].updateValueAndValidity();
      }
      if (this.guestData) {
        const _isoCode = this.guestData["country"]["isocode"];
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        if (_index != -1) {
          this.shipmentForm.controls["country"].patchValue(
            this.countries[_index]
          );
        }
        if (_isoCode == "US" || _isoCode == "CA") {
          this.stateList = this.guestData["country"]["states"];
          const _stateIndex = _.findIndex(this.stateList, function(o) {
            return o.name == that.guestData.district;
          });
          if (_stateIndex != -1) {
            this.shipmentForm.controls["district"].patchValue(
              this.stateList[_stateIndex]
            );
          }
        }
      } else {
        if (_isoCode == "US" || _isoCode == "CA") {
          const _index = _.findIndex(this.countries, function(o) {
            return o.isocode == _isoCode;
          });
          if (_index != -1) {
            this.shipmentForm.controls["country"].patchValue(
              this.countries[_index]
            );
            if (this.countries[_index].states) {
              this.stateList = this.countries[_index].states;
              this.shipmentForm.controls["district"].patchValue("");
            }
          }
        }
      }
    }
  }

  patchCountry() {
    if (this.guestData) {
      const _isoCode = this.guestData.country.isocode;
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == _isoCode;
      });
      if (_index != -1) {
        this.shipmentForm.controls["country"].patchValue(
          this.countries[_index]
        );
      }
      if (this.guestData.country.isocode == "US") {
        this.shipmentForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[0-9 ]{5,10}$/)
        ]);
        this.shipmentForm.controls["postalCode"].updateValueAndValidity();
      } else {
        this.shipmentForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.shipmentForm.controls["postalCode"].updateValueAndValidity();
      }
    }
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  onAddressChange(address, k) {
    this.addressList.map(obj => {
      if (obj == k) {
        obj["defaultAddress"] = true;
      } else {
        obj["defaultAddress"] = false;
      }
    });
    this.addressData = address;
  }
  onSelectAddress() {
    this.showOverLay.emit({load:true});
    if (this.addressData) {
      this.addressData["deliveryType"] = "UK & International delivery";
      const data = this.addressData;
      const baseSite = this.singletonServ.catalogVersion;
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        data["defaultAddress"] = true;
        data["titleCode"] = "mr";
          this.deliveryServ
          .confirmAddress(user.token, user.email, user.code, data.id)
          .subscribe(
            resp => {
              if (resp) {
                if (resp["isHazardous"]) {
                  this.hazardous = true;
                  this.hazardousData["description"] = resp["errorDescription"];
                  this.hazardousData["list"] = resp["products"];
                } else {
                  this.onValueChanged.emit(this.addressData);
                }
              } else {
                this.onValueChanged.emit(this.addressData);
              }
            },
            error => {
              this.showOverLay.emit({load:false});
              if (error.error) {
                const msg = error.error.errors[0]["message"];
              }
            }
          );
      }
    }
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }

  onSubmitAddressForm() {}
  editAddress(data,k) {
    this.addressId = data.id;
    this.showDeliveryForm = true;
    this.updateAddress = true;
    this.showEditForm = true;
    this.shipmentForm.patchValue(data);
    const _isoCode = data["country"]["isocode"];
    const _index = _.findIndex(this.countries, function(o) {
      return o.isocode == _isoCode;
    });
    if (_index != -1) {
      this.shipmentForm.controls["country"].patchValue(this.countries[_index]);
      if (this.countries[_index]["isocode"] == "US") {
        this.shipmentForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[0-9 ]{5,10}$/)
        ]);
        this.shipmentForm.controls["postalCode"].updateValueAndValidity();
      } else {
        this.shipmentForm.controls["postalCode"].setValidators([
          Validators.required,
          patternValidator(/^[a-zA-Z0-9 ]*$/)
        ]);
        this.shipmentForm.controls["postalCode"].updateValueAndValidity();
      }

      if (this.countries[_index].states) {
        this.stateList = this.countries[_index].states;
        const _stateindex = _.findIndex(this.stateList, function(o) {
          return o.name == data.district;
        });
        if (_stateindex != -1) {
          this.shipmentForm.controls["district"].patchValue(
            this.stateList[_stateindex]
          );
        } else {
          this.shipmentForm.controls["district"].patchValue("");
        }
      }
    } else {
      this.shipmentForm.controls["country"].patchValue("");
    }

    this.manualAdress = false;
    this.switchAddressMode = false;
  }
  getUserAddressList(email, token) {
    this.addressData = undefined;
    this.switchAddressMode = false;
    this.deliveryServ.getUserAddress(token, email).subscribe(
      resp => {
        if (resp) {
          if (resp["addresses"]) {
            this.addressList = resp["addresses"];
            this.addressList.map(obj => {
              if (obj.defaultAddress) {
                this.addressData = obj;
              }
              if (this.checkAddressId || this.addressId) {
                if (obj.id == this.checkAddressId || obj.id ==  this.addressId) {
                  obj.defaultAddress = true;
                  this.addressData = obj;
                } else {
                  obj.defaultAddress = false;
                }
              }
            });
            this.showDeliveryForm = false;
            this.switchAddressMode = true;
            this.loading = false;
          } else {
            this.showDeliveryForm = true;
            this.switchAddressMode = false;
            this.loading = false;
          }
        }
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }
  onSearchByPostal() {
    this.shipmentForm.controls["line1"].setValue("");
    this.shipmentForm.controls["line2"].setValue("");
    this.shipmentForm.controls["district"].setValue("");
    this.shipmentForm.controls["town"].setValue("");
    this.manualAdress = true;
  }
  addressManual() {
    this.manualAdress = false;
  }
  addAddress() {
    this.shipmentForm.reset();
    this.shipmentForm.controls["titleCode"].patchValue("");
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "EU") {
      this.shipmentForm.controls["country"].patchValue("");
    } else if (baseSite.isoCode === "DE") {
      this.shipmentForm.controls["country"].patchValue("");
    }
    this.setCountrySet();
    this.updateAddress = false;
    this.switchAddressMode = false;
    this.showDeliveryForm = true;
    this.regAddNewAddrsHead = true;
  }
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  onSubmitForm(event) {
    let state = "";
    const baseSite = this.singletonServ.catalogVersion;
    if (this.shipmentForm.valid) {
      this.loading = true;
      const _address = this.shipmentForm.value;
      if (_address.district) {
        if (typeof _address.district == "object") {
          state = _address.district.name;
        } else {
          state = _address.district;
        }
      }
      _address['type']= "Home";
      _address['district']= state;
      this.userInfo = _address;
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const userData = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        const email = userData.email;
        if (this.updateAddress) {
          this.updateAddressForm(_address, userData.token, email);
        } else {
          this.addUserAddress(
            userData.token,
            userData.email,
            userData.code,
            _address
          );
        }
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const guidData = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          let cartId = guidData["guid"];
          this.addAnnonymousAddress(guidData.token, cartId, _address);
        }
      }
    } else {
      this.validateAllFormFields(this.shipmentForm);
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
  onChangeCountry(event) {
    const _index = event.target.selectedIndex - 1;
    const country = this.countries[_index];
    if (this.countries[_index].isocode === "US") {
      this.shipmentForm.controls["postalCode"].setValidators([
        Validators.required,
        patternValidator(/^[0-9 ]{5,10}$/)
      ]);
      this.shipmentForm.controls["postalCode"].updateValueAndValidity();
    } else {
      this.shipmentForm.controls["postalCode"].setValidators([
        Validators.required,
        patternValidator(/^[a-zA-Z0-9 ]*$/)
      ]);
      this.shipmentForm.controls["postalCode"].updateValueAndValidity();
    }
    if (this.usSpecificForm) {
      this.ukSpecificForm = false;
      if (country.states) {
        this.stateList = country.states;
        this.shipmentForm.controls["district"].setValue("");
      } else {
        this.stateList = undefined;
        this.shipmentForm.controls["district"].setValue("");
      }
    }
    if (this.countries[_index]["isocode"] == "GB") {
      this.ukSpecificForm = true;
    } else {
      this.ukSpecificForm = false;
      this.manualAdress = false;
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
      this.shipmentForm.controls[obj.name].reset();
    });
    this.shipmentForm.controls['district'].setValue('');
  }
    // onPostCodeKeyUp(el) {
  //   if (!el || !el.target.value) return;
  //   this.postCodeStatus = true;
  //   this.postCodeError=false;
  //   el.target.value = el.target.value.toUpperCase();
  // }

  onPostCodeKeyUp(event) {
    if (event.key === "Enter") {
        this.shipmentForm.controls['postalCode'].patchValue(event.target.value);
        this.findAddress(event);
     }
     if (!event || !event.target.value) return;
    this.postCodeStatus = true;
    this.postCodeError=false;
    event.target.value = event.target.value.toUpperCase();
  }
  findAddress(event) {
    event.preventDefault();
    const val = this.shipmentForm.value;
    this.myInput.nativeElement.focus();
    if (this.shipmentForm.controls["postalCode"].valid) {
      this.postCodeError = false;
      const postcode = val["postalCode"];
      this.deliveryServ.getPostCode(postcode).subscribe(
        response => {
          if (response["Items"][0]) {
            this.shipmentForm.controls["address"].setValue(null);
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
            this.myInput.nativeElement.focus();
            this.postCodeError = true;
            this.postCodeStatus = false;
         }
        },
        error => {
          this.postCodeError = true;
          this.myInput.nativeElement.focus();
        }
      );
    } else {
      this.postCodeError = true;
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
          this.shipmentForm.controls["town"].setValue(_addresses["PostTown"]);
          if (_addresses["Company"].length == 0) {
            this.shipmentForm.controls["line1"].setValue(_addresses["Line1"]);
            this.shipmentForm.controls["line2"].setValue(_addresses["Line2"]);
          } else {
            this.shipmentForm.controls["line1"].setValue(_addresses["Company"]);
            this.shipmentForm.controls["line2"].setValue(_addresses["Line1"]);
          }
          this.shipmentForm.controls["postalCode"].setValue(
            _addresses["Postcode"]
          );

          this.shipmentForm.controls["district"].setValue(_addresses["County"]);
        } else {
          alert("please enter valid postCode");
        }
      },
      err => {}
    );
  }

  addAnnonymousAddress(tokenId, cartId, body) {
    this.showOverLay.emit({load:true});
    this.deliveryServ.createAnnonymousAddress(tokenId, cartId, body).subscribe(
      resp => {
        if (resp) {
          const _hazrdousData=resp["kaoHazardous"];
          if (_hazrdousData) {
            if(_hazrdousData['isHazardous']){
            this.hazardous = true;
            this.hazardousData["description"] = _hazrdousData["errorDescription"];
            this.hazardousData["list"] = _hazrdousData["products"];
            }else{
              this.addressData = this.userInfo;
              this.onValueChanged.emit(this.addressData);
            }
          } else {
            this.addressData = this.userInfo;
            this.onValueChanged.emit(this.addressData);
          }
        } else {
          this.addressData = this.userInfo;
          this.onValueChanged.emit(this.addressData);
        }
        const baseSite = this.singletonServ.catalogVersion;
        const guidData = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        guidData['address'] = this.addressData;
        this.singletonServ.setStoreData(baseSite.guest,JSON.stringify(guidData));
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.showOverLay.emit({load:false});
        alert("DEV:Something went wrong");
      }
    );
  }
  addUserAddress(tokenId, email, code, address) {
    this.loading = true;
    this.deliveryServ
      .addShippingAddress(tokenId, email, code, address)
      .subscribe(
        response => {
          this.checkAddressId = response["id"];
          this.getUserAddressList(email, tokenId);
        },
        error => {
          this.loading = false;
        }
      );
  }
  updateAddressForm( _address, tokenId, email) {
    const id = this.addressId;
    this.loading = true;
    this.profileServ.updateUserAddress(_address, tokenId, email, id).subscribe(
      response => {
        this.getUserAddressList(email, tokenId);
        this.showDeliveryForm = false;
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }
  onResetForm() {
    this.showDeliveryForm = false;
    this.updateAddress = false;
    this.manualAdress = false;
    this.switchAddressMode = true;
  }
}
