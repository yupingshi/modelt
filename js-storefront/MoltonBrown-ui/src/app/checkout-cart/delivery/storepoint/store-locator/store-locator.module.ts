import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {StoreLocatorComponent} from './store-locator.component';
import { AgmCoreModule } from "@agm/core";
import { NgxStarsModule } from "ngx-stars";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxStarsModule,
    AgmCoreModule.forRoot({
        apiKey: "gme-moltonbrownltd",
        libraries: ["places"]
      }),
  ],
  declarations: [StoreLocatorComponent],
  exports:      [ StoreLocatorComponent,
    CommonModule, FormsModule ]
})
export class StoreLocatorModule { }
