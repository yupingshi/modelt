import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { PaymentService } from "./payment.service";
import { SingletonService } from "../../services/singleton.service";
import * as _ from "lodash";
@Component({
  selector: "app-payment-detail",
  templateUrl: "./payment-detail.component.html",
  styleUrls: ["./payment-detail.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PaymentDetailComponent implements OnInit {
  addressList: Array<any>;
  defaultCard:boolean;
  cards:any;
  updatePayment:boolean;
  paymentDetailsList: boolean;  
  loadOverlay:boolean;
  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private _paymentService: PaymentService,
    public singletonServ: SingletonService
  ) {
    this.paymentDetailsList = true;
    this.updatePayment =true;
  }

  ngOnInit() {
    this.loadOverlay=true;
    if(this.singletonServ.cardList){
      this.cards=this.singletonServ.cardList;
    }
    this.getPaymentDetails();
    this.getSavedCards();
  }
  getSavedCards(){
    const baseSite = this.singletonServ.catalogVersion;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this._paymentService.getUserSavedCards(user.token,user.email).subscribe((response)=>{
            if(response){
              response.sort((a,b)=>{
                return b.isDefault - a.isDefault;
              });
              const _default=_.find(response,(def)=>{
                return def
              });
              if(_default){
              this.defaultCard=true;
              }else{
                this.defaultCard=false;
              }
              this._paymentService.getUserData(user.token,user.email).subscribe((checkUser)=>{
                user['isExpressCheckout']=checkUser['isExpressCheckout'];
                this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
                this.loadOverlay=false;
              },err=>{
                this.loadOverlay=false;
              });
            this.cards=response;
            this.singletonServ.cardList= response; 
            this.loadOverlay=false;      
            }
       },err=>{
        debugger;
        this.loadOverlay=false;
        if(err.error.errors){
          const _baseSite = this.singletonServ.catalogVersion;

          if(err.error.errors[0]['type']== "InvalidTokenError"){
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
  getPaymentDetails() {
    const baseSite = this.singletonServ.catalogVersion;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this._paymentService
          .getUserAddress( user.token, user.email)
          .subscribe(resp => {
            this.addressList = resp["addresses"];
            this.loadOverlay=false;
          },err=>{
            this.loadOverlay=false;
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
  onEditPayment(data,i){
   this.updatePayment =false;
   this.singletonServ.cardData=data;
   this.router.navigate(['store','myaccount','accountCardEdit'], {
    queryParams: { referenceId: data.profileID },
    queryParamsHandling: "merge"
  });
  }
  onMakeDefaultCard(payt){
    const baseSite = this.singletonServ.catalogVersion;
    this.loadOverlay=true;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          if(user.token){
            this._paymentService.setDefaultCard(user.token,user.email,payt.profileID,payt).subscribe((resp)=>{
              this.getSavedCards();
        },err=>{
          this.loadOverlay=false;
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
  }
  onUpdateCards(){
    this.getSavedCards();
    this.getPaymentDetails()
  }
  onRemoveCard(payt,i){
    const baseSite = this.singletonServ.catalogVersion;
    this.loadOverlay=true;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          if(user.token){
             this._paymentService.removeCard(user.token,user.email,payt.profileID).subscribe((resp)=>{
              this.getSavedCards();
        },err=>{
          this.loadOverlay=false;
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
  }

  replaceEncryptNumber(data){
    if(data){
      const _number = new Array(data.length-3).join('x') + data.substr(data.length-4, 4);
      const _cardNumber =_number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return _cardNumber;
     }
     return 'xxxx xxxx xxxx xxxx'
  }
}
