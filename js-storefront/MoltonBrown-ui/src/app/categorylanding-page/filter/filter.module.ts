import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterComponent } from "./filter.component";
import { NgxStarsModule } from "ngx-stars";
@NgModule({
  imports: [CommonModule, FormsModule,NgxStarsModule],
  declarations: [FilterComponent],
  exports: [FilterComponent, CommonModule, FormsModule]
})
export class FilterModule {}
