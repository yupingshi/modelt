import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {of} from "rxjs";
import {  PATH } from '../app.constant';
 import { Headers } from '@angular/http';
import {environment} from '../../environments/environment';
import {InterPolateUrlService} from '../services/commons/InterPolateUrl.service';
@Injectable({ providedIn: 'root' })
export class StorefinderService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    getStores(){
      const url = this.interpolateUrl(environment.API_PATH() +  PATH.STORES);
      return this.http
          .get<any[]>(url)
          .pipe(map(data => data));
  }
  findStore(latitude,longitude){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.FIND_STORE(),{latitude:latitude,longitude:longitude});
    return this.http
        .get<any[]>(url)
        .pipe(map(data => data));
  }
  checkStore(storeName){
    const url =this.interpolateUrl(environment.API_PATH()+PATH.CHECK_STORE_PATH,{storeName:storeName});
    return this.http
    .get<any[]>(url)
    .pipe(map(data => data));
  }
  getStaticContent(lang: string) {
    const langPath = `assets/slots/${lang || 'en'}.json`;
    return this.http
         .get<any[]>(langPath).pipe(map(data => data,
             catchError(err => of(err.message))
         ));
}
}
