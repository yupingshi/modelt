import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer,
  Input,
  SimpleChange,
  OnChanges
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { HeaderComponentService } from "../header/header.service";
import { HeaderSubmenuComponent } from "../header-submenu/header-submenu.component";
import { SingletonService } from "../../services/singleton.service";
import { environment }     from '../../../environments/environment';
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from "../../translate.service";
import { BasketPageComponentService } from "../../checkoutpage/basketpage/basketpage.service";
import { DeviceDetectorService } from "ngx-device-detector";
import { productviewComponentService } from "../productview/productview.service";
import * as _ from "lodash";
declare var AmpCa: any;
declare var $: any;

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent extends HeaderSubmenuComponent
  implements OnInit, AfterViewInit, OnChanges {
  @ViewChild("mySidenav") sideNav: ElementRef;
  @ViewChild("searchMobInput") searchMobField: ElementRef;
  @Input() sidemenuStatus: boolean;
  countryText: any;
  footerData: Array<any> ;
  toggle: boolean;
  mouseEnter: boolean;
  menuLog: any;
  baseSiteCountries: Array<any> = environment.countryJsonData;;
  catalogTree: any;
  catalogmenu: Array<any>;
  countries = environment.countryJsonData;;
  currentCountryCode: string;
  signIn:boolean;
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
    super(
      titleService,
      renderer,
      el,
      headerServ,
      singletonServ,
      location,
      router,
      route,
      basketServ,
      translate,
      deviceService,
      quickServ
    );
    
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    const that = this;
    const baseSite = this.singletonServ.catalogVersion;
    this.renderCatalogData();
    if (baseSite) {
        this.getStaticCntnt(baseSite.lngCode);
        this.setLang(baseSite.lngCode);
        const _isoCode = this.singletonServ.catalogVersion.isoCode; 
        this.countries.map(obj => {
          if (_isoCode == obj.isoCode) {
            obj["current"] = true;
            that.currentCountryCode = obj.countryName;
          } else {
            obj["current"] = false;
          }
       });
    }
    if (this.singletonServ.getStoreData(baseSite.reg)) {
      this.signIn = true;
      this.singletonServ.loggedIn = true;
    }
  }
  getStaticCntnt(lang: string){
   this.headerServ.getPolicyContent(lang).subscribe((response)=>{
      this.footerData=response['moltonBrownPolicies'];
    });
  }
  onmbCountryChange(data) {
    this.onSidemenutap();
    this.countryText = data;
  }


  onCancelModal(bol) {     
    this.onSidemenutap();
    const baseSite = this.singletonServ.catalogVersion;
    let user;
    if(this.singletonServ.getStoreData(baseSite.reg)){
       user= JSON.parse(this.singletonServ.getStoreData(baseSite.reg));
     }
    if (bol) {
      this.singletonServ.setStoreData(
        "prefered_lng",
        JSON.stringify(this.countryText)
      );    
      const _isoCode=this.countryText.isoCode;
      this.countries.map((obj)=>{
        if(_isoCode==obj.isoCode){
          obj['current']=true;
        }else{
          obj['current']=false;
        }
      });  
      const _obj = {
        baseSiteChange: true,
      };
      if(this.singletonServ.getStoreData(baseSite.reg)){
        if(!this.singletonServ.getStoreData(this.countryText.reg)){       
          let currentUser={email:''};
          currentUser.email=user.email;
          this.singletonServ.setStoreData(
            this.countryText.reg,
            JSON.stringify(currentUser)
          );
          if(user.token){
            this.headerServ.getUserData(user.token,user.email).subscribe((response)=>{
              let userDtls= JSON.parse(this.singletonServ.getStoreData(this.countryText.reg));
              userDtls['isExpressCheckout']=response['isExpressCheckout'];
              this.singletonServ.setStoreData(
                this.countryText.reg,
                JSON.stringify(currentUser)
              );
            },err=>{

            })
          }
          this.singletonServ.catalogVersion =  JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
          this.singletonServ.sendMessage(_obj);      
          this.goToStore();
        }else{
          this.singletonServ.catalogVersion =  JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
          this.singletonServ.sendMessage(_obj);      
          this.goToStore();
     }
    }else{
      this.singletonServ.catalogVersion =  JSON.parse(this.singletonServ.getStoreData("prefered_lng"));
      this.singletonServ.sendMessage(_obj);      
      this.goToStore();
    }
 
    }
  }
