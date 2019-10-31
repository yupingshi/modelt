import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";
import { FormBuilder, FormGroup, Validators,FormControl } from "@angular/forms";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { cardFormComponentService } from "../card-form/card-form.service";
import { SingletonService } from "../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { filter, map, take, toArray } from 'rxjs/operators';
declare var Cardinal: any;
declare var window: any;
@Component({
  selector: "app-sepa",
  templateUrl: "./sepa.component.html",
  styleUrls: ["./sepa.component.scss"]
})
export class SepaComponent implements OnInit, OnChanges {
  @Input() cartData: any;
  @Input() deliveryInfo: any;
  billingAddress: boolean;
  shippingAddress: any;
  loading: boolean;
  payType: boolean;
  sepaDetailForm: FormGroup;
  isValidFormSubmitted:any;
  jwtToken:string;
  sessionID:any;

  constructor(
    private fb: FormBuilder,
    public location: Location,
    public router: Router,
    public singletonServ: SingletonService,
    public route: ActivatedRoute,
    public _checkOutForm: PaymentGateWayForm,
    public cyberService: cardFormComponentService
  ) {
    const _sepaForm=this._checkOutForm.getSepaForm();
    _sepaForm['terms']=this.fb.group({
      terms:['',[Validators.required]],
      policy:['']
    });
    _sepaForm['billingForm']=['',[Validators.required]]
    this.sepaDetailForm = this.fb.group(_sepaForm);
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    if (changes["deliveryInfo"]) {
      if (changes["deliveryInfo"]["currentValue"] != undefined) {
        let _dt = changes["deliveryInfo"]["currentValue"];
        that.shippingAddress = _dt;
        that.payType =true;
        if (_dt.geoPoint) {
          that.billingAddress = false;
        } else {
          that.billingAddress = true;
        }
      }
    }
  }
  getTypeOf(val){
    if((typeof(val)=='boolean')&&!val){
      return true
    }
    return false
  }
  ngOnInit() {
    if(this.singletonServ.getStoreData('paypalGuest')){
      this.singletonServ.removeItem('paypalGuest');
    }    
    if(this.singletonServ.getStoreData('order')){
      this.singletonServ.removeItem('order');
    }
    this.generateJWT();
  }
  
  

