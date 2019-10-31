import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {  PATH } from '../../app.constant';
 import { Headers } from '@angular/http';
 import {environment} from '../../../environments/environment';
 import {InterPolateUrlService} from "../../services/commons/InterPolateUrl.service";
import {of} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class profileComponentService extends InterPolateUrlService {
    private headers: Headers;
    http: HttpClient;
    constructor(http: HttpClient) {
        super();
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    generateToken() {
        const url =this.interpolateUrl(environment.AUTHRISATION_PATH +PATH.CART_TOKEN_PATH());
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        if(url){
            
        }
        return this.http
            .post<any[]>(url, httpOptions)
            .pipe(map(data => data));
    }

    mergeCart(data,_email,token,oldCartId,newCartId){
        const url = this.interpolateUrl(environment.API_PATH() + PATH.MERGE_CART(),{email:_email,oldCartId:oldCartId,newCartId:newCartId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(data),httpOptions)
            .pipe(map(data => data));
    }

    createUser(body,tokenId){
        const url = environment.API_PATH() +  PATH.CREATE_USER_PATH();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(body), httpOptions)
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

    createUserAddress(body,tokenId,email){
        const url = this.interpolateUrl( environment.API_PATH() +  PATH.CREATE_ADDRESS(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(body), httpOptions)
            .pipe(map(data => data));
    }

    siteAuthentication(cVrsnid,user){
        const url =this.interpolateUrl(environment.AUTHRISATION_PATH+PATH.SITE_AUTENTICATION(),{uid:user.email,password:user.password,siteId:cVrsnid});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                
            })
        };
        return this.http
            .post<any[]>(url,httpOptions)
            .pipe(map(data => data));
    }

    siteanonymousAuth(tokenId,code,email){
       const url =this.interpolateUrl(environment.API_PATH()+PATH.ANANONYMOUSCART(),{email:email,cartCode:code});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
            .put(url,JSON.stringify({}),httpOptions)
            .pipe(map(data => data));
            
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

    updateUserAddress(body,tokenId,email,addressId){
        const url =this.interpolateUrl( environment.API_PATH() +  PATH.UPDATE_ADDRESS(),{email:email,addressId:addressId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+tokenId
            })
        };
        return this.http
        .patch<any[]>(url,JSON.stringify(body),httpOptions)
        .pipe(map(data => data));
    }

    generateCartId(token,email){
        const url = this.interpolateUrl(environment.API_PATH()+PATH.GENERATTE_CART(),
                                         {email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
            })
        };
        return this.http.post(url, JSON.stringify({}), httpOptions)
            .pipe(map(data => data,
                catchError(err => of(err.message))
            ));
     }
     
    creatEmptyCart(token,data,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.REGISTER_CART(),{email:email} );
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .post<any[]>(url,JSON.stringify(data),httpOptions)
            .pipe(map(data => data));
    }

    getCurrentUserRelevantCart(token,email){
        const url = this.interpolateUrl(environment.API_PATH() +  PATH.REGISTER_CART(),{email:email});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization':'bearer '+token
                
            })
        };
        return this.http
            .get<any[]>(url,httpOptions).pipe(map(data => data,
                catchError(err => of(err.message))
            ));
    }
    spliceUserAddress(cVrsnid,tokenId,email,addressId){
        const url =this.interpolateUrl( environment.API_PATH() +  PATH.UPDATE_ADDRESS(),{email:email,addressId:addressId});
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer'+tokenId
            })
        };
        return this.http.delete(url,httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
    }
     handleError(error: HttpErrorResponse) {
    let errMsg = '';
    // Client Side Error
    if (error.error instanceof ErrorEvent) {        
      errMsg = `Error: ${error.error.message}`;
    } 
    else {  // Server Side Error
      errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
    }
    // return an observable
    return throwError(errMsg);
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
updateProfile(cVrsnId,tokenId,email,data){
    const url =this.interpolateUrl( environment.API_PATH() + PATH.PROFILE(),{email:email});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization':'bearer'+tokenId
            
        })
    };
    return this.http
        .patch<any[]>(url,JSON.stringify(data),httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
}
updateProfileAddress(cVrsnId,tokenId,email,addressId,data){
    const url =this.interpolateUrl( environment.API_PATH() + PATH.UPDATE_ADDRESS(),{email:email,addressId:addressId});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization':'bearer'+tokenId
            
        })
    };
    return this.http
        .patch<any[]>(url,JSON.stringify(data),httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
}

createRegisterCart(baseSiteid,tokenId,email){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.REGISTER_CART(),{email:email});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+tokenId
        })
    };
    return this.http.post(url, JSON.stringify({}), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }

getFavourites(tokenId,email){
    const url=this.interpolateUrl( environment.API_PATH() + PATH.FAVOURITES(),{email:email});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization':'bearer'+tokenId
            
        })
    };
    return this.http
        .get<any[]>(url,httpOptions).pipe(map(data => data,
            catchError(err => of(err.message))
        ));
}
storeCurrentUserProducts(item,tokenId,code,email){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.ADD_TO_BASKET(),{email:email,cartCode:code});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+tokenId
        })
    };
    return this.http.post(url, JSON.stringify(item), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }
 removeFavorite(cVrsnid,tokenId,email,productCode){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.REMOVE_FAVOURITE(),{email:email,productCode:productCode});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+tokenId
        })
    };
    return this.http.delete(url,httpOptions)
    .pipe(map(data => data,
        catchError(err => of(err.message))
    ));
 }
 yMarketingSignUp(baseSiteid,item){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.Y_MARKETING_SIGNUP());
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    return this.http.post(url, JSON.stringify(item), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }

 getDlMethod(token,email,code){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.DELIVERY_METHODS(),{
                 email:email,
                 cartCode:code
                });
    
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+token
        })
    };
    return this.http.get(url,  httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }
 getDlEUDEMethods(token,email,code,countryCode){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.EU_DL_METHODS(),{
                email:email,
                 cartCode:code,
                countryCode:countryCode});
   const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+token
        })
    };
    return this.http.get(url,  httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }
 
 getDlUSMethod(token,email,code,deliveryGroup){
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.US_DELIVERY_SERVICES(),{
                  email:email,
                  cartCode:code,
                  deliveryGroup:deliveryGroup
                });    
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+token
        })
    };
    return this.http.get(url,  httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }

 postDeliveryMethod(token,email,dlMode){
     let deliveryMethod=(dlMode.code)?dlMode.code:dlMode.zoneName;
    const url = this.interpolateUrl(environment.API_PATH() +  PATH.SET_DELIVERY_METHOD(),{email:email,deliveryMethod:deliveryMethod});
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer'+token
        })
    };
    let _body={
        serviceName: dlMode.serviceName,  
        description:dlMode.description, 
        deliveryCost: dlMode.deliveryCost
    }
    if(dlMode.code){
        _body['code']=dlMode.code;
    }else{
        _body['zoneName']=dlMode.zoneName;
    }
    return this.http.post(url, JSON.stringify(_body), httpOptions)
        .pipe(map(data => data,
            catchError(err => of(err.message))
        ));
 }
}