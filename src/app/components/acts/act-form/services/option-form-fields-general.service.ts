import { Injectable } from "@angular/core";
import { FieldBase } from "../models/fields/field-base.model";
import { InputField } from "../models/fields/input-field.model";
import { OptionFormFieldsAbstractService } from "./option-form-field-abstract.service";

@Injectable({
  providedIn: "root",
})
export class OptionFormFieldsGeneralService
  implements OptionFormFieldsAbstractService {
  getFields(): FieldBase<any>[] {
    let fields = [
      new InputField({
        required: true,
        visible: true,
        key: "label",
        label: "Название",
      }),
    ];
    return fields;
  }
}
