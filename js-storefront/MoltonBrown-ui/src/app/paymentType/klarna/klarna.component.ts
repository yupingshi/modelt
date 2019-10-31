import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { cardFormComponentService } from "../card-form/card-form.service";
import { SingletonService } from "../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { filter, map, take, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-klarna',
  templateUrl: './klarna.component.html',
  styleUrls: ['./klarna.component.scss']
})
export class KlarnaComponent implements OnInit,OnChanges {
  @Input() cartData: any;
  @Input() deliveryInfo: any;
  billingAddress: boolean;
  shippingAddress: any;
  loading: boolean;
  payType:boolean;
  klarnaForm:FormGroup;
  errorMsg:boolean;
  constructor(
    private fb: FormBuilder,
    public location: Location,
    public router: Router,
    public singletonServ: SingletonService,
    public route: ActivatedRoute,
    public _checkOutForm: PaymentGateWayForm,
    public cyberService: cardFormComponentService
  ) { 
    this.klarnaForm =  this.fb.group({
      terms: this.fb.group({
        terms: ["", [Validators.required]],
        policy: [""]
      })
    });
  }
  onSetTerms(data) {
    if (data.check) {
      this.klarnaForm["controls"]["terms"]["controls"]["terms"].setValue(
        true
      );
    } else {
      this.klarnaForm["controls"]["terms"]["controls"]["terms"].setValue(
        false
      );
      this.klarnaForm["controls"]["terms"]["controls"]["terms"].setErrors({'incorrect': true});
    }
  }
  onSetPolicyTerms(data){
    if (data.check) {
      this.klarnaForm['controls']['terms']['controls']['policy'].setValue(true);
    } else {
      this.klarnaForm['controls']['terms']['controls']['policy'].setValue('');
    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that=this;
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
  ngOnInit() {
  }
  onChangeBillingAddress() {
    this.billingAddress=false;
  }
  onSetBillingAddress(data){
    this.billingAddress=true;
    this.shippingAddress.customerAddress=data.address;
   }
   onResetAddress(){
    this.billingAddress=true;
  }
   onKlarnaDetailSubmit(event){
     alert ('Still in process');
     this.errorMsg=true;
   }
}
