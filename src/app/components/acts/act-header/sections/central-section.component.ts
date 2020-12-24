import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
} from "@angular/core";
import { Subscription } from "rxjs";
import { HostDirective } from "src/app/directives/host.directive";
import { SectionsService } from "./sections.service";

@Component({
  selector: "app-act-header-central",
  template: ` <ng-template host></ng-template> `,
})
export class ActHeaderCentralSectionComponent implements OnInit {
  @ViewChild(HostDirective, { static: true }) host: HostDirective;

  componentRef: ComponentRef<any>;

  constructor(
    private sectionsService: SectionsService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  private subscription$: Subscription = new Subscription();

  ngOnInit() {
    this.subscription$.add(
      this.sectionsService.createCentralSource.subscribe(
        (component: Type<any>) => {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            component
          );

          const viewContainerRef = this.host.viewContainerRef;
          viewContainerRef.clear();

          this.componentRef = viewContainerRef.createComponent(
            componentFactory
          );
        }
      )
    );
    this.subscription$.add(
      this.sectionsService.destroyCentralSource.subscribe(() => {
        if (this.componentRef) {
          this.componentRef.destroy();
        }
      })
    );
  }
}
