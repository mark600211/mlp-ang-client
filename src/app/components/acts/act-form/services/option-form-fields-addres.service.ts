import { Injectable } from "@angular/core";
import { AddressField } from "../models/fields/address.model";
import { FieldBase } from "../models/fields/field-base.model";
import { InputField } from "../models/fields/input-field.model";
import { OptionFormFieldsAbstractService } from "./option-form-field-abstract.service";

@Injectable({
  providedIn: "root",
})
export class OptionFormFieldsAddressService
  implements OptionFormFieldsAbstractService {
  getFields(): FieldBase<any>[] {
    let fields = [
      new InputField({
        required: true,
        visible: true,
        key: "fullname",
        label: "Название",
      }),
      new InputField({
        required: true,
        visible: true,
        key: "label",
        label: "Сокращённое название",
      }),
      new AddressField({
        visible: true,
        key: "address",
        label: "Адрес",
      }),
      new InputField({
        visible: true,
        key: "tel",
        label: "Телефон",
      }),
      new InputField({
        visible: true,
        key: "email",
        label: "E-mail",
      }),
    ];
    return fields;
  }
}
