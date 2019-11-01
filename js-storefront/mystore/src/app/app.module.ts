import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StorefrontModule } from "@spartacus/storefront";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StorefrontModule.withConfig({
      server: {
        baseUrl: 'https://accstorefront.cfc5lg-fenghudev1-d1-public.model-t.cc.commerce.ondemand.com',
        occPrefix: '/rest/v2/'
      }, 
      authentication: {
        client_id: 'mobile_client',
        client_secret: '123456'
      }, 
      site: {
        baseSite: 'electronics'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
