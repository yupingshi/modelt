import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChange,
  AfterViewInit,
  EventEmitter
} from "@angular/core";
import {
  trigger, 
  transition, 
  state, 
  animate, 
  style, 
  AnimationEvent 
 } from '@angular/animations';
import { Router, ActivatedRoute } from "@angular/router";
import { SingletonService } from "../../services/singleton.service";
import { DeliveryComponentService } from "../delivery/delivery.service";
import { HeaderComponentService } from "../../component/header/header.service";
import * as _ from "lodash";
@Component({
  selector: "app-order-summary",
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        display: 'block',
        visibility: 'visible',
         animationDuration: '1s',
         animationDelay: '1s',
         maxHeight: '175px'
      })),
      state('closed', style({
        display: 'none',
        visibility: 'hidden',
        maxHeight: '0px',
        opacity: 0,
        animationDuration: '1s',
        animationDelay: '1s'
       })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ])
  ],
  templateUrl: "./order-summary.component.html",
  styleUrls: ["./order-summary.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OrderSummaryComponent implements OnInit, AfterViewInit, OnChanges {  
  @Input() logging = false;
  @Input() updateCart: any;
  @Input() osDetail: any;
  @Input() overlay: boolean;
  @Output() postCartData: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateCartData: EventEmitter<any> = new EventEmitter<any>();
  giftMessage: string;
  editMessage: boolean;
  textlength: number;
  cartData: any;
  showCart: boolean;
  bundleCount: number = 0;
  bundleProductCount: number = 0;
  mergeCart: boolean = false;
  callFailTime: number = 0;
  usSpecific: boolean;
  usSaleTax: boolean;
  controlMouseDown:boolean;
  deSiteSpecific:boolean;
  constructor(
    public singletonServ: SingletonService,
    public headerServ: HeaderComponentService,
    public deliveryServ: DeliveryComponentService,
    public router: Router,
    public route: ActivatedRoute
  ) {


   }

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      if (baseSite.isoCode == "DE") {
        this.deSiteSpecific = true;
      } else {
        this.deSiteSpecific = false;
      }
  }
 }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    const baseSite = this.singletonServ.catalogVersion;
    if (changes["overlay"]) {
      if (changes["overlay"]["currentValue"] != undefined) {
        that.showCart = changes["overlay"]["currentValue"];
      }
    }
    if (changes["osDetail"]) {
      if (changes["osDetail"]["currentValue"] != undefined) {
       let _osdt = changes["osDetail"]["currentValue"];
        that.fetchCartDetail(_osdt);
        if (baseSite.isoCode == "US") {
          this.usSpecific = true;
        }
      }
    }

  }
  ngAfterViewInit() {
  }
  onReturnCheckOut() {
    this.showCart = false;
  }


  getBundleProductQuntity(entry, bottle) {
    return bottle.quantity / entry.quantity;
  }
  getBundleContent(text) {
    if (text.bundleTemplateId) {
      if (text.bundleTemplateId.indexOf('6') != -1) {
        return 'Pick & Mix x 6';
      } else {
        return 'Pick & Mix x 3';
      }
    }
    return 'Pick & Mix 3';
  }

  onChangeText(event) {
    let textLength = event.target.value.length;
    this.textlength = 250 - textLength;
  }
  onViewMessage(data) {
    this.editMessage = true;
    this.textlength = this.cartData.giftBoxMessage.length;
    this.giftMessage = this.cartData.giftBoxMessage;
  }
  onChangeMessage() {
    const baseSite = this.singletonServ.catalogVersion;
    const body = {
      giftBoxMessage: this.giftMessage
    };
    this.editMessage = false;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.deliveryServ
        .giftMessage(user.token, body, user.email, user.code)
        .subscribe(
          response => {          
            let _obj = { updatFullCart: true }
            this.singletonServ.sendMessage(_obj);
          },
          err => { }
        );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.deliveryServ
          .giftMessage(user.token, body, 'anonymous', user.guid)
          .subscribe(
            response => {
              let _obj = { updatFullCart: true }
              this.singletonServ.sendMessage(_obj);
            },
            err => { }
          );
      }
    }
  }

  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  fetchCartDetail(data) {
    let cart=this.singletonServ.setupEntryStream(data);
    this.cartData = cart;
    this.singletonServ.cartObj = cart;
    this.singletonServ.sendMessage({discardDlMethodLoader:true});
    this.postCartData.emit(cart);
  }
  getBundleTotalPrice(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      const _price = "&#163;&nbsp;" + (data.bundlePrice * this.getBundleQuantity(data));

      return _price;
    } else if (baseSite.isoCode === "EU") {
      const _price = (data.bundlePrice * this.getBundleQuantity(data)) + "&nbsp;&#128;";

      return _price;
    } else if (baseSite.isoCode === "DE") {
      const _price = (data.bundlePrice * this.getBundleQuantity(data)) + "&nbsp;&#8364;";

      return _price;
    }
  }
  getBundleQuantity(entry) {
    let p = 0;
    let i;
    for (i = 0; i < entry.product.length; i++) {
      if (!entry.product[i]['product']['isSample']) {
        let qty = entry.product[i].quantity;
        p = p + qty;
      }
    }

    if (entry.bundleTemplateId) {
      if (entry.bundleTemplateId.indexOf("6") != -1) {
        p = p / 6
      } else {
        p = p / 3
      }
    }
    return p;
  }
  getTotalPrice(entry) {
    if (entry.totalPrice.value != 0) { return entry.totalPrice.formattedValue } else { return 'FREE' }
  }


  getBundlePrice(data) {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite.isoCode === "GB") {
      const _price = "&#163;&nbsp;" + Math.ceil(data.bundlePrice);

      return _price;
    } else if (baseSite.isoCode === "EU") {
      const _price = Math.ceil(data.bundlePrice) + "&nbsp;&#128;";

      return _price;
    } else if (baseSite.isoCode === "DE") {
      const _price = Math.ceil(data.bundlePrice) + "&nbsp;&#8364;";

      return _price;
    }
  }
  onEditBasket(event) {
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.guest)) {
      this.singletonServ.sendMessage({toggleOverlay:{status:true}});
      if(event.ctrlKey && event.which === 1){
        this.controlMouseDown=true;
      }
      this.setGuestUserSetUp();
    } else {
      if(event.ctrlKey && event.which === 1){
        window.open("store/mbcart");
      } else {
        this.goToBasket();
      }

    }
  }
  goToBasket() {
    if(this.controlMouseDown){
      window.open("store/mbcart");
    }else{
      this.singletonServ.checkoutStatus = true;
      const obj = { checkoutStatus: true, store: true,basket:true };
      this.singletonServ.sendMessage(obj);
    }
  }


  setGuestUserSetUp() {
    const baseSite = this.singletonServ.catalogVersion;
    const _obj = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
    this.mergeCart = true;
    this.deliveryServ.generateCartId(_obj.token, 'anonymous').subscribe(
      response => {
        const guid = response["guid"];
        this.mergeGuestCart(_obj.token, guid, _obj.guid);
      },
      error => {
        if(this.controlMouseDown){
          window.open("store/mbcart");
        }else{
          this.singletonServ.removeItem(baseSite.guest);
          this.goToBasket();
        }
       
      }
    );
  }

  mergeGuestCart(token, code, oldCode) {
    const baseSite = this.singletonServ.catalogVersion;
    this.deliveryServ.mergeCart(token, code, oldCode).subscribe((response) => {
      const _obj = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      _obj['token']=token;
      _obj['guid']=code;
      this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_obj));
      this.goToBasket();
    }, err => {
      this.singletonServ.removeItem(baseSite.guest);
      this.goToBasket();
    });
  }
  onAnimationEvent ( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
  }

}
