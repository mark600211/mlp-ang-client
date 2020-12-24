import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";
import { ActFormFieldsService } from "./act-form-fields.service";

@Injectable({
  providedIn: "root",
})
export class ActFormService {
  static getTypeOfSampleOptions() {
    throw new Error("Method not implemented.");
  }
  form: FormGroup;
  constructor(private AFFS: ActFormFieldsService, private fb: FormBuilder) {}

  initForm(key: string, fieldsControl: string, item?: {}): FormGroup {
    let group = {};
    let fields = this.AFFS.getFields(key, fieldsControl);
    fields.forEach((field) => {
      if (item) {
        field.value = item[field.key].id ? item[field.key].id : item[field.key];
      }
      group[field.key] = field.required
        ? [field.value || "", Validators.required]
        : [field.value || ""];
    });
    return this.fb.group(group);
  }
}
