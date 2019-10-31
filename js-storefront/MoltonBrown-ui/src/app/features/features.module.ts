
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeviceDetectorModule } from "ngx-device-detector";
import { HeritageComponent } from '../features/heritage/heritage.component';
import { EditorialComponent } from '../features/editorial/editorial.component';
import {MbBreadCrumbModule} from '../component/mb-bread-crumb/mb-bread-crumb.module';
import {TranslatServicePipeModule} from '../pipe/transalte.module';
import {FeaturesComponent} from './features.component';

import { PerfumesComponent } from './perfumes/perfumes.component';
import { WeddingComponent } from './wedding/wedding.component';
import { FeatureBreadcrumbComponent } from './feature-breadcrumb/feature-breadcrumb.component';

import {FeatureComponentService} from "./features.service";
const routes: Routes =[
    { path: '', component: FeaturesComponent },
    { path: 'molton-brown-history', component: HeritageComponent },
    { path: 'behind-the-fragrance/jasmine-sun-rose', component: EditorialComponent }, 
    { path: 'meet-the-perfumers', component: PerfumesComponent },
    { path:'the-perfect-pair-wedding-gift-guide',component:WeddingComponent} 
 ];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DeviceDetectorModule,
        ReactiveFormsModule,
        MbBreadCrumbModule,
        TranslatServicePipeModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HeritageComponent,
        EditorialComponent,
        FeaturesComponent,
        PerfumesComponent,
        WeddingComponent,
        FeatureBreadcrumbComponent
    ],
    providers:[
        FeatureComponentService
    ]
})
export class FeatureRouteModule { }