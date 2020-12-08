import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  StaticProvider,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { ActsFormControlService } from "src/app/services/controls/acts-form-control.service";
import { FormOptionComponent } from "./form-option.component";
import { OptionDialogData } from "./model/dialog-data.model";

@Component({
  selector: "app-form-option-dialog",
  template: `
    <div fxFlex fxFlexOffset="20px" fxLayout="column" fxLayoutAlign="center">
      <h5>
        {{ data.item ? "Редактировать" : "Создать" }}
      </h5>
      <h3>
        {{ data.label }}
      </h3>
      <div fxLayout="column" mat-dialog-content>
        <ng-template #target></ng-template>
        <mat-action-list fxLayoutGap="5px">
          <button
            (click)="onSubmit()"
            mat-raised-button
            type="button"
            [disabled]="!isFormValid"
            class="background-primary text-floral-white"
          >
            {{ data.item ? "Сохранить Изменения" : "Сохранить" }}
          </button>
          <button type="button" mat-raised-button (click)="reset()">
            Очистить
          </button>
          <button type="button" mat-raised-button (click)="close()">
            Отмена
          </button>
        </mat-action-list>
      </div>
    </div>
  `,
})
export class FormOptionDialogComponent
  implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<FormOptionComponent>;
  @ViewChild("target", { read: ViewContainerRef, static: true })
  vcRef: ViewContainerRef;
  isFormValid: boolean = false;
  value: any;

  private subscriptions$: Subscription = new Subscription();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: OptionDialogData,
    private dialogRef: MatDialogRef<FormOptionDialogComponent>
  ) {}

  ngOnInit() {
    this.initFormComponent();
  }

  ngAfterViewInit() {
    this.subscriptions$.add(
      this.componentRef.instance.form.valueChanges.subscribe((val) => {
        this.isFormValid = this.componentRef.instance.form.valid;
        this.value = val;
      })
    );
  }

  initFormComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      FormOptionComponent
    );
    this.vcRef.clear();

    const providers: StaticProvider[] = [
      {
        provide: "optionFieldsService",
        useClass: this.data.optionsFieldService,
        deps: [],
      },
    ];

    const injectorts = Injector.create({ providers });

    this.componentRef = this.vcRef.createComponent<FormOptionComponent>(
      componentFactory,
      0,
      injectorts
    );

    this.componentRef.instance.value = this.data.item;
  }

  close(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.dialogRef.close(undefined);
  }

  reset(): void {
    this.componentRef.instance.form.reset();
  }

  onSubmit(): void {
    this.dialogRef.close(this.value);
    this.subscriptions$.unsubscribe();
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
