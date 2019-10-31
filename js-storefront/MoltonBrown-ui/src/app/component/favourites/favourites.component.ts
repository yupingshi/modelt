import { Component, OnInit } from '@angular/core';
import {profileComponentService} from '../profile-form/profile.service';
import * as _ from 'lodash';
import {SingletonService} from '../../services/singleton.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favouriteList: Array<any>;
  user: any;
  constructor(
    public profileServ: profileComponentService,
    public singletonServ: SingletonService,
    public router: Router
  ) {}
  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.user = user;
      if ( user.token ) {
      this.fetchFavourites(user.token, user.email);
    } else {
      this.profileServ.generateToken().subscribe((response) => {
         const token = response['access_token'];
         user.token = token;
         this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user));
         this.fetchFavourites(user.token, user.email);
      });
    }}
  }
  fetchFavourites(tokenId, email) {
    this.profileServ.getFavourites(tokenId, email).subscribe(
      response => {
        if ( response ) {
        this.favouriteList = response['products'];
        this.singletonServ.favourites = response['products'];
      }
      },
      err => {
        if(err.errors){
          const _baseSite = this.singletonServ.catalogVersion;
          if(err.errors[0]['type']== "InvalidTokenError"){
            if(this.singletonServ.getStoreData(_baseSite.guest)){
              this.singletonServ.removeItem(_baseSite.guest);
             } else if(this.singletonServ.getStoreData(_baseSite.reg)){
              this.singletonServ.removeItem(_baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
          }
        }
      }
    );
  }
  addToBasket(product) {
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
        const productObj = {
          product: { code: product['code'] },
          quantity: 1
        };
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          if (_user.code) {
            this.storeProductTocart(
              productObj,
              _user.token,
              _user.code,
              _user.email
            );
          } else {
            this.registerToCart(baseSiteid, productObj, _user.token, _user.email);
          }
        }
  }
  storeProductTocart( body, token, code, email) {
    this.profileServ
      .storeCurrentUserProducts(body, token, code, email)
      .subscribe(
        response => {
          const obj = {
            code: body['product']['code'],
            showCartPopUp: true
          };
          this.singletonServ.sendMessage(obj);
          window.scrollTo(0, 0);
        },
        err => {
          if(err.errors){
            const _baseSite = this.singletonServ.catalogVersion;
            if(err.errors[0]['type']== "InvalidTokenError"){
              if(this.singletonServ.getStoreData(_baseSite.guest)){
                this.singletonServ.removeItem(_baseSite.guest);
               } else if(this.singletonServ.getStoreData(_baseSite.reg)){
                this.singletonServ.removeItem(_baseSite.reg);
                }
               this.router.navigate(['store','global',"sessionExpired"]);
            }
          }
        }
      );
  }
  registerToCart(baseSiteid, body, token, email) {
    const baseSite = this.singletonServ.catalogVersion;
    this.profileServ.createRegisterCart(baseSiteid, token, email).subscribe(
      response => {
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          user['code'] = response['code'];
          this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user));
        }
        this.storeProductTocart(
          body,
          token,
          response['code'],
          email
        );
      },
      err => {
        if(err.errors){
          const _baseSite = this.singletonServ.catalogVersion;
          if(err.errors[0]['type']== "InvalidTokenError"){
            if(this.singletonServ.getStoreData(_baseSite.guest)){
              this.singletonServ.removeItem(_baseSite.guest);
             } else if(this.singletonServ.getStoreData(_baseSite.reg)){
              this.singletonServ.removeItem(_baseSite.reg);
              }
             this.router.navigate(['store','global',"sessionExpired"]);
          }
        }
      }
    );
  }
  removeFromWhislist(product) {
    const baseSite = this.singletonServ.catalogVersion;
    const baseSiteid = baseSite.catalogversionId;
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.profileServ
            .removeFavorite(baseSiteid, user.token, user.email, product.code)
            .subscribe(
              response => {
                this.fetchFavourites(user.token, user.email);
              },
              err => {
                if(err.errors){
                  const _baseSite = this.singletonServ.catalogVersion;
                  if(err.errors[0]['type']== "InvalidTokenError"){
                    if(this.singletonServ.getStoreData(_baseSite.guest)){
                      this.singletonServ.removeItem(_baseSite.guest);
                     } else if(this.singletonServ.getStoreData(_baseSite.reg)){
                      this.singletonServ.removeItem(_baseSite.reg);
                      }
                     this.router.navigate(['store','global',"sessionExpired"]);
                  }
                }
              }
            );
        }
  }
  onShowProduct(event, data) {
    event.preventDefault();
    if (data.url.indexOf('/c/') !== -1) {
        const url = '/store' + data.url.replace('/c/', '/');
        if(event.ctrlKey && event.which === 1){
          window.open(url); 
       } else {
         this.router.navigate([url]);
       }
    } else {
      const url = '/store' + data.url.replace('/p/', '/');
      if(event.ctrlKey && event.which === 1){
        window.open(url); 
     } else {
       this.router.navigate([url]);
     }
    }
  }
  getRouterPath(data) {
    if (data.url.indexOf('/c/') !== -1) {
      const url = '/store' + data.url.replace('/c/', '/');
      return url;
  } else {
      const url = '/store' + data.url.replace('/p/', '/');
       return url;
  }
  }
}
