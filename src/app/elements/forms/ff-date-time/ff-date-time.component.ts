import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
} from "@angular/core";
import { FormGroup, FormGroupName, FormBuilder } from "@angular/forms";
import { FormComponent } from "../models/form.component";
import { FormControlService } from "../services/form-control.service";
import { DateTimeFields } from "./datetime-fields.service";

@Component({
  selector: "app-ff-date-time",
  templateUrl: "./ff-date-time.component.html",
  styleUrls: ["./ff-date-time.component.scss"],
})
export class FfDateTimeComponent
  implements OnInit, AfterViewInit, FormComponent {
  @Input() value: any;
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() key: string;
  @Input() required: boolean;

  group: FormGroup;
  fields: {
    value?: any;
    controlType: string;
    required: boolean;
    key: string;
    label: string;
    visible: boolean;
  }[];

  formGroup: FormGroup;

  constructor(
    private fieldsService: DateTimeFields,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private formService: FormControlService
  ) {}

  ngOnInit(): void {
    this.group = this.fb.group({});
    this.form.addControl(this.key, this.group);
    console.log(this.form);

    this.fields = this.fieldsService.getFields();
    if (this.value) {
      this.addValue();
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  addValue() {
    this.fields.map((field) => {
      field.value = this.value[`${field.key}`];
    });
  }
}
