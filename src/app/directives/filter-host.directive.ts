import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[FilterHost]",
})
export class FitlterHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
