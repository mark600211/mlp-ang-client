import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HostDirective } from "./host.directive";
import { LookUpDirective } from "./look-up.directive";
import { FitlterHostDirective } from "./filter-host.directive";

@NgModule({
  declarations: [HostDirective, LookUpDirective, FitlterHostDirective],
  imports: [CommonModule],
  exports: [HostDirective, LookUpDirective, FitlterHostDirective],
})
export class DirectivesModule {}
