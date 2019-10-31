import { InjectionToken,NgModule } from '@angular/core';
import { Routes, RouterModule,UrlSegment, ActivatedRouteSnapshot,UrlSegmentGroup, Route } from '@angular/router';
import {AuthenticationGuardService} from './guards/authentication-guard.service';
import {RoleGuardService} from './guards/role-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SaleComponent } from './sale/sale.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import {AffliateComponent} from './affliate/affliate.component';
import { StoreComponent } from "./store/store.component";


const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');
const routes: Routes = [
    { path: '', redirectTo: 'store', pathMatch: 'full'},

      { path:'store/storeportal',loadChildren:'./store-portal/store-portal.module#StorePortalRouteModule',  data: {
        header: false
      }},
      {    path: 'store', component: StoreComponent, loadChildren:'./store/store.module#StorePageModule',  data: {
        header: true
      }},

    { 
     path: 'checkout',
     loadChildren:'./checkout-cart/checkout-cart.module#CheckoutCartPageModule',   data: {
      header: false
    },  runGuardsAndResolvers: 'always'},
    { path: 'organisation', loadChildren:'./organisation/organisation.module#OrgainisationRouteModule',  data: {
      header: true
    }},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'},

];

@NgModule({
  providers: [
    {
        provide: externalUrlProvider,
        useValue: (route: ActivatedRouteSnapshot) => {
            
            const externalUrl = route.paramMap.get('externalUrl');
            window.open(externalUrl, '_self');
        },
    }],
    imports: [
        RouterModule.forRoot(routes,{
            anchorScrolling: 'enabled'
          })
        ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export function htmlFiles(url: UrlSegment[]) {
    return url.length === 1 && url[0].path.endsWith('gift-cards') ? ({consumed: url}) : null;
  }