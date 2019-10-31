import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError, distinctUntilChanged } from 'rxjs/operators';
import { SERVER_PATHS, PATH } from '../../app.constant';

import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from "../../services/commons/InterPolateUrl.service";
import {of} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class HeaderComponentService  extends InterPolateUrlService{
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
    retrieveCartDetails(token,email,cartcode){
        const url=this.interpolateUrl( environment.API_PATH() +  PATH.USER_CARTDETAILS(),{cartID:cartcode,email:email})
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
    getCatalogData() {        
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.catalog() );
        return this.http.get<any[]>(url).pipe(map(data => data));
    }
    getampcontent(slotId){
        const url = "https://c1.adis.ws/cms/content/query?fullBodyObject=true&query="
        + encodeURIComponent(JSON.stringify({ "sys.iri": "http://content.cms.amplience.com/" + slotId }))
        + "&scope=tree&store=moltonbrown"
           const headers = new Headers({ 'Content-Type': 'application/json' });
           return this.http.get<any[]>(url).pipe(map(data => data));
    }



    getCurrentUserRelevantCart(token,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.REGISTER_CART(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer'+token
                
            })
        };
        return this.http
            .get<any[]>(url,httpOptions).pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }
    removeBundle(token,email,code,bundleNo){
        const url =this.interpolateUrl(environment.API_PATH() +  PATH.REMOVE_BUNDLE_PATH(),{email:email,cartCode:code,bundleNo:bundleNo});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer'+token
            })
        };
        return this.http.delete(url,httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
        }
    
    getCategorySearchResults(searchValue){
        const url =this.interpolateUrl(environment.API_PATH()  + PATH.CATEGORY_SEARCH_RESULTS(),{searchValue:searchValue});
        return this.http
            .get<any[]>(url).pipe( distinctUntilChanged(),  map(data => data,
                catchError(err => of(err.message))
            ));
    }
    getPolicyContent(lang: string) {
        const langPath = `assets/contents/${lang || 'en'}.json`;
      return this.http
              .get<any[]>(langPath).pipe(map(data => data,
                  catchError(err => of(err.message))
              ));
    }
    getStaticContent(lang: string) {
        const langPath = `assets/i18n/${lang || 'en'}.json`;
      return this.http
              .get<any[]>(langPath).pipe(map(data => data,
                  catchError(err => of(err.message))
              ));
    }
    getUserData(tokenId,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.PROFILE(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
            .get<any[]>(url,httpOptions)
            .pipe(map(data => data));
    }
    
}