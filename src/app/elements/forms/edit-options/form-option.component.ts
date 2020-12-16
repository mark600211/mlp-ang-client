import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FieldBase } from "src/app/components/acts/act-form/models/fields/field-base.model";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";

@Component({
  selector: "app-form-option",
  template: `
    <div *ngIf="!value || isDataReady" fxFlex>
      <div *ngFor="let field of fields" fxLayout="column">
        <div *ngIf="field.visible">
          <app-form-renderer [field]="field" [form]="form"></app-form-renderer>
        </div>
      </div>
    </div>
  `,
})
export class FormOptionComponent implements OnInit {
  fields: FieldBase<any>[];
  form: FormGroup;
  value: any;
  isDataReady: boolean = false;

  constructor(
    @Inject("optionFieldsService")
    private optionFieldsService: OptionFormFieldsAbstractService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.fields = this.optionFieldsService.getFields();

    if (this.value) {
      this.fields.map((field) => {
        field.value = this.value[field.key];
      });
      this.isDataReady = true;
    }
  }
}
