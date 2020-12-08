import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormGroupName, FormBuilder } from "@angular/forms";
import { ActFormService } from "src/app/services/forms/act-form.service";
import { ActFormFieldsService } from "src/app/services/forms/act-form-fields.service";
import { DateTimeFields } from './datetime-fields.service';
import { FormControlService } from '../services/form-control.service';

@Component({
  selector: "app-ff-date-time",
  templateUrl: "./ff-date-time.component.html",
  styleUrls: ["./ff-date-time.component.scss"]
})
export class FfDateTimeComponent implements OnInit {
  @Input() controll: string;
  @Input() form: FormGroup;
  @Input() key: string;
  @Input() item: any;

  fields: any[];

  formGroup: FormGroup;

  constructor(
    private fieldsService: DateTimeFields,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fields = this.fieldsService.getFields()
    const control = this.fb.grou
    this.form.setControl(this.key, this.newControl);
  }
}
