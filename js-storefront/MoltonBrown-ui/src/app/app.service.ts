import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { PATH } from "./app.constant";
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';

import {of} from 'rxjs';
@Injectable({ providedIn: 'root' })
@Injectable()
export class AppService {

    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    
    getStaticContent(lang: string) {
        const langPath = `assets/slots/${lang || 'en'}.json`;
      return this.http
              .get<any[]>(langPath).pipe(map(data => data,
                  catchError(err => of(err.message))
              ));
    }
}
