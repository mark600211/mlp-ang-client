import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnInit,
  StaticProvider,
  ViewChild,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HostDirective } from "src/app/directives/host.directive";
import { SelectField } from "../../../components/acts/act-form/models/fields/select-filed.model";
import { RendererComponent } from "./renderer.component";
import { FormComponent } from "src/app/elements/forms/models/form.component";
import { ActsFormControlService } from "src/app/services/controls/acts-form-control.service";
import { Apollo } from "apollo-angular";
import { ProcessHTTPMsgService } from "src/app/services/process-httpmsg.service";

@Component({
  selector: "app-form-renderer",
  template: `<ng-template host></ng-template>`,
})
export class FormRendererComponent<T> implements OnInit, RendererComponent {
  @Input() field: SelectField<T>;
  @Input() form: FormGroup;
  @ViewChild(HostDirective, { static: true }) host: HostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const component = this.field.fieldType;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    const apollo = this.injector.get(Apollo);

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const providers: StaticProvider[] = [
      {
        provide: ProcessHTTPMsgService,
        useClass: ProcessHTTPMsgService,
      },
      {
        provide: "getsType",
        useValue: this.field.getsType ? this.field.getsType : undefined,
      },
      {
        provide: "getType",
        useValue: this.field.getType ? this.field.getType : undefined,
      },
      {
        provide: "postType",
        useValue: this.field.postType,
      },
      {
        provide: "patchType",
        useValue: this.field.patchType,
      },
      {
        provide: "apollo",
        useValue: apollo,
      },
      {
        provide: "getOptionsForOption",
        useClass: this.field.getOptionsService,
        deps: ["apollo"],
      },
      {
        provide: "getOptionForOption",
        useClass: this.field.getOptionService
          ? this.field.getOptionService
          : null,
        deps: ["apollo"],
      },
      {
        provide: "postOption",
        useClass: this.field.postOptionService,
        deps: ["apollo"],
      },
      {
        provide: "patchOption",
        useClass: this.field.patchOptionService,
        deps: ["apollo"],
      },
      {
        provide: ActsFormControlService,
        useClass: ActsFormControlService,
        deps: [
          "getOptionsForOption",
          "getsType",
          "getOptionForOption",
          "getType",
          "postOption",
          "postType",
          "patchOption",
          "patchType",
          ProcessHTTPMsgService,
        ],
      },
    ];
    const injectros = Injector.create({ providers });

    const componentRef = viewContainerRef.createComponent<FormComponent>(
      componentFactory,
      0,
      injectros
    );
    componentRef.instance.key = this.field.key;
    componentRef.instance.form = this.form;
    componentRef.instance.label = this.field.label;
    componentRef.instance.editable = this.field.editable;
    componentRef.instance.required = this.field.required;
    componentRef.instance.optionFieldsService = this.field.optionFieldsService;
    componentRef.instance.value = this.field.value;
  }
}
