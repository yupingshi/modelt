import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChange,
  NgZone
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { cardFormComponentService } from "../card-form/card-form.service";
import { SingletonService } from "../../services/singleton.service";
import { GiftCardService } from "./giftcard.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import { filter, map, take, toArray } from 'rxjs/operators';
import * as _ from "lodash";
declare var Cardinal: any;
declare var window: any;
declare var $:any;
@Component({
  selector: "app-giftcard",
  templateUrl: "./giftcard.component.html",
  styleUrls: ["./giftcard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GiftcardComponent implements OnInit, OnChanges {
  @Input() cartData: any;
  @Input() deliveryInfo: any;
  expressCard: boolean;
  cardDetailForm: FormGroup;
  newCardDetailForm: FormGroup;
  expireMonth: Array<any>;
  expireYear: Array<any>;
  paymentGiftSouce: string;
  showCard: boolean;
  shippingAddress: any;
  loading: boolean;
  deviceInfo: any;
  mobileDevice: boolean;
  desktopDevice: boolean;
  billingAddress: boolean;
  submitted: boolean;
  customerBillingAddreess: any;
  storeAddress: any;
  payType: boolean;
  newCard: boolean;
  expressForm: any;
  cardList: Array<any> = [];
  isValidFormSubmitted: boolean;
  errorMessage:any;
  requestErrMsg:boolean;
  jwtToken:string;
  sessionID:any;
  constructor(
    public location: Location,
    public deviceService: DeviceDetectorService,
    public router: Router,
    public singletonServ: SingletonService,
    public giftServ: GiftCardService,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public _checkOutForm: PaymentGateWayForm,
    public cyberService: cardFormComponentService,
    private translate: TranslateServiceSubService,
    public ngZone:NgZone
  ) {
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
        const _dt = changes["deliveryInfo"]["currentValue"];
        this.newCard = false;
        this.expressForm = _dt;
        this.shippingAddress = _dt;
        if (_dt["storeType"]) {
            this.storeAddress =_dt["customerAddress"];
            this.shippingAddress['customerAddress']=_dt["customerAddress"];
        }
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          if (_dt["cardForm"]) {
            if (_dt["cardForm"]["listOfCards"]) {
              if (_dt["cardForm"]["listOfCards"].length != 0) {
                this.cardList = _dt["cardForm"]["listOfCards"];
                const index = _.findIndex(this.cardList, obj => {
                  return obj.isDefault;
                });
              }
            }
          }
        } else {
          if (_dt.geoPoint) {
            this.billingAddress = (this.shippingAddress.customerAddress)?true:false;
            this.payType = false;
          } else {
            this.billingAddress = true;
            this.payType = true;
          }
        }
      }
    }
  }
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;

    if (this.singletonServ.getStoreData("paypalGuest")) {
      this.singletonServ.removeItem("paypalGuest");
    }
    if (this.singletonServ.getStoreData("order")) {
      this.singletonServ.removeItem("order");
    }
    if(this.singletonServ.getStoreData('accCreationDtl')){
      this.singletonServ.removeItem('accCreationDtl');
    }

    this.getDeviceInfo();
    this.paymentGiftSouce = "";
    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
    this. generateJWT();
  }
  onSetTerms(data) {
    if (data.check) {
      this.cardDetailForm["controls"]["terms"]["controls"]["terms"].setValue(
        true
      );
    } else {
      this.cardDetailForm["controls"]["terms"]["controls"]["terms"].setValue(
     false
      );
      this.cardDetailForm["controls"]["terms"]["controls"]["terms"].setErrors({'incorrect': true});
    }
  }
  onSetPolicyTerms(data){
    if (data.check) {
      this.cardDetailForm['controls']['terms']['controls']['policy'].setValue(true);
    } else {
      this.cardDetailForm['controls']['terms']['controls']['policy'].setValue('');
    }
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
    }, error => {

    });
  }

  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  onChangePaymentType(bol) {
    const baseSite = this.singletonServ.catalogVersion;
    if (bol) {
      this.paymentGiftSouce = "gift";
      if (this.cardDetailForm) {
        let cardDetailForm = this.fb.group({
          giftcard: this.fb.group(this._checkOutForm.getGiftForm()),
          terms: this.fb.group({
            terms: ["", [Validators.required]],
            policy: [""]
          })
        });
        cardDetailForm["controls"]["terms"]["controls"]["terms"].patchValue(
          this.cardDetailForm["controls"]["terms"]["controls"]["terms"].value
        );
        cardDetailForm["controls"]["giftcard"].patchValue(
          this.cardDetailForm["controls"]["giftcard"].value
        );
        this.cardDetailForm = cardDetailForm;
      } else {
        this.cardDetailForm = this.fb.group({
          giftcard: this.fb.group(this._checkOutForm.getGiftForm()),
          terms: this.fb.group({
            terms: ["", [Validators.required]],
            policy: [""]
          })
        });
      }
      this.newCard = false;
      this.showCard = false;
    } else {
      this.paymentGiftSouce = "gift";
      this.showCard = true;

      if (this.singletonServ.getStoreData(baseSite.reg)) {
    
        if (this.shippingAddress) {
          if (this.shippingAddress.cardForm.listOfCards) {
            if (this.shippingAddress.cardForm.listOfCards.length != 0) {
              this.expressCard = true;
              let cardDetailForm = this.fb.group({
                giftcard: this.fb.group(this._checkOutForm.getGiftForm()),
                paymentCard: this.fb.group(
                  this._checkOutForm.getExpressCheckoutForm()
                ),
                terms: this.fb.group({
                  terms: ["", [Validators.required]],
                  policy: [""]
                })
              });
              let cards = this.cardList;
              const index = _.findIndex(cards, obj => {
                return obj.isDefault;
              });
              if (index != -1) {
                cardDetailForm.controls.paymentCard["controls"][
                  "cardType"
                ].patchValue(cards[index]);
              }
              if (this.cardDetailForm) {
                cardDetailForm["controls"]["terms"]["controls"][
                  "terms"
                ].patchValue(
                  this.cardDetailForm["controls"]["terms"]["controls"]["terms"]
                    .value
                );
                cardDetailForm["controls"]["giftcard"].patchValue(
                  this.cardDetailForm["controls"]["giftcard"].value
                );
                this.cardDetailForm = cardDetailForm;
              } else {
                this.cardDetailForm = cardDetailForm;
              }
            } else {
              this.splitFormConstruct();
            }
          } else {
            this.splitFormConstruct();
          }
        }

        if (this.shippingAddress.geoPoint) {
          this.billingAddress = (this.shippingAddress.customerAddress)?true:false;
          this.newCard=true;
          this.payType = false;
        } else {
          this.billingAddress = true;
          this.payType = true;
          this.newCard=false;
        }
      } else {
        this.splitFormConstruct();
        if (this.shippingAddress.geoPoint) {
          this.billingAddress = (this.shippingAddress.customerAddress)?true:false;
          this.newCard=true;
          this.payType = false;
        } else {
          this.billingAddress = true;
          this.payType = true;
          this.newCard=false;
        }
      }
    }
  }
  splitFormConstruct() {
    this.billingAddress = true;
    let cardDetailForm = this.fb.group({
      giftcard: this.fb.group(this._checkOutForm.getGiftForm()),
      paymentCard: this.fb.group(this._checkOutForm.getCardForm()),
      terms: this.fb.group({
        terms: ["", [Validators.required]],
        policy: [""]
      })
    });

    if (this.cardDetailForm) {
      cardDetailForm["controls"]["terms"]["controls"]["terms"].patchValue(
        this.cardDetailForm["controls"]["terms"]["controls"]["terms"].value
      );

      cardDetailForm["controls"]["giftcard"].patchValue(
        this.cardDetailForm["controls"]["giftcard"].value
      );
      if (this.cardDetailForm["controls"]["paymentCard"]) {
        cardDetailForm["controls"]["paymentCard"].patchValue(
          this.cardDetailForm["controls"]["paymentCard"].value
        );
      }
      this.cardDetailForm = cardDetailForm;
    } else {
      this.cardDetailForm = cardDetailForm;
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
  /* Split pay flow*/ 
  onGiftDetailSubmit(event) {    
    event.preventDefault();
    const that = this;
    const cardForm = this.cardDetailForm.value.giftcard;
    const _terms = this.cardDetailForm.value.paymentCard;
    const shipAddress = this.shippingAddress
      ? this.shippingAddress.customerAddress
      : false;
    if (shipAddress) {
      this.customerBillingAddreess = shipAddress;
      this.customerBillingAddreess['titleCode'] = "mr";
    } else {
      this.customerBillingAddreess = this.storeAddress;
      this.customerBillingAddreess["titleCode"] = "mr";
      this.customerBillingAddreess["firstName"] = cardForm.FirstName;
      this.customerBillingAddreess["lastName"] = cardForm.LastName;
    }
    let date =new Date();
    const giftCard = {
      accountHolderName: cardForm.FirstName+''+cardForm.LastName,
      cardNumber: cardForm.GivexCardNumber.trim(),
      cardType: {
        code: "mbGiftCard"
      },
      expiryMonth: "09",
      expiryYear: date.getFullYear()+1,
      defaultPayment: false,
      billingAddress: that.customerBillingAddreess
    };
    giftCard.billingAddress.firstName = giftCard.billingAddress.firstName
      ? giftCard.billingAddress.firstName
      : cardForm.FirstName;
    giftCard.billingAddress.lastName = giftCard.billingAddress.lastName
      ? giftCard.billingAddress.lastName
      : cardForm.LastName;
    
    if (!this.showCard) {
      this.giftCardFormSubmit(cardForm,giftCard);
    } else {
      this.splitFormSubmit(giftCard,cardForm);

   }
  }

splitFormSubmit( giftCard,cardForm){
  const that = this;
  const baseSite = this.singletonServ.catalogVersion;
  if (this.cardDetailForm.valid) {
    this.loading = true;
    $('html, body').animate({
      scrollTop: $("#mb_payment_header").offset().top-75
    }, 100);
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (!this.expressCard) {
        const cardDCForm = this.cardDetailForm.value.paymentCard;
        const obj = {
          accountHolderName: cardDCForm.firstName + "" + cardDCForm.lastName,
          cardNumber: cardDCForm.cardNumber.trim(),
          cardType: {
            code: cardDCForm.cardType
          },
          expiryMonth: cardDCForm.month,
          expiryYear: cardDCForm.year,
          issueNumber: cardDCForm.cvv,
          defaultPayment: true,
          billingAddress: that.customerBillingAddreess
        };
    
          this.splitPaymentMethod(
            obj,
            giftCard,
            user.token,
            user.code,
            user.email,
            cardForm
          );
      } else {
          this.expressSplitPay(  
            giftCard,
            user.token,
            user.code,
            user.email,
            cardForm);
      }
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
          const guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          if (!this.expressCard) {
            const cardDCForm = this.cardDetailForm.value.paymentCard;
            const obj = {
              accountHolderName: cardDCForm.firstName + "" + cardDCForm.lastName,
              cardNumber: cardDCForm.cardNumber.trim(),
              cardType: {
                code: cardDCForm.cardType
              },
              expiryMonth: cardDCForm.month,
              expiryYear: cardDCForm.year,
              issueNumber: cardDCForm.cvv,
              defaultPayment: true,
              billingAddress: that.customerBillingAddreess
            };
              this.splitPaymentMethod(
                obj,
                giftCard,
                guest.token,
                guest.guid,
                "anonymous",
                cardForm
              );
          } else {
              this.expressSplitPay(  
                giftCard,
                guest.token,
                guest.guid,
                "anonymous",
                cardForm);
          }
      }
  }
  } else {
    let formControls = this.cardDetailForm.controls;
    for (let k in formControls) {
      this.validateAllFormFields(this.cardDetailForm.controls[k]);
    }
  }
}

  giftCardFormSubmit(cardForm,giftCard){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    if (this.cardDetailForm.valid) {
      this.loading = true;
      $('html, body').animate({
        scrollTop: $("#mb_payment_header").offset().top-75
      }, 100);
      this.singletonServ.sendMessage({ toggleOverlay: { status: true } });
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        this.addPayMentDetails(
          cardForm,
          giftCard,
          user.token,
          user.code,
          user.email,
          true
        );
      } else {
        if (this.singletonServ.getStoreData(baseSite.guest)) {
          const guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.addPayMentDetails(
            cardForm,
            giftCard,
            guest.token,
            guest.guid,
            "anonymous",
            false
          );
        }
      }
    } else {
      let formControls = this.cardDetailForm.controls;
      for (let k in formControls) {
        if (k == "terms" || k == "giftcard") {
          that.validateAllFormFields(that.cardDetailForm.controls[k]);
        }
      }
    }
  }



  validateAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  expressSplitPay(  
    giftCard,
    token,
    code,
    email,
    cardForm){
    const that=this;
    const cardsList = this.expressForm.cardForm.listOfCards;
    const index = _.findIndex(cardsList, obj => {
      return obj.isDefault;
    });
    const profileId = cardsList[index]["profileID"];
    const card = {
      accountHolderName: cardsList[index]['cardType']['firstName']+" "+cardsList[index]['cardType']['lastName'],
      cardNumber: cardsList[index]["ccaccountnumber"],
      cardType: {
        code: cardsList[index]["cardType"]
      },
      expiryMonth: cardsList[index]["expirationmonth"],
      expiryYear: cardsList[index]["expirationyear"],
      issueNumber: this.cardDetailForm.value.paymentCard.secureCode,
      defaultPayment: true,
      billingAddress: that.customerBillingAddreess
    };

      this.expressSplitCard(
        card,
        giftCard,
        token,
        code,
        email,
        cardForm,
        profileId
      );


  }

  expressSplitCard(obj, giftCard, _token, _code, email, cardForm, id) {
    const that = this;
    const baseSite = this.singletonServ.catalogVersion;
    this.giftServ.addPaymentDetails(giftCard, _token, _code, email).subscribe(
      response => {
        if( baseSite.isoCode=="US" ){
          this.excuteExpressSplitPay(obj, _token, _code, email, cardForm, id);
       } else {
        const jwt = this.jwtToken;
        if ('Cardinal' in window) {
          Cardinal.configure({ logging: { level: 'verbose' } });
          Cardinal.on("payments.setupComplete", function(setupCompleteData){
            if(setupCompleteData){
               that.sessionID=setupCompleteData.sessionId;
               that.setEncryptPay(obj, _token, _code, email, cardForm, id,setupCompleteData.sessionId);
             }
          });        
          Cardinal.setup('init', {
            jwt: jwt
          });
          
        }
       }

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

  setEncryptPay( 
       card, 
      _token,
      _code,
       email,
       cardForm, 
       id,
       sessionId){

      const that =this;
      const _encryCardNumber=card.cardNumber;
      if(_encryCardNumber){
        const _cardNumber= _encryCardNumber.toUpperCase();
        const _binNumber=  _cardNumber.substring(0,_cardNumber.indexOf('X'));
        Cardinal.trigger("bin.process", _binNumber);
      }
      card['sessionID']=sessionId;
      this.giftServ
      .expressSplitCard(card, _token, _code, email, cardForm, id)
      .subscribe(
        (split:any) => {
          if(split) {
            if(split['ACSUrl']){
             let _acsUrl = split['ACSUrl'];
             let _payload = split['payReq'];
             let _transactionID = split['transactionID'];
               
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
                  delete  card['sessionID'];
                  console.log("payments.validated",decodedResponseData, responseJWT);
               
                  if(decodedResponseData.Payment){
                    const _transactionID= decodedResponseData.Payment.ProcessorTransactionId;
                  card['responseJWT'] = responseJWT;
                  card['transactionID'] = _transactionID;
                  that.excuteExpressSplitPay(
                    card,
                    _token, 
                    _code, 
                    email, 
                    cardForm, 
                    id);
                  }else{
                    this.ngZone.run(() =>{ 
                      this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
                      this.loading=false;
                      });
                  }
         });
     
     
            }else{
            delete  card['sessionID'];
            split["email"] = email;
            split["reg"] = (email == "anonymous") ? false : true;
            split["token"] = _token;
            this.singletonServ.setStoreData("order", JSON.stringify(split));
            this.ngZone.run(() =>{ 
              this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
              this.loading=false;
              this.router.navigate(['/checkout','confirmation']);
              });
            }
          }
        },err=>{
          this.ngZone.run(() =>{ 
            this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
            this.loading=false;
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

  splitPaymentMethod(obj, giftCard, _token, _code, email, cardForm) {
    const that = this;
    const baseSite = this.singletonServ.catalogVersion;
    this.giftServ.addPaymentDetails(giftCard, _token, _code, email).subscribe(
      payment => {
        if( baseSite.isoCode=="US" ){
           this.excuteSplitPay(obj, _token, _code, email, cardForm);
        } else {
          const jwt = this.jwtToken;
          if ('Cardinal' in window) {
            Cardinal.configure({ logging: { level: 'verbose' } });
            Cardinal.on("payments.setupComplete", function(setupCompleteData){
              console.log(setupCompleteData);
              if(setupCompleteData){
                 that.sessionID=setupCompleteData.sessionId;
                 that.setPay(obj, _token, _code, email, cardForm,setupCompleteData.sessionId);
               }
            });        
            Cardinal.setup('init', {
              jwt: jwt
            });
            
          }
        }
      },
      error => {
        this.loading = false;
      }
    );
  }
  excuteExpressSplitPay(
    obj,
    _token, 
    _code, 
    email, 
    cardForm, 
    id){
    this.giftServ
    .expressSplitCard(obj, _token, _code, email, cardForm, id)
    .subscribe(
      split => {
        split["email"] = email;
        split["reg"] = (email == "anonymous") ? false : true;
        split["token"] = _token;
        this.singletonServ.setStoreData("order", JSON.stringify(split));
        this.ngZone.run(() =>{ 
          this.singletonServ.sendMessage({ toggleOverlay: { status: false ,orderConfirmation:true} });
          this.loading=false;
          this.router.navigate(['/checkout','confirmation']);
          });
      },
      err => {
        this.ngZone.run(() =>{ 
          this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
          this.loading=false;
          });
        this.requestErrMsg=true;
        if(err.error){
        if(err.error["errors"]){
        this.errorMessage=err.error["errors"][0]['message'];
        }
       }
   
      }
    );
  }
  setPay(obj, _token, _code, email, cardForm,sessionId){
    const that=this;
      Cardinal.trigger("bin.process", obj.cardNumber);
      obj['sessionID']=sessionId;
      this.giftServ
      .splitPayment(obj, _token, _code, email, cardForm)
      .subscribe(
        (response:any) => {
          Cardinal.off("payments.setupComplete");
      if(response) {
       if(response['ACSUrl']){
        let _acsUrl = response['ACSUrl'];
        let _payload = response['payReq'];
        let _transactionID = response['transactionID'];
          
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
             delete  obj['sessionID'];
             console.log("payments.validated",decodedResponseData, responseJWT);
    
             if(decodedResponseData.Payment){
              const _transactionID= decodedResponseData.Payment.ProcessorTransactionId;
             obj['responseJWT'] = responseJWT;
             obj['transactionID'] = _transactionID;
             that.excuteSplitPay(obj, _token, _code, email, cardForm);
            }else{
              this.ngZone.run(() =>{ 
                this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
                this.loading=false;
                });
            }
    });


       }else{
      //  delete  obj['sessionID'];
      //    this.excuteSplitPay(obj, _token, _code, email, cardForm);
      response["email"] = email;
      response["reg"] = (email == "anonymous") ? false : true;
      response["token"] = _token;
      this.singletonServ.setStoreData("order", JSON.stringify(response));
      this.ngZone.run(() =>{ 
        this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
        this.loading=false;
        this.router.navigate(['/checkout','confirmation']);
        });
       }


      }    
        },err=>{
          this.ngZone.run(() =>{ 
            this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
            this.loading=false;
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


  excuteSplitPay(obj, _token, _code, email, cardForm){
    this.giftServ
    .splitPayment(obj, _token, _code, email, cardForm)
    .subscribe(
      response => {
        response["email"] = email;
        response["reg"] = (email == "anonymous") ? false : true;
        response["token"] = _token;
        this.singletonServ.setStoreData("order", JSON.stringify(response));
        this.ngZone.run(() =>{ 
          this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
          this.loading=false;
          this.router.navigate(['/checkout','confirmation']);
          });
      },
      error => {
        this.requestErrMsg=true;
        this.ngZone.run(() =>{ 
          this.requestErrMsg=true;
          this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
          this.loading=false;
          });
        if(error.error){
          if(error.error["errors"]){
            this.errorMessage=error.error["errors"][0]['message'];
          }
        } else {
          if(error.errorCode) {
            this.errorMessage = error.errorCode;
          }
        }
        

      }
    );
  }
  onSetBillingAddress(data) {
    this.billingAddress = true;
    this.newCard = false;
    this.shippingAddress["customerAddress"] = data.address;
  }
  onChangeBillingAddress() {
    this.billingAddress = false;
    this.newCard = true;
  }

  addPayMentDetails(cardForm, giftCard, token, code, email, status) {
    this.giftServ.addPaymentDetails(giftCard, token, code, email).subscribe(
      payment => {
        const _body = {
          FirstName: cardForm.FirstName,
          LastName: cardForm.LastName,
          giftcardnumber: cardForm.GivexCardNumber,
          giftcardpin: cardForm.GivexPinNumber,
          giftcardamount: cardForm.Amount
        };
        if (status) {
          this.giftCardService(_body, token, email, code);
        } else {
          this.giftCardService(_body, token, "anonymous", code);
        }
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
  giftCardService(body, token, email, code) {
    this.giftServ.giftCardService(body, token, email, code).subscribe(
      resp => {
        if (resp) {
          resp["email"] = email;
          resp["reg"] = (email == "anonymous" )? false : true;
          resp["token"] = token;
          this.singletonServ.setStoreData("order", JSON.stringify(resp));
          this.ngZone.run(() =>{ 
            this.singletonServ.sendMessage({ toggleOverlay: { status: false,orderConfirmation:true } });
            this.loading=false;
            this.router.navigate(['/checkout','confirmation']);
            });
        }
      },
      err => {
        this.ngZone.run(() =>{ 
          this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
          this.loading=false;
          });
        this.requestErrMsg=true;
        if(err.error){
        if(err.error["errors"]){
        this.errorMessage=err.error["errors"][0]['message'];
       }
      }
  
      }
    );
  }
  onResetAddress() {
    this.billingAddress = true;
    this.newCard=false;
  }
  onChangeCardType(event) {
    if (event.val == "amex") {
      this.cardDetailForm["controls"]["paymentCard"]["controls"][
        "cardNumber"
      ].setValidators([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15)
      ]);
    } else {
      this.cardDetailForm["controls"]["paymentCard"]["controls"][
        "cardNumber"
      ].setValidators([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]);
    }
    this.cardDetailForm["controls"]["paymentCard"]["controls"][
      "cvv"
    ].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]);
    this.cardDetailForm["controls"]["paymentCard"]["controls"][
      "cardNumber"
    ].updateValueAndValidity();
    this.cardDetailForm["controls"]["paymentCard"]["controls"][
      "cvv"
    ].updateValueAndValidity();
  }
  onChangeEncryptCard(card) {
    this.cardList=card.cardList;
    this.cardDetailForm["controls"]["paymentCard"].reset(); 
  }
  onAddNewCard() {
    this.newCard = true;
    this.newCardDetailForm = this.fb.group(this._checkOutForm.getCardForm());
  }
  cancelEMit(bol) {
    this.newCard = false;
  }
}
