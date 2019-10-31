import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {MbBreadCrumbComponent} from './mb-bread-crumb.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MbBreadCrumbComponent],
  exports:      [ 
    MbBreadCrumbComponent,
    CommonModule, 
    FormsModule ]
})
export class MbBreadCrumbModule { }
