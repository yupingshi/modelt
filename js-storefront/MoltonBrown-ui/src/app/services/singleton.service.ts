import { Injectable, NgZone } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
declare var window: any;
@Injectable()
export class SingletonService {
  private subject = new Subject<any>();
  menudata: Array<any>;
  mbStores:Array<any>;
  gfsData:any;
  loggedIn: boolean = false;
  cartCount: number;
  checkoutStatus: boolean;
  totalAmount: any;
  catalogVersionId: string = "moltonbrown-gb";
  catalogVersion: any;
  cartObj: any;
  userDetail:any;
  confirmOrderObj: any;
  giftObj: any;
  favourites: Array<any>;
  cartStatus: boolean;
  storeDetail: any;
  pickPackCategories:any;
  footerLinks:any;
  homepage:any;
  cardList:Array<any>;
  cardData:any;
  myMessage = new Subject<string>();
  appLocaleData:any;
  portalStoreName:string;
  redirectUrl:string;
  captchaCode:any;
  interval:any;
  constructor(private zone: NgZone, private router: Router) {
    window.angularComponentRef = {
      zone: this.zone,
      componentFn: value => this.updateCart(value),
      component: this
    };
  }
  createCaptcha(id){
    document.getElementById(id).innerHTML = "";
    var charsArray ="6LcNKZ0UAAAAAKbLLIOM2xNQ6pfgURd_0GlBUgIZ";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    this.captchaCode=captcha.join("");
    document.getElementById(id).appendChild(canv);
  }
  clearItem() {
    localStorage.clear();
  }

  removeItem(name) {
    localStorage.removeItem(name);
  }
  setStoreData(name,obj) {
    localStorage.setItem(name,obj);
  // setTimeout(()=>{
  //       this.clearToken(name);
  //   },100000);
  }
  clearToken(name){
     if(localStorage.getItem(name)){
       if(this.catalogVersion['guest'] == name){
         localStorage.removeItem(name); 
      //    if (this.interval) {
      //     clearInterval(this.interval);
      //  }
         this.router.navigate(['store','global','sessionExpired']);
       } else{
        if(this.catalogVersion['reg'] == name){
          // if (this.interval) {
          //   clearInterval(this.interval);
          // }
          const _user= JSON.parse(localStorage.getItem(name)); 
          delete _user.token;
          localStorage.setItem(name,JSON.stringify(_user));
          this.router.navigate(['store','global','sessionExpired']);
        }
       }
     }
  }
  getStoreData(name){
    return localStorage.getItem(name);
  }
  updateCart(value) {
    const that = this;
    if (value == "updateCart") {
      that.sendMessage({
        updateCart: true,
        showCartPopUp: true
      });
    }
  }
  sendMessage(message: any) {
    if (message.siteid) {
      this.catalogVersionId = message.siteid;
    } else {
      this.subject.next(message);
    }
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = [
      cname,
      "=",
      JSON.stringify(cvalue),
      "; domain=.",
      window.location.host,
      "; path=/;"
    ].join("");
  }
  getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }

  setupEntryStream(data){
    let cart=this.nestedCopy(data);
    cart['bundles']=[];
    if(cart.entries){
    const bundleNo =_.groupBy(cart.entries, 'bundleNo');
    const entries= _.filter(cart.entries, function(o
          ) {
              return (o.bundleNo==0);
          });
        for(let k in bundleNo){
        if(k != '0'){
        const bundle={
                product:bundleNo[k],
                bundleTemplateId:bundleNo[k][0]['bundleTemplateId'],
                bundleNo:bundleNo[k][0]['bundleNo'],
                bundlePrice:bundleNo[k][0]['bundlePrice'],
                isBundle:true
                }
                bundle['stock']= (this.getBundleStock(bundle))?this.getBundleStock(bundle):{stockLevelStatus:'inStock'};
                bundle['quantity']= this.getBundleQuantity(bundle);
                entries.push(bundle);
        }
        }
  cart.entries=entries;
  cart.entries.sort((a,b)=>{
    return a.entryNumber - b.entryNumber;
  });
  } 

  return cart;
}
getBundleQuantity(entry){
  let p=0;
  let i;
  for( i=0;i<entry.product.length;i++){
    if(!entry.product[i]['product']['isSample']){
     let qty=entry.product[i].quantity;
       p = p + qty ;
    }
  }

  if(entry.bundleTemplateId){
    if (entry.bundleTemplateId.indexOf("6") != -1) {
       p=p/6
    } else {
      p=p/3
    }
  }
  return p;
}
getBundleStock(entry){

  let i;
  for (i = 0; i < entry["product"].length; i++) {
    if(entry["product"][i]['product'].stock){
    if (
      entry["product"][i]['product'].stock.stockLevelStatus !='inStock'
    ) {
          return entry["product"][i]['product'].stock
      break;
    }
  }
  }
}
loadScript(src) {

  return new Promise((onFulfilled, onRejected) => {
      const script:any = document.createElement('script');
      let loaded;

      // set source path to load
      script.setAttribute('src', src);
      // var outerHtmlElement: any = outerElement[0];
      // var coordinates = outerHtmlElement.getBBox();
      script.onreadystatechange = script.onload = () => {
          if (!loaded) {
              onFulfilled(script);
          }
          loaded = true;
      };

      script.onerror = function() {
          // something went wrong
      };

      // append the given script
      document.getElementsByTagName('body')[0].appendChild(script);
  });
}
isMyScriptLoaded(url) {
  if (!url) url = "https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyDHfkdOsaMspf8lm0fNW_GyGb7MdAM5gs0";
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--;) {
      if (scripts[i].src == url) return true;
  }
  return false;
}
}
