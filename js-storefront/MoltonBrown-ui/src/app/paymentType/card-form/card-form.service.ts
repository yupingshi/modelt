import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { PATH } from "../../app.constant";
import { Headers } from "@angular/http";
import { environment } from "../../../environments/environment";
import { InterPolateUrlService } from "../../services/commons/InterPolateUrl.service";
import { of } from "rxjs";
declare var Window: any;
@Injectable({ providedIn: "root" })
export class cardFormComponentService extends InterPolateUrlService {
  private headers: Headers;
  http: HttpClient;
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }
  

  generateJWT(token,email,code){
    const url =this.interpolateUrl(environment.API_PATH()+PATH.JWT_TOKEN,{email:email,cartCode:code})
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    }
    return this.http.post<any[]>(url,JSON.stringify({}), httpOptions).pipe(map(data => data));
  }

  validatePayMode(token,email,code,body,responseJWT,transactionID){
    const url =this.interpolateUrl(environment.API_PATH()+PATH.VALIDATE_PAYMENT,{
                        email:email,
                        cartCode:code,
                        responseJWT:responseJWT,
                        transactionID:transactionID
                      });
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    }
    return this.http.post<any[]>(url,JSON.stringify(body), httpOptions).pipe(map(data => data));
  }

  validateExpressPayMode(token,email,code,body,responseJWT,transactionID,profileID){
    const url =this.interpolateUrl(environment.API_PATH()+PATH.EXPRESS_VALIDATE_PAYMENT,{
                        email:email,
                        cartCode:code,
                        responseJWT:responseJWT,
                        transactionID:transactionID,
                        profileID:profileID
                      });
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    }
    return this.http.post<any[]>(url,JSON.stringify(body), httpOptions).pipe(map(data => data));
  }


  expressPaymentAuthentication(token, email, code, body,profileID, sessionID){
    const url =this.interpolateUrl(environment.API_PATH()+PATH.EXPRESS_PAYMENT,{
      email:email,
      cartCode:code,
      profileID:profileID,
      sessionID:sessionID
    })
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    }
    return this.http.post<any[]>(url,JSON.stringify(body), httpOptions).pipe(map(data => data));
  }

  paymentAuthentication(token,email,code,body,sessionID){
    const url =this.interpolateUrl(environment.API_PATH()+PATH.PAYMENT_AUTHENTICATION,{email:email,cartCode:code,sessionID:sessionID})
    const httpOptions={
      headers:new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    }
    return this.http.post<any[]>(url,JSON.stringify(body), httpOptions).pipe(map(data => data));
  }
  


  confirmOrder(tokenId, body, emailId, cartCode) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.REG_DEBIT_PAYMENT.trim(),
      { email: emailId, cartCode: cartCode }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + tokenId
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data));
  }
  getUserAddress(token, email) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.CREATE_ADDRESS(),
      { email: email }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    };
    return this.http.get<any[]>(url, httpOptions).pipe(map(data => data));
  }
  createUserAddress(body, tokenId, email) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.CREATE_ADDRESS(),
      { email: email }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + tokenId
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data));
  }

  expressPayment(tokenId, email, code, body, id) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.EXPRESS_DBPAYMENT.trim(),
      { cartCode: code, email: email, profileID: id }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + tokenId
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data));
  }

  generateCartToken() {
    const url = this.interpolateUrl(
      environment.AUTHRISATION_PATH + PATH.CART_TOKEN_PATH()
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<any[]>(url, httpOptions).pipe(map(data => data));
  }

  addCCShippingAddress(tokenId, address, email, code) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.CLICKANDCOLLECT_ADDRESS_PATH(),
      { email: email, cartCode: code }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + tokenId
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(address), httpOptions)
      .pipe(map(data => data));
  }
  addBillingAddress(tokenId, email, code, _address) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.CHANGE_BILLING_ADDRESS(),
      { email: email, cartCode: code }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + tokenId
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(_address), httpOptions)
      .pipe(map(data => data));
  }

  expressCheckout(token, email) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.EXPRESS_CHECK_PATH.trim(),
      { email: email }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify({}), httpOptions)
      .pipe(map(data => data));
  }
  getUserSavedCards(token, email) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.CARD_DETAILS(),
      { email: email }
    );

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    };
    return this.http.get<any[]>(url, httpOptions).pipe(map(data => data));
  }
  postCardDetails(token, email, body) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.CREATE_CARD.trim(),
      { email: email }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer" + token
      })
    };
    return this.http
      .post(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data, catchError(err => of(err.message))));
  }
  updateUserAddress(body, tokenId, email, addressId) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.UPDATE_ADDRESS(),
      { email: email, addressId: addressId }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + tokenId
      })
    };
    return this.http
      .patch<any[]>(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data));
  }
  getJWT() {
    const url = "../signature.php";
    return this.http
      .get<any[]>(url)
      .pipe(map(data => data, catchError(err => err.message)));
  }
}
