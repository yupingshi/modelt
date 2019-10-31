import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { NewsletterUpdateComponent } from "./newsletter-update.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
    { path: '', component: NewsletterUpdateComponent,runGuardsAndResolvers: 'always' }
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NewsletterUpdateComponent
    ],
    providers:[
    ]
})
export class NewsletterUpdateModule { }