import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  PATH } from '../app.constant';
 import { Headers } from '@angular/http';
 import {of} from 'rxjs';
 import {InterPolateUrlService} from "../services/commons/InterPolateUrl.service";
 import {environment} from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class StorePortalService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    generateToken() {
        const url =this.interpolateUrl(environment.AUTHRISATION_PATH +PATH.CART_TOKEN_PATH());
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        if(url){
            
        }
        return this.http
            .post<any[]>(url, httpOptions)
            .pipe(map(data => data));
    }
    getStores(){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.STORES);
        return this.http
            .get<any[]>(url)
            .pipe(map(data => data));
    }
   portalAuthentication( tokenId,storeName,password ){
    const url =  this.interpolateUrl(environment.API_PATH() +  PATH.STOREPORTAL_LOGIN,{
                  storeName:storeName,
                  password:password
                });
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
  retrieveStores(token,storeName,orderStatus,body){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.STORE_ORDERS,{storeName:storeName,orderStatus:orderStatus});
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
  retrieveDispatchedStores(token,storeName,orderStatus,body){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.ORDER_CHECKIN,{storeName:storeName,status:orderStatus});
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
}