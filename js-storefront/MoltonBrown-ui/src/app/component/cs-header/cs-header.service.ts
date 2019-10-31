import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import {  PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
import {of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class CSCustomerService extends InterPolateUrlService {
    private headers: Headers;
    public asmPath:string=environment.CS_AUTHRISATION_PATH;
    http: HttpClient;
     constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
     }
         
    createUser(body){
        const url = this.interpolateUrl(environment.CS_AUTHRISATION_PATH+  PATH.CS_OAUTH.trim(),{client_id:'asm',agent:body.username,password:body.password});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(body), httpOptions)
            .pipe(map(data => data));
    }
    retrieveOrderDetails(baseSite,agentToken,orderId){
        const url=this.interpolateUrl( environment.CS_CUSTOMER+PATH.CS_ORDER_SEARCH.trim(),{
                        orderId:orderId,
                        agentToken:agentToken,
                        baseSite:baseSite})
        return this.http
        .get<any[]>(url, {
            headers: new HttpHeaders()
            .set('Content-Type', 'text/xml') 
            .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
      }).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
    }
    retrieveUsersDetails(baseSite,agentToken,email){
        const url=this.interpolateUrl( environment.CS_CUSTOMER+PATH.CS_SEARCH.trim(),{email:email,agentToken:agentToken,baseSite:baseSite})
         return this.http
            .get<any[]>(url, {
                headers: new HttpHeaders()
                .set('Content-Type', 'text/xml') 
                .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
                .append('Access-Control-Allow-Origin', '*')
                .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
          }).pipe(map(data => data,
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
}