import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { FeedbackComponent } from './feedback/feedback.component';
import { browseCustomFocusDirective } from './customfocusDirective/browseCustomFocusDirective'
const routes: Routes = [
    { path: '', component: FeedbackComponent, data: { title: 'Customers' } ,
  }
 ];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
        
    ],
    declarations: [
browseCustomFocusDirective,
    FeedbackComponent],
    providers:[]
})
export class BrowseComponentModule { }
