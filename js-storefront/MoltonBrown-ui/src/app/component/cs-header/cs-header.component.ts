 import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { CSCustomerService } from "./cs-header.service";
import { RegistrationForm } from "../../forms/registration.form";
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { SingletonService } from "../../services/singleton.service";
import { patternValidator } from '../../forms/pattern-validator';
declare var window: any;
declare var $:any;
@Component({
  selector: "app-cs-header",
  templateUrl: "./cs-header.component.html",
  styleUrls: ["./cs-header.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CsHeaderComponent implements OnInit {
  @ViewChild('csAgentRef') csAgentRef:ElementRef;
  @ViewChild('customerRef') customerRef:ElementRef;
  asmCustomer: boolean;
  authForm: FormGroup;
  ASMCustomerform: FormGroup;
  csAgent: boolean;
  searchBlock: boolean;
  searchResults: any;
  toggleAsmHead: boolean;
  searchOrderResults: any;
  searchOrderBlock: boolean;
  customerDetail: any;
  startSession: boolean;
  timex: any;
  seconds: any;
  retrieveOrder: boolean;
  hours: any;
  csAgentName: string;
  unknownUser: boolean;
  errMsgObj: any;
  csAgentLogged:boolean;
  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    public fb: FormBuilder,
    public customerForm: RegistrationForm,
    public csService: CSCustomerService
  ) {
    this.errMsgObj = {
      status: false,
      description: 'Please Fill The Details'
    };
    this.authForm = this.fb.group(customerForm.ASMform());
    this.ASMCustomerform = this.fb.group(customerForm.ASMCustomerform());
  }

  ngOnInit() {
    this.toggleAsmHead = true;
    const queryStatus = window.location.search.replace('?', '');
    if (queryStatus.indexOf('ASM') != -1 || this.singletonServ.getStoreData('csCustomer')) {
      this.asmCustomer = true;
      if (this.singletonServ.getStoreData('csCustomer')) {
        const user = JSON.parse(this.singletonServ.getStoreData('csCustomer'));
        this.csAgent = user.csAgent;
        this.csAgentLogged=true;
        if (user.email) {
          this.csAgentName = user.uid;
          this.startSession = true;
          this.ASMCustomerform.controls['customer'].setValue(user.email);
          this.ASMCustomerform.controls['customerOrderId'].setValue(user.code);
        }
      } else {
        this.csAgent = true;
      }
    } else {
      this.asmCustomer = false;
    }
    
  }
  onCloseBar() {
    this.toggleAsmHead = !this.toggleAsmHead;
  }
  onSubmitCSForm() {
    if (this.authForm.valid) {
      const _obj = this.authForm.value;
      this.csService.createUser(_obj).subscribe(
        response => {
          this.csAgentName=this.authForm.value['username'];
          this.csAgent = false;
          this.csAgentLogged=true;
          const _obj = {
            csAgentName:this.authForm.value['username'],
            csAgent: false,
            agentToken: response["access_token"],
            uid:this.authForm.value['username']
          };
          this.singletonServ.setStoreData("csCustomer", JSON.stringify(_obj));
          if(this.customerRef){
            this.customerRef.nativeElement.focus();
          }
        },
        err => {}
      );
    }
  }
  onAgentSignOut(){
    const baseSite = this.singletonServ.catalogVersion;
    this.singletonServ.removeItem(baseSite.reg);
    this.singletonServ.removeItem("csCustomer");
    this.startSession=false;
    this.csAgent=true;
    this.csAgentLogged=false;
    this.ASMCustomerform.reset();
    this.authForm.reset();
    if(this.csAgentRef){
      this.csAgentRef.nativeElement.focus();
    }
    this.router.navigate(["store"]);
  }
  onEndCustomerSession(event){
    const baseSite = this.singletonServ.catalogVersion;
    this.singletonServ.removeItem(baseSite.reg);
    if (this.singletonServ.getStoreData('csCustomer')) {
      const user = JSON.parse(this.singletonServ.getStoreData('csCustomer'));
      delete user.email;
      delete user.code;
      this.singletonServ.setStoreData("csCustomer", JSON.stringify(user));
    }
    this.startSession=false;
    this.ASMCustomerform.reset();
    this.customerDetail=undefined;
    if(this.customerRef){
      this.customerRef.nativeElement.focus();
    }
    this.router.navigate(["store"]);
  }

checkoutAsCSCustomer(){
  const user = this.customerDetail;
  const baseSite = this.singletonServ.catalogVersion;
  const _obj = JSON.parse(this.singletonServ.getStoreData("csCustomer"));
  this.csAgentName=_obj.uid;
  const _user = { email: "" };
  _user["email"] = user.displayUid;
  _obj['email']=user.displayUid;
  this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_user));
  this.singletonServ.setStoreData("csCustomer", JSON.stringify(_obj));
  this.singletonServ.sendMessage({ retrieveAsASM: true });
  this.router.navigate(["store", "myaccount", "profile"]);
  this.startSession=true;
}
onSearchUser(event) {

      const email = this.ASMCustomerform.controls['customer'].value;
      email.trim();
      this.errMsgObj['status'] = false;
       if (this.singletonServ.getStoreData('csCustomer')) {
        const user = JSON.parse(this.singletonServ.getStoreData('csCustomer'));
        const preferedLng = JSON.parse(this.singletonServ.getStoreData('prefered_lng'));
        const baseSite = preferedLng.catalogversionId;
        let _searchKeyWord =email.trim();
          if(_searchKeyWord.length >2){
        
        this.csService
          .retrieveUsersDetails(baseSite, user.agentToken, email)
          .subscribe(
            response => {
              if (response) {
                this.searchResults = response['entries'];
                this.searchBlock = true;
              }
            },
            err => {}
          );
        }else{
          this.searchResults=undefined;
        }
    }
   
  }
 
  onSearchOrder() {
    const order = this.ASMCustomerform.controls['customerOrderId'].value;
    if ( order !== '' ) {
      if (this.singletonServ.getStoreData('csCustomer')) {
        const _user = JSON.parse(this.singletonServ.getStoreData('csCustomer'));
        const baseSite = this.singletonServ.catalogVersion;
        this.csService
          .retrieveOrderDetails(baseSite.catalogversionId, _user.agentToken, order)
          .subscribe(
            response => {
              if (response) {
                const _val: any = this.ASMCustomerform.value;
                const customer =_val['customer'];
                 if(response['entries']){
                  this.searchResults = response['entries'];
                  let _dtl =response['entries'][0];
                 if(customer !=''){
                  customer.trim();
                    if (Object.values(_dtl).indexOf(customer) > -1) {
                      this. orderQueryResults(_dtl);
                  }else{
                    this.errMsgObj = {
                      status:true,
                      description: "Given  Order Id doesn't matched to the provided user id .  "
                    };
                  }
                 }else{
                   this. orderQueryResults(_dtl);
                   this.ASMCustomerform['controls']['customer'].patchValue(_dtl.displayUid);
                 }
                
 
              }
              }
            },
            err => {
              this.errMsgObj = {
                status:true,
                description: 'Unknown Order'
              };
            }
          );
    }
  } else {
    this.errMsgObj = {
      status:true,
      description: 'Please Fill The Details'
    };
  }
  }

  orderQueryResults(_dtl){
    const order = this.ASMCustomerform.controls['customerOrderId'].value;
    const _user = JSON.parse(this.singletonServ.getStoreData('csCustomer'));
    const baseSite = this.singletonServ.catalogVersion;
    this.customerDetail = _dtl;
    const _orderDtl = _dtl;
    this.csAgentName = _user.uid;
    _user['code'] = order;
    let _reg={
      email:this.customerDetail.uid
    }
    this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(_reg));
    this.singletonServ.setStoreData('csCustomer', JSON.stringify(_user));
    this.singletonServ.sendMessage({ retrieveAsASM: true });
    this.router.navigate(["store", "myaccount", "profile", "orderDetails"], {
      queryParams: { orderId: order},
      queryParamsHandling: "merge"
    });
    this.startSession = true;
  }

  onSelectCart(event, cart) {
    this.ASMCustomerform['controls']['customerOrderId'].patchValue(cart.code);
    this.searchOrderBlock = false;
    this.retrieveOrder = false;
  }
  onSearchOrderKeyUp(event){
    this.errMsgObj['status'] = false;
  }




