import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  PATH } from '../app.constant';
 import { Headers } from '@angular/http';
import {environment} from '../../environments/environment';
import {InterPolateUrlService} from '../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class GiftCardComponentService  extends InterPolateUrlService{
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
        return this.http
            .post<any[]>(url, httpOptions)
            .pipe(map(data => data));
    }
    givexLogin(token,email,card){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.GIVEX_LOGIN,{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(card),httpOptions)
            .pipe(map(data => data));
    }
    transferbalance(token,email,card){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.TRANSFER_BALANCE,{email:email,FromGiftCardNumber:card.depositor,ToGiftCardNumber:card.creditor});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify({}),httpOptions)
            .pipe(map(data => data));    
    }
    registerGivexCard(token,email,card){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.GIVEX_REGISTRATION,{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(card),httpOptions)
            .pipe(map(data => data));
    }
    checkBalance(token,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.CHECK_BALANCE,{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify({}),httpOptions)
            .pipe(map(data => data));
    }

}