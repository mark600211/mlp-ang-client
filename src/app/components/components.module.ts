import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsRoutingModule } from "./components-routing.module";

import { MatCardModule } from "@angular/material/card";

import { MainComponent } from "./main.component";
import { ActsModule } from "./acts/acts.module";
import { ActsRoutingModule } from "./acts/acts-routing.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ActsRoutingModule,
    ActsModule,
    MatCardModule,
  ],
})
export class ComponentsModule {}
