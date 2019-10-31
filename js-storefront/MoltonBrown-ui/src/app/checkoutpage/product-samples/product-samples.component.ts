import { 
  Component,
  OnInit, 
  AfterViewInit, 
  OnDestroy,
  ViewChild
 } from "@angular/core";
import { SingletonService } from "../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { BasketPageComponentService } from "../basketpage/basketpage.service";
import { Title } from '@angular/platform-browser';
import { GuestForm } from "../../forms/guestForm.form";
import {
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { TranslateServiceSubService } from "../../pipe/translate-service-sub.service";
import * as _ from "lodash";
import { Subscription } from "rxjs";
/*slideConfig = {
   “slidesToShow”: 3,
   “slidesToScroll”: 2,
   “nextArrow”:”“, 
   “prevArrow”:”“, 
   “dots”:false, 
   “infinite”: false, 
   “responsive”: [
      { 
        “breakpoint”: 1920,
        “settings”: { 
        “slidesToShow”: 3, 
        “slidesToScroll”: 3, 
        “infinite”: true, 
        “dots”: true 
      } },
      { “breakpoint”: 1024, “settings”: { “slidesToShow”: 2, “slidesToScroll”: 2, “infinite”: true,“dots”: true } },
     { “breakpoint”: 600, “settings”: { “slidesToShow”: 1, “slidesToScroll”: 1 } }, 
     { “breakpoint”: 480, “settings”: { “slidesToShow”: 1, “slidesToScroll”: 1 } } ] };*/ 
@Component({
  selector: "app-product-samples",
  templateUrl: "./product-samples.component.html",
  styleUrls: ["./product-samples.component.scss"]
})
export class ProductSamplesComponent
  implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('slickModal') slickModal: any;
  slides: Array<any>;
  subscription:Subscription;
  slideConfig: any;
  deviceInfo: any;
  totalAmount: string;
  cartEntryObj: any;
  showExpress: boolean;
  cartCode: string;
  samplesCopy: Array<any>;
  giftMsg: boolean;
  giftMessageForm: FormGroup;
  giftText: string;
  totalPriceValue: any;
  isValidSubmit:boolean;
  disableGiftBox:boolean;
  constructor(
    public singletonServ: SingletonService,
    public deviceService: DeviceDetectorService,
    public location: Location,
    public _giftMessageDetails: GuestForm,
    private title: Title,
    public router: Router,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public basketServ: BasketPageComponentService,
    private translate: TranslateServiceSubService
  ) {
    const baseSite = this.singletonServ.catalogVersion;
    this.totalAmount = singletonServ.totalAmount;
    this.showExpress = false;
    this.giftMessageForm = this.fb.group({
      giftCard:this.fb.group(_giftMessageDetails.getGiftMessageForm())
    });
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user=JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.showExpress = user['isExpressCheckout'];
    }
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {    
    this.title.setTitle('Molton Brown - Samples & Gift Options');
    this.slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      infinite: false,
      initialSlide:0
    };
    const _cartObj=this.singletonServ.cartObj;
    if (_cartObj) {
        this.cartEntryObj= _cartObj;
        this.totalPriceValue =_cartObj.totalItems != 0 ? true : false;
        this.getSampleProducts();
     }
    this.getDeviceInfo();
    const baseSite = this.singletonServ.catalogVersion;
    if (baseSite) {
      this.setLang(baseSite.lngCode);
    }
    this.singletonServ.checkoutStatus = true;
    // const obj = { checkoutStatus: true, store: true };
    // this.singletonServ.sendMessage(obj);
  }

  ngAfterViewInit() {
    this.subscription=this.singletonServ.getMessage().subscribe(message => {
      if (message.retreiveSamples) {
        let _cartObj=message.cartObj;
        if (_cartObj) {
          this.cartEntryObj= _cartObj;
          this.totalPriceValue =
          _cartObj.totalPrice.value != 0 ? true : false;
          this.getSampleProducts();
        }
      }
    });
  }


  getSampleProducts() {
    this.slides = undefined;
    let _sampleEntry;
    this.basketServ.getSampleProducts().subscribe(
      resp => {
        this.slides = resp["products"];
        this.samplesCopy = resp["products"];

        _.map(this.slides, obj => {
          if (this.singletonServ.cartObj["entries"]) {
            _sampleEntry = _.find(
              this.singletonServ.cartObj["entries"],
              item => {
                return obj.code == item.product.code;
              }
            );
          }
          if (_sampleEntry) {
            this.slides.map(obj => {
              if (_sampleEntry.product.code == obj.code) {
                obj["status"] = "added";
                obj["disabled"] = true;
              } else {
                obj["status"] = "pending";
                obj["disabled"] = false;
              }
            });
          }
        });

        
        const _sampleEntryId = _.findIndex(
          this.slides,
            item => {
              return item.status ==  "added";
            }
          );
          if(_sampleEntryId !=-1){
            this.slickModal.unslick(); 
            this.slickModal.config['arrows']=false;
            this.slickModal.config['draggable']=false;
            this.slickModal.initSlick();
            this.slickModal.init;
          }
      },
      err => {}
    );

    if(_sampleEntry){
      let  _sampleIndex = _.find(
         this.slides,
         item => {
           return _sampleEntry.product.code == item.code;
         }
       );
       if(_sampleIndex !== -1){
           this.slickModal.unslick(); 
           this.slickModal.config['arrows']=false;
           this.slickModal.config['draggable']=false;
           this.slickModal.initSlick();
           this.slickModal.init;
      }
     }
  }
  getDeviceInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    if (isMobile || isTablet) {
      this.slideConfig = {
        dots: false,
        infinite: false
      };
    } else {
      this.slideConfig = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        infinite: false
      };
    }
  }

  onContinueShoppingEvent() {
    this.router.navigate(["store"]);
  }

  onExpressCheckout() {
    this.router.navigate(["checkout", "shipping"], {
      queryParams: { expressCheckout: true, express: true },
      queryParamsHandling: "merge"
    });
  }
  
  onSecureCheckout(bol) {
    const baseSite = this.singletonServ.catalogVersion;
    const _val= this.giftMessageForm.value;
    let _giftForm=this.giftMessageForm.controls["giftCard"];
     if(_giftForm.valid){
      let _giftBox=_giftForm["controls"]["giftBox"]["value"];
    if (_giftBox || _val.giftCard.giftMsg) {                   
          const body = {
            isGiftBox: (_giftBox)?true:false,
            isGiftBoxMessage: false,
            giftBoxMessage: ''
          };

          if (_val.giftCard.giftMsg) {
                if(this.giftMessageForm.valid){
                  body['isGiftBoxMessage']=true;
                  body['giftBoxMessage']=_val.giftCard.giftMessage;
                  this.setShipping(body,bol);
                }else{
                  this.isValidSubmit=true;
                  this.validateAllFormFields(this.giftMessageForm);
                }
          }else{  
            this.setShipping(body,bol);
          }
    } else {
      
      this.singletonServ.checkoutStatus = true;
      const obj = { checkoutStatus: true };
      this.singletonServ.sendMessage(obj);
      if (this.singletonServ.getStoreData(baseSite.reg)) {
        if(bol){
          this.router.navigate(["checkout", "shipping"], {
            queryParams: { expressCheckout: true, express: true },
            queryParamsHandling: "merge"
          });
        }else{
          this.router.navigate(["/checkout", "shipping"]);
        }
        
      } else {
        this.router.navigate(["/checkout"]);
      }
    }
  }else{
    this.isValidSubmit=true;
    this.validateAllFormFields(this.giftMessageForm);
  }
   
    
  }
  setShipping(body,bol){
    const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      let isExpressObj={status:bol}
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.basketServ
      .giftMessage(user.token, body, user.email, user.code)
      .subscribe(
        response => {
          this.setShippingPage(isExpressObj);
        },
        err => {
          this.setShippingPage(isExpressObj);
        }
      );
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
        const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
        this.basketServ
        .giftMessage(user.token, body, 'anonymous', user.guid)
        .subscribe(
          response => {
            this.setShippingPage(false);
          },
          err => {
            this.setShippingPage(false);
          }
        );
      }
    }
  }

 
  setShippingPage(data){
    const baseSite = this.singletonServ.catalogVersion;      
    this.singletonServ.checkoutStatus = true;
    const obj = { checkoutStatus: true, store: false };
    this.singletonServ.sendMessage(obj);
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      if(data.status){
        this.router.navigate(["checkout", "shipping"], {
          queryParams: { expressCheckout: true, express: true },
          queryParamsHandling: "merge"
        });
      }else{
        this.router.navigate(["/checkout", "shipping"]);
      }

    }else{
      this.router.navigate(["/checkout"]);
    }
  }
  showTooltip(event, index) {
    this.slides.map((obj, k) => {
      if (index == k) {
        if(obj.status){
        if(obj.status != 'pending'){
         obj["action"] = !obj["action"];
        }
        }else{
          obj["action"] = !obj["action"];
        }
      } else {
        obj["action"] = false;
      }
    });
  }


  onAddItem(event,data, k) {
    event.preventDefault();
    const baseSite = this.singletonServ.catalogVersion; 
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      if (!user.code) {
      } else {
        const tokenId = user["token"];
        this.storeCurrentUserBasket(
          data,
          tokenId,
          user.code,
          user.email,
          k
        );
      }
    } else{
       if (this.singletonServ.getStoreData(baseSite.guest)) {
      const user = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      this.storeCurrentUserBasket(
        data,
        user.token,
        user.guid,
        'anonymous',
        k
      );
    }
  }
  }

  storeCurrentUserBasket(item, tokenId, code, _email, k) {
    const baseSite = this.singletonServ.catalogVersion;
    const productObj = {
      product: { code: item["code"] },
      quantity: 1
    };
    this.basketServ
      .storesampleProducts(productObj, tokenId, code, _email)
      .subscribe(
       ( resp:any )=> {
          let _entry=resp.entry;
          _entry['product']['isSample']=true;
          this.singletonServ.cartObj.entries.push(_entry);
          this.slides[k]["email"] = _email;
          this.slides[k]["code"] = item["code"];
          this.slides[k]["entryCode"] = code;
          this.slides[k]["entryNumber"] = resp["entry"]["entryNumber"];

          this.slickModal.unslick(); 
          this.slickModal.config['arrows']=false;
          this.slickModal.config['draggable']=false;
          console.log(k )
          if(k >= 4){
           this.slickModal.config['initialSlide']=k;
          }else{
            this.slickModal.config['initialSlide']=0;
          }
          this.slides.map(obj => {
            if (item["code"] == obj.code) {
              obj["status"] = "added";
              obj["disabled"] = true;
            } else {
              obj["status"] = "pending";
              obj["disabled"] = false;
            }
          });
          this.slickModal.initSlick();
          this.slickModal.init;
         
          // this.singletonServ.sendMessage({updateCart:true});
        },
        error => {
          const data = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
        }
      );
  }

  onRemoveItem(data, k) {
     const baseSite = this.singletonServ.catalogVersion;
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      const _usr = JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
      this.onRemoveSampleEntry(_usr.token, data, _usr.email, _usr.code,k);
    } else {
      if (this.singletonServ.getStoreData(baseSite.guest)) {
      const _usr = JSON.parse(this.singletonServ.getStoreData(baseSite.guest));
      this.onRemoveSampleEntry(_usr.token, data, "anonymous", _usr.guid,k);
    }
  }
  }
  onRemoveSampleEntry(token, data, email, code,k) {
    let sampleId;
    if (this.singletonServ.cartObj["entries"]) {
      sampleId = _.findIndex(this.singletonServ.cartObj["entries"], (obj, k) => {
        return obj.product.isSample
      });
    if (sampleId !=-1) {
      const entry = this.singletonServ.cartObj["entries"][sampleId]["entryNumber"];
      this.basketServ.removeEntry(token, email, code, entry).subscribe(
        res => {
          this.slickModal.unslick(); 
          this.slickModal.config['arrows']=true;
          this.slickModal.config['draggable']=true;
          this.slickModal.config['initialSlide']=0;
          this.slides.map(obj => {
            obj["status"] = "";
            obj["disabled"] = false;
          });
          this.singletonServ.cartObj["entries"].splice(sampleId,1);
          this.slickModal.initSlick();
          this.slickModal.init;
         },
        error => {}
      );
    } 
    
  }
  }
  validateAllFormFields(formGroup: FormGroup) {       
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {      
        this.validateAllFormFields(control);            
      }
    });
    }
   
  ngOnDestroy() {
    if(this.subscription){
     this.subscription.unsubscribe();
    }
  }
}
