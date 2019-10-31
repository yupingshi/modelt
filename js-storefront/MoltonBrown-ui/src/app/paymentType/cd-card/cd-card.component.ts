import { Component, OnInit, Input, Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';
import {  FormGroup, Validators } from "@angular/forms";
import { patternValidator } from '../../forms/pattern-validator';
import { DeviceDetectorService } from "ngx-device-detector";
import { SingletonService } from "../../services/singleton.service";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
@Component({
  selector: 'app-cd-card',
  templateUrl: './cd-card.component.html',
  styleUrls: ['./cd-card.component.scss']
})
export class CdCardComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() newCard:boolean;
  @Input() isValidFormSubmitted: boolean;
  @Output() changeCard: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('myInput') myInput: ElementRef;
  expireMonth: Array<any>;
  expireYear: Array<any>;
  mobileDevice: boolean;
  deviceInfo: any;
  maxLength: any;
  constructor(
    public translate: TranslateServiceSubService,
    public singletonServ: SingletonService,
    public deviceService: DeviceDetectorService
  ) {
    this.maxLength = 3;
    const monthBox = [];
    const yearBox = [];
    for (let i = 1; i <= 12; i++) {
      if (i >= 10) {
        const obj = { month: '' + i };
        monthBox.push(obj);
      } else {
        const obj = { month: '0' + i };
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
    if (isMobile || isTablet) {
      this.mobileDevice = true;
    } else {
      this.mobileDevice = false;
    }
  }
  onChangeCardType(event){

    if(event.target.value =="amex"){
 
      this.group['controls']["cardNumber"].setValidators([Validators.required,patternValidator(/^[0-9]{15,15}$/)]);
      if(!this.newCard ){
        this.maxLength=4;
        this.group['controls']["cvv"].setValidators([Validators.required,patternValidator(/^[0-9]{4,4}$/)]);
      } else {
        this.group['controls']["cvv"].setValidators(null);
      }
    }else{
 
      this.group['controls']["cardNumber"].setValidators([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]);
      if(!this.newCard ){
        this.maxLength=3;
        this.group['controls']["cvv"].setValidators([Validators.required,patternValidator(/^[0-9]{3,3}$/)]);
      } else {
        this.group['controls']["cvv"].setValidators(null);
      }
    }
    this.group['controls']["cardNumber"].updateValueAndValidity();
    this.group['controls']["cvv"].updateValueAndValidity();

     
  }
}