onSubmitCSCustomerForm(event) {
  event.preventDefault();
  const _val: any = this.ASMCustomerform.value;
    if(_val.customerOrderId){
    if (_val.customerOrderId.length != 0) {
      this.onSearchOrder();
    } else {
      if ( this.customerDetail&&_val.customer.length != 0) {
        this.checkoutAsCSCustomer();
       }
    }
   }else if(_val.customer){
    if ( this.customerDetail&&_val.customer.length != 0) {
      this.checkoutAsCSCustomer();
     }
   }else{
    this.errMsgObj = {
      status:true,
      description: 'Please fil the details .'
    };
  }
   

}
onBlurSearchUser(event){
  const _val: any = this.ASMCustomerform.value;
  if(_val['customer']){
    const customer =_val['customer'].trim();
    this.ASMCustomerform['controls']['customer'].patchValue(customer);
    if(customer.length == 0 || !_val['customer'] ){
        this.searchResults=undefined;
        this.ASMCustomerform['controls']['customer'].setValidators(null);
        this.ASMCustomerform['controls']['customer'].updateValueAndValidity();
        this.ASMCustomerform['controls']['customerOrderId'].setValidators([
                          Validators.required,
                          patternValidator(/^[0-9]{8,8}$/)
                        ]);
        this.ASMCustomerform['controls']['customerOrderId'].updateValueAndValidity();
    }

 }
}
onBlurOrderSearch(event){
  const _val: any = this.ASMCustomerform.value;
  if(_val['customerOrderId']){
    const customerOrderId =_val['customerOrderId'].trim();
    if(_val['customer']){
      const customer =_val['customer'].trim();
      this.ASMCustomerform['controls']['customer'].patchValue(customer);
    }
  
    this.ASMCustomerform['controls']['customerOrderId'].patchValue(customerOrderId);

    if(this.ASMCustomerform['controls']['customerOrderId'].valid){
    }
 }
}
onSelectUser(event, user) {

  this.ASMCustomerform['controls']['customer'].setValue(user.displayUid);
  if(!this.ASMCustomerform['controls']['customerOrderId'].valid){
    this.ASMCustomerform['controls']['customerOrderId'].setValidators(null);
    this.ASMCustomerform['controls']['customerOrderId'].updateValueAndValidity();
  }
  this.customerDetail=user;
  this.searchBlock = false;
}
}
