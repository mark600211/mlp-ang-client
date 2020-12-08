import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { RulesComponent } from "./rules.component";
import { RulesRoutingModule } from "./rules-routing.module";

@NgModule({
  declarations: [RulesComponent],
  imports: [CommonModule, SharedModule, RulesRoutingModule],
})
export class RulesModule {}
