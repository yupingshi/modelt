import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  ElementRef
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from "lodash";
import {CategoryComponentService} from '../categorylanding-page/categorylanding-page.service';
import { PagerService } from "../services/pager.service";
import { SingletonService } from "../services/singleton.service";
import {MetaService} from "../services/meta.service";
import "../../assets/js/handlebars_helpers";

@Component({
  selector: 'app-search-landingpage',
  templateUrl: './search-landingpage.component.html',
  styleUrls: ['./search-landingpage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchLandingpageComponent
  implements OnInit, OnDestroy {
  @ViewChild("facetTag") facetValue: ElementRef;
  @ViewChild("customerFav") customerFav: ElementRef;
  searchDisplay: boolean;
  paramcode: string;
  facets: Array<any>;
  catalogSpecific: boolean;
  navigationSubscription: any;
  searchPrdId: string;
  breadcrumb: any=[{name:"SEARCH",search:true},{name:"MY SEARCH",search:true}];
  routeParams: any;
  categoryData: Array<any>;
  totalProducts: number;
  currentPage: number;
  pager: any = {};
  pagedItems: any[];
  displayGrid: boolean;
  parentCatName: string;
  productname: string;
  categorybanner: Array<any>;
  IsmodelShow: boolean;
  refineFacets: Array<any>;
  mbFacet: boolean;
  refinePath: string;
  checkedfilter: boolean;
  showFacets: boolean;
  checkList: boolean = false;
  paths: string;
  showFacetVal: boolean;
  freshRelevanceSpecific: boolean;
  viewAllProducts: boolean;
  pageNumber: number;
  checkedCount: number;
  checkedData: any = [];
  searchCatId: string;
  freeSearchText: string;
  spellingSuggestion: any;
  activeProducts: boolean;
  totalNumber: Array<any>;
  catId: string;
  pageSize: number = 12;
  pageLoad: boolean;
  pagination: any;
  sortId: number;
  categoryResponse:any;
  facetResponse:any;
  filterQuery:string='';
  constructor(
    private el: ElementRef,
    private titleService: Title,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public singletonServ: SingletonService,
    public mbPagerService: PagerService,
    public categoryServ: CategoryComponentService,
    public metaService:MetaService
  ) {
    this.paths = "";
    this.showFacets = true;
    this.categoryData = [];
    this.checkedCount = 1;
    this.catalogSpecific = false;
    this.displayGrid = true;
    this.facets = [{}];
    this.refinePath = "";
    this.IsmodelShow = false;
    this.mbFacet = true;
    this.viewAllProducts = false;
    this.pageNumber = 0;
    this.pageLoad = false;
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
 

  }


  fetchCatalogProducts(){
    const that=this;
    this.navigationSubscription = this.route.params.subscribe(params => {
      that.routeParams = params;
      that.searchDisplay = true;
      that.searchPrdId = params.searchId;
      that.paramcode = params.searchId;
      if(this.singletonServ.getStoreData('searchId')){
        that.searchPrdId=JSON.parse(this.singletonServ.getStoreData('searchId'));
      }
      that.renderSearchRelatedpage(that.searchPrdId, true, this.pageSize);
    });
  }
  ngOnInit() {
      const _host = this.location['_platformStrategy']._platformLocation.location.href;
      this.titleService.setTitle(_host);
      this.fetchCatalogProducts();    
      this.metaService.createCanonicalURL();
  }
  wrapFRslots(){
    const that=this;
    const baseSite = this.singletonServ.catalogVersion;
    this.categoryServ.getStaticContent(baseSite.lngCode).subscribe((response:any)=>{
      if(response){
        that.customerFav.nativeElement.innerHTML = response.searchCategory.slotId; 
      }
    },err=>{

    });
  }



  /* category level call */

  onviewAllClick(event) {
    this.freshRelevanceSpecific = false;
    let prdId = this.searchPrdId;
    const pageSize = 123;
    this.catalogSpecific = true;
    this.pager = false;
    this.viewAllProducts = true;
    this.renderSearchRelatedpage(prdId, true, pageSize);
  }

  fetchProductNextperPage(data:any) {
  const status=data.status;
  this.pageLoad = false;
  if (!status) {
      let page = this.pagination.currentPage + 1;
      this.pageNumber = page;
      const id = this.paramcode +  this.filterQuery + "&currentPage=" + page;
      this.renderSearchRelatedpage(id, false, 12);
  } else {
    const _pageNumber = this.pagination.currentPage - 1;
    this.pageNumber = _pageNumber;
        const id =
          this.paramcode +
          this.filterQuery +
          "&currentPage=" +
          _pageNumber;
           this.renderSearchRelatedpage(id, false, 12);
  }
  }

  fetchProductperPage(data) {
    const page=data.page;
    this.pageLoad = false;
    this.viewAllProducts = false;
    this.pageNumber = page["content"];
    const pgNo=data["pageId"]-1;
    const id =this.paramcode +this.filterQuery +"&currentPage=" +pgNo;
    this.viewAllProducts = false;
    this.renderSearchRelatedpage(id, false, 12);

  }
  
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

  //search related call

  renderSearchRelatedpage(searchId, facets, pageSize) {

    const that=this;
    this.catalogSpecific = true;  
    this.singletonServ.setStoreData('searchId',JSON.stringify(searchId));
    this.singletonServ.setCookie("searchId", searchId, 365);
    this.categoryServ
      .getCategorySearchResults(searchId, pageSize)
      .subscribe(
        resp => {
          this.pageLoad = true;
          this.categoryResponse=resp;
          const products = resp["products"];
          const prodPaginator = resp["pagination"];
          this.pagination = resp["pagination"];
          _.forEach(products, function(value, i) {
            _.assignIn(value, {
              redirectUrl:resp['keywordRedirectUrl'],
              show: false,
              id: i + 1,
              category:that.categorybanner
            });
          });
          const _facetObj ={
            facets:resp["facets"],
            status:facets
          }
          this.facetResponse=_facetObj;
          this.categoryData = products;
          this.pagedItems = products;
          if(products){
            that.activeProducts = (products.length !=0) ? true : false;
          }else{
            that.activeProducts =false;
          }
          this.totalProducts = prodPaginator["totalResults"];
          this.currentPage = prodPaginator["currentPage"];
          this.freeSearchText = resp["freeTextSearch"];
          this.spellingSuggestion = resp["spellingSuggestion"];
          this. wrapFRslots();
        },
        error => {
          this.pageLoad = true;
        }
      );
  }

  //filters functions
  onShowFirstPage() {
    this.pager = true;
    this.viewAllProducts = false;
    this.freshRelevanceSpecific = false;
    const pageSize = 12;
    this.pageLoad=false;
    this.renderSearchRelatedpage(this.paramcode, true, pageSize);
  }

  onRefetchProducts(data){ 
    this.filterQuery=':relavance'+data.id;
    let id =this.paramcode+this.filterQuery;
    this.pageLoad=false;
    this.renderSearchRelatedpage(id, false, 12);
  }
  onClearAll() {
      this.checkList = false;
      this.showFacets = true;     
      this.pageLoad=false; 
      this.renderSearchRelatedpage(this.paramcode, true, this.pageSize);   
  }
  onFacetClicked(filterData, sortId) {
    this.facets[sortId]["checked"] = !this.facets[sortId]["checked"];
  }


  //tabs
  updateFilterData(event, valueData, i) {
    const sortId = this.sortId;
    this.checkList = false;
    this.checkedfilter = true;
  }
  onMbFilterByClick() {
    this.refinePath = "";
    this.refineFacets = [];
    this.mbFacet = true;
    this.IsmodelShow = true;
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  sortByChange(){

  }
  onGridClick(data) {
    const _bol=data.status;
    if (_bol) {
      this.displayGrid = true;
    } else {
      this.displayGrid = false;
    }  
 }
 onShowStore(){
  this.router.navigate(['store','company','stores']);
 }
}
