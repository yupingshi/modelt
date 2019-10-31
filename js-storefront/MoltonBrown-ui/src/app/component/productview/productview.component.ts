import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  AfterContentInit,
  AfterViewChecked
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { productviewComponentService } from "./productview.service";
import { SingletonService } from "../../services/singleton.service";
import * as _ from "lodash";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import { patternValidator } from '../../forms/pattern-validator';
declare var amp:any;
declare var $: any;
@Component({
  selector: "app-productview",
  templateUrl: "./productview.component.html",
  styleUrls: ["./productview.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ProductviewComponent implements OnInit, OnChanges,AfterContentInit,AfterViewChecked {
  @Input() categoryResponse:any;
  @Input() showDetail: boolean;
  @Input() productInfo: any;
  @Output() showProductDetail: EventEmitter<any> = new EventEmitter<any>();
  @Output() onQuickView: EventEmitter<any> = new EventEmitter<any>();
  @Output() onVariantProduct: EventEmitter<any> = new EventEmitter<any>();
  @Output() showDlRstrn:EventEmitter<any> = new EventEmitter<any>();
  showExplore: boolean;
  showDelivery: boolean;
  currentCnt: string;
  prodQuantity: string;
  pdpImage: string;
  emailstring:string;
  pdpSlides: Array<any>;
  slideConfig: any;
  mailtoBody:string;
  regUser: any;
  favourite: boolean = true;
  code:any;
  siteSpecific:boolean;
   repoUrl : string;
   imageUrl :string;
   decscription: string;
   mailText:string;
   cartForm: FormGroup;
  constructor(
    public quickServ: productviewComponentService,
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    private translate: TranslateServiceSubService,
    private fb: FormBuilder
  ) {
    this.showExplore = false;
    this.showDelivery = false;
    this.prodQuantity = "1";
    this.slideConfig = { slidesToShow: 1, slidesToScroll: 2 };
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.cartForm = this.fb.group({"quantity":new FormControl('',{
      validators:[
        Validators.required, 
        patternValidator(/[1-9][0-9]*$/)],
        updateOn: 'change'
     })});
  }

  ngOnInit() {
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      if(baseSite.isoCode =="DE" ){
        this.siteSpecific=false;
      }else{
        this.siteSpecific=true;
      }
    }
    // let _scripts=[
    //   {url:'https://dev-solutions.s3.amazonaws.com/viewer-kit-playground/v1.1.0/js/jquery.min.js'},
    //   {url:'https://dev-solutions.s3.amazonaws.com/viewer-kit-playground/v1.1.0/js/jquery-ui-custom.js'}
    // ];
    // _scripts.forEach((resp)=>{
    //   let _checkUri=this.isMyScriptLoaded(resp.url)
    //   if(_checkUri){
    //       this.appendScript(resp.url);
    //   }
    // });
  }
  appendScript(url){
    let googleMapsScript = document.createElement('script')
     googleMapsScript.setAttribute('src', url)
     document.head.appendChild(googleMapsScript)
  }
  isMyScriptLoaded(url) {
    if (!url) url = "http://cdn.curalate.com/sites/moltonbrown-pabiml/site/latest/site.min.js";
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}

  ngAfterContentInit(){
    if(this.showDetail){
      this.singletonServ.loadScript('https://dev-solutions.s3.amazonaws.com/viewer-kit-playground/v1.1.0/js/viewer.min.js').then(() => {
      this.route.params.subscribe(params => {
          const _code=params.itemid;
          const _set =''+_code+'_uk_set';
          const  viewerSettings = {
            target : '.viewer-kit-target',
            client : 'moltonbrown',
            secure : true,
            imageBasePath : 'https://media.moltonbrown.co.uk/',
            set : _set,
            responsive:false,
            templates : {
              thumb : '$smallImg$&fmt=webp',
              desktop : {
                main : '$xLImg$&fmt=webp',
                mainRetina : '$xLImgRetina$&fmt=webp'
              },
              desktopFull : {
                main : '$xLImg$&fmt=webp',
                mainRetina : '$xLImgRetina$&fmt=webp'
              },
              mobile: {
                main: '$mobPDPImg$&fmt=webp',
                mainRetina: '$mobPDPImgRetina$&fmt=webp'
            }
            },
            tooltips: {
              offsets: {
                left: -102,
                top:  -39
              },
              displayTime: 3000,
              desktop: {
                image: {
                  noTouch: {
                    text: 'Click to zoom'
                  },
                  touch: {
                    text: 'Tap to zoom'
                  }
                },
                spin: {
                  text: ''
                },
                video: {
                  play: {
                    text: ''
                  },
                  pause: {
                    text: ''
                  }
                }
              }
            },
          ampConfigs : {
            navElementsCount : {
              forDesktop : 5,
              forDesktopFull : 5
            },
            mainContainerCarousel : {
              width : "600px",
              height : "600px",
              responsive : false,
              start : 3,
              loop : false,
              dir : 'horz',
              autoplay : false,
              gesture : {
                enabled : true,
                fingers : 1,
                dir : 'horz',
                distance : 80
              },
              animDuration : 500,
              layout : 'standard',
              onActivate : {
                select : true,
                goTo : true
              },
              animate : true,
              easing : 'linear',
              preferForward : true,
              preloadNext : true
            }
          }
          };
          
          var viewer = new amp.Viewer(viewerSettings);
        });
});
 
    }
}
setLang(lang: string) {
  this.translate.use(lang);
}
ngAfterViewChecked(){

}
  onClickFavourite() {
    this.router.navigate(["store", "myaccount", "profile", "myFavorites"]);
  }
  onVariantClick(data){
      const _prod=this.productInfo;
      const _catName=_prod.category;
      const _path=this.location.path().slice(1).split('/');
      _path.shift();

      this.router.navigate(['store',_path[0],_path[1],data.name,data.code]);
  }
  addToFavourite(event, data) {
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion;
    const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
    this.quickServ
          .addToFavourite(user.token, user.email, data.code)
          .subscribe(
            resp => {
              this.favourite = false;
            },
            error => {
              const err=error.error["errors"][0];           
            }
          );
      
  }
  onShowProductDetails(data) {
    if(data){

    }
    if(data.url.indexOf('/c//p/') !=-1){
      let _constructUrl= data.category.url.slice(1).split('/');
      _constructUrl.splice(-2,2);
      const _produrl=_constructUrl.join("/");
      const _url ="/store/"+_produrl+'/'+data.name+'/'+data.code;
      this.router.navigate([_url]);
    }else if(data.url.indexOf('/c/') !=-1){
      let url = "/store" + data.url.replace("/c/", "/");
      this.router.navigate([url]);  
    }else{
     let url = "/store" + data.url.replace("/p/", "/");
     this.router.navigate([url]);
    }
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  pdpData(data) {}
  getImageUrl(data, bol) {
    if (bol) {
      return (
        "https://media.moltonbrown.co.uk/s/moltonbrown/" +
        data.code +
        "_uk_set?$LargeImageTemplate1$"
      );
    } else {
      return data.src;
    }
  }
  checkFavourite(user, code) {
    const _favourites = this.singletonServ.favourites; 
    if (_favourites) {
      const _fav = _.find(_favourites, function(o) {
        return o.code == code;
      });
      if (_fav) {
        this.favourite = false;
      } else {
        this.favourite = true;
      }
    } else {
      this.quickServ
            .getFavourites(user.token, user.email)
            .subscribe(
              response => {
                if(response){
                const _fav = _.find(response["products"], function(o) {
                  return o.code == code;
                });
                this.singletonServ.favourites = response["products"];
                if (_fav) {
                  this.favourite = false;
                } else {
                  this.favourite = true;
                }
              }

              },
              error => {
                this.favourite = true;
              }
            );
    }
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const that = this;
    if (changes["productInfo"]) {
      const baseSite = this.singletonServ.catalogVersion;
      const baseSiteid=baseSite.catalogversionId;
      if (changes["productInfo"]["currentValue"] != undefined) {
        const  _product = changes["productInfo"]["currentValue"];
        const _code = _product["code"];
        this.pdpImage = "https://media.moltonbrown.co.uk/s/moltonbrown/" + _code + "_uk_set";
        this.repoUrl='https://www.moltonbrown.co.uk'+this.location.path();
        this.imageUrl=this.pdpImage;
        this.mailtoBody =_product.productDisplayName.replace("&"," ") ;

        this.emailstring= `mailto:?Subject=Thought you might like this… &body=${this.mailtoBody}${this.repoUrl}`;
        
        
        if (this.singletonServ.getStoreData(baseSite.reg)) {
          const _user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
          that.regUser = true;
          that.favourite = true;
           if (_product["explore"] ) {
               that.checkFavourite(_user, _code);
          }
        }else {
          that.regUser = false;
        }
      }
    }
  }
  getrelevantProducts(code) {}
  onCollapseDetail(event, data) {
    event.stopPropagation();
    

  }

  onThumbnailClick(event, pic) {
    event.preventDefault();
    this.pdpImage = pic.src;
  }
  onFindDRtcn(){
   this.showDlRstrn.emit();
  }

/* Add to basket */

  addToBasket(event,item) {
    event.preventDefault();
    event.stopPropagation();
    // if(item['category']){
    // dataLayer.push({'productDetails':{
    //              code:item['category']['code'],
    //              name:item['category']['name']
    //            } 
    //          });
    // }
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
          this.onQuickView.emit(obj);
          window.scrollTo(0, 0);
          this.singletonServ.sendMessage(obj);
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
  }
  onClickTabs(event,k){
    event.preventDefault();
    this.productInfo['contentTabs'].map((obj,id)=>{
      if(id==k){
        obj['show']=!obj['show'];
      } else {
        obj['show']=false;
      }
    });
  }
}
