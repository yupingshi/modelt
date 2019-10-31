import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  PATH } from '../../app.constant';
import {environment} from '../../../environments/environment';
import {InterPolateUrlService} from "../../services/commons/InterPolateUrl.service";
import {of} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CustomerAccountService  extends InterPolateUrlService{
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
    
    retrievePassword(tokenId,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.RETRIEVE_PASSWORD,{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' +tokenId
            })
        };
        return this.http.post(url,JSON.stringify({}), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }


     changePassword(tokenId,email,_form){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.CHANGE_PASSWORD(),{
            email:email,
            userId:email,
            currentPassword:_form.oldPassword,
            newPassword:_form.password
        });
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' +tokenId
            })
        };
        return this.http.put(url,JSON.stringify({}), httpOptions)
        
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }
}