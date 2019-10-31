import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer,
  Input,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { HeaderComponentService } from "../header/header.service";
import { SingletonService } from "../../services/singleton.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { TranslateService } from "../../translate.service";
import { BasketPageComponentService } from "../../checkoutpage/basketpage/basketpage.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { productviewComponentService } from "../productview/productview.service";
import * as _ from "lodash";
declare var AmpCa: any;
declare var $: any;
@Component({
  selector: "app-header-submenu",
  templateUrl: "./header-submenu.component.html",
  styleUrls: ["./header-submenu.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderSubmenuComponent extends HeaderComponent
  implements OnChanges, OnInit, AfterViewInit {
  @ViewChild("searchInput") searchField: ElementRef;
  @Input() message: any;
  searchPrdctText: any;
  searchCtgry: boolean;
  mouseEnter: boolean;
  searchBlock: boolean;
  searchResults: Array<any>;
  searchResultValue: string;
  hoverOnSearchBlock: boolean;
  renderCart: boolean = true;
  openSearchInput:boolean;
  searchQuery:string; 
  constructor(
    public titleService: Title,
    public renderer: Renderer,
    public el: ElementRef,
    public headerServ: HeaderComponentService,
    public singletonServ: SingletonService,
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public basketServ: BasketPageComponentService,
    public translate: TranslateService,
    public deviceService: DeviceDetectorService,
    public quickServ: productviewComponentService
  ) {
    super(headerServ, singletonServ, location, router, basketServ, translate, quickServ);
    this.searchResults = [];
    this.searchResultValue = "";
    this.searchBlock = false;
    this.openSearchInput=false;
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
      if (changes["message"]) {
      if (changes["message"]["currentValue"] != undefined) {
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
          this.message=changes["message"]["currentValue"];
      }
    }
    }
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.singletonServ.getMessage().subscribe(message => {
      if (message.moltonSideumenu) {
        window.scroll(0, 0);
        this.sidemenuStatus = message.moltonSideumenu.state;
      } else if (message.searchResults) {
        this.searchResultValue = message.searchText;
        this.onSearchResults();
      }
    });
  }

  mouseLeave() {
    this.mouseEnter = false;
  }
  goToHome(event) {
    event.preventDefault();
    this.titleService.setTitle(
      "Molton Brown® UK | Luxury Beauty, Fragrance, Bath & Body Gift Sets"
    );

    if(event.ctrlKey && event.which === 1){
      window.open("/store"); 
   } else {
    this.router.navigate(["/store"]);
   }
  }

  onBlurSearch(text) {
    if (this.searchResultValue.length >= 4) {
      this.searchCtgry = true;
      this.searchBlock = true;
      if (!this.hoverOnSearchBlock) {
        this.searchPrdctText = "";
        this.searchResultValue = "";
        this.searchResults = [];
        this.searchCtgry = false;
        this.searchBlock = false;
      }
    } else {
      this.searchCtgry = false;
      this.searchBlock = false;
      this.searchPrdctText = "";
      this.searchResultValue = "";
      this.searchResults = [];
    }
    this.searchQuery='';
  }

  onLeaveSearchBox() {
    this.hoverOnSearchBlock = false;
  }

  onsearchClicked() {
    if(this.searchQuery){
      if(this.searchQuery.length >=4){
        this.onSearchResults();
        this.searchQuery='';
      }else{
        this.renderer.invokeElementMethod(this.searchField.nativeElement, "focus");
        this.searchCtgry = true;
        this.openSearchInput=true; 
      }
    }else{
      this.renderer.invokeElementMethod(this.searchField.nativeElement, "focus");
      this.searchCtgry = true;
      this.openSearchInput=true;
    }

  }

  onSearcKeyUp(event) {
    if (event.key === "Enter") {
      this.singletonServ.removeItem("searchId");
      this.onSearchResults();
    }
  }

  onSearchChange(searchValue: string) {
    this.searchCtgry = true;
    const val=searchValue.trim();
    this.searchResultValue = val;
    this.openSearchInput=true;
    this.searchQuery=val;
    if (val.length >= 4) {
    const deocdeVal =encodeURIComponent(val);
      this.headerServ
        .getCategorySearchResults(deocdeVal)
        .subscribe(
          resp => {
            if (resp["products"]) {
              if (resp["products"].length > 0) {
                this.searchResults = resp["products"].slice(0, 3);
                this.searchCtgry = true;
                this.searchBlock = true;
              } else {
                this.searchResults = [];
                this.searchCtgry = true;
                this.searchBlock = false;
              }
            } else {
              this.searchResults = [];
              this.searchCtgry = true;
              this.searchBlock = false;
            }
          },
          err => {
            this.searchBlock = false;
          }
        );
    } else {
      this.searchResults = [];
      this.searchCtgry = true;
      this.searchBlock = false;
    }
  }
  showSearchBox() {
    this.searchBlock = true;
    this.hoverOnSearchBlock = true;
    this.searchCtgry = true;
  }

  onSearchProduct(event, searchItem) {
    event.stopPropagation();
    this.searchCtgry = false;
    this.searchBlock = false;
    this.searchPrdctText = "";
    this.searchResultValue = "";
    const catgIndex = searchItem.url.indexOf("/c/");
    const prdctIndex = searchItem.url.indexOf("/p/");
    if (catgIndex != -1) {
      let url = "/store" + searchItem.url.replace("/c/", "/");
      this.searchResults = [];
      this.router.navigate([url]);
    } else if (prdctIndex != -1) {
      let url = "/store" + searchItem.url.replace("/p/", "/");
      this.searchResults = [];
      this.router.navigate([url]);
    }
  }
  onSearchResults() {
    const search = (this.searchResultValue)?this.searchResultValue:this.searchQuery;
    this.searchCtgry = false;
    this.searchBlock = false;
    this.searchPrdctText = "";
    this.searchResultValue = "";
    this.searchQuery="";
    this.searchResults = [];
    this.singletonServ.removeItem("searchId");
    const val=search.trim();
    const deocdeVal =encodeURIComponent(val);
    this.router.navigate(["store", "browse", deocdeVal]);
  }
  onViewBasket(event) {
    event.stopPropagation();
    this.router.navigate(["store", "mbcart"]);
  }
  getCartCount() {
    let sum = 0;
    if (this.   singletonServ.cartObj) {
      if (this.   singletonServ.cartObj.totalItems != 0) {
        for (let i = 0; i < this.   singletonServ.cartObj["entries"].length; i++) {
          if (!this.   singletonServ.cartObj["entries"][i]["product"]["isSample"]) {
            sum += this.   singletonServ.cartObj["entries"][i]["quantity"];
          }
        }
      }
    }
    return sum;
  }
  discardSubscription(event){
    event.preventDefault();
    this.subscription.unsubscribe();
  }
}
