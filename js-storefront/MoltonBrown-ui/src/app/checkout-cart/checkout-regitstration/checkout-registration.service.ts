import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
 import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from "../../services/commons/InterPolateUrl.service";
import {of} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CheckoutRegComponentService  extends InterPolateUrlService{
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
     swapCart(token, code, oldCode){
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
    getStaticContent(lang: string) {
      const langPath = `assets/contents/${lang || 'en'}.json`;
      return this.http
              .get<any[]>(langPath).pipe(map(data => data,
                  catchError(err => of(err.message))
              ));
    }
    
    siteanonymousAuth(tokenId,code,email){
        const url =this.interpolateUrl(environment.API_PATH()+PATH.ANANONYMOUSCART(),{email:email,cartCode:code});
         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json',
                 'Authorization': 'bearer '+tokenId
             })
         };
         return this.http
             .put(url,JSON.stringify({}),httpOptions)
             .pipe(map(data => data));
             
     }
     
    siteAuthentication(cVrsnid,user){
        const url =this.interpolateUrl(environment.AUTHRISATION_PATH+PATH.SITE_AUTENTICATION(),{uid:user.email,password:user.password,siteId:cVrsnid});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                
            })
        };
        return this.http
            .post<any[]>(url,httpOptions)
            .pipe(map(data => data));
    }
    getUserData(tokenId,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.PROFILE(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
            .get<any[]>(url,httpOptions)
            .pipe(map(data => data));
    }
         
    creatEmptyCart(token,data,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.REGISTER_CART(),{email:email} );
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(data),httpOptions)
            .pipe(map(data => data));
    }
    mergeCart(data,_email,token,oldCartId,newCartId){
        const url = this.interpolateUrl(environment.API_PATH() + PATH.MERGE_CART(),{email:_email,oldCartId:oldCartId,newCartId:newCartId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(data),httpOptions)
            .pipe(map(data => data));
    }
}