import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";
import{NgUiViewModule} from '../component/ngui-in-view/ngUiView.module';
import { SaleComponent } from '../sale/sale.component';
import { SpecialOffersComponent } from '../special-offers/special-offers.component';
import {AmpHomepageComponent} from '../amp-homepage/amp-homepage.component';
import { GiftCardsComponent } from '../gift-cards/gift-cards.component';
import {AffliateComponent} from '../affliate/affliate.component';
import { FooterComponent } from "../component/footer/footer.component";
import { StoreComponent } from "../store/store.component";
import {SanitizeHtmlPipeModule} from "../pipe/sanitize.module";
import { SessionExpiredComponent } from '../session-expired/session-expired.component';
const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full', data: { catalogId: 'moltonbrown-gb' } },
    { path: 'index', loadChildren: '../landingpage/landingpage.module#landingpageModule',runGuardsAndResolvers: 'always'  },
    {path:'store-events',loadChildren:'../store-events/store-events.module#storeEventsModule'},
    {path:'home',loadChildren:'../amp-homepage/amp-homepage.module#AmpHomePageModule'},
    { path: 'browse/:searchId', loadChildren: '../search-landingpage/search-landingpage.module#SearchLandingPageModule' ,runGuardsAndResolvers: 'always'},
    { path: 'browse/feedback/feedback', loadChildren: '../browse/browse.module#BrowseComponentModule' ,runGuardsAndResolvers: 'always'},
    { path:'global/sessionExpired',component:SessionExpiredComponent,pathMatch: 'full',runGuardsAndResolvers: 'always'},    
    {path:'gift-cards',loadChildren:"../gift-cards/gift-cards.module#GiftCardRouteModule"},
    { path: 'features',loadChildren:'../features/features.module#FeatureRouteModule'},
    {path:'company/stores',loadChildren:'../storefinder/storefinder.module#StoreFinderModule'},
    {path:'company/results',loadChildren:'../storeservicelist/storeservicelist.module#StoreservicelistModule'},
    {path:'store-finder/:countryName/:stateName/:cityName/:outletName/:store',loadChildren:'../store-detail/store-detail.module#StoreDetailModule'},
    {path:'store-finder/:countryName/:stateName/:cityName/:outletName/official-stockist',loadChildren:'../store-detail/store-detail.module#StoreDetailModule'},
    {path:'store-finder/:countryName/:stateName/:cityName/:outletName/airport-stockist',loadChildren:'../store-detail/store-detail.module#StoreDetailModule'},
    {path:'store-finder/:countryName/:stateName/:outletName/store',loadChildren:'../store-detail/store-detail.module#StoreDetailModule'},
    {path:'store-finder/:countryName/:stateName/:outletName/official-stockist',loadChildren:'../store-detail/store-detail.module#StoreDetailModule'},
    {path:'store-finder/:countryName/:stateName/:outletName/airport-stockist',loadChildren:'../store-detail/store-detail.module#StoreDetailModule'},
    {path:'careers',loadChildren:'../career/career.module#careerModule',pathMatch: 'full'},
    {path:'corporate-gifts',loadChildren:'../corporate-gifts/corporate-gifts.module#corporateGiftModule'   },
    { path: 'myacc',loadChildren:'../myaccount/myacc.module#MyaccRouteModule'},
    { path: 'myaccount',loadChildren:'../myaccount/myaccount.module#MyaccountRouteModule'},
   { path: 'mbcart', loadChildren:'../checkoutpage/checkoutpage.module#CheckoutPageModule' },
    {path:'newsletter-sign-up',loadChildren:'../newsletter-signup/newsletter-signup.module#NewsletterSignupModule'},
    {path:'newsletter-sign-up/confirmation',loadChildren:'../newsletter-signup/newsletter-signup.module#NewsletterSignupModule'},
    {path:'update-your-preferences', loadChildren:'../newsletter/newsletter-update/newsletter-update.module#NewsletterUpdateModule'},
    {path:'affliate',component:AffliateComponent},

    {path:'hotel-amenities',loadChildren:'../hotel-amenities/hotel-amenities.module#HotelAmenitiesModule'},
    {path:'hotel-amenities/:sitename',loadChildren:'../hotel-amenities/hotel-amenities.module#HotelAmenitiesModule'},
    {path:'hotel-amenities/:site/:sitename',loadChildren:'../hotel-amenities/hotel-amenities.module#HotelAmenitiesModule'},

    { path: 'product/:itemid', loadChildren: '../category-detail-page/category-detail-page.module#CategoryDetailPageModule',runGuardsAndResolvers: 'always' }, 
    {path:'sale/:saleId',component:SaleComponent, pathMatch: 'full'},
    {path:'special-offers/:saleId',component:SpecialOffersComponent, pathMatch: 'full'},
    {path:':sitename',loadChildren:'../organisation/organisation.module#OrgainisationRouteModule',runGuardsAndResolvers: 'always' },
    { path: ':categoryname/pick-mix-travel/:productid', loadChildren: '../pick-mix-travel/pick-mix-travel.module#PickMixTravelModule' },
    { path: ':productname/:categoryId', loadChildren: '../categorylanding-page/categorylanding-page.module#CategorylandingPageModule',runGuardsAndResolvers: 'always' },
    { path: ':categoryname/:productname/:productid', loadChildren: '../categorylanding-page/categorylanding-page.module#CategorylandingPageModule',runGuardsAndResolvers: 'always' },
    { path: ':categoryname/:productname/:itemname/:itemid', loadChildren: '../category-detail-page/category-detail-page.module#CategoryDetailPageModule',runGuardsAndResolvers: 'always' }   
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        NgUiViewModule,
        SanitizeHtmlPipeModule
    ],
    declarations: [
        AffliateComponent,
        SaleComponent,
        SpecialOffersComponent,
        SessionExpiredComponent 
     ]
})
export class StorePageModule { }
