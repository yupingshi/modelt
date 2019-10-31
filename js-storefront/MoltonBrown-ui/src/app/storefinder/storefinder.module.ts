import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import {StorefinderComponent} from './storefinder.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from "@agm/core";
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlacesDirectiveModule } from "../checkout-cart/googleplacedirective.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {gme} from '../app.constant';
const routes: Routes = [
    { path: '', component: StorefinderComponent, data: { title: 'Customers' } }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: gme.googleMapKey,
            libraries: ["places"]
          }),
        AgmDirectionModule ,
        GooglePlacesDirectiveModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        StorefinderComponent
    ]
})
export class StoreFinderModule { }