  generateJWT() {
    const baseSite = this.singletonServ.catalogVersion;
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

  generateJWTToken(token, email, code) {
    this.cyberService.generateJWT(token, email, code).subscribe((response: any) => {
      if (response) {
        this.jwtToken = response.jwtToken;
      }
    }, error => {

    });
  }

  onChangeBillingAddress() {
    this.billingAddress = false;
  }
  onSetBillingAddress(data) {
    this.billingAddress = true;
    this.shippingAddress.customerAddress=data.address;
  }
  onSepaDetailSubmit(event) {
    const that = this;
    const _val = this.sepaDetailForm.value;
    const baseSite = this.singletonServ.catalogVersion;
    const _obj = {
      accountHolderName: _val.firstName + " " + _val.lastName,
      paymentType: "sepa",
      iban: _val.iban,
      bic: _val.bic,
      bankName: _val.bankName,
      cardNumber:"4111111111111111",
      expiryMonth:"09",
      expiryYear:"2020",
      cardType: {
        code: "sepa"
      },
      defaultPayment: true,
      billingAddress: that.shippingAddress.customerAddress
    };
    if(this.sepaDetailForm.valid){
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.cyberService
        .confirmOrder(_user.token, _obj, _user.email, _user.code)
        .subscribe(
          resp => {
            that.singletonServ.confirmOrderObj = resp;
            resp["reg"] = true;
            resp["email"] = _user.email;
            resp["token"] = _user.token;
            this.singletonServ.setStoreData("order", JSON.stringify(resp));
            that.loading = false;
            that.router.navigate(["/checkout", "confirmation"]);
          },
          err => {}
        );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.cyberService
          .confirmOrder(_user.token, _obj, "anonymous", _user.guid)
          .subscribe(
            response => {
              that.singletonServ.confirmOrderObj = response;
              response["reg"] = false;
              response["token"] = _user.token;
              this.singletonServ.setStoreData("order", JSON.stringify(response));
              that.router.navigate(["/checkout", "confirmation"]);
            },
            err => {}
          );
      }
    }
   }else{
    this.validateAllFormFields(this.sepaDetailForm);  
   }
  }
   
  // onSepaDetailSubmit(event) {
  //   const that = this;
  //   const jwt = this.jwtToken;
  //   if ('Cardinal' in window) {
  //     Cardinal.configure({ logging: { level: 'verbose' } });
  //     Cardinal.on("payments.setupComplete", function(setupCompleteData){
  //       console.log(setupCompleteData);
  //       if(setupCompleteData){
  //          that.sessionID=setupCompleteData.sessionId;
  //          that.setPay(setupCompleteData.sessionId);
  //        }
  //     });        
  //     Cardinal.setup('init', {
  //       jwt: jwt
  //     });
     
  //   }

  // }
   setPay(sessionId){
    event.stopPropagation();
    const that = this;
    const _val = this.sepaDetailForm.value;
    Cardinal.trigger("bin.process", _val.iban);
    const baseSite = this.singletonServ.catalogVersion;
    const _obj = {
      accountHolderName: _val.firstName + " " + _val.lastName,
      paymentType: "sepa",
      iban: _val.iban,
      bic: _val.bic,
      bankName: _val.bankName,
      cardNumber:"4111111111111111",
      expiryMonth:"09",
      expiryYear:"2020",
      cardType: {
        code: "sepa"
      },
      defaultPayment: true,
      billingAddress: that.shippingAddress.customerAddress
    };
    const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
    if(this.sepaDetailForm.valid){
      // this.dosecurePayMode(_obj, sessionId);
      this.cyberService
        .confirmOrder(_user.token, _obj, _user.email, _user.code)
        .subscribe(
          resp => {
            that.singletonServ.confirmOrderObj = resp;
            resp["reg"] = true;
            resp["email"] = _user.email;
            resp["token"] = _user.token;
            this.singletonServ.setStoreData("order", JSON.stringify(resp));
            that.loading = false;
            that.router.navigate(["/checkout", "confirmation"]);
          },
          err => {}
        );

   }else{
    this.validateAllFormFields(this.sepaDetailForm);  
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
   this.cyberService.paymentAuthentication(token, email, code, obj, sessionID).subscribe((resp) => {
      Cardinal.off("payments.setupComplete");
     if (resp) {
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
              const _transactionID= decodedResponseData.Payment.ProcessorTransactionId;
              that.validatePayMode(token, email, code, obj,responseJWT,_transactionID);
     }); 

     }
   }, err => {
 
   });
  }
   validatePayMode(token, email, code, obj,responseJWT,transactionID){
     this.cyberService.validatePayMode(token, email, code, obj,responseJWT,transactionID).subscribe((resp)=>{
            Cardinal.off('payments.validated');
      if(resp){   
           this.singletonServ.confirmOrderObj = resp;
           resp['reg'] = false;
           resp['token'] = token;
           this.singletonServ.setStoreData("order", JSON.stringify(resp));
           this.loading = false;
           this.singletonServ.sendMessage({ toggleOverlay: { status: false } });
           this.router.navigate(['/checkout', 'confirmation']);
       }
     },err=>{
 
     });
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
  onResetAddress() {
    this.billingAddress = true;
  }
  onSetTerms(data){
    if(data.check){
      this.sepaDetailForm['controls']['terms']['controls']['terms'].setValue(true);
    }else{
      this.sepaDetailForm['controls']['terms']['controls']['terms'].setValue(false);
      this.sepaDetailForm['controls']['terms']['controls']['terms'].setErrors({'incorrect': true});
    }
}
onSetPolicyTerms(data){
  if(data.check){
    this.sepaDetailForm['controls']['terms']['controls']['policy'].setValue(true);
  }else{
    this.sepaDetailForm['controls']['terms']['controls']['policy'].setValue('');
  }
}
}
