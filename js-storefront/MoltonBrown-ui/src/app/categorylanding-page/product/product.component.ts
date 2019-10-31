import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  HostListener,
  ViewChild
} from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import * as _ from "lodash";
import { HeaderComponentService } from "../../component/header/header.service";
import { SingletonService } from "../../services/singleton.service";
import { productviewComponentService } from "../../component/productview/productview.service";
declare var $: any;
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() displayGrid: boolean;
  @Input() activeProducts: boolean;
  @Input() categoryResponse: any;
  @Input() pagedItems: any;
  @ViewChild('qvElement') qvElement:ElementRef;
  deviceInfo: any;
  mobileDevice: boolean;
  gridtoggle: boolean;
  siteSpecific: boolean;
  localData:any;
  prodQuantity: string;
  @HostListener("window:scroll", ["jQueryevent"])
  windowScroll(event) {
    
  }
  constructor(
    public quickServ: productviewComponentService,
    private el: ElementRef,
    public deviceService: DeviceDetectorService,
    public headerServ: HeaderComponentService,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService
  ) {
    const baseSite = this.singletonServ.catalogVersion;
    this.prodQuantity = "1";
    this.localData=this.singletonServ.appLocaleData;
    if(!this.localData){
     this.setLang(baseSite.lngCode);
   }
  }

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      if (baseSite.isoCode == "DE") {
        this.siteSpecific = false;
      } else {
        this.siteSpecific = true;
      }

  }
    this.getDeviceInfo();
  }

  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isMobile || isTablet) {
      this.mobileDevice = true;
    } else {
      this.mobileDevice = false;
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    if (changes["displayGrid"]) {
      if (changes["displayGrid"]["currentValue"] != undefined) {
        that.gridtoggle = changes["displayGrid"]["currentValue"];
      }
    }
  }
  setLang(lng: string) {
     this.headerServ.getStaticContent(lng).subscribe(response => {
      this.singletonServ.appLocaleData = response;
      this.localData=response;
    });
  }
  getRouterPath(data) {
    const _keyword = this.categoryResponse;
    if (_keyword.keywordRedirectUrl) {
      if (_keyword.keywordRedirectUrl.indexOf("/c/") != -1) {
        const _replaceUrl = _keyword.keywordRedirectUrl.replace("/c/", "/");
        const _url = "/store" + _replaceUrl;
       return _url;
      } else {
        const _replaceUrl = _keyword.keywordRedirectUrl.replace("/p/", "/");
        const _url = "/store" + _replaceUrl;
        return _url;
      }
    } else {
      if (data.url.indexOf("/c/") != -1) {
        if (data.category) {
          let _constructUrl = data.category.url.slice(1).split("/");
          _constructUrl.splice(-2, 2);
          const _produrl = _constructUrl.join("/");
          const _url = "/store/" + _produrl + "/" + data.name + "/" + data.code;
          return _url;
        }
      } else {
        const _url = "/store" + data.url.replace("/p/", "/");
        return _url;
      }
    }
  }
  onShowDetailPage(event, data) {
    event.preventDefault();
    const _keyword = this.categoryResponse;
    window.scrollTo(0,0);
    if (_keyword.keywordRedirectUrl) {
      if (_keyword.keywordRedirectUrl.indexOf("/c/") != -1) {
        const _replaceUrl = _keyword.keywordRedirectUrl.replace("/c/", "/");
        const _url = "/store" + _replaceUrl;
        if(event.ctrlKey && event.which === 1){
          window.open(_url); 
       } else {
         this.router.navigate([_url]);
       }
      } else {
        const _replaceUrl = _keyword.keywordRedirectUrl.replace("/p/", "/");
        const _url = "/store" + _replaceUrl;
          if(event.ctrlKey && event.which === 1){
            window.open(_url); 
        } else {
          this.router.navigate([_url]);
        }
      }
    } else {
        if (data.category) {
          let _constructUrl = data.category.url.slice(1).split("/");
          _constructUrl.splice(-2, 2);
          const _produrl = _constructUrl.join("/");
          const _url = "/store/" + _produrl + "/" + data.name + "/" + data.code;
          if(event.ctrlKey && event.which === 1){
            window.open(_url); 
          } else {
            this.router.navigate([_url]);
          }
        } else{
          let _url = "/store" + data.url.replace("/p/", "/");
          if(event.ctrlKey && event.which === 1){
            window.open(_url); 
         } else {
           this.router.navigate([_url]);
         }
        }

    }
  }
  onCloseWindow(data, i) {
    const _name = "" + data.code;
    _name.trim();
    const el=document.getElementsByClassName(_name)[0];
    if(el){
    el['checked'] = false;
  }
 }
  onCloseQuickView(data) {
    const index = _.findIndex(this.pagedItems, resp => {
      return resp.code == data.code;
    });
    this.pagedItems[index]["show"] = false;
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onCollapseQuickView(event, data) {
    event.stopPropagation();
    event.preventDefault();
    if($("#" + data.code).offset()){
        setTimeout(()=>{
              $('html, body').animate({
                scrollTop: $("#" + data.code).offset().top-75
              }, 100);
          });
    }
  }
  showFirstPage(event) {
    const _obj = {
      page: 1
    };
  }
  onShowProductReview(event, data) {
    event.stopPropagation();
    const _keyword = this.categoryResponse;
    if (_keyword.keywordRedirectUrl) {
      if (_keyword.keywordRedirectUrl.indexOf("/c/") != -1) {
        const _replaceUrl = _keyword.keywordRedirectUrl.replace("/c/", "/");
        const _url = "/store" + _replaceUrl;
        this.router.navigate([_url], {
          queryParams: { BVRRContainer: true },
          queryParamsHandling: "merge"
        });
      } else {
        const _replaceUrl = _keyword.keywordRedirectUrl.replace("/p/", "/");
        const _url = "/store" + _replaceUrl;
        this.router.navigate([_url], {
          queryParams: { BVRRContainer: true },
          queryParamsHandling: "merge"
        });
      }
    } else {
      if (data.url.indexOf("/c/") != -1) {
        let _constructUrl = data.category.url.slice(1).split("/");
        _constructUrl.splice(-2, 2);
        const _produrl = _constructUrl.join("/");
        const _url = "/store/" + _produrl + "/" + data.name + "/" + data.code;
        this.router.navigate([_url], {
          queryParams: { BVRRContainer: true },
          queryParamsHandling: "merge"
        });
      } else {
        let url = "/store" + data.url.replace("/p/", "/");
        this.router.navigate([url], {
          queryParams: { BVRRContainer: true },
          queryParamsHandling: "merge"
        });
      }
    }
  }
  addToBasket(event,item) {
    event.preventDefault();
    event.stopPropagation();
    const _name = "" + item["code"];
    if(document.getElementsByClassName(_name)[0]){
      document.getElementsByClassName(_name)[0]['checked'] = false;
    }
    window.scrollTo(0, 0);
    const baseSite = this.singletonServ.catalogVersion;
    const productObj = {
      product: { code: item["code"] },
      quantity: parseInt(this.prodQuantity)
    };
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          this.singletonServ.loggedIn = true;
          if (!user.code) {       
            this.createCart(user.email,productObj,true);
          } else {
            if(user["token"]){
              this.addToCart(user["token"],user.email,user.code,productObj);
            }else{  
              this.quickServ.generateCartToken().subscribe(
                resp => {
                   const token = resp["access_token"];
                   user.token= resp["access_token"];
                   this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user)); 
                   this.addToCart(token,user.email,user.code,productObj);
                },err=>{

                });
            }
          }
        } else {
          
          if (!this.singletonServ.getStoreData(baseSite.guest)) {
            this.createCart('anonymous',productObj,false);
          } else {
            const _guest = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
            const cartId =  _guest["guid"];
            const tokenId =_guest["token"];
            if(tokenId){
              this.addToCart(tokenId,'anonymous',cartId,productObj);
            }else{
              this.createCart('anonymous',productObj,false);
            }
        }
        }
 
  }

  createCart(email,productObj,logged){
    const baseSite = this.singletonServ.catalogVersion;
    this.quickServ.generateCartToken().subscribe(
      resp => {
        const token = resp["access_token"];
 
    this.quickServ.generateCartId(resp["access_token"],email).subscribe(
          data => {
            if(logged){
              const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
              user['code']=data['code'];
              user['guid']=data["guid"];
              user['token']=token;
              this.singletonServ.setStoreData(baseSite.reg, JSON.stringify(user));
              this.addToCart(token,email,user['code'],productObj);
            }else{
              const _user = {token:'',guid:''};
              _user["guid"]=data["guid"];
              _user['code']=data['code'];
              _user['token']=resp["access_token"];
              this.singletonServ.setStoreData(baseSite.guest, JSON.stringify(_user));
              this.addToCart(resp["access_token"],email,data["guid"],productObj);
            }
           
          },err=>{
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
          });
        },
        error => {}
      );
  }
  addToCart(token,email,code,productObj){
    this.quickServ.addToBasket(token,email,code,productObj).subscribe((response)=>{
          const obj = {
            code: productObj['product']["code"],
            showCartPopUp: true
          };         
          const index = _.findIndex(this.pagedItems, resp => {
            return resp.code == productObj['product']["code"];
          });
          this.pagedItems[index]["show"] = false;
          this.singletonServ.sendMessage(obj);
    },err=>{
      if(err.errors){
        if(err.errors[0]['type']== "InvalidTokenError"){
          const baseSite=this.singletonServ.catalogVersion;
          if(this.singletonServ.getStoreData(baseSite.guest)){
           this.singletonServ.removeItem(baseSite.guest);
          } else if(this.singletonServ.getStoreData(baseSite.reg)){
            this.singletonServ.removeItem(baseSite.reg);
           }
          this.router.navigate(['store','global',"sessionExpired"]);
        }
      }
    });
  }
}
