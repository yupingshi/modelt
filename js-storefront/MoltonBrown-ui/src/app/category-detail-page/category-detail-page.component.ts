import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
import { CategoryDetailComponentService } from "./category-detail-page.service";
import { SingletonService } from "../services/singleton.service";
import {MetaService} from "../services/meta.service";
import { Subscription } from "rxjs";
declare var AmpCa: any;
declare var window:any;
declare var $:any;
@Component({
  selector: "app-category-detail-page",
  templateUrl: "./category-detail-page.component.html",
  styleUrls: ["./category-detail-page.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CategoryDetailPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild("youMayLike") youMayLike: ElementRef;
    @ViewChild("worksWellWith") worksWellWith: ElementRef; 
  productInfo: any;
  showUpReview:boolean;
  navParamSubscription: any;
  breadcrumb: Array<any>;
  childname: string;
  currentProd: any;
  categorybanner:any;
  categoryOf:any;
  deliveryResctrictions:string;
  dlInstructionShowUp:boolean;
  menuData:any;
  categorySubscription:Subscription;
  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    private titleService: Title,
    public categoryServ: CategoryDetailComponentService,
    public metaService:MetaService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };


 }

 wrapFRslots(){
  const that=this;
  const baseSite = this.singletonServ.catalogVersion;
  this.categoryServ.getFRContent(baseSite.lngCode).subscribe((response:any)=>{
    if(response){
      that.worksWellWith.nativeElement.innerHTML = response.productDetails.worksWellWith.slotId;      
      that.youMayLike.nativeElement.innerHTML = response.productDetails.youmayalsoLike.slotId;      
    }
  },err=>{

  });
}

 onVariantProduct(data){}
  getCatalogtree(obj, targetId) {
    if (obj.id.toLowerCase() === targetId.toLowerCase()) {
      return obj;
    }
    if (obj.subcategories) {
      for (let item of obj.subcategories) {
        let check = this.getCatalogtree(item, targetId);
        if (check) {
          return check;
        }
      }
    }
    return null;
  }

  ngOnInit() {
    let _scripts=[
      {url:'https://dev-solutions.s3.amazonaws.com/viewer-kit-playground/v1.1.0/js/jquery.min.js'},
      {url:'https://dev-solutions.s3.amazonaws.com/viewer-kit-playground/v1.1.0/js/jquery-ui-custom.js'}
    ];
    _scripts.forEach((resp)=>{
      // let _checkUri=this.isMyScriptLoaded(resp.url)
      // if(_checkUri){
          this.appendScript(resp.url);
      // }
    });
    this.wrapFRslots();
    this.getheadData();
    const queryStatus = this.route.snapshot.queryParamMap.get(
      "BVRRContainer"
    );
    if(queryStatus){
      let target="#BVRRContainer";
      this.showUpReview=true;
      $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 0
        },
        10,
        function() {
        }
      );
    }else{
     this.showUpReview=false;
    }
    this.metaService.createCanonicalURL();
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

  ngAfterViewInit() { 
    this.singletonServ.getMessage().subscribe(message => {
      if (message.catgories) {
        this.singletonServ.menudata = message.catgories;
        this.menuData=this.singletonServ.menudata;
        this.navParamSubscription = this.route.params.subscribe(params => {
          let _catId = Object.values(params);
          _catId.pop();
          const code = params.itemid;
          if(_catId.length >1){
            this.childname = _catId[1].replace(/[\. ',:-]+/g, "");
            const _categories = message.catgories;
            const id = _.findIndex(_categories,(obj)=>{
              return obj.name =="bath-body"
            });
            if(id !=-1){            
              const _subId=_.findIndex(_categories[id].subcategories,(item)=>{
                return item.name == "travel"
              });
              if(_subId !=-1){
               const _nestId = _.findIndex( _categories[id]['subcategories'][_subId]['subcategories'],(obj)=>{
                 return obj.name == "pick-mix-travel"
                });
                if(_nestId !=-1){
                   _categories[id]['subcategories'][_subId]['subcategories'].splice(_nestId,1);
                   this.breadcrumb = this.findCat(_categories, this.childname);
                }
              }
            }

          
            this.categoryOf=this.breadcrumb;
            this.getCategoryData(code, message);
          }else{
            this.getCategoryData(code, message);
          }
        });
      }
    });
  }

  getheadData(){
    const that=this;
   this.navParamSubscription = this.route.params.subscribe(params => {
     const code = params.itemid;
     const message =this.singletonServ.menudata;
     that.menuData=that.singletonServ.menudata;
     if(message){
           let _catId = Object.values(params);
           _catId.pop();
           if(_catId.length >1){
             that.breadcrumb = this.findCat(message,  _catId[1].replace(/[\. ',:-]+/g, "") );
             that.categoryOf=that.breadcrumb;
             that.getCategoryData(code, message);
         }else{
           that.getCategoryData(code, message);
         }
       }else{
         that.singletonServ.sendMessage({getCatalog:true});
       }
   });
  }
  removeFromTree(parent, childNameToRemove){
    const that =this;
    for (var i = 0; i < parent.length; i++) {
    parent[i].subcategories = parent[i].subcategories
        .filter(function(child){ return child.name !== childNameToRemove})
        .map(function(child){ return that.removeFromTree(child, childNameToRemove)});
    return parent;
    }
  }
  findCat(array, id) {
   const _id=id.toLowerCase();
    if (typeof array != "undefined") {
      for (var i = 0; i < array.length; i++) {
        if( array[i].name){
        const name = array[i].name.replace(/[\. ',:-]+/g, "").toLowerCase();
        const itemName = name.replace(/[\&]+/g, "").toLowerCase();
        if (itemName == _id) {
          return [array[i]];
        }
        var a = this.findCat(array[i].subcategories, _id);
        if (a != null) {
          a.unshift(array[i]);
          return a;
        }
       }
      }
    }
    return null;
  }

  getCategoryData(code, message) {
    if(this.breadcrumb){
      const _catCode = this.breadcrumb[this.breadcrumb.length-1];
      const _parentCode=_catCode['id'];
      console.log(_parentCode);
    if(_parentCode){
        this.categorySubscription=  this.categoryServ.getMbProdDetails(code,_parentCode).subscribe(
            resp => {
              const _code = resp["code"];  
              const _pdpData:any = resp;   
              this.getDeliveryTabInfo(_code, _pdpData);        
              this.titleService.setTitle(resp["name"]);
              this.currentProd = {
                categoryDisplayName: resp["productDisplayName"],
                name: resp["name"],
                code: _code,
                product:true
              };
              if(this.breadcrumb){
                const _breadCrumb=this.breadcrumb;
                const _product =  _breadCrumb.filter((obj)=>{
                  return obj.product
                })
                if(_product.length ==0){
                  _breadCrumb.push(this.currentProd);        
                  this.breadcrumb =_.uniq(JSON.parse(JSON.stringify(_breadCrumb)));
                }   
                if(!this.breadcrumb[1].isL3){
                  this.breadcrumb.splice(1, 1);
                }
                this.setproductFeeds(resp);
              }
            },
            err => {}
          );
   }
  }
  }
  setproductFeeds(resp){
    let _feeds=[];
    let breadcrumb=JSON.parse(JSON.stringify(this.breadcrumb));
    breadcrumb.pop();
    if(breadcrumb.length !=0){
      breadcrumb.map((obj)=>{
          let _catFeed={
            id:obj.id,
            Name:obj.categoryDisplayName
          }
          _feeds.push(_catFeed);
      });
    this.setBVFeeds(breadcrumb,resp);
    }
  }
  setBVFeeds(catFeed,resp){
    const baseSite=this.singletonServ.catalogVersion;
    const _hostPath = window.location.href;
    const imgUrl='https://media.moltonbrown.co.uk/s/moltonbrown/'+resp.code+'_uk_set?$largeImg$&amp;fmt=jpg';
    const  bvDCC = {
            catalogData: {
                locale: baseSite.bv_locale,
                catalogProducts: [{
                        productId: resp['code'],
                        productName: resp['productDisplayName'],
                        productDescription: resp['description'],
                        productImageURL: imgUrl,
                        productPageURL:_hostPath,
                        brandName: catFeed[0]["categoryDisplayName"],
                        categoryPath: catFeed,
                        family: "F02"
                }]
        }
    }
    window.bvCallback = function (BV) {
    BV.pixel.trackEvent("CatalogUpdate", {
      type: 'Product',
      locale: bvDCC.catalogData.locale,
      catalogProducts: bvDCC.catalogData.catalogProducts
    });
    }
  }
  getDeliveryTabInfo(code, resp) {
    const that=this;

    this.productInfo = resp;
    AmpCa.utils = new AmpCa.Utils();
    const baseSite=this.singletonServ.catalogVersion;
    AmpCa.utils.getHtmlServiceData({
      auth: {
        baseUrl: "https://c1.adis.ws",
        id: "f6b7b43e-4d6b-46f4-8ea1-c1417686cb1c",
        store: "moltonbrown",
        templateName: "acc-template-homepage",
        locale:baseSite.locale
      },
      callback: function(data) {
        resp['contentTabs']=[];
        let benefits =[];
        let fragrance =[];
        let explore =[];
        let delivery =[];
        if(resp.description) {
          const _obj = {
            header:'THE FRAGRANCE',
            htmlData:resp.description,
            show:true,
            order:1
          }
          fragrance.push(_obj);
        }   
        if(resp.explore) {
          const _obj = {
            header:'Explore',
            htmlData:resp.explore,
            order:2
          }
          explore.push(_obj);
        }   
        if(resp.benefits) {
          const _obj = {
            header:'benefits',
            htmlData:resp.benefits,
            order:3
          }
          benefits.push(_obj);
        }  
        that.deliveryResctrictions=data;      
          const _obj = {
            header:'delivery',
            htmlData:data,
            dlInstruction:true,
            show:false,
            order:4
          }       
        let _uniqData= _.uniq(_.union([_obj],benefits,explore,fragrance));
        _uniqData.sort(function(a, b) {
          return a['order'] - b['order'];
        });
       
       that.productInfo['contentTabs']=_uniqData;
       that.renderDeliveryInstruction();
      }
    });
  }
  showDlRstrn(){
    const target= "#deliveryRstnBlock";
    $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(target).offset().top - 0
      },
      10,
      function() {
      }
    );
    this.dlInstructionShowUp=true;
  }
  scrollToElement(element) {
    if($('.cart-list-container')[0]){
    $('.cart-list-container')[0].scrollIntoView(true);
    let _elmnt=$(element).offset();
    $('.cart-list-container').animate({
      scrollTop: $('.cart-list-container').scrollTop() + _elmnt.top - $('.cart-list-container').offset().top-25
    }, {
      duration: 'slow',
      easing: 'swing'
    });
  }
}
  renderDeliveryInstruction(){
    const that=this;
    AmpCa.utils = new AmpCa.Utils();
    const baseSite=this.singletonServ.catalogVersion;
    AmpCa.utils.getHtmlServiceData({
      auth: {
        baseUrl: "https://c1.adis.ws",
        id: "ee1745a7-5e99-4c04-8882-3e121bc68cb1",
        store: "moltonbrown",
        templateName: "acc-template-homepage",
        locale:baseSite.locale
      },
      callback: function(data) {    
        that.productInfo['deliveryServiceReturns']=data; 
      }
    });
  }
  ngOnDestroy() {
    if(this.categorySubscription){
    this.categorySubscription.unsubscribe();
    }
    this.currentProd = undefined;
    this.breadcrumb = undefined;
    if (this.navParamSubscription) {
      this.navParamSubscription.unsubscribe();
    }
  }
}
