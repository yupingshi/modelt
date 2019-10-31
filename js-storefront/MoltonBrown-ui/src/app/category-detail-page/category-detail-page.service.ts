import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map,catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { PATH } from "../app.constant";
import { Headers } from "@angular/http";
import {environment} from '../../environments/environment';
import {InterPolateUrlService} from "../services/commons/InterPolateUrl.service";
@Injectable({ providedIn: "root" })
export class CategoryDetailComponentService extends InterPolateUrlService{
  private headers: Headers;
  http: HttpClient;
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }
  getMbProdDetails(id,parentId) {
    const url = this.interpolateUrl(environment.API_PATH() + PATH.PRODUCT_DATA_PATH() , {
      productCode:id,
      categoryCode:parentId
    });
    return this.http.get<any[]>(url).pipe(map(data => data));
  }
  getrelevantDynamicData(code) {
    const url = "https://media.moltonbrown.co.uk/s/moltonbrown/" + code + "_uk_set.json";
    return this.http.get<any[]>(url).pipe(map(data => data));
  }
  getFRContent(lang: string) {
    const langPath = `assets/slots/${lang || 'en'}.json`;
    return this.http
         .get<any[]>(langPath).pipe(map(data => data,
             catchError(err => of(err.message))
         ));
}
}
