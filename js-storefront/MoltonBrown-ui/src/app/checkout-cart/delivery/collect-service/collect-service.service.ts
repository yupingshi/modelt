import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  PATH } from '../../../app.constant';
 import { Headers } from '@angular/http';
import {InterPolateUrlService} from '../../../services/commons/InterPolateUrl.service';
import {environment} from '../../../../environments/environment';
@Injectable({ providedIn: 'root' })
export class CollectComponentService extends InterPolateUrlService {
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
    setRegCcCommunication(baseSiteid,token,email,code,mobile){
        const url =this.interpolateUrl(environment.API_PATH() +  PATH.SET_PHONENUMBER(),{email:email,cartCode:code,phoneNumber:mobile});
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
}