import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import {  PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
 import { of } from 'rxjs';
 import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from "../../services/commons/InterPolateUrl.service";
@Injectable({ providedIn: 'root' })
export class BasketPageComponentService extends InterPolateUrlService{
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    generateCartToken() {
        const url = this.interpolateUrl(environment.AUTHRISATION_PATH +PATH.CART_TOKEN_PATH());
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .post<any[]>(url, httpOptions)
            .pipe(map(data => data));
    }

    getFRContent(lang: string) {
        const langPath = `assets/slots/${lang || 'en'}.json`;
        return this.http
             .get<any[]>(langPath).pipe(map(data => data,
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


    updateEntry(token,email,code,item,entry){
        let url = environment.API_PATH() +  '/users/'+email+'/carts/'+code+ '/entries/' + entry;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer  '+token
            })
        };

        if(sessionStorage.getItem('csCustomer')){
            const _csCustomer=JSON.parse(sessionStorage.getItem('csCustomer'));
            let _agnetToken=_csCustomer['agentToken'];
            url=url+"?access_token="+_agnetToken;

           }
        return this.http.patch(url, JSON.stringify(item), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }

    removeEntry(token,email,code,entry){
        let url = environment.API_PATH() +  '/users/'+email+'/carts/'+code+ '/entries/' + entry;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer  '+token
            })
        };
        if(sessionStorage.getItem('csCustomer')){
            const _csCustomer=JSON.parse(sessionStorage.getItem('csCustomer'));
            let _agnetToken=_csCustomer['agentToken'];
            url=url+"?access_token="+_agnetToken;

           }
        return this.http.delete(url,httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
    }

    getSampleProducts(){
         let url=environment.API_PATH()+'/products/search?query=:relevance:category:0101&sort=name-asc&fields=FULL'
         if(sessionStorage.getItem('csCustomer')){
            const _csCustomer=JSON.parse(sessionStorage.getItem('csCustomer'));
            let _agnetToken=_csCustomer['agentToken'];
             url=url+"&access_token="+_agnetToken
           }
            return this.http
              .get<any[]>(url)
              .pipe(map(data => data));
            
    }

    storesampleProducts(item,tokenId,code,email){
        const url = this.interpolateUrl(environment.API_PATH()+PATH.ADD_TO_BASKET(),
        {email:email,cartCode:code});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer  '+tokenId
            })
        };
        return this.http.post(url, JSON.stringify(item), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }

    

    
    giftMessage(tokenId,body,email,code){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.GIFT_BOX(),{email:email,cartCode:code} ) ;
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer  '+tokenId
        })
    };
    return this.http.post(url, JSON.stringify(body), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
  }


//   REMOVE_BUNDLE_PATH

removeBundle(token,email,code,entry){
    const url =this.interpolateUrl(environment.API_PATH() +  PATH.REMOVE_BUNDLE_PATH(),{email:email,cartCode:code,bundleNo:entry});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer  '+token
        })
    };
    return this.http.delete(url,httpOptions)
    .pipe(map(data => data,
        catchError(err => of(err.message))
    ));
    }
    applyPromoCode(token,email,code,voucherId){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.PROMOCODE(),{email:email,cartCode:code,voucherId:voucherId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer  '+token
            })
        };
        return this.http.post(url, JSON.stringify({}), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }
updateBundleItem(token,email,code,body, bundleNo,qty){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.UPDATE_BUNDLE(),{email:email,cartCode:code,bundleNo:bundleNo,qty:qty});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer  '+token
        })
    };
    return this.http.patch(url, JSON.stringify(body), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
}
    removePromoCode(token,email,code,voucherId){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.REMOVE_PROMO(),{email:email,cartCode:code,coupon:voucherId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer  '+token
            })
        };
        return this.http.delete(url,httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }
    getStaticContent(lang: string) {
        const langPath = `assets/i18n/${lang || 'en'}.json`;
      return this.http
              .get<any[]>(langPath).pipe(map(data => data,
                  catchError(err => of(err.message))
              ));
    }
    generateCartId(token,email){
        const url = this.interpolateUrl(environment.API_PATH()+PATH.GENERATTE_CART(),
                                         {email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
            })
        };
        return this.http.post(url, JSON.stringify({}), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }
     addToBasket(token,email,code,productObj){
        const url = this.interpolateUrl(environment.API_PATH()+PATH.ADD_TO_BASKET(),
                                         {email:email,cartCode:code});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
            })
        };
        return this.http.post(url, JSON.stringify(productObj), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }
    handleError(error: HttpErrorResponse) {
        let errMsg = '';
        // Client Side Error
        if (error.error instanceof ErrorEvent) {
            errMsg = `Error: ${error.error.message}`;
        }
        else {  // Server Side Error
            errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        // return an observable
        return throwError(errMsg);
    }

}