import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { SERVER_PATHS, PATH } from '../../app.constant';
 import {publish} from  'rxjs/operators';
 import { Headers, RequestOptions } from '@angular/http';
import {of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {InterPolateUrlService} from "../../services/commons/InterPolateUrl.service";
@Injectable({ providedIn: 'root' })
export class productviewComponentService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
     constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
     }
     getMbProdDetails(id, cVrsnid) {
        const url = this.interpolateUrl(environment.API_PATH() + PATH.PRODUCT_DATA_PATH() , {productCode:id});
        return this.http
            .get<any[]>(url)
            .pipe(map(data => data));
     }
     getrelevantDynamicData(code){
        const url = 'http://media.moltonbrown.co.uk/s/moltonbrown/' + code + '_uk_set.json';
        return this.http
            .get<any[]>(url)
            .pipe(map(data => data));
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
     storeCurrentUserProducts(item,tokenId,cartCode,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.ADD_TO_BASKET(),{email:email,cartCode:cartCode});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer'+tokenId
            })
        };
        return this.http.post(url, JSON.stringify(item), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
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