import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
import {of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class DeliveryComponentService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    generateCartToken() {
        const url =this.interpolateUrl(environment.AUTHRISATION_PATH +PATH.CART_TOKEN_PATH());
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .post<any[]>(url, httpOptions)
            .pipe(map(data => data));
    }

    getUserAddress(token,email){
        const url =this.interpolateUrl( environment.API_PATH() +  PATH.CREATE_ADDRESS(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
        return this.http
        .get<any[]>(url,httpOptions)
        .pipe(map(data => data));
    }
    getDlUSMethod(token,email,code,deliveryGroup){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.US_DELIVERY_SERVICES(),{
                      email:email,
                      cartCode:code,
                      deliveryGroup:deliveryGroup
                    });    
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer'+token
            })
        };
        return this.http.get(url,  httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }

    createAnnonymousAddress(tokenId,cartId,body){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.GUEST_SHIPPING_ADDRESS(),{cartId:cartId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(body), httpOptions)
            .pipe(map(data => data));
    }


getPostCode(postCode){
    const url=this.interpolateUrl(PATH.FIND_POSTCODE.trim(),{postCode:postCode});
      return this.http
      .post<any[]>(url,  {
              headers: new HttpHeaders()
              .set('Content-Type', 'text/xml') 
              .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
              .append('Access-Control-Allow-Origin', '*')
              .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
        })
      .pipe(map(data => data));   
}
retrievePostalAddress(postCode){
    const url=this.interpolateUrl(PATH.POSTAL_ADDRESS.trim(),{postCode:postCode}); return this.http
    .post<any[]>(url,  {
            headers: new HttpHeaders()
            .set('Content-Type', 'text/xml') 
            .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
      })
    .pipe(map(data => data));
}

confirmAddress(tokenId,email,cartCode,addressId){
    const url = this.interpolateUrl( environment.API_PATH() +  PATH.CONFIRM_ADDRESS(),{cartCode:cartCode,email:email,addressId:addressId});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenId
        })
    };
  
    return this.http
    .post<any[]>(url,JSON.stringify({}), httpOptions)
    .pipe(map(data => data));
}
getDeliveryMethod(tokenId,email,cartCode,_delveryCountryId){
   
    let url = '';
    
   if(typeof(_delveryCountryId) != "boolean" ){
    url = this.interpolateUrl(environment.API_PATH() +  PATH.US_DELIVERY_MODES(),{deliveryGroup:_delveryCountryId,email:email,cartCode:cartCode});
   }else{
    url = this.interpolateUrl(environment.API_PATH() +  PATH.DELIVERY_METHOD(),{email:email,cartCode:cartCode});
   }
   
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenId
        })
    };
    return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
}

deliverymethodToCart(tokenId,body,deliveryType,email,cartCode){
    const url = this.interpolateUrl( environment.API_PATH() +  PATH.DELIVERY_METHOD_TO_CART(),{cartCode:cartCode,email:email,deliverycode:deliveryType.code});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenId
        })
    };
  
    return this.http
    .post<any[]>(url,JSON.stringify(body), httpOptions)
    .pipe(map(data => data));
}

deliveryNamedDayToCart(tokenId,email,cartCode){
    let url = this.interpolateUrl(environment.API_PATH() +  PATH.DELIVERY_SERVICE(),{email:email,cartCode:cartCode});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenId
        })
    };
    if(sessionStorage.getItem('csCustomer')){
        const _csCustomer=JSON.parse(sessionStorage.getItem('csCustomer'));
        let _agnetToken=_csCustomer['agentToken'];
        url=url+"&access_token="+_agnetToken
       }
    return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
}



setNamedDeliveryModeToCart(tokenId,email,cartCode,data){
    const url = this.interpolateUrl( environment.API_PATH() +  PATH.DELIVERY_NAMED_DAY_SERVICE(),{cartCode:cartCode,email:email,deliveryCode:data.deliveryCode});
    const httpOptions = {
         headers: new HttpHeaders({
             'Content-Type': 'application/json',
             'Authorization': 'bearer '+tokenId
         })
     };
   
     return this.http
     .post<any[]>(url,JSON.stringify(data), httpOptions)
     .pipe(map(data => data));
}


