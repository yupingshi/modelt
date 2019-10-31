import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PATH } from "../../app.constant";
import { Headers } from "@angular/http";
import { environment } from "../../../environments/environment";
import { InterPolateUrlService } from "../../services/commons/InterPolateUrl.service";
@Injectable({ providedIn: "root" })
export class GiftCardService extends InterPolateUrlService {
  private headers: Headers;
  http: HttpClient;
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  giftCardService(body, tokenId, email, cartCode) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.GIFT_CARD.trim(),
      { email: email, cartCode: cartCode }
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

  splitPayment(obj, _token, _code, email, card) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.SPLIT_PAYMENT.trim(),
      {
        email: email,
        cartCode: _code,
        firstName: card.FirstName,
        lastName: card.LastName,
        givexCardNumber: card.GivexCardNumber.trim(),
        givexPinNumber: card.GivexPinNumber.trim(),
        amount: card.Amount.trim()
      }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + _token
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(obj), httpOptions)
      .pipe(map(data => data));
  }
  expressSplitCard(obj, _token, _code, email, card, id) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.EXPRESS_SPLIT_PAYMENT.trim(),
      {
        email: email,
        cartCode: _code,
        firstName: card.FirstName,
        lastName: card.LastName,
        givexCardNumber: card.GivexCardNumber.trim(),
        givexPinNumber: card.GivexPinNumber.trim(),
        amount: card.Amount.trim(),
        profileID: id
      }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + _token
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(obj), httpOptions)
      .pipe(map(data => data));
  }
  addPaymentDetails(obj, _token, _code, email) {
    const url = this.interpolateUrl(
      environment.API_PATH() + PATH.REG_GIVEX_PAYMENT_DETAIL.trim(),
      { cartCode: _code, email: email }
    );
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + _token
      })
    };
    return this.http
      .post<any[]>(url, JSON.stringify(obj), httpOptions)
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
}
