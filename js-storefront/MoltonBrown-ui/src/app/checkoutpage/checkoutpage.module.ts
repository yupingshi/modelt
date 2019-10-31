import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {CheckoutpageComponent} from './checkoutpage.component';
import {BasketpageComponent} from './basketpage/basketpage.component';
import {ProductSamplesComponent} from './product-samples/product-samples.component';
import {DeliveryOptionsComponent} from '../component/delivery-options/delivery-options.component';
import { SlickCarouselModule } from "ngx-slick-carousel";
import {TranslatServicePipeModule} from '../pipe/transalte.module';
import {TranslateServiceSubService} from '../pipe/translate-service-sub.service';
import {LoadingModule} from '../loading/loading.module';
import {checkoutPageCustomFocusDirective} from '../checkoutpage/CheckoutPageCustomFocusDirective/checkoutPageCustomFocus'
import {GiftwrapComponent} from './giftwrap/giftwrap.component';
import {DisableControlDirectiveModule} from '../directives/disableField.module';
import {SanitizeHtmlPipeModule} from "../pipe/sanitize.module";
const routes: Routes = [
    { path: '', component: CheckoutpageComponent, data: { title: 'Customers' } ,
    children: [
        { path: '', redirectTo: 'basket', pathMatch: 'full' },
        { path: 'basket', component: BasketpageComponent},
        { path: 'mbSamples', component: ProductSamplesComponent }
    ]}
];
@NgModule({
    imports: [
        CommonModule,
        LoadingModule,
        FormsModule,
        DisableControlDirectiveModule,
        SlickCarouselModule,
        RouterModule.forChild(routes),
        TranslatServicePipeModule,
        ReactiveFormsModule,
        SanitizeHtmlPipeModule
    ],
    declarations: [
        CheckoutpageComponent,
        BasketpageComponent,
        ProductSamplesComponent,
        DeliveryOptionsComponent,
        checkoutPageCustomFocusDirective,
        GiftwrapComponent
    ],
    providers:[TranslateServiceSubService]
})
export class CheckoutPageModule { }
