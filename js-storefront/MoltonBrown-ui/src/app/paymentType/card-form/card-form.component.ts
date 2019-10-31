import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewEncapsulation,
  SimpleChange,
  ViewChild,
  ElementRef,
  NgZone
  
} from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { cardFormComponentService } from "./card-form.service";
import { SingletonService } from "../../services/singleton.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { DeliveryComponentService } from "../../checkout-cart/delivery/delivery.service";
import { countries } from "../../app.constant";
import { TranslateServiceSubService } from '../../pipe/translate-service-sub.service';
import { Subscription, Subject } from "rxjs";
import { filter, map, take, toArray, takeUntil } from 'rxjs/operators';
import * as _ from "lodash";
declare var Cardinal: any;
declare var window: any;
declare var $:any;
@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CardFormComponent implements OnInit, OnChanges {
  @Input() deliveryInfo: any;
  @Input() showSubmitBtn: any;
  @Input() updateSavedCard: any;
  @Input() formType: any;
  @ViewChild("paymentCardEl") paymentCardEl: ElementRef;
  switchMode: string;
  checkoutForm: FormGroup;
  reg: boolean;
  termsForm: any;
  billingAddress: boolean;
  countries: Array<any> = JSON.parse(JSON.stringify(countries));
  cardDetailForm: FormGroup;
  expireMonth: Array<any>;
  expireYear: Array<any>;
  shippingAddress: any;
  loading: boolean;
  currentUser: boolean;
  payType: boolean;
  cardDetail: any;
  isValidFormSubmitted: boolean;
  cards: any;
  cardList: Array<any> = [];
  addressForm: FormGroup;
  copyOfShippingAddress: any;
  newCard: boolean;
  sessionID: any;
  jwtToken: string;
  clickColllectGeoPoint:any;
  loadingText:string;
  private unsubscribe$=new Subject<void>();
  private validUnsubscribe$=new Subject<void>();
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
    private translate: TranslateServiceSubService,
    public ngZone:NgZone
  ) {
    this.loadingText="loading";
    this.cardDetailForm = this.fb.group({
      paymentCard: this.fb.group(_checkOutForm.getCardForm()),
      saveCard: [''],
      terms: this.fb.group({
        terms: ['', [Validators.required]],
        policy: ['']
      }),
      billingForm: ['', [Validators.required]]
    });
    this.checkoutForm = this.fb.group({
      cardForm: this.fb.group(this._checkOutForm.getExpressCheckoutForm()),
      cardDetailForm: this.fb.group({
        group: this._checkOutForm.getCardForm()
      }),
      terms: this.fb.group({
        terms: ['', [Validators.required]],
        policy: ['']
      })
    });
    this.addressForm = this.fb.group({
      billingForm: this.fb.group(_checkOutForm.getCCForm())
    });
    this.loading = false;
    const monthBox = [];
    const yearBox = [];
    for (let i = 1; i <= 12; i++) {
      if (i >= 10) {
        const obj = { month: "" + i };
        monthBox.push(obj);
      } else {
        const obj = { month: "0" + i };
        monthBox.push(obj);
      }
    }
    this.expireMonth = monthBox;
    const date = new Date();
    for (let k = 1; k <= 24; k++) {
      const obj = { year: date.getFullYear() + k };
      yearBox.push(obj);
    }
    this.expireYear = yearBox;
  }


  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const baseSite = this.singletonServ.catalogVersion;
    if (changes["deliveryInfo"]) {
      if (changes["deliveryInfo"]["currentValue"] != undefined) {
        let _dt = changes["deliveryInfo"]["currentValue"];
        this.shippingAddress = _dt;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          if (_dt['cardForm']) {
            if (_dt['cardForm']['listOfCards']) {
              if (_dt['cardForm']['listOfCards'].length != 0) {
                this.cardList = _dt['cardForm']['listOfCards'];
                const index = _.findIndex(this.cardList, (obj) => {
                  return obj.isDefault
                });
                if (index != -1) {
                  this.checkoutForm.controls.cardForm['controls']["cardType"].patchValue(this.cardList[index])
                }
                if (_dt.geoPoint) {
                 this.switchMode = (this.shippingAddress.customerAddress)?"encryptCard":"billingForm";
                  this.payType = false;
                } else {
                  this.switchMode = "encryptCard";
                  this.payType = true;
                }
              } else {
                if (_dt.geoPoint) {
                  this.switchMode = (this.shippingAddress.customerAddress)?"cardForm":"billingForm";
                  this.payType = false;
                } else {
                  this.switchMode = "cardForm";
                  this.payType = true;
                }
              }
            } else {
              if (_dt.geoPoint) {
                this.switchMode = (this.shippingAddress.customerAddress)?"cardForm":"billingForm";
                this.payType = false;
              } else {
                this.switchMode = "cardForm";
                this.payType = true;
              }
            }
            this.copyOfShippingAddress = this.nestedCopy(_dt)
          } else {
            if (_dt.geoPoint) {
              this.switchMode = (this.shippingAddress.customerAddress)?"cardForm":"billingForm";
              this.payType = false;
            } else {
              this.switchMode = "cardForm";
              this.payType = true;
            }

          }
        } else {
          if (_dt.geoPoint) {
            this.switchMode = (this.shippingAddress.customerAddress)?"cardForm":"billingForm";;
            this.payType = false;
          } else {
            this.switchMode = "cardForm";
            this.payType = true;
          }
        }
      }
    }
  }

  ngOnInit() {

    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      this.currentUser = true;
    } else {
      this.currentUser = false;
    }
    if (this.singletonServ.getStoreData('paypalGuest')) {
      this.singletonServ.removeItem('paypalGuest');
    }
    if (this.singletonServ.getStoreData('order')) {
      this.singletonServ.removeItem('order');
    }
    if (this.singletonServ.getStoreData('accCreationDtl')) {
      this.singletonServ.removeItem('accCreationDtl');
    }

    /**function allows you to pass a configuration object into Songbird */

    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
   this.generateJWT();
  }
  onSetTerms(data) {
    if (data.check) {
      this.cardDetailForm['controls']['terms']['controls']['terms'].setValue(true);
    } else {
      this.cardDetailForm['controls']['terms']['controls']['terms'].setValue(false);
      this.cardDetailForm['controls']['terms']['controls']['terms'].setErrors({'incorrect': true});
    }
  }
  onSetPolicyTerms(data){
    if (data.check) {
      this.cardDetailForm['controls']['terms']['controls']['policy'].setValue(true);
    } else {
      this.cardDetailForm['controls']['terms']['controls']['policy'].setValue('');
    }
  }
  onSetEncryptCardTerms(data) {
    if (data.check) {
      this.checkoutForm['controls']['terms']['controls']['terms'].setValue(true);
    } else {
      this.checkoutForm['controls']['terms']['controls']['terms'].setValue(false);      
      this.checkoutForm['controls']['terms']['controls']['terms'].setErrors({'incorrect': true});
    }
  }
  onSetEncryptPolicyTerms(data){
    if (data.check) {
      this.checkoutForm['controls']['terms']['controls']['policy'].setValue(true);
    } else {
      this.checkoutForm['controls']['terms']['controls']['policy'].setValue('');
    }
  }

  onSetBillingAddress(data) {
    this.billingAddress = true;
    this.switchMode = "cardForm"
    this.shippingAddress.customerAddress = data.address;
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }


  generateJWT() {
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite.isoCode!="US"){
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (_user.token) {
        this.generateJWTToken(_user.token, _user.email, _user.code);
      } else {
        this.cyberService.generateCartToken().subscribe((resp) => {
          const token = resp["access_token"];
          _user['token'] = token;
          this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_user));
          this.generateJWTToken(_user.token, _user.email, _user.code);
        }, err => {

        });

      }

    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        if (_guest.token) {
          this.generateJWTToken(_guest.token, 'anonymous', _guest.guid);
        } else {
          this.cyberService.generateCartToken().subscribe((resp) => {
            const token = resp["access_token"];
            _guest['token'] = token;
            this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_guest));
            this.generateJWTToken(token, 'anonymous', _guest.guid);
          }, err => {

          });

        }
      }
    }
  }
  }

  generateJWTToken(token, email, code) {
    this.cyberService.generateJWT(token, email, code).subscribe((response: any) => {
      if (response) {
        this.jwtToken = response.jwtToken;
      }
    }, err => {
      if(err.errors){
        const _baseSite = this.singletonServ.catalogVersion;
        if(err.errors[0]['type']== "InvalidTokenError"){
          if(this.singletonServ.getStoreData(_baseSite.guest)){
            this.singletonServ.removeItem(_baseSite.guest);
           } else if(this.singletonServ.getStoreData(_baseSite.reg)){
            this.singletonServ.removeItem(_baseSite.reg);
            }
           this.router.navigate(['store','global',"sessionExpired"]);
        }
      }
    });
  }


 
  getTypeOf(val) {
    if ((typeof (val) == 'boolean') && !val) {
      return true
    }
    return false
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }



  onChangeCardType(event) {
  }
  onChangeBillingAddress() {
    this.billingAddress = false;
    this.switchMode = "billingForm"
  }

  addUserAddress(_address, tokenId, email, code) {
    this.cyberService
      .addCCShippingAddress(tokenId, _address, email, code)
      .subscribe(
        response => {
          this.billingAddress = true;
          this.switchMode = "cardForm"
          this.loading = false;
        },
        err => {
          this.loading = false;
          if(err.errors){
            const _baseSite = this.singletonServ.catalogVersion;
            if(err.errors[0]['type']== "InvalidTokenError"){
              if(this.singletonServ.getStoreData(_baseSite.guest)){
                this.singletonServ.removeItem(_baseSite.guest);
               } else if(this.singletonServ.getStoreData(_baseSite.reg)){
                 this.singletonServ.removeItem(_baseSite.reg);
                }
               this.router.navigate(['store','global',"sessionExpired"]);
            }
          }
        }
      );
  }
  onResetAddress() {
    this.billingAddress = true;
    this.switchMode = "cardForm"
  }

  saveCardDetail(event) {
    if (event.target.checked) {

    }
  }



  onChangeCard(card) {
    this.cardList=card.cardList;
    // this.cardList.map((obj)=>{

    // })
    this.checkoutForm.reset(); 
  }
  onAddNewCard() {
    this.loadingText="loading";
    this.newCard = true;
    this.cardDetailForm = this.fb.group(this._checkOutForm.getCardForm());
  }
  onEditCard() {
    this.loadingText="loading";
    this.newCard = true;
  }

  cancelEMit(data) {
    this.newCard = false;
    if(data.cardList){
      this.cardList = data.cardList;
    }
    this.checkoutForm.reset();
  }






  
  /** Start of Encrypted pay */
  onPaymentContinue(event) {
    event.preventDefault();
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    const encryptedCard = this.checkoutForm.value.cardForm;
    const encryptedTerms = this.checkoutForm.value.terms;
    this.paymentCardEl['myInput'].nativeElement.focus();
    const cardsList = this.cardList;
    const index = _.findIndex(cardsList, (obj) => {
      return obj.isDefault
    });
    const _ccAccnumber=cardsList[index]['ccaccountnumber'];
    const _terms =this.checkoutForm['controls']['terms'].valid;
    const _secureCodeValid=this.checkoutForm['controls']['cardForm']['controls']["secureCode"].valid;
    if(_ccAccnumber){
    if (_secureCodeValid && _terms) {
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const billingAddress =  cardsList[index]['billingAddress'];
        billingAddress['titleCode'] = "mr";
        delete billingAddress['billingAddress'];
        delete billingAddress['visibleInAddressBook'];
        delete billingAddress['shippingAddress'];
        const profileId = cardsList[index]['profileID'];
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));

        const obj = {
          accountHolderName: cardsList[index]['firstName'] + ' ' + cardsList[index]['lastName'],
          cardNumber: _ccAccnumber,
          cardType: {
            code: cardsList[index]['cardType']
          },
          expiryMonth: cardsList[index]['expirationmonth'],
          expiryYear: cardsList[index]['expirationyear'],
          billingAddress: billingAddress,
          issueNumber: encryptedCard.secureCode
        };
        obj['newsletterOptIn']=(encryptedTerms.policy)?encryptedTerms.policy:false;
        this.loading = true;
        $('html, body').animate({
          scrollTop: $("#mb_payment_header").offset().top-75
        }, 100);
        this.loadingText="Please wait while we submit your order... ";
        this.singletonServ.sendMessage({ toggleOverlay: { status: true } });
        if(baseSite.isoCode=="US"){
         this.expresspayment (user.token, user.email, user.code, obj, profileId);
        }else{
          const jwt = this.jwtToken;
          if ('Cardinal' in window) {
            Cardinal.configure({ logging: { level: 'verbose' } });
            Cardinal.on("payments.setupComplete", function(setupCompleteData){
              console.log(setupCompleteData);
              if(setupCompleteData){
                 that.sessionID=setupCompleteData.sessionId;
                 const _encryptcardsList = that.cardList;
                 const _encryptindex = _.findIndex(_encryptcardsList, (obj) => {
                   return obj.isDefault
                 });
                 const _encryCardNumber=_encryptcardsList[_encryptindex]['ccaccountnumber'];
                 if(_encryCardNumber){
                    const _cardNumber= _encryCardNumber.toUpperCase();
                     const _binNumber=  _cardNumber.substring(0,_cardNumber.indexOf('X'));
                     Cardinal.trigger("bin.process", _binNumber);
                     that.expressPayAuthentication(user.token,user.email,user.code,obj,profileId, setupCompleteData.sessionId);  
                }
              }
            });        
            Cardinal.setup('init', {
              jwt: jwt
            });
          }
        }
      }
    } else {
      this.validateAllFormFields(this.checkoutForm);
    }
} else{
  this.validateAllFormFields(this.checkoutForm);
} 
}

  
  expresspayment(token,email,code,obj,profileID){
    this.cyberService.expressPayment(token,email, code, obj, profileID).subscribe((response) => {
      Cardinal.off("payments.setupComplete");
      response['reg'] = (email !="anonymous")? true:false;
      response['email'] = email;
      response['token'] = token;
      this.singletonServ.setStoreData("order", JSON.stringify(response));
      this.ngZone.run(() => {
        this.loading = false;
        this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
        this.router.navigate(['/checkout','confirmation']);
      });
    }, err => {
      this.ngZone.run(() =>{ 
        this.loadingText="loading";
       this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
       this.loading = false;
       if(err.errors){
        const _baseSite = this.singletonServ.catalogVersion;
        if(err.errors[0]['type']== "InvalidTokenError"){
          if(this.singletonServ.getStoreData(_baseSite.guest)){
            this.singletonServ.removeItem(_baseSite.guest);
           } else if(this.singletonServ.getStoreData(_baseSite.reg)){
            this.singletonServ.removeItem(_baseSite.reg);
            }
           this.router.navigate(['store','global',"sessionExpired"]);
        }
      }
      });
    });
}
  
  expressPayAuthentication(token, email, code, obj,profileID, sessionID){
  const that=this;
  this.cyberService.expressPaymentAuthentication(token,email,code,obj,profileID,sessionID).pipe(takeUntil(this.unsubscribe$)).subscribe((resp:any)=>{
     Cardinal.off("payments.setupComplete");
    if (resp) {
      if(!resp.isenabledforSecurePayment){
        this.expresspayment(token,email,code,obj,profileID);
      } else {
      let _acsUrl = resp['ACSUrl'];
      let _payload = resp['payReq'];
      let _transactionID = resp['transactionID'];
      Cardinal.continue('cca',
        {
          AcsUrl: _acsUrl,
          Payload: _payload
        },
        {
          OrderDetails:
          {
            TransactionId: _transactionID
          }
        });
       Cardinal.on('payments.validated', function(decodedResponseData, responseJWT){
             console.log("payments.validated",decodedResponseData, responseJWT);
           
             if(decodedResponseData.Payment){
              const _transactionID= decodedResponseData.Payment.ProcessorTransactionId;
              that.validateExpressPayMode(token, email, code, obj,responseJWT,_transactionID,profileID);
            } else{
              this.ngZone.run(() =>{ 
                this.loadingText="loading";
                this.loading = false;
                this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
                });
            }
    }); 
  }

    }
   

 },err=>{
  this.ngZone.run(() =>{ 
    this.loadingText="loading";
    this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
    this.loading = false;
    if(err.errors){
      const _baseSite = this.singletonServ.catalogVersion;
      if(err.errors[0]['type']== "InvalidTokenError"){
        if(this.singletonServ.getStoreData(_baseSite.guest)){
          this.singletonServ.removeItem(_baseSite.guest);
         } else if(this.singletonServ.getStoreData(_baseSite.reg)){
          this.singletonServ.removeItem(_baseSite.reg);
          }
         this.router.navigate(['store','global',"sessionExpired"]);
      }
    }
    });
 });
}
validateExpressPayMode(token, email, code, obj,responseJWT,_transactionID,profileID){
  const baseSite = this.singletonServ.catalogVersion;
  this.cyberService.validateExpressPayMode(token, email, code, obj,responseJWT,_transactionID,profileID).pipe(takeUntil(this.validUnsubscribe$)).subscribe((response)=>{
    Cardinal.off('payments.validated');
    if(response){   
      const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      response['reg'] = (email !="anonymous")? true:false;
      response['email']=user.email;
      response['token']=user.token;
      this.singletonServ.setStoreData("order", JSON.stringify(response));
      this.ngZone.run(() => {
        this.loading = false;
        this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
        this.router.navigate(['/checkout','confirmation'])
      });
    } else {
      this.ngZone.run(() =>{ 
        this.loadingText="loading";
        this.loading = false;
        this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
        });
    }
  },err=>{
    this.ngZone.run(() =>{ 
      this.loadingText="loading";
    this.loading = false;
    this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
    });
  });
}
  /** End of Encrypted pay */



    /*Normal Form Checkout */
    oncheckoutContinue(event) {
      event.stopPropagation();
      event.preventDefault();
      const that = this;
      const baseSite = this.singletonServ.catalogVersion;
      const cardForm = this.cardDetailForm.value.paymentCard;
      const _terms = this.cardDetailForm.value.terms;
      let _raiseCardMonthValidatn = false;
      const date = new Date();
      if (parseInt(cardForm.year) == date.getFullYear()) {
        if (parseInt(cardForm.month) <= date.getMonth()) {
          _raiseCardMonthValidatn = true;
        }
      }
      if (this.cardDetailForm.valid) {
        if (!_raiseCardMonthValidatn) {
          $('html, body').animate({
            scrollTop: $("#mb_payment_header").offset().top-75
          }, 100);
          this.loadingText="Please wait while we submit your order... ";
          this.loading=true;
          this.singletonServ.sendMessage({ toggleOverlay: { status: true } });
          if(baseSite.isoCode=="US"){
               this.paymentContinue(); 
           }else{
            const jwt = this.jwtToken;
            if ('Cardinal' in window) {
              Cardinal.configure({ logging: { level: 'verbose' } });
              Cardinal.on("payments.setupComplete", function(setupCompleteData){
                console.log(setupCompleteData);
                if(setupCompleteData){
                  that.sessionID=setupCompleteData.sessionId;
                  that.setPay(setupCompleteData.sessionId);
                }
              });        
              Cardinal.setup('init', {
                jwt: jwt
              });
            }
          }
        }else {
            this.cardDetailForm.controls['paymentCard']['controls'].month.setValue(null);
            this.cardDetailForm.controls['paymentCard']['controls'].month.setErrors({ 'incorrect': true });
            this.validateAllFormFields(this.cardDetailForm);
          }
        } else {
          this.validateAllFormFields(this.cardDetailForm);
        }
    }
  
    setPay(sessionID) {
      const cardForm = this.cardDetailForm.value.paymentCard;
      const _terms = this.cardDetailForm.value.terms;
      Cardinal.trigger("bin.process", cardForm.cardNumber);
      let _raiseCardMonthValidatn = false;
      const date = new Date();
      if (parseInt(cardForm.year) == date.getFullYear()) {
        if (parseInt(cardForm.month) <= date.getMonth()) {
          _raiseCardMonthValidatn = true;
        }
      }
      if (this.cardDetailForm.valid) {
        if (!_raiseCardMonthValidatn) {
          this.loading = true;
          let state = '';
          const shipAddress = this.shippingAddress.customerAddress;
          if (shipAddress.district) {
            if (typeof shipAddress.district == "object") {
              state = shipAddress.district.name;
            } else {
              state = shipAddress.district;
            }
          }
          const obj = {
            accountHolderName: cardForm.firstName + " " + cardForm.lastName,
            cardNumber: cardForm.cardNumber,
            cardType: {
              code: cardForm.cardType
            },
            expiryMonth: cardForm.month,
            expiryYear: cardForm.year,
            issueNumber: cardForm.cvv,
            defaultPayment: true,
            billingAddress: shipAddress
            
          };
          obj['newsletterOptIn']=(_terms.policy)?_terms.policy:false;
          obj['billingAddress']['district'] = state;
          this.dosecurePayMode(obj, sessionID);
        } else {
          this.cardDetailForm.controls['paymentCard']['controls'].month.setValue(null);
          this.cardDetailForm.controls['paymentCard']['controls'].month.setErrors({ 'incorrect': true });
          this.validateAllFormFields(this.cardDetailForm);
        }
      } else {
        this.validateAllFormFields(this.cardDetailForm);
      }
  
    }
  
    dosecurePayMode(obj, sessionID) {
      const baseSite = this.singletonServ.catalogVersion;
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        let _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        this.payAuthentication(_user.token, _user.email, _user.code, obj, sessionID);
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          let _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.payAuthentication(_guest.token, 'anonymous', _guest.guid, obj, sessionID);
        }
      }
    }
   payAuthentication(token, email, code, obj, sessionID){
    const that=this;
    this.cyberService.paymentAuthentication(token, email, code, obj, sessionID).pipe(takeUntil(this.unsubscribe$)).subscribe((resp:any) => {
     Cardinal.off("payments.setupComplete");
      if (resp) {
         if(!resp.isenabledforSecurePayment){
          this.paymentContinue(); 
         } else {
          let _acsUrl = resp['ACSUrl'];
          let _payload = resp['payReq'];
          let _transactionID = resp['transactionID'];
          Cardinal.continue('cca',
            {
              AcsUrl: _acsUrl,
              Payload: _payload
            },
            {
              OrderDetails:
              {
                TransactionId: _transactionID
              }
            });
         Cardinal.on('payments.validated', function(decodedResponseData, responseJWT){         
               if(decodedResponseData.Payment){
                const _transactionID= decodedResponseData.Payment.ProcessorTransactionId;
                that.validatePayMode(token, email, code, obj,responseJWT,_transactionID);
              }else{
                this.ngZone.run(() =>{ 
                  this.loadingText="loading";
                  this.loading = false;
                  this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
                  });
              }
         }); 
    }
  
      }
    }, err => {
      this.ngZone.run(() =>{ 
        this.loadingText="loading";
        this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
        this.loading = false;
        if(err.errors){
          const _baseSite = this.singletonServ.catalogVersion;
          if(err.errors[0]['type']== "InvalidTokenError"){
            if(this.singletonServ.getStoreData(_baseSite.guest)){
              this.singletonServ.removeItem(_baseSite.guest);
             } else if(this.singletonServ.getStoreData(_baseSite.reg)){
              this.singletonServ.removeItem(_baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
          }
        }
        });

    });
   }
    validatePayMode(token, email, code, obj,responseJWT,transactionID){
      this.cyberService.validatePayMode(token, email, code, obj,responseJWT,transactionID).pipe(takeUntil(this.validUnsubscribe$)).subscribe((resp)=>{
        if(resp){     
            Cardinal.off('payments.validated');
            this.singletonServ.confirmOrderObj = resp;
            resp['reg'] = (email !="anonymous")? true:false;
            resp['token'] = token;
            this.singletonServ.setStoreData("order", JSON.stringify(resp));
            this.ngZone.run(() =>{ 
              this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
              this.loading=false;
              this.router.navigate(['/checkout','confirmation']);
              });
     
        }else{
          this.ngZone.run(() =>{ 
            this.loadingText="loading";
            this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
            this.loading=false;
            });  
        }
      },err=>{
        this.ngZone.run(() =>{ 
          this.loadingText="loading";
        this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
        this.loading=false;
        });
      });
    }
    paymentContinue() {
      event.stopPropagation();
      const cardForm = this.cardDetailForm.value.paymentCard;
      const _terms = this.cardDetailForm.value.terms;
      let _raiseCardMonthValidatn = false;
      const date = new Date();
      if (parseInt(cardForm.year) == date.getFullYear()) {
        if (parseInt(cardForm.month) <= date.getMonth()) {
          _raiseCardMonthValidatn = true;
        }
      }
      if (this.cardDetailForm.valid) {
        if (!_raiseCardMonthValidatn) {
          this.loading = true;
          let state = '';
          const shipAddress = this.shippingAddress.customerAddress;
          if (shipAddress.district) {
            if (typeof shipAddress.district == "object") {
              state = shipAddress.district.name;
            } else {
              state = shipAddress.district;
            }
          }
          const obj = {
            accountHolderName: cardForm.firstName + " " + cardForm.lastName,
            cardNumber: cardForm.cardNumber.trim(),
            cardType: {
              code: cardForm.cardType
            },
            expiryMonth: cardForm.month,
            expiryYear: cardForm.year,
            issueNumber: cardForm.cvv,
            defaultPayment: true,
            billingAddress: shipAddress
          };
          obj['billingAddress']['district'] = state;
          obj['newsletterOptIn']=(_terms.policy)?_terms.policy:false;
          this.secureDBCPayment(obj, cardForm);
        } else {
          this.cardDetailForm.controls['paymentCard']['controls'].month.setValue(null);
          this.cardDetailForm.controls['paymentCard']['controls'].month.setErrors({ 'incorrect': true });
          this.validateAllFormFields(this.cardDetailForm);
        }
      } else {
        this.validateAllFormFields(this.cardDetailForm);
      }
    }
  
    secureDBCPayment(obj, cardForm) {
      Cardinal.off("payments.setupComplete");
      const baseSite = this.singletonServ.catalogVersion;
      this.singletonServ.sendMessage({ toggleOverlay: { status: true } });
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const data = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        const code = data["code"];
        const _email = data["email"];
        this.confirmOrder(data.token, obj, _email, code);
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.guestOrder(_user.token, obj, _user['guid'], cardForm.cvv);
        }
      }
    }
  

  /**Order calls */

  guestOrder(tokenId, obj, cartGUID, cvv) {
    const baseSite = this.singletonServ.catalogVersion;
    this.cyberService
      .confirmOrder(tokenId, obj, 'anonymous', cartGUID)
      .subscribe(
        resp => {
          this.singletonServ.confirmOrderObj = resp;
          resp["securityCheck"] = cvv;
          resp['reg'] = false;
          resp['token'] = tokenId;
       
          const _order = {
            interactionType: "SALES_ORDER",
            marketingLocationId: baseSite.store,
            sourceObjectId: resp['code'],
            sourceSystemId: "ATGWEB",
            marketingArea: "MB",
            setSourceObjectType: "ORDER"
          };
          this.singletonServ.setStoreData("order", JSON.stringify(resp));
          this.ngZone.run(() =>{ 
            this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
            this.loading=false;
            this.router.navigate(['/checkout','confirmation']);
            });
        },
        err => {
          this.ngZone.run(() =>{ 
          this.loading = false;
          this.loadingText="loading";
          this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
          });
        }
      );
  }
  confirmOrder(token, body, _email, code) {
    this.cyberService
      .confirmOrder(token, body, _email, code)
      .subscribe(
        resp => {
          this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
          this.singletonServ.confirmOrderObj = resp;
          resp['reg'] = (_email !="anonymous")? true:false;
          resp['email'] = _email;
          resp['token'] = token;
          this.singletonServ.setStoreData("order", JSON.stringify(resp));
          const _form = this.cardDetailForm.value;
          if (_form.saveCard) {
            body['firstName'] = body['billingAddress']['firstName'];
            body['lastName'] = body['billingAddress']['lastName'];
            this.cyberService.postCardDetails(token, _email, body).subscribe((saveCard) => {
               this.ngZone.run(() =>{ 
                    this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
                    this.loading=false;
                    this.router.navigate(['/checkout','confirmation']);
                });
            }, err => {

              this.ngZone.run(() =>{ 
                this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
                this.loading=false;
                this.router.navigate(['/checkout','confirmation']);
                });
            });
            
          } else {

            this.ngZone.run(() => {
            this.loading = false;
            this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
            this.router.navigate(['/checkout','confirmation']);
          });
          }

        },
        err => {
          this.ngZone.run(() =>{ 
          this.loading = false;
          this.loadingText="loading";
          this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
          });
       
        }
      );
  }


    /*End of Normal Form Checkout */

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
