import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HostDirective } from "./host.directive";
import { LookUpDirective } from "./look-up.directive";

@NgModule({
  declarations: [HostDirective, LookUpDirective],
  imports: [CommonModule],
  exports: [HostDirective, LookUpDirective],
})
export class DirectivesModule {}
