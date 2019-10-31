import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PagerComponent } from "./pager.component";
import { NgxStarsModule } from "ngx-stars";
@NgModule({
  imports: [CommonModule, FormsModule, NgxStarsModule],
  declarations: [PagerComponent],
  exports: [PagerComponent, CommonModule, FormsModule]
})
export class PageTypeModule {}
