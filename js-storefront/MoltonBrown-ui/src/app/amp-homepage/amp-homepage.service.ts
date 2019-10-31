import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
import {SERVER_PATHS, PATH } from '../app.constant';
import {environment} from '../../environments/environment';
import {InterPolateUrlService} from '../services/commons/InterPolateUrl.service';
import { map,catchError } from 'rxjs/operators';
@Injectable()
export class AmpHomePageService extends InterPolateUrlService {
  constructor(private http:HttpClient) {
           super();
    }
    getStaticContent(lang: string) {
        const langPath = `assets/contents/${lang || 'en'}.json`;
        return this.http
                .get(langPath).pipe(map(data => data
                ));
      }


}