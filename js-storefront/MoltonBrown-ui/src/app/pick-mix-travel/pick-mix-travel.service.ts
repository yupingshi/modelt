import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  PATH } from '../app.constant';
 import { Headers } from '@angular/http';
import {of} from 'rxjs';
import {environment} from '../../environments/environment';
import {InterPolateUrlService} from '../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class PickMixTravelComponentService  extends InterPolateUrlService{
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    getBundlePrice(token){
        const url =this.interpolateUrl(environment.API_PATH()+PATH.PICK_MIX_BUNDLEPRICE);
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
    getPickandMixProducts(categoryId){
        const url =this.interpolateUrl(environment.API_PATH() +  PATH.PICK_MIX_PATH(),{relavance:':relavance:',category:"category:",categoryId:categoryId});
        return this.http
        .get<any[]>(url).pipe(map(data => data,
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
}