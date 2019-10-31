import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  AfterViewInit,
  Renderer2
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
import { CategoryComponentService } from "./categorylanding-page.service";
import { PagerService } from "../services/pager.service";
import { SingletonService } from "../services/singleton.service";
import {MetaService} from "../services/meta.service";
import { Subscription } from "rxjs";
declare var AmpCa: any;
@Component({
  selector: "app-categorylanding-page",
  templateUrl: "./categorylanding-page.component.html",
  styleUrls: ["./categorylanding-page.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CategorylandingPageComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("facetTag") facetValue: ElementRef;
  @ViewChild("parentCategory") parentCategory: ElementRef;
  categoryLandingSubscription:Subscription;
  catalogSpecific: boolean;
  navigationSubscription: any;
  searchPrdId: string;
  breadcrumb: any = [];
  routeParams: any;
  totalProducts: number;
  pager: any = {};
  pagedItems: any[];
  displayGrid: boolean;
  categorybanner: Array<any>;
  paths: string;
  freshRelevanceSpecific: boolean;
  viewAllProducts: boolean;
  searchCatId: string;
  activeProducts: boolean;
  catId: string;
  pageSize: number = 12;
  pageLoad: boolean;
  pagination: any;
  categoryResponse: any;
  facetResponse: any;
  checkList: boolean;
  openFacet: boolean;
  menuData: any;
  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    private titleService: Title,
    public mbPagerService: PagerService,
    public categoryServ: CategoryComponentService,
    public metaService:MetaService,
    public renderer: Renderer2
  ) {
    this.paths = "";
    this.catalogSpecific = false;
    this.displayGrid = true;
    this.viewAllProducts = false;
    this.pageLoad = false;
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  fetchCatalogProducts() {
    this.navigationSubscription = this.route.params.subscribe(params => {
      this.routeParams = params;
      if (params.categoryId) {
          const queryStatus = this.route.snapshot.queryParamMap.get("viewAllCat");
          const cookieSearch = this.singletonServ.getCookie("searchId");
          let prdId = "/search?query=:relevance:category:" + params.categoryId;
          this.catId = params.categoryId;
          if (cookieSearch.length != 0) {
            const data = JSON.parse(cookieSearch);
            if (data.catId == params.productid) {
              prdId = data.id;
            }
          }
          this.searchCatId = params.categoryId;
          this.searchPrdId = prdId;
          if (queryStatus) {
            this.catalogSpecific = true;
            this.freshRelevanceSpecific = false;
            let prdId = "/search?query=:relevance:category:" + params.categoryId;
            this.getCategoryData(prdId, true, this.pageSize);
          } else {
            this.wrapFRslots();
            this.freshRelevanceSpecific = true;            
            this.pageLoad = true;
          }
      } else if (params.productid) {
        const cookieSearch = this.singletonServ.getCookie("searchId");
        let prdId = "/search?query=:relevance:category:" + params.productid;
        this.catId = params.productid;
        if (cookieSearch.length != 0) {
          const data = JSON.parse(cookieSearch);
          if (data.catId == params.productid) {
            prdId = data.id;
          }
        }
        this.searchPrdId = prdId;
        this.getCategoryData(prdId, true, this.pageSize);
      }
      if (params.categoryname) {
        this.catalogSpecific = true;
      }

    });
  }

  constructCatBanner() {
    const _catData = this.singletonServ.menudata;
    if (_catData) {
      const splitPath = window.location.pathname.split("/");
      const _catId = splitPath[splitPath.length - 1];
      let _breadCrumb = this.findCat(_catData, _catId);
      if (_breadCrumb) {
        if(_breadCrumb[1]){
        if(!_breadCrumb[1].isL3){
          _breadCrumb.splice(1, 1);
          this.breadcrumb = _breadCrumb;
        } else {
         this.breadcrumb = _breadCrumb;
        }
       } else {
        this.breadcrumb = _breadCrumb;
       }
      }
      for (let obj of _catData) {
        const result = this.getCatalogtree(obj, _catId);
        if (result) {
          this.titleService.setTitle(result.titleName);
          this.categorybanner = result;
          break;
        }
      }
    }
  }
  wrapFRslots(){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    this.categoryServ.getStaticContent(baseSite.lngCode).subscribe((response:any)=>{
      if(response){
        that.parentCategory.nativeElement.innerHTML = response.parentProductLandingPage.slotId;
        // that.parentCategory.nativeElement.insertAdjacentHTML('beforeend', response.parentProductLandingPage.slotId);
        // this.renderer.setProperty(this.parentCategory.nativeElement, 'innerHTML', response.parentProductLandingPage.slotId);
      
      }
    },err=>{

    });
  }
  ngOnInit() {
    const message = this.singletonServ.menudata;
    if (message) {
      this.constructCatBanner();
    }
    this.fetchCatalogProducts();
    this.metaService.createCanonicalURL();
  }

  ngAfterViewInit() {
    this.singletonServ.getMessage().subscribe(message => {
      if (message.catgories) {
        this.menuData = message.catgories;
        this.singletonServ.menudata = message.catgories;
        const splitPath = window.location.pathname.split("/");
        const _catId = splitPath[splitPath.length - 1];
        let _breadCrumb = this.findCat(message.catgories, _catId);
        if (_breadCrumb) {
             if(_breadCrumb[1]){
           if(!_breadCrumb[1].isL3){
            _breadCrumb.splice(1, 1);
            this.breadcrumb = _breadCrumb;
        } else {
          this.breadcrumb = _breadCrumb;
        }
      } else {
        this.breadcrumb = _breadCrumb;  
      }
    }
        for (let obj of message.catgories) {
          const result = this.getCatalogtree(obj, _catId);
          if (result) {
            this.titleService.setTitle(result.titleName);
            this.categorybanner = result;
            break;
          }
        }
      }
    });

    if (this.freshRelevanceSpecific) {
      let _element = document.querySelectorAll("#frProduct");
      this.totalProducts = _element.length;
    }
  }
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
  findCat(array, id) {
    if (typeof array != "undefined") {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id.toLowerCase() == id.toLowerCase()) {
          return [array[i]];
        }
        var a = this.findCat(array[i].subcategories, id);
        if (a != null) {
          a.unshift(array[i]);
          return a;
        }
      }
    }
    return null;
  }
  /* category level call */
  onviewAllClick(event) {
    window.scrollTo(0,0);
    this.freshRelevanceSpecific = false;
    let prdId = "/search?query=:relevance:category:" + this.catId;
    const pageSize = 123;
    this.catalogSpecific = true;
    this.pager = false;
    this.viewAllProducts = true;
    this.getCategoryData(prdId, true, pageSize);
  }
  fetchProductNextperPage(data: any) {
    const status = data.status;
    window.scrollTo(0,0);
    if (!status) {
      let page = this.pagination.currentPage + 1;
      let prdId = "/search?query=:relevance:category:" + this.catId;
      const id = prdId + this.paths + "&currentPage=" + page;
      this.getCategoryData(id, false, this.pageSize);
    } else {
      const _pageNumber = this.pagination.currentPage - 1;
      let prdId = "/search?query=:relevance:category:" + this.catId;
      const id = prdId + this.paths + "&currentPage=" + _pageNumber;
      this.getCategoryData(id, false, this.pageSize);
    }
  }
  fetchProductperPage(data) {
    this.pageLoad = false;
    this.viewAllProducts = false;
    const pgNo = data["pageId"] - 1;
    let prdId = "/search?query=:relevance:category:" + this.catId;
    const id = prdId + this.paths + "&currentPage=" + pgNo;
    window.scrollTo(0,0);
    this.getCategoryData(id, false, this.pageSize);
  }

  sortByCahnge() {}

  onViewAllProducts() {
    this.freshRelevanceSpecific = false;
    this.catalogSpecific = true;
    const productname = this.routeParams.productname;
    const categoryId = this.routeParams.categoryId;
    this.router.navigate(["store", productname, categoryId], {
      queryParams: { viewAllCat: true },
      queryParamsHandling: "merge"
    });
  }

  //swap products
  swapproducts(products, oldIndex, newIndex) {
    var temp = products[oldIndex];
    products[oldIndex] = products[newIndex];
    products[newIndex] = temp;
  }

  //category Related Call
  getCategoryData(id, facets, pageSize) {

    const that = this;
    const _searchId = {
      id: id,
      catId: this.searchCatId
    };
    this.singletonServ.setCookie("searchId", JSON.stringify(_searchId), 365);
    const indexArray = [];
    this.pageLoad = false;
    this.categoryLandingSubscription= this.categoryServ.getMBProduct(id,pageSize).subscribe(
      resp => { 
        if (resp) {
        } else {
          this.pageLoad = true;
        }
        this.categoryResponse = resp;
        _.forEach(resp["products"], function(value, i) {
          _.assignIn(value, {
            category: that.categorybanner,
            redirectUrl: resp["keywordRedirectUrl"],
            show: false,
            id: i + 1
          });
          if (value.isDummy) {
            value["currentIndex"] = i;
            let obj = {
              oldindex: i,
              newIndex: 4
            };
            indexArray.push(obj);
            AmpCa.utils.getHtmlServiceData({
              auth: {
                baseUrl: "https://c1.adis.ws",
                id: value.code,
                store: "moltonbrown",
                templateName: "acc-template-card",
                locale: "en-GB"
              },
              callback: function(data) {
                _.assignIn(value, { htmlData: data });
              }
            });
          }
        });
        const prodPaginator = resp["pagination"];
        this.pagination = resp["pagination"];
        const products = resp["products"];
        if (indexArray.length >= 1) {
          _.forEach(indexArray, function(value, i) {
            that.swapproducts(products, value.oldindex, value.newIndex);
          });
        }
        this.totalProducts = prodPaginator["totalResults"];
        this.pagedItems = products;
        this.activeProducts = products ? true : false;
        const _facetObj = {
          facets: resp["facets"],
          status: facets
        };
        this.facetResponse = _facetObj;
        this.pageLoad = true;
      },
      err => {
        this.pageLoad = true;
      }
    );
  }

  //filters functions
  onShowFirstPage() {
    window.scrollTo(0,0);
    this.pager = true;
    this.viewAllProducts = false;
    this.freshRelevanceSpecific = false;
    let prdId = "/search?query=:relevance:category:" + this.catId;
    const pageSize = 12;
    this.getCategoryData(prdId, true, pageSize);
  }
  onCheckRefineFacet() {
    this.openFacet = !this.openFacet;
  }
  onRefetchProducts(data) {
    let prdId = "/search?query=:relevance:category:" + this.catId;
    if (data.id.length == 0) {
      this.checkList = false;
    } else {
      this.checkList = true;
    }
    this.paths = data.id;
    this.searchPrdId = prdId + this.paths;
    this.getCategoryData(this.searchPrdId, false, 12);
  }
  onClearAll() {
    let prdId = "/search?query=:relevance:category:" + this.catId;
    this.getCategoryData(prdId, true, this.pageSize);
  }

  //tabs
  onUpdateFilterData(data) {}
  updateFilterData(event, valueData, i) {}
  onMbFilterByClick() {}
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
    if(this.categoryLandingSubscription){
    this.categoryLandingSubscription.unsubscribe();
   }
  }
  sortByChange() {}
  onGridClick(data) {
    const _bol = data.status;
    if (_bol) {
      this.displayGrid = true;
    } else {
      this.displayGrid = false;
    }
    let _element = document.querySelectorAll("#frProduct");
    if (_element != null) {
      for (var i = 0; i < _element.length; i++) {
        if (!_bol) {
          _element[i].classList.remove("col-md-4");
          _element[i].classList.remove("col-sm-4");
          _element[i].classList.remove("col-xs-6");
          _element[i].classList.remove("col-xxs-6");

          _element[i].classList.add("col-md-6");
          _element[i].classList.add("col-sm-6");
          _element[i].classList.add("col-xs-12");
          _element[i].classList.add("col-xxs-12");
        } else {
          _element[i].classList.remove("col-md-6");
          _element[i].classList.remove("col-sm-6");
          _element[i].classList.remove("col-xs-12");
          _element[i].classList.remove("col-xxs-12");

          _element[i].classList.add("col-md-4");
          _element[i].classList.add("col-sm-4");
          _element[i].classList.add("col-xs-6");
          _element[i].classList.add("col-xxs-6");
        }
      }
    }
  }
}
