import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { profileComponentService } from "../profile-form/profile.service";
import { RegistrationForm } from "../../forms/registration.form";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SingletonService } from "../../services/singleton.service";
import {
  countries,
  EUROPEAN_COUNTRIES,
  DE_COUNTRIES,
  US_COUNTRIES
} from "../../app.constant";
import { DeviceDetectorService } from "ngx-device-detector";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import * as _ from "lodash";
@Component({
  selector: "app-addressbook",
  templateUrl: "./addressbook.component.html",
  styleUrls: ["./addressbook.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AddressbookComponent implements OnInit {
  updateProfile: boolean;
  addressList: Array<any>;
  registrationForm: FormGroup;
  customerId: string;
  countries: Array<any>;
  deviceInfo: any;
  mobileDevice: boolean;
  desktopDevice: boolean;
  customerData: any;
  customerUpdate: boolean;
  constructor(
    public profileServ: profileComponentService,
    private fb: FormBuilder,
    public customerForm: RegistrationForm,
    public singletonServ: SingletonService,
    public deviceService: DeviceDetectorService,
    public location: Location,
    public router: Router
  ) {
    this.registrationForm = this.fb.group(customerForm.addressForm());
    this.updateProfile = true;
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    this.getUserAddresses();
    if (baseSite.isoCode === "GB") {
      this.countries = this.nestedCopy(countries);
      const _index = _.findIndex(this.countries, function(o) {
        return o.isocode == baseSite.isoCode;
      });
      if (_index != -1) {
        this.registrationForm.controls["country"].patchValue(
          this.countries[_index]
        );
      }
    } else if (baseSite.isoCode === "EU") {
      this.countries = this.nestedCopy(EUROPEAN_COUNTRIES);
    } else if (baseSite.isoCode === "DE") {
      this.countries = this.nestedCopy(DE_COUNTRIES);
    } else if (baseSite.isoCode === "US") {
      this.countries = this.nestedCopy(US_COUNTRIES);
      const _isoCode = baseSite.isoCode;
      if (_isoCode != -1) {
        const _index = _.findIndex(this.countries, function(o) {
          return o.isocode == _isoCode;
        });
        this.registrationForm.controls["country"].patchValue(
          this.countries[_index]
        );
      }
    }
    this.getDeviceInfo();
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
  getUserAddresses() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const data = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (data.token) {
        this.profileServ
          .getUserAddress(data.token, data.email)
          .subscribe(resp => {
            this.addressList = resp["addresses"];
          });
      } else {
        this.profileServ.generateToken().subscribe(token => {
          data["token"] = token["access_token"];
          this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(data));
          this.profileServ
            .getUserAddress(data.token, data.email)
            .subscribe(resp => {
              this.addressList = resp["addresses"];
            });
        });
      }
    } else {
      this.router.navigate(["store", "myacc"]);
    }
  }
  onRemoveAddress(data) {
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      const email = user.email;
      this.profileServ
        .spliceUserAddress(baseSiteid, user.token, email, data.id)
        .subscribe(
          response => {
            this.getUserAddresses();
          },
          error => {}
        );
    }
  }
  onSetDefaultAddress(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      const email = user.email;
      data["defaultAddress"] = true;
      this.profileServ
        .updateUserAddress( data, user.token, email, data.id)
        .subscribe(
          response => {
            this.getUserAddresses();
          },
          error => {}
        );
    }
  }
  onEditAddress(data) {
    this.customerData = data;
    this.customerId = data.id;
    this.updateProfile = false;
    this.customerUpdate = true;
  }
  cancelUpdate(bol) {
    this.registrationForm.reset();
    this.updateProfile = true;
    if (bol) {
      this.getUserAddresses();
    }
  }
}
