
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AmpHomepageComponent } from "./amp-homepage.component";
import{NgUiViewModule} from '../component/ngui-in-view/ngUiView.module';
const routes: Routes = [
    { path: '', component: AmpHomepageComponent,runGuardsAndResolvers: 'always' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgUiViewModule
    ],
    declarations: [
        AmpHomepageComponent
    ]
})
export class AmpHomePageModule { }