getInternationalDelivery(tokenId,email,cartCode,countryCode){
    const url=this.interpolateUrl( environment.API_PATH() +  PATH.GET_INTERNATIONAL_DELIVERY_METHOD(),{cartCode:cartCode,email:email,countryCode:countryCode})
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenId
        })
    };
    return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));

}



setInternationalDeliveryToCart(tokenId,email,cartCode,countryCode,data){
    const url=this.interpolateUrl( environment.API_PATH() +  PATH.SET_INTERNATIONAL_DELIVERY_METHOD(),{cartCode:cartCode,email:email,countryCode:countryCode})
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+tokenId
        })
    };
    return this.http
        .post<any[]>(url,JSON.stringify(data),httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));

}


addShippingAddress(token,email,cartCode,shipAddress){
 
    const url=this.interpolateUrl(environment.API_PATH() +  PATH.SHIPPING_ADDRESS(),{email:email,cartCode:cartCode});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'bearer '+token
        })
    };
    return this.http
        .post<any[]>(url, JSON.stringify(shipAddress),httpOptions)
        .pipe(map(data => data));
  }


  giftMessage(tokenId,body,email,code){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.GIFT_BOX(),{email:email,cartCode:code} ) ;
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer  '+tokenId
        })
    };
    return this.http.patch(url, JSON.stringify(body), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
  }

  getDeliveryModes(token,email,cartCode,method){
    let url=this.interpolateUrl( environment.API_PATH() +  PATH.OS_FULLCART(),{cartCode:cartCode,email:email})
    if(method){
        url=url+'&deliveryCode='+method;
    }
   const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+token
        })
    };
    return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
  }
  generateCartId(tokenId,email){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.REGISTER_CART(),{email:email});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': tokenId
        })
    };
    return this.http.post(url, httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }
retrieveCartDetails(token,email,cartcode){
    const url=this.interpolateUrl( environment.API_PATH() +  PATH.USER_CARTDETAILS(),{cartID:cartcode,email:email})
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+token
        })
    };
    return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));


}

storeProductsToCart(token,email,cartCode,productObj) {
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.ADD_TO_BASKET(),{email:email,cartCode:cartCode});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+token
        })
    };
    return this.http.post(url, JSON.stringify(productObj), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }

 addBundleToCart(token,email,cartCode,body){
    const url=this.interpolateUrl(environment.API_PATH() + PATH.PICK_MIX_BUNDLE_PATH(),{email:email,cartCode:cartCode});
    const httpOptions = {
           headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': 'bearer '+token
           })
       };
       return this.http
           .post<any[]>(url,JSON.stringify(body), httpOptions)
           .pipe(map(data => data));   
}

expressCheckout(token,email){
    const url=this.interpolateUrl(environment.API_PATH() + PATH.EXPRESS_CHECK_PATH.trim(),{email:email});
    const httpOptions = {
           headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': 'bearer '+token
           })
       };
       return this.http
           .post<any[]>(url,JSON.stringify({}), httpOptions)
           .pipe(map(data => data));  
}
use(lang: string) {
      const langPath = `assets/i18n/${lang || 'en'}.json`;
    return this.http
            .get<any[]>(langPath).pipe(map(data => data,
                catchError(err => of(err.message))
            ));
  }
  getStaticContent(lang: string) {
    const langPath = `assets/contents/${lang || 'en'}.json`;
  return this.http
          .get<any[]>(langPath).pipe(map(data => data,
              catchError(err => of(err.message))
          ));
}
//   createAddress
mergeCart(token, code, oldCode){
    const url=this.interpolateUrl(environment.API_PATH() + PATH.GUEST_CART_SHIFTING_PATH(),{
                   cartCode:code,
                   oldCartCode:oldCode,
                   mergeCartGuid:code
                });
    const httpOptions = {
           headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': 'bearer '+token
           })
       };
       return this.http
           .post<any[]>(url,JSON.stringify({}), httpOptions)
           .pipe(map(data => data)); 
}
}