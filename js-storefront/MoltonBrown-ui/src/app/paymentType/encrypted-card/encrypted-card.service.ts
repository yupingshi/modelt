import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
 import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
 declare var Window:any;
@Injectable({ providedIn: 'root' })
export class EncryptComponentService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    updateCardData(tokenId,email,id,body){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.EDIT_CARD.trim(),{
            email:email,
            profileID:id
        })
        const httpOptions = {
            headers: new HttpHeaders({            
                'Content-Type': 'application/json',
              Authorization: 'bearer '+tokenId
            })
          };
        return this.http
            .put<any[]>(url,JSON.stringify(body),httpOptions)
            .pipe(map(data => data)); 
      }
      getUserSavedCards(token,email){
        const url=this.interpolateUrl(environment.API_PATH() +  PATH.CARD_DETAILS(),{email:email});
              
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'bearer '+token
            })
        };
        return this.http.get<any[]>(url,httpOptions).pipe(map(data => data));
      }
      getUserAddress(token,email){
        const url =this.interpolateUrl( environment.API_PATH() +  PATH.RETREIVE_ADDRESS(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+token
            })
        };
        return this.http
        .get<any[]>(url,httpOptions)
        .pipe(map(data => data));
    }
}