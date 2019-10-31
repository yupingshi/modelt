import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  SimpleChange
} from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import {PaypalService} from './paypal.service';
import { SingletonService } from "../../services/singleton.service";
import { PaymentGateWayForm } from "../../forms/paymentCard.form";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-paypal",
  templateUrl: "./paypal.component.html",
  styleUrls: ["./paypal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PaypalComponent implements OnInit {
  showSuccess: boolean;
  @Input() cartData: any;
  @Input() deliveryInfo: any;
  totalAmount: string;
  payType:boolean;
  entires: Array<any>;
  paypalForm:FormGroup;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public location: Location,
    public paypalServ:PaypalService,
    public singletonServ: SingletonService,
    private fb: FormBuilder,
    public _checkOutForm: PaymentGateWayForm
  ) {
this.paypalForm=this.fb.group(this._checkOutForm.getpaypal())
  }
  ngOnInit() {
    if(this.singletonServ.getStoreData('paypalGuest')){
      this.singletonServ.removeItem('paypalGuest');
    }
    if(this.singletonServ.getStoreData('order')){
      this.singletonServ.removeItem('order');
    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    if (changes["cartData"]) {
      if (changes["cartData"]["currentValue"] != undefined) {
       const cartData= changes["cartData"]["currentValue"]
        that.totalAmount=cartData.totalPriceWithTax.value;
        if (changes["cartData"]["currentValue"].entries) {
          const entries = [];
          changes["cartData"]["currentValue"].entries.map(resp => {
            let obj = {
              name: resp.product.name,
              quantity: 1,
              unit_amount: {
                currency_code: "USD",
                value: 10
              }
            };
            entries.push(obj);
          });
          that.entires = entries;
        }
      }
    }
    
  }
  onSetTerms(event){
    if(event.check){
      this.paypalForm.controls['terms'].setValue(true);
     }else{
      this.paypalForm.controls['terms'].setValue(false);
      this.paypalForm.controls['terms'].setErrors({'incorrect': true});
    }
  }
  onSetPolicyTerms(data){
    if (data.check) {
      this.paypalForm['controls']['policy'].setValue(true);
    } else {
      this.paypalForm['controls']['policy'].setValue('');
    }
  }
  getTypeOf(val){
    if((typeof(val)=='boolean')&&!val){
      return true
    }
    return false
  }

  getTotalAmount() {
    const that = this;
    let sum = 0;
    for (let i = 0; i < that.cartData["entries"].length; i++) {
      sum +=
        that.cartData["entries"][i]["quantity"] *
        that.cartData["entries"][i]["totalPrice"]["value"];
    }
  }
  onpaypalTap(event){

      const baseSite = this.singletonServ.catalogVersion;
      if(this.paypalForm.valid){
      const _billinaddress=this.deliveryInfo.customerAddress;
      this.payType=(this.deliveryInfo.payType)?true:false;
      let body={};
      if(_billinaddress){ 
        body['billingAddress']=   _billinaddress;
        body['billingAddress']['titleCode'] = "mr";
        body['billingAddress']['firstName']=(_billinaddress['firstName'])?_billinaddress['firstName']:'';
        body['billingAddress']['lastName']=(_billinaddress['lastName'])?_billinaddress['lastName']:'';
      }else{
        body['billingAddress']=this.deliveryInfo.address;
        delete body['billingAddress']['id'];
        body['billingAddress']['firstName']='first Name';
        body['billingAddress']['lastName']='last Name';
      }
      if(this.singletonServ.getStoreData(baseSite.reg)){
        const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        this.singletonServ.setStoreData('paypalReg',JSON.stringify(user));
        this.setPayPalServiceType(user.token,user.email,user.code,body);
      }else{
        if(this.singletonServ.getStoreData(baseSite.guest)){
          const user=JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          this.singletonServ.setStoreData('paypalGuest',JSON.stringify(user));
          this.setPayPalServiceType(user.token,'anonymous',user.guid,body);
        }
      }
    }else {
      this.validateAllFormFields(this.paypalForm); 
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
  onChangePolicy(event){

  }
  setPayPalServiceType(token,email,code,body){  
    this.paypalServ.setPayPalServiceType(token,email,code,body).subscribe((response)=>{
      if(response){
          if(response['responseCode']){
            const url='https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token='+response['responseCode'];
            window.location.href=url;
          }else{
            alert('Sorry no response from PayPal. Please try other payment mode');
          }
      }else{
             alert('Sorry no response from PayPal. Please try other payment mode');
      }
       },err=>{
        alert('DEV : Sorry something went wrong . Please clear cache try to start in new tab .');
    });
  }
}
