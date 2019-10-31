import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  PATH } from '../../../app.constant';
 import { Headers, } from '@angular/http';
import {of,Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {InterPolateUrlService} from '../../../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class StorePointComponentService extends  InterPolateUrlService{
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

    getGFSData(token,email,cartCode,data){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.GFS_PATH(),{email:email,cartCode:cartCode,postalCode:data.postCode,latitude:data.latitude,longitude:data.longitude});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
        return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => this.handleError(err))
        ));
    }


    setStore(token,email,cartCode,data){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.SET_STORE(),{email:email,cartCode:cartCode});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
      
        return this.http
        .post<any[]>(url,JSON.stringify(data), httpOptions)
        .pipe(map(data => data));
    }
     handleError (error: Response) {
        return Observable.throw(error.json() || 'server error')
      }
}