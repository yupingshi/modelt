import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { SingletonService } from "../../services/singleton.service";
import { cardFormComponentService } from "../../paymentType/card-form/card-form.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
declare var $:any;
@Component({
  selector: 'app-paytype',
  templateUrl: './paytype.component.html',
  styleUrls: ['./paytype.component.scss']
})
export class PaytypeComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() deliveryInfo: any;
  @Input() paymentBlock: boolean;
  @Input() expressCheckout: any;
  savedCards: boolean;
  selectedPayType: string;
  cartData: any;
  shippingInfo: any;
  payType: Array<any>;
  switchPaymentType: string;
  disabled: boolean = true;
  expressCard: boolean;
  pageLoad: boolean;
  constructor(
    public singletonServ: SingletonService,
    public cyberService: cardFormComponentService,
    public router: Router,
    public route: ActivatedRoute,
  ) {
    this.switchPaymentType = "";
    this.pageLoad = false;
  }
  ngOnInit() {
    // const url  = "https://songbirdstag.cardinalcommerce.com/cardinalcruise/v1/songbird.js";
    // let _checkUri=this.isMyScriptLoaded(url)
    //   if(_checkUri){
    //       this.appendScript(url);
    //   }
    this.switchPaymentType = "";

  }
  appendScript(url){
    let googleMapsScript = document.createElement('script')
     googleMapsScript.setAttribute('src', url)
     document.head.appendChild(googleMapsScript)
  }
  isMyScriptLoaded(url) {
    if (!url) url = "https://songbirdstag.cardinalcommerce.com/cardinalcruise/v1/songbird.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
  ngAfterViewInit() {
    this.singletonServ.getMessage().subscribe(message => {
      if (message.updatePayTypeCard) {
        this.getSavedCards();
      } else if (message.payTypeCardDetails){
        this.shippingInfo['cardForm']['listOfCards'] = message.cardList;
        this.pageLoad=false;
      } else if (message.setLoading){
        this.pageLoad=message.setLoading.status;
      }
    });

  }
  getSavedCards() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));      
      this.cyberService.getUserSavedCards(user.token, user.email).subscribe((response) => {
        if (response) {
          this.shippingInfo['cardForm'] = {
            listOfCards: []
          }
          if (response.length != 0) {
            response.sort((a, b) => {
              return b.isDefault - a.isDefault;
            });
            this.shippingInfo['cardForm']['listOfCards'] = response;
          }
        }
        this.pageLoad = false;
      }, err => {
        this.pageLoad = false;
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
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const baseSite = this.singletonServ.catalogVersion;
    if (changes["deliveryInfo"]) {
      if (changes["deliveryInfo"]["currentValue"] != undefined) {
        this.shippingInfo = changes["deliveryInfo"]["currentValue"];
        this.constructPayType();
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          this.pageLoad = true;
          this.getSavedCards();
        } else {
          this.pageLoad = false;
        }
      }
    }
    if (changes["expressCheckout"]) {
      if (changes["expressCheckout"]["currentValue"] != undefined) {
        if (changes["expressCheckout"]["currentValue"]) {
          this.expressCard = true;
          this.switchPaymentType = 'credit';
          this.payType.map((obj, i) => {
            if (obj.value == 'credit') {
              obj['selected'] = !obj['selected'];
            } else {
              obj['selected'] = false;
            }
          });

        } else {
          this.expressCard = false;
        }

      }
    }
  }
  constructPayType() {
    const baseSite = this.singletonServ.catalogVersion;
    const _payType = [
      {
        name: 'Credit or Debit card',
        value: 'credit'

      },
      {
        name: 'PayPal',
        value: 'paypal'
      },
      {
        name: 'Gift Card',
        value: 'gift',
        disabled:this.checkGiftCardEntry()
      }
    ];

    if (baseSite.isoCode == "DE") {
      const klarna = [{
        name: 'Klarna',
        value: 'klarna'
      }, {
        name: 'SEPA',
        value: 'sepa'
      }];
      const _pay = _.unionBy(_payType, klarna, 'value');
      _.uniq(_pay)
      this.payType = _pay
    } else {
      this.payType = _payType
    }
  }
  checkGiftCardEntry(){
    if ( this.singletonServ.cartObj ){
     let cart = this.singletonServ.cartObj;
     let _checkGiftEntry = _.find(cart.entries,(obj)=>{
      return obj.product.isGiftCard
     })
       if(_checkGiftEntry){
         return true
       }else{
         return false
       }
    }
    return false
  }
  onDeleveryPayType(pay, k,status) {
    if (!status) {
      this.payType.map((obj, i) => {
        if (i == k) {
          this.selectedPayType = pay;
          this.switchPaymentType = pay;
          obj['selected'] = true;
        } else {
          obj['selected'] = false;
        }
      });
    }else{
    }
  }
}
