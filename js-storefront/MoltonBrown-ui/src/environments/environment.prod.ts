// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment :{
  production:boolean,
  environmentName:string,
  AUTHRISATION_PATH:string,
  CS_AUTHRISATION_PATH:string,
  CS_CUSTOMER:string,
  API_PATH:Function,
  countryJsonData:Array<any>
} = {
  production: true,
  environmentName: 'production',
  AUTHRISATION_PATH:'https://api.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/authorizationserver/',
  CS_AUTHRISATION_PATH:'https://api.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/authorizationserver/',
  CS_CUSTOMER:'https://api.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/',
  API_PATH:function(){
    const path='https://api.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/kaowebservices/v2/';
    if (localStorage.getItem("prefered_lng")) {
      const _data = JSON.parse(localStorage.getItem("prefered_lng"));
      return path+_data.catalogversionId;
    }else{
      return path+'moltonbrown-gb';
    }    
 },
 countryJsonData:[
  {
    countryCode: "gb",
    countryImg: "assets/imgs/icon_country_german.gif",
    countryName: "UK",
    name:"United Kingdom",
    catalogversionId: "moltonbrown-gb",
    locale: "en-GB",
    reg:"reg-gb",
    guest:"guest-gb",
    isoCode:"GB",
    store:"store_gb",
    lngCode:'en',
    guestPickMix:'guest-pick-mix-gb',
    regPickMix:'reg-pick-mix-gb',
    bv_locale:'en_gb',
    bv:'https://apps.bazaarvoice.com/deployments/moltonbrown-en_gb/main_site/staging/en_GB/bv.js',
    geoPoint:{
      latitude:51.509865,
      longitude:-0.118092
    },
    query:"https://jsapps.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/store/index"
  },
  {
    countryCode: "US",
    countryImg: "https://www.moltonbrown.co.uk/images/USflagOver.gif",
    countryName: "USA",
    name:"United States",
    catalogversionId: "moltonbrown-us",
    locale: "en-US",
    reg:"reg-us",
    guest:"guest-us",
    isoCode:"US",
    store:"store_us",
    lngCode:'us',
    guestPickMix:'guest-pick-mix-us',
    regPickMix:'reg-pick-mix-us',
    latitude:'51.50853',
    longitude:'-0.12574',
    bv_locale:'en_US',
    bv:'https://apps.bazaarvoice.com/deployments/moltonbrown/main_site/staging/en_US/bv.js',
    geoPoint:{
      latitude:51.50853,
      longitude:-0.12574
    },
    query:"https://jsapps.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/store/index?country_store=us"
  },
  {
    countryCode: "eu",
    countryImg: "assets/imgs/icon_country_europe.gif",
    countryName: "Europe",
    name:"Europe",
    catalogversionId: "moltonbrown-eu",
    locale: "en-CX",    
    reg:"reg-eu",
    guest:"guest-eu",
    isoCode:"EU",
    store:"store_eu",
    lngCode:'eu',
    guestPickMix:'guest-pick-mix-eu',
    regPickMix:'reg-pick-mix-eu',
    latitude:'51.50853',
    longitude:'-0.12574',
    bv_locale:'en_EU',
    bv:'https://apps.bazaarvoice.com/deployments/moltonbrown-eu/main_site/staging/en_EU/bv.js',
    geoPoint:{
      latitude:51.50853,
      longitude:-0.12574
    },
    query:"https://jsapps.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/store/index?country_store=eu"
  },
  {
    countryCode: "de",
    countryImg: "assets/imgs/icon_country_german.gif",
    countryName: "Germany",
    name:"Germany",
    catalogversionId: "moltonbrown-de",
    locale: "de-DE",    
    reg:"reg-de",
    guest:"guest-de",
    isoCode:"DE",
    store:"store_de",
    lngCode:'de',
    guestPickMix:'guest-pick-mix-de',
    regPickMix:'reg-pick-mix-de',
    bv_locale:'en_EU',
    bv:'https://apps.bazaarvoice.com/deployments/moltonbrown-eu/main_site/staging/en_EU/bv.js',
    geoPoint:{
      latitude:51.50853,
      longitude:-0.12574
    },
    query:"https://jsapps.cxur-kaocorpor1-p3-public.model-t.cc.commerce.ondemand.com/store/index?country_store=de"
  },
  {
    countryCode: "jp",
    countryImg: "assets/imgs/icon_country_japan.gif",
    countryName: "Japan",
    name:"Japan",
    catalogversionId: "moltonbrown-jp",
    locale: "jp-JP",    
    reg:"reg-jp",
    guest:"guest-jp",
    isoCode:"JP",
    store:"store_jp",
    lngCode:'jp',
    guestPickMix:'guest-pick-mix-jp',
    regPickMix:'reg-pick-mix-jp',
    bv_locale:'en_EU',
    bv:'https://apps.bazaarvoice.com/deployments/moltonbrown-eu/main_site/staging/en_EU/bv.js',
    geoPoint:{
      latitude:51.50853,
      longitude:-0.12574
    },
    query:"http://www.moltonbrown.co.jp/?country=store_jp"
  }
]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
