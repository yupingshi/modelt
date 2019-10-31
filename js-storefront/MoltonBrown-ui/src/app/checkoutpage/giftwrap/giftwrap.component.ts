import { Location } from "@angular/common";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { GuestForm } from "../../forms/guestForm.form";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import { SingletonService } from "../../services/singleton.service";
import { BasketPageComponentService } from "../basketpage/basketpage.service";
import {
  trigger, 
  transition, 
  state, 
  animate, 
  style, 
  AnimationEvent 
 } from '@angular/animations';
@Component({
  selector: 'app-giftwrap',
  animations: [
    trigger('openClose', [
      state('shows', style({
        display:'block',
        height:'128px'
      })),
      state('hides', style({
        display:'none',
        height:'0px'
      })),
      transition('shows => hides', [
        animate('1s')
      ]),
      transition('hides => shows', [
        animate('1s')
      ]),
      transition('* => hides', [
        animate('1s')
      ]),
      transition('* => shows', [
        animate('0.5s')
      ]),
      transition('shows <=> hides', [
        animate('0.5s')
      ]),
      transition ('* => shows', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ])
    ])   
  ],
  templateUrl: './giftwrap.component.html',
  styleUrls: ['./giftwrap.component.scss']
})
export class GiftwrapComponent implements OnInit,AfterViewInit {
  @Input() logging = false;
  @ViewChild("isGifBoxElement") isGifBoxElement: ElementRef;
  @Input() giftMessageForm: FormGroup;
  @Output() onShowtextArea: EventEmitter<any> = new EventEmitter<any>();
  tooltipMsg: boolean;
  giftBox: boolean;
  giftMsg: boolean;
  giftText: string;
  isValidSubmit:boolean;
  disableGiftBox:boolean;
  textlength:number;
  giftEligibleLabel:boolean;
  constructor(
    public singletonServ: SingletonService,
    public deviceService: DeviceDetectorService,
    public location: Location,
    public _giftMessageDetails: GuestForm,
    private title: Title,
    public router: Router,
    public route: ActivatedRoute,
    public basketServ: BasketPageComponentService,
    private translate: TranslateServiceSubService
  ) { 
    this.giftBox = false;
    this.tooltipMsg = false;
    this.textlength = 250;

  }

  ngOnInit() {
    this.title.setTitle('Molton Brown - Samples & Gift Options');
    let _cartObj=this.singletonServ.cartObj;
    if (_cartObj) {
      this.giftBox = _cartObj.isGiftBox;
      this.giftMsg = _cartObj.isGiftBoxMessage;
        if(_cartObj.disableGiftBox){
          this.disableGiftBox = _cartObj.disableGiftBox;
          this.giftEligibleLabel=true;
          this.giftMessageForm.controls['giftBox'].disable();
         }else{
          this.giftMessageForm.controls['giftBox'].enable();
         }
        if(this.giftBox){
          this.giftMessageForm.controls['giftBox'].patchValue(true);
        }
      if(this.giftMsg){
        this.giftMessageForm.controls['giftMsg'].patchValue(true);
        this.tooltipMsg =true;
        if(_cartObj.giftBoxMessage){
         this.giftMessageForm.controls.giftMessage.patchValue(_cartObj.giftBoxMessage);
        }
      }
      if (this.giftBox || this.disableGiftBox ) {
        this.giftBox=true;
      } else {
        this.giftMsg = false;
        this.tooltipMsg = false;
      }
  }

    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: true };
    this.singletonServ.sendMessage(obj);
  }
  onAnimationEvent ( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
  }
  onChangeText(event) {
    let textLength = event.target.value.length;
    this.textlength = 250 - textLength;
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  onGiftBoxSChecked(event) {
    if(event.target.checked){
      this.giftMessageForm.controls['giftBox'].patchValue(true);
    }else{
      this.giftMessageForm.controls['giftBox'].patchValue(null);
    }
  }
  showTextarea(event) {
    this.tooltipMsg = !this.tooltipMsg;
    if(event.target.checked){
      this.giftMessageForm.controls['giftMsg'].setValidators([Validators.required]);
      this.giftMessageForm.controls['giftMessage'].setValidators([Validators.required]);
      this.giftMessageForm.controls['giftMessage'].updateValueAndValidity();
      this.giftMessageForm.controls['giftMsg'].updateValueAndValidity();
      this.giftMessageForm.controls['giftMsg'].setValue(true);
    }else{
      this.giftMessageForm.controls['giftMessage'].reset();
      this.giftMessageForm.controls['giftMsg'].setValidators(null);
      this.giftMessageForm.controls['giftMessage'].setValidators(null);
      this.giftMessageForm.controls['giftMessage'].updateValueAndValidity();
      this.giftMessageForm.controls['giftMsg'].updateValueAndValidity();
      this.giftMessageForm.controls['giftMsg'].setValue('');
    }
  }
  ngAfterViewInit() {

    this.singletonServ.getMessage().subscribe(message => {
      if (message.sample) {
        let _cartObj=message.cartObj;      
        if (_cartObj) {
          this.giftBox = _cartObj.isGiftBox;
          this.giftMsg = _cartObj.isGiftBoxMessage;
          this.disableGiftBox = _cartObj.disableGiftBox;
          if(_cartObj.disableGiftBox){
            this.disableGiftBox = _cartObj.disableGiftBox;
            this.giftMessageForm.controls['giftBox'].disable();
           }else{
            this.giftMessageForm.controls['giftBox'].enable();
           }
          if(this.giftBox){
            this.giftMessageForm.controls['giftBox'].patchValue(true);
          }
          if(this.giftMsg){            
             this.tooltipMsg =true;
            if(_cartObj.giftBoxMessage){
             this.giftMessageForm.controls.giftMessage.patchValue(_cartObj._cartObj)
            }
          }
          if (this.giftBox ||this.disableGiftBox) {
            this.giftBox=true;
          } else {
            this.giftMsg = false;
            this.tooltipMsg = false;
          }
        }
      }
    });
  }
}
