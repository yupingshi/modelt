import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import {  PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
 import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
 import {of} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ConfirmationComponentService extends InterPolateUrlService {
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
    createUser(tokenId,body,orderCode){
        const url =this.interpolateUrl( environment.API_PATH() +  PATH.CREATE_USER_OC_PATH,{orderCode:orderCode});
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
    createUserAddress(body,tokenId,email){
        const url = this.interpolateUrl( environment.API_PATH() +  PATH.CREATE_ADDRESS(),{email:email});
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
    orderService(tokenId,order,emailId){
        const url =this.interpolateUrl( environment.API_PATH() +  PATH.ORDER_DETAILS,{email:emailId,orderCode:order});
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

    getOrderData(cVrsnid,tokenId,orderId){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.ORDERCONFIRMATION,{orderId:orderId});
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


    getOrderCode(token,email,code,payerId){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.PAYERID_PATH,{email:email,cartCode:code,PayerID:payerId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify({}),httpOptions)
            .pipe(map(data => data));
    }

    placeOrder(token,email,code,payerId,uid){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.PAYPAL_PLACEORDER,{email:email,cartCode:code,payerID:payerId,gUID:uid});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify({}),httpOptions)
            .pipe(map(data => data));
    }
    addToFavourite(tokenId,email,code){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.ADD_FAVOURITES(),{email:email,code:code});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http.post(url, JSON.stringify({}),httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }
    getFavourites(tokenId,email){
        const url=this.interpolateUrl( environment.API_PATH() + PATH.FAVOURITES(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer'+tokenId
                
            })
        };
        return this.http
            .get<any[]>(url,httpOptions).pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }
}