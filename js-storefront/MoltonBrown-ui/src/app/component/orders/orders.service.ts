import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
import {SERVER_PATHS, PATH } from '../../app.constant';
import {environment} from '../../../environments/environment';
import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
import { map,catchError } from 'rxjs/operators';
@Injectable()
export class OrderHistoryService extends InterPolateUrlService {
  constructor(private http:HttpClient) {
           super();
    }
    getOrderHistoryService(token,email): Observable<any>{
        const url=this.interpolateUrl(environment.API_PATH() +  PATH.ORDER_HISTORY_PATH(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'bearer '+token
            })
        };
        return this.http.get<any[]>(url,httpOptions).pipe(map(data => data));
    }

getOrderHistoryDetailService(token,user,orderId): Observable<any>{
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.ORDER_HISTORY_DETAILS(),{email:user,orderCode:orderId});
   const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'bearer '+token
            })
        };
        return this.http
            .get<any[]>(url, httpOptions)
            .pipe(map(data => data));
        }
    
    generateOrderToken() {
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
    repeatOrder(token,email,code,cartCode){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.REPEAT_ORDER(),{email:email,orderCode:code,cartCode:cartCode,cartId:cartCode});
        const httpOptions = {
                 headers: new HttpHeaders({
                     'Content-Type': 'application/json',
                     Authorization: 'bearer '+token
                 })
             };
             return this.http
                 .post<any[]>(url,JSON.stringify({}), httpOptions)
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