gotoHome(){  
  this.router.navigate(["store"]);
  this.onSidemenutap();
}
onFindStoreClick(){
  this.router.navigate(['store','company','stores'])
  this.onSidemenutap();
}

  renderCatalogData() {
    this.headerServ.getCatalogData().subscribe(
      resp => {
        const catalogData = resp["catalogs"][0]["catalogVersions"];
        const menuId = _.findIndex(catalogData, function(o) {
          return o.id == "Online";
        });
        let menuData = catalogData[menuId].categories;
           menuData.sort(function(a, b) {
          return a.order - b.order;
        });
       const ctlog= _.clone(menuData, true);
       const _copy = this.nestedCopy(menuData);
       this.singletonServ.pickPackCategories=this.nestedCopy(menuData);
       this.constructCatalog(_copy);
       this.constructAmpContent(ctlog);
      },
      error => {}
    );
  }

  constructAmpContent(catalog) {
    const that = this;
    const baseSite=this.singletonServ.catalogVersion;
    catalog.map((obj, k) => {
      if (obj["subcategories"]) {
        catalog[k]["subcategories"].sort(function(a, b) {
          return a.order - b.order;
        });
      }
      if (obj.subcategories) {
        if (
          obj.subcategories[10] &&
          !obj.subcategories[10]["parent"] 
        ) {
          if (obj.subcategories.length > 11) {
            obj.subcategories.splice(10, 0, { name: "Hidden Category" });
            obj["subcategories"] = that.chunkArray(obj.subcategories, 11);
          } else {
            obj["subcategories"] = that.chunkArray(obj.subcategories, 11);
          }
        } else if (
          obj.subcategories[20] &&
          !obj.subcategories[20]["parent"] &&
          !obj.subcategories[20]["description"]
        ) {
          if (obj.subcategories.length > 21) {
            obj.subcategories.splice(20, 0, { name: "Hidden Category" });
            obj["subcategories"] = that.chunkArray(obj.subcategories, 11);
          } else {
            obj["subcategories"] = that.chunkArray(obj.subcategories, 11);
          }
        } else {
          obj["subcategories"] = that.chunkArray(obj.subcategories, 11);
        }
      }
    });
    catalog.map((obj, k) => {
      if (obj.bannerId) {
        obj["subcategories"].push({ content: [] });
        const objId = obj["subcategories"].findIndex(function(obj) {
          return !Array.isArray(obj);
        });
        let bannerBox = obj.bannerId.split(",");
        _.forEach(bannerBox, function(value, i) {
          value.replace("/ /g", "");

          AmpCa.utils.getHtmlServiceData({
            auth: {
              baseUrl: "https://c1.adis.ws",
              id: value.trim(),
              store: "moltonbrown",
              templateName: "slot-contentWrapper",
              locale: baseSite.locale
            },
            callback: function(data) {
              const temp = {
                templatename: data
              };
              obj["subcategories"][objId]["content"].push(temp);
            }
          });
        });
      }
    });
    that.catalogmenu = catalog;
  }
  constructCatalog(category) {
    const catalogTree = this.nestedCopy(category);
    const copyCatlogtree =this.nestedCopy(category);
    catalogTree.map((obj, i) => {
      if(obj.subcategories){
      const root=  obj.subcategories.sort((a,b)=>{
        return a.order - b.order;
      });
      if (root) {
        root.map((item) => {
          const _obj = _.filter(copyCatlogtree[i]["subcategories"], (o)=> {
            if (o.parent) {
              return item.id == o.parent;
            }
          });
          if (_obj.length !=0) {
              item["subcategories"] = _obj;
              _obj.map(() => {
                const _objIndx = _.findIndex(catalogTree[i]["subcategories"],(o) =>{
                    return item.id == o.parent;
                  }
                );
                catalogTree[i]["subcategories"].splice(_objIndx, 1);
              });
          }
        });
      }
      }
    });
    this.catalogTree=catalogTree;
    this.singletonServ.menudata = this.catalogTree;
    const menuInfo = { catgories: catalogTree };
    this.singletonServ.sendMessage(menuInfo);
  }

  chunkArray(myArray, chunk_size) {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
 
  }
  ngAfterViewInit() {
    this.singletonServ.getMessage().subscribe(message => {
      if (message.access_token) {
        this.signIn = true;
        this.singletonServ.loggedIn = true;
      }else if (message.baseSiteChange) {
        this.renderCatalogData();
        const _obj = {
          updateCart: true
        };
        this.singletonServ.sendMessage(_obj);
      } else if (message.getCatalog) {
        this.renderCatalogData();
      }
    });
  }
  nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  onhidesubmenu() {
    this.mouseEnter = false;
  }
  toggleMenu(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
    this.sideNav.nativeElement.scrollTo(0, 0);
    this.onSidemenutap();
  }
  swipMenu(event) {
   this.onSidemenutap();
  }
  onHoverCategory(item, i) {
    if (item.name != "Editorial") {
      this.mouseEnter = true;
      this.catalogmenu.map((obj, id) => {
        if (id == i) {
          obj.bg = true;
        } else {
          obj.bg = false;
        }
      });
    } else {
      this.catalogmenu.map((obj, id) => {
        if (id == i) {
          obj.bg = true;
        } else {
          obj.bg = false;
        }
      });
      this.mouseEnter = true;
    }
    this.singletonServ.sendMessage({hideCart:true})
  }
  onPolicesCntntClick(event,data) {
    event.preventDefault();
    if(data.templateName){
      this.onSidemenutap();
      this.router.navigate(["store", data.templateName]);      
    }
  }
  onFooterCntntClick(event,data) {
    event.stopPropagation();
    this.onSidemenutap(); 
    if (data.org) {
      this.router.navigate(["store", data.templateName]);
    } else {
      if (data.routename) {
        this.router.navigate(["store", data.routename]);
      }
    }
  }


  onShowEditorialPage(event) {
    this.onSidemenutap();
    this.router.navigate([
      "store/features/behind-the-fragrance/jasmine-sun-rose"
    ]);
  }
  onTapNewsLetter() {
    this.renderMenu();
    this.onSidemenutap();
    this.router.navigate(["store", "newsletter-sign-up"]);
  }
  onShowMenucategory(event, item) {
    event.stopPropagation();
    event.preventDefault();
    if (item.subcategories.length == 0) {
      this.onSidemenutap();
      const url = "/store" + item.url.replace("/c/", "/");
      if (url != this.location.path()) {
        this.router.navigate([url]);
      }
    }
  }
  onShowcategory(event, item) {
    event.preventDefault();
    if (!item.subcategories||item.subcategories.length == 0) {
      this.onSidemenutap();
      // this.titleService.setTitle(item.titleAlternativeName);
      let url = "/store" + item.url.replace("/c/", "/");
      this.router.navigate([url]);
    }
  }

  onShowMbSubCategoryProduct(event, current) {
    event.stopPropagation();
    event.preventDefault();
    this.onSidemenutap();
    this.renderMenu();
    if (current.id != "catUKPickMixTravel") {
      let url = "/store" + current.url.replace("/c/", "/");
      if (url != this.location.path()) {
        this.router.navigate([url]);
      }
    } else {
      // this.titleService.setTitle(current.titleAlternativeName);
      let url = "/store" + current.url.replace("/c/", "/");
      if (url != this.location.path()) {
        this.router.navigate([url]);
      }
    }
  }
  onTapRegister() {
    this.onSidemenutap();
    this.renderMenu();
    this.router.navigate(["store", "myacc", "mbRegister"]);
  }
  onTapLogin() {
    this.onSidemenutap();
    this.renderMenu();
    this.router.navigate(["store", "myacc", "mbLogin"]);
  }
  renderMenu() {
    this.singletonServ.menudata = this.catalogTree;
    this.catalogTree.map((obj, id) => {
      obj.bg = false;
    });
    this.mouseEnter = false;
  }
  onTapViewAllCat(event, sidemenu) {
    event.preventDefault();
    this.onSidemenutap();
    this.renderMenu();
    let url = "/store" + sidemenu.url.replace("/c/", "/");
    this.router.navigate([url]);
  }
  getRouterPath(current){
    if (current.isL3 || (!current.parent && current.description)) {
         if (current.id != "catUKPickMixTravel") {
        let url = "/store" + current.url.replace("/c/", "/");
        if (url != this.location.path()) {
          return url;
        }
      } else {
        // this.titleService.setTitle(current.titleAlternativeName);
        let url = "/store" + current.url.replace("/c/", "/");
        if (url != this.location.path()) {
          return url;
        }
      }
     return ""
    }
    return ""
  }

  onShowMbCategoryProduct(event, data) {
    event.stopPropagation(); 
    event.preventDefault();
    if (data.categoryDisplayName != "Editorial") {

      this.mouseEnter = false;
      this.catalogmenu.map((obj, id) => {
          obj.bg = false;
      });
      this.renderMenu();

      const routeId = data.id;
      this.singletonServ.menudata = this.catalogTree; 

      if(event.ctrlKey && event.which === 1){
        let url = "/store" + '/'+data.name+'/'+routeId;
        window.open(url); 
     } else {
      this.mouseEnter = false;
      this.catalogmenu.map((obj, id) => {
          obj.bg = false;
      });
      this.renderMenu();
      this.router.navigate(["/store", data.name, routeId]);
     }

    } else {

      if(event.ctrlKey && event.which === 1){
        window.open("/store/features"); 
      } else {
        
      this.mouseEnter = false;
      this.catalogmenu.map((obj, id) => {
          obj.bg = false;
      });
      this.renderMenu();
      this.router.navigate([
        "store/features"
      ]);
     }
    }
  }
  onClickSubCategory(event, current) {
    event.stopPropagation();
    event.preventDefault();
    if (current.isL3 || (!current.parent && current.description)) {      
      if (current.id != "catUKPickMixTravel") {
        this.mouseEnter = false;
        this.catalogmenu.map((obj, id) => {
            obj.bg = false;
        });
        this.renderMenu();

        let url = "/store" + current.url.replace("/c/", "/");
        if (url != this.location.path()) {
          if(event.ctrlKey && event.which === 1){
            window.open(url); 
         } else {
            this.mouseEnter = false;
            this.catalogmenu.map((obj, id) => {
                obj.bg = false;
            });
           this.renderMenu();
           this.router.navigate([url]);
           this.catalogmenu.map(obj => {
            obj.bg = false;
          });
         }
        }
      } else {
        let url = "/store" + current.url.replace("/c/", "/");
        if (url != this.location.path()) {
          if(event.ctrlKey && event.which === 1){
             window.open(url); 
          } else {
            this.mouseEnter = false;
            this.catalogmenu.map((obj, id) => {
                obj.bg = false;
            });
            this.renderMenu();
            this.router.navigate([url]);
            this.catalogmenu.map(obj => {
              obj.bg = false;
            });
          }          
        }
      }
    }
  }

  onmouseLeave() {
    this.catalogmenu.map(obj => {
      obj.bg = false;
    });
  }
  mouseLeave() {
    this.mouseEnter = false;
  }
  onEnterSearcKeyUp(event){
    this.onSearcKeyUp(event);
    
    if (event.key === "Enter") {
      this.onSidemenutap();
    }
  }
  onSearchMoreResults(){
    const that=this;
    this.onSidemenutap();
    this.singletonServ.sendMessage({searchResults:true,searchText:that.searchMobField.nativeElement.value});
  }
  onMenuSearchProduct(event, searchItem) {
      event.stopPropagation();
      this.onSidemenutap();
      this.onSearchProduct(event, searchItem);
  }
  onTapAccount(){
    this.onSidemenutap();
    this.onProfileClick();
  }
  onTapLogut(){
    this.onSidemenutap();
    this.signIn=false;
    this.singletonServ.removeItem("order");
    let _sessionNames=Object.keys(sessionStorage);
    if(_sessionNames.length){
      _sessionNames.map((obj)=>{
        this.singletonServ.removeItem(obj);
      });
    }
    this.cartCo.retrieveCartDetails(); 
    this.router.navigate(["store", "myacc"]);  
  }
}
