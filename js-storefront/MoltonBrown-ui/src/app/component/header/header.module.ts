import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header.component";
import {HeaderSubmenuComponent} from '../header-submenu/header-submenu.component';
import{MenuComponent} from '../menu/menu.component';
import { CartComponent } from './cart/cart.component';
import {SanitizeHtmlPipeModule} from "../../pipe/sanitize.module";
import {OpenNewWindowModule} from "../../directives/newTab.module";
@NgModule({
  imports: [CommonModule, FormsModule,RouterModule,SanitizeHtmlPipeModule,OpenNewWindowModule],
  declarations: [HeaderComponent,HeaderSubmenuComponent,MenuComponent,CartComponent],
  exports: [HeaderComponent,HeaderSubmenuComponent,MenuComponent,CartComponent, CommonModule, FormsModule]
})
export class HeaderModule {}