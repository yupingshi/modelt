import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {DisableControlDirective} from './disableFieldDirective.directive';
import { NgxStarsModule } from "ngx-stars";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxStarsModule
  ],
  declarations: [DisableControlDirective],
  exports:      [ DisableControlDirective,
    CommonModule, FormsModule ]
})
export class DisableControlDirectiveModule { }