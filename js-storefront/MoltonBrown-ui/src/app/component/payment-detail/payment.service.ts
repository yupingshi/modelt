import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import { PATH } from '../../app.constant';
import {environment} from '../../../environments/environment';
import {InterPolateUrlService} from '../../services/commons/InterPolateUrl.service';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService extends InterPolateUrlService{
  constructor(private http:HttpClient) {
    super();
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
  generatePaymentToken() {
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
 postCardDetails(token,email,body){
  const url = this.interpolateUrl(environment.API_PATH() +  PATH.CREATE_CARD.trim(),{email:email});
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'bearer'+token
      })
  };
  return this.http.post(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data,
          catchError(err => of(err.message))
      ));
 } 
 setDefaultCard(token,email,id,body){
  const url =this.interpolateUrl( environment.API_PATH() +  PATH.DEFAULT_CARD(),{email:email,profileID:id});
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'bearer '+token
           })
  };
  return this.http
  .put<any[]>(url,JSON.stringify(body),httpOptions)
  .pipe(map(data => data));
 }
 removeCard(token,email,id){
    const url =this.interpolateUrl( environment.API_PATH() +  PATH.REMOVE_CARD.trim(),{email:email,profileID:id});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+token
             })
    };
    return this.http
    .delete<any[]>(url,httpOptions)
    .pipe(map(data => data)); 
 }


 getPostCode(postCode){
    const url=this.interpolateUrl(PATH.FIND_POSTCODE.trim(),{postCode:postCode});
      return this.http
      .post<any[]>(url,  {
              headers: new HttpHeaders()
              .set('Content-Type', 'text/xml') 
              .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
              .append('Access-Control-Allow-Origin', '*')
              .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
        })
      .pipe(map(data => data));   
}
retrievePostalAddress(postCode){
    const url=this.interpolateUrl(PATH.POSTAL_ADDRESS.trim(),{postCode:postCode});
    return this.http
    .post<any[]>(url,  {
            headers: new HttpHeaders()
            .set('Content-Type', 'text/xml') 
            .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
      })
    .pipe(map(data => data));
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
updateCard(token,email,body,id){
    const url =this.interpolateUrl( environment.API_PATH() +  PATH.EDIT_CARD.trim(),{email:email,profileID:id});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+token
             })
    };
    return this.http
    .put<any[]>(url,JSON.stringify(body),httpOptions)
    .pipe(map(data => data)); 
}
   }

