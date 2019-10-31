import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {  RouterModule } from '@angular/router';
import {ProductviewComponent} from './productview.component';
import { NgxStarsModule } from "ngx-stars";
import {TranslatServicePipeModule} from '../../pipe/transalte.module';
import {TranslateServiceSubService} from '../../pipe/translate-service-sub.service';
import { CeiboShare } from "../../directives/shareIcon.directive";
import {SanitizeHtmlPipeModule} from "../../pipe/sanitize.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxStarsModule,
    TranslatServicePipeModule,
    SanitizeHtmlPipeModule,
    RouterModule
  ],
  declarations: [ProductviewComponent,CeiboShare],
  providers:[TranslateServiceSubService],
  exports:      [ ProductviewComponent,
    CommonModule, FormsModule ]
})
export class ProductviewModule { }
