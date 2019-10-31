import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {  PATH } from '../app.constant';
 import { Headers } from '@angular/http';
 import {of} from 'rxjs';
 import {InterPolateUrlService} from "../services/commons/InterPolateUrl.service";
 import {environment} from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class CategoryComponentService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
      getMBProduct(categoryCode,pageSize){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.CATEGORY_PRODUCTS(),{categoryCode:categoryCode,pageSize:pageSize});
        return this.http
        .get<any[]>(url).pipe(map(data => data,
          catchError(err => of(err.message))
      ));
      }
      getMbProdDetails(productCode){
        const url = this.interpolateUrl(environment.API_PATH()+PATH.PRODUCT_DATA_PATH(),{productCode:productCode});
        return this.http
        .get<any[]>(url).pipe(map(data => data,
          catchError(err => of(err.message))
      ));
      }
    getCategorySearchResults(searchValue,pageSize){
      const url =this.interpolateUrl(environment.API_PATH() + PATH.CATEGORY_SEARCH_PRODUCTS(),{searchValue:searchValue,pageSize:pageSize});
      return this.http
          .get<any[]>(url).pipe(map(data => data,
              catchError(err => of(err.message))
          ));
  }
  getStaticContent(lang: string) {
     const langPath = `assets/slots/${lang || 'en'}.json`;
     return this.http
          .get<any[]>(langPath).pipe(map(data => data,
              catchError(err => of(err.message))
          ));
}
}