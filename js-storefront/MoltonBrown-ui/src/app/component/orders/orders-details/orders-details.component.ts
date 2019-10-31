import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderHistoryService } from '../orders.service';
import {SingletonService} from '../../../services/singleton.service';
import * as _ from "lodash";
@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
  orderDetail:any;
  usSpecific:boolean;
  constructor(
    public router: Router,
    public route :ActivatedRoute, 
    public singletonServ:SingletonService,
    private _orderHistoryService: OrderHistoryService ) {
    
   }

  ngOnInit() {
    const orderId = this.route.snapshot.queryParamMap.get("orderId");
    const baseSite=this.singletonServ.catalogVersion;
    if(baseSite.isoCode == "US"){
       this.usSpecific=true;
    }
    if(orderId){
      if(this.singletonServ.getStoreData(baseSite.reg)){
        const user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        if(user.token){
      this._orderHistoryService.getOrderHistoryDetailService(user.token,user.email,orderId).subscribe((response)=>{
      if(response){
        this.setOrderDetails(response);
       }
      },(err)=>{

      })
    }else{
      this._orderHistoryService.generateOrderToken().subscribe(respose=>{
        const token = respose["access_token"];
        const user =JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        user['token']=token;
        this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(user));
        this._orderHistoryService.getOrderHistoryDetailService(user.token,user.email,orderId).subscribe((response)=>{
          if(response){
            this.setOrderDetails(response);
           }
          },(err)=>{
    
          })


      },err=>{

      }) 
    }
    }
  }
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  onShowProductDtls(searchItem) {
    let url = "/store" + searchItem.url.replace("/p/", "/");
    this.router.navigate([url]);
  }

  setOrderDetails(data){
    const cart=this.nestedCopy(data);
    if(cart.entries){
    const bundleNo =_.groupBy(cart.entries, 'bundleNo');
    const entries= _.filter(cart.entries, function(o
          ) {
              return (o.bundleNo==0);
          });
for(let k in bundleNo){
  if(k != '0'){
const bundle={
           product:bundleNo[k],
           bundleTemplateId:bundleNo[k][0]['bundleTemplateId'],
           bundleNo:bundleNo[k][0]['bundleNo'],
           bundlePrice:bundleNo[k][0]['bundlePrice'],
           quantity:1,
           isBundle:true
          }
          entries.push(bundle);
  }
}


   cart.entries=entries;
   cart.entries.sort((a,b)=>{
    return a.entryNumber - b.entryNumber;
  });
  }
  this.orderDetail=cart;
  }

  getBundleContent(text){
    if(text.bundleTemplateId){
    if(text.bundleTemplateId.indexOf('6') !=-1){
      return 'Pick & Mix 6';
    }else{
      return 'Pick & Mix 3';
    }
   }
   return 'Pick & Mix 3';
  }
  getProdPrice(entry){
    if(entry.product.price){
    if(entry.product.price.value !=0){return entry.product.price.formattedValue}else{ return 'FREE'}
    }else{
      if(entry.totalPrice.value !=0){
        return 'not available'
      }else{ 
        return 'FREE';
      }
    }
  }
  getTotalPrice(entry){
    if(entry.totalPrice.value !=0){return entry.totalPrice.formattedValue}else{ return 'FREE'}
  }
  getBundlePrice(data){
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite.isoCode ==='GB'){
      const _price='&#163;&nbsp;'+Math.ceil(data.bundlePrice);

      return _price;
    }else if(baseSite.isoCode ==='EU'){
      const _price=Math.ceil(data.bundlePrice)+'&nbsp;&#128;';

      return _price
    }else if(baseSite.isoCode ==='DE'){
      const _price=Math.ceil(data.bundlePrice)+'&nbsp;&#8364;';

      return _price
    }
  }
  getBundleTotalPrice(data){
    const baseSite = this.singletonServ.catalogVersion;
    if(baseSite.isoCode ==='GB'){
      const _price='&#163;&nbsp;'+Math.ceil(data.bundlePrice);

      return _price;
    }else if(baseSite.isoCode ==='EU'){
      const _price=Math.ceil(data.bundlePrice)+'&nbsp;&#128;';

      return _price
    }else if(baseSite.isoCode ==='DE'){
      const _price=Math.ceil(data.bundlePrice)+'&nbsp;&#8364;';

      return _price
    }
  }

  getPixMixImage(entry) {
    if (entry.bundleTemplateId) {
      if (entry.bundleTemplateId.indexOf("6") != -1) {
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel6_uk_pick-mix-travel-6_image_01?$mediumImg$&amp;fmt=webp";
      } else {
        return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$mediumImg$&amp;fmt=webp";
      }
    }
    return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$mediumImg$&amp;fmt=webp";
  }
  onRepeatOrder(event){
  const baseSite=this.singletonServ.catalogVersion;
    if(this.singletonServ.getStoreData(baseSite.reg)){
      const _user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if(_user.code){
        this._orderHistoryService.repeatOrder(_user.token,_user.email,this.orderDetail.code,_user.code).subscribe((response)=>{
          this.singletonServ.sendMessage({updateCart:true});
          this.router.navigate(["store", "mbcart"]);
        },err=>{

        }); 
      }else{
        this._orderHistoryService.generateCartId(_user.token,_user.email).subscribe((data)=>{
          this.singletonServ.sendMessage({updateCart:true});
          _user['code']= data['code'];
          _user['guid']=data['guid'];
          this.singletonServ.setStoreData(baseSite.reg,JSON.stringify(_user));
          this._orderHistoryService.repeatOrder(_user.token,_user.email,this.orderDetail.code,_user.code).subscribe((response)=>{
        
            this.router.navigate(["store", "mbcart"]);
          },err=>{
  
          }); 
        },err=>{

        });
      }
    }
  }
getPixMixImageJpg(entry){
  if(entry.bundleTemplateId){
    if(entry.bundleTemplateId.indexOf('6') !=-1 ){
      return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel6_uk_pick-mix-travel-6_image_01?$mediumImg$&amp;fmt=jpg"
    }else{
      return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$mediumImg$&amp;fmt=jpg"
    }
  }
    return "https://media.moltonbrown.co.uk/i/moltonbrown/PickMixTravel3_uk_pick-mix-travel-3_image_01?$mediumImg$&amp;fmt=jpg"
  
 }

}
