import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeviceDetectorModule } from "ngx-device-detector";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { HeaderSubmenuComponent } from "./component/header-submenu/header-submenu.component";
import { FooterComponent } from "./component/footer/footer.component";
import { productviewComponentService } from "./component/productview/productview.service";
import { AppService } from "./app.service";
import { HeaderComponentService } from "./component/header/header.service";
import { SingletonService } from "./services/singleton.service";
import { PagerService } from "./services/pager.service";
import * as WebFont from "webfontloader";
import { BreadcrumbComponent } from "./component/breadcrumb/breadcrumb.component";
import { BasketPageComponentService } from "./checkoutpage/basketpage/basketpage.service";
import {  GoogleMapsAPIWrapper } from "@agm/core";
import {HeaderModule} from './component/header/header.module';
import { profileComponentService } from "./component/profile-form/profile.service";
import { OrderHistoryService } from "./component/orders/orders.service";
import { OrderPipe } from "./pipe/order.pipe";
import { GiftCardComponentService } from "./gift-cards/gift-cards.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthenticationGuardService } from "./guards/authentication-guard.service";
import { RoleGuardService } from "./guards/role-guard.service";
import { AuthenticationService } from "./services/authentication.service";
import { LoaderComponent } from "./loader/loader/loader.component";
import { StorefinderService } from "./storefinder/storefinder.service";
import { PlacePredictionService } from "./services/postcode-prediction.service";
import { PaymentService } from "./component/payment-detail/payment.service";
import {NewsLetterComponentService} from './newsletter-signup/newsletter.service';
import {CategoryComponentService} from './categorylanding-page/categorylanding-page.service';
import {CustomerAccountService} from './component/customer-account/customer-account.service';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { CsHeaderComponent } from './component/cs-header/cs-header.component';
import {CSCustomerService} from './component/cs-header/cs-header.service';
import { CustomValidatorDirective } from './forms/custom-validator.directive';
import { CustomDirectiveFocusDirective } from './forms/custom-directive-focus.directive';
import {AmpHomePageService} from './amp-homepage/amp-homepage.service';
import { ConfigService } from './services/config.service';
import {MetaService} from "./services/meta.service";
import {StoreComponent} from './store/store.component';
import {FooterComponentService} from './component/footer/footer.service';
import { SaleComponent } from './sale/sale.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import {AffliateComponent} from './affliate/affliate.component';
import { FeatureBreadcrumbComponent } from './features/feature-breadcrumb/feature-breadcrumb.component';
import { BrowseComponent } from './browse/browse.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


WebFont.load({
  custom: {
    families: ["font1"]
  }
});
export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}
export function getBaseHref(): string {
  return window.location.pathname;
} 
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    BreadcrumbComponent,
    OrderPipe,
    TranslatePipe,
    NotFoundComponent,
    LoaderComponent,
    CsHeaderComponent,
    CustomValidatorDirective,
    CustomDirectiveFocusDirective,
    FooterComponent,
    BrowseComponent
  ],
  imports: [NgbModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    HeaderModule
  ],
  providers: [
    AppService,
    CategoryComponentService,
    PlacePredictionService,
    GoogleMapsAPIWrapper,
    CSCustomerService,
    profileComponentService,
    BasketPageComponentService,
    productviewComponentService,
    PagerService,
    HeaderComponentService,
    SingletonService,
    AuthenticationGuardService,
    RoleGuardService,
    AuthenticationService,
    GiftCardComponentService,
    OrderHistoryService,
    StorefinderService,
    PaymentService,
    NewsLetterComponentService,
    CustomerAccountService,
    FooterComponentService,
    TranslateService, 
    AmpHomePageService,
      {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    },
    ConfigService,
    MetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// const __stripTrailingSlash = (Location as any).stripTrailingSlash;  
// Location.stripTrailingSlash = function (url) {  
//   if (url.endsWith('/')) {  
//     url=url;  
//   }  
//   else {  
//     url=url+'/';  
//   }  
//   const queryString$ = url.match(/([^?]*)?(.*)/);  
//   if (queryString$[2].length > 0) {  
//     return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);  
//   }  
//   return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);  
// };  