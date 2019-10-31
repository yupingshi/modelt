import { Component, OnInit } from '@angular/core';
import {RegistrationForm} from '../../forms/registration.form';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {StorePortalService} from '../store-portal.service';
import { SingletonService } from "../../services/singleton.service";
import * as _ from "lodash";
@Component({
  selector: 'app-store-portal-authentication',
  templateUrl: './store-portal-authentication.component.html',
  styleUrls: ['./store-portal-authentication.component.scss']
})
export class StorePortalAuthenticationComponent implements OnInit {
  storesList:Array<any>=[];
  authForm:FormGroup;
  constructor(
    public customerForm: RegistrationForm,
    private fb: FormBuilder,
    public router: Router,
    public portalServ : StorePortalService,
    public singletonServ: SingletonService
  ) {
    this.authForm = this.fb.group(customerForm.StorePortalAuthForm());
   }


    ngOnInit() {
      this.retrieveMBStores();
   }
   retrieveMBStores(){
     this.portalServ.getStores().subscribe(
       response => {
         const store = response["kaoStores"];
         store.map((obj)=>{
           if(obj['country'] == "United Kingdom" || obj['country']=="United States"){
           if(obj['stores']){
             obj['stores'].map((item)=>{
                 if(item.storeType== "Molton Brown Stores") {
                   const _hotelList: any = _.unionBy(this.storesList, item.stores);
                   _.uniq(_hotelList);
                   this.storesList = _hotelList;
                 }
             });
           }
          }
         });
       },
       err => {}
     );
   }
  onSubmitForm(event){

    if(this.authForm.valid){
      const _val =this.authForm.value;
    this.portalServ.generateToken().subscribe(resp=>{
        const tokenId = resp["access_token"];
        const _storeName =encodeURIComponent(_val.storeName);
      this.portalServ.portalAuthentication(tokenId,_storeName,_val.password ).subscribe((portal)=>{
        this.singletonServ.portalStoreName=_val.storeName;
        this.singletonServ.setStoreData('portalEncoder',JSON.stringify({storeName:_val.storeName,status:true,token:tokenId}));
        let _obj ={
          auth:{
            status:true,
            storeName:_val.storeName
          }
        };
        this.singletonServ.sendMessage(_obj);
        this.router.navigate(['store','storeportal','info_table']);
      },err=>{

      });
    },err=>{

    });
  }
}

}
