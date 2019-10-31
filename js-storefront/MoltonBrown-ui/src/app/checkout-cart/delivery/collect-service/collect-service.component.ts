import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { SingletonService } from "../../../services/singleton.service";
import {CollectComponentService} from './collect-service.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../../../forms/pattern-validator';
import { TranslateServiceSubService } from "../../../pipe/translate-service-sub.service";
@Component({
  selector: "app-collect-service",
  templateUrl: "./collect-service.component.html",
  styleUrls: ["./collect-service.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CollectServiceComponent implements OnInit, OnChanges {
  @Input() deliveryInfo: any;
  @Output() onCollectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditClkCltInfo :EventEmitter<any> = new EventEmitter<any>();
  storeData: any;
  mobile: string;
  payment: boolean;
  submitted:boolean;
  communicateForm: FormGroup;
  isValidFormSubmitted:boolean;
  communicateFormInvalid:boolean;
  constructor(
    public singletonServ: SingletonService,
    public collectServ:CollectComponentService,
    private fb: FormBuilder,
    public translate: TranslateServiceSubService
    ) {
    this.payment = false;
    this.communicateForm=this.fb.group({
      phone:new FormControl('', {validators:[Validators.required,patternValidator(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)],updateOn: 'blur'})
       
    });

  }

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      const lngCode = baseSite.lngCode;
      this.setLang(lngCode);
    }
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes["deliveryInfo"]) {
      if (changes["deliveryInfo"]["currentValue"] != undefined) {
        this.storeData = changes["deliveryInfo"]["currentValue"];
      }
    }
  }

onEditDeliveryType( type) {
  this.onEditClkCltInfo.emit();   
}
onEditComminication(){
  this.payment=false;
  this.storeData.mobile=undefined;
  this.storeData["payment"] = this.payment;
  this.onCollectionChange.emit(this.storeData);
}
onSubmitForm(event){  
    if (this.communicateForm.valid) {
       this.singletonServ.sendMessage({overlay:true});
        this.onUpdateCollect();
        this.submitted = true;   
    }else {
      this.validateAllFormFields(this.communicateForm); 
    }
}


onUpdateCollect() {
  const baseSite = this.singletonServ.catalogVersion;
  const baseSiteid=baseSite.catalogversionId;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.setClickCollectCommunication(baseSiteid,_user.token,_user.email,_user.code,this.communicateForm.value.phone);
 
}else if(this.singletonServ.getStoreData(baseSite.guest)){
  const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
  this.setClickCollectCommunication(baseSiteid,_user.token,'anonymous',_user.guid,this.communicateForm.value.phone);
}
}
setClickCollectCommunication(baseSiteid,token,email,code,mobile){
this.collectServ.setRegCcCommunication(baseSiteid,token,email,code,mobile).subscribe((resp)=>{
  this.payment = true;
  this.storeData["mobile"] = this.communicateForm.value.phone;
  this.storeData["payment"] = this.payment;
  this.onCollectionChange.emit(this.storeData);
},err=>{
  
  this.singletonServ.sendMessage({dismissOverlay:true});
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
}
