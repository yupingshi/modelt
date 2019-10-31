import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { GooglePlacesDirective } from './googlePlace.directive';
import { NgxStarsModule } from "ngx-stars";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxStarsModule
  ],
  declarations: [GooglePlacesDirective],
  exports: [
    GooglePlacesDirective,
    CommonModule,
    FormsModule
  ]
})
export class GooglePlacesDirectiveModule { }
