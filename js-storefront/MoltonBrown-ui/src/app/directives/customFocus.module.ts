import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {CustomFormFocusDirective} from './customfocus.directive';
import { NgxStarsModule } from "ngx-stars";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxStarsModule
  ],
  declarations: [CustomFormFocusDirective],
  exports:      [ CustomFormFocusDirective,
    CommonModule, FormsModule ]
})
export class CustomFocusControlDirectiveModule { }