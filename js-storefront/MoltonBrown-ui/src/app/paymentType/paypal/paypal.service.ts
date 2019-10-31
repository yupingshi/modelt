import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
 import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class PaypalService  extends InterPolateUrlService{
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

    setPayPalServiceType(token,email,cartCode,body) {
        const url = this.interpolateUrl(environment.API_PATH() +PATH.PAYPAL_PATH,{email:email,cartCode:cartCode});
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(body), httpOptions)
            .pipe(map(data => {
             return  data
            }));
    }
    pingSandBox(resp){
        const url = 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token='+"EC-89355627T7112200H"
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .post<any[]>(url, {
                headers: new HttpHeaders()
                .set('Content-Type', 'text/xml') 
                .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
                .append('Access-Control-Allow-Origin', '*')
                .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
          })
            .pipe(map(data => {
             return  data
            }));
    }
}