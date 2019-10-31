import { Component, OnInit } from '@angular/core';
import {PaymentGateWayForm} from '../../forms/paymentCard.form';
import { FormBuilder,FormGroup } from '@angular/forms';
import {SingletonService} from '../../services/singleton.service';
import {GiftCardComponentService} from '../gift-cards.service';
import { Location } from '@angular/common';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-gift-card-details',
  templateUrl: './gift-card-details.component.html',
  styleUrls: ['./gift-card-details.component.scss']
})
export class GiftCardDetailsComponent implements OnInit {
  givexForm:FormGroup;
  showBalance:boolean;
  givexInfo:any;
  constructor(public customerForm:PaymentGateWayForm,public cardService:GiftCardComponentService,
    private fb: FormBuilder,public singletonServ:SingletonService,
    public location: Location, public router: Router,public route :ActivatedRoute) { 
    this.givexForm= this.fb.group(customerForm.giftBalance());
  }

  ngOnInit() {
  }
  onSubmitForm(event){
    event.stopPropagation();
    const that =this;    
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
    const card=this.givexForm.value;
    this.showBalance=false;  
    const _body={
            "giftcardnumber":card.GivexCardNumber,
            "giftcardpin":card.GivexPinNumber
          }
        if(this.singletonServ.getStoreData(baseSite.reg)){
          const _user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          if(_user.token){
            this.checkBalance(_user.token,_user.email,_body);
          }else{
            that.cardService.generateToken().subscribe((token)=>{ 
              const _token=token['access_token'];
              this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(_user));
              this.checkBalance(_token,_user.email,_body);
            },(error)=>{

            });
          }
        }else if(this.singletonServ.getStoreData(baseSite.guest)){
          const _guest =JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
          if(_guest.token){
            this.checkBalance(_guest.token,'anonymous',_body);
          }else{
            that.cardService.generateToken().subscribe((token)=>{ 
              const _token=token['access_token'];
              this.singletonServ.setStoreData(baseSite.guest,JSON.stringify(_guest));
              this.checkBalance(_token,'anonymous',_body);
            },(error)=>{

            });
          }
       }else{
        const _guest ={token:''};
        that.cardService.generateToken().subscribe((token)=>{ 
          const _token=token['access_token'];
          this.singletonServ.setStoreData(baseSite.guest,JSON.stringify(_guest));
          this.checkBalance(_token,'anonymous',_body);
        },(error)=>{

        });
       }
   
  }
  checkBalance(_token,email,_body){
    const that =this;    
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
    this.cardService.givexLogin(_token,email,_body).subscribe((reg)=>{
    this.cardService.checkBalance(_token,email).subscribe((response)=>{
      this.showBalance=true;
      let givexInfo=JSON.parse(JSON.stringify(response));
      this.givexInfo=JSON.parse(givexInfo);
      this.singletonServ.giftObj=this.givexInfo;
      let baseSiteidGift=baseSiteid+email+'-Giftcard';
      this.singletonServ.setStoreData(baseSiteidGift,JSON.stringify(this.givexInfo));
      this.router.navigate(['store','gift-cards','balanceStatement'],{ queryParams: { _requestid: 188}, queryParamsHandling: 'merge' });
   },(error)=>{

   });
  },(error)=>{

  });
  }
}
