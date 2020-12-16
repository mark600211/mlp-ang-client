import { Injectable } from "@angular/core";
import { FieldBase } from "src/app/components/acts/act-form/models/fields/field-base.model";
import { InputField } from "src/app/components/acts/act-form/models/fields/input-field.model";

@Injectable({
  providedIn: "root",
})
export class AddressFieldsService {
  constructor() {}

  getFields(): FieldBase<any>[] {
    let fields = [
      new InputField({
        visible: true,
        key: "country",
        label: "Страна",
      }),
      new InputField({
        visible: true,
        key: "region",
        label: "Область",
      }),
      new InputField({
        visible: true,
        key: "city",
        label: "Город",
      }),
      new InputField({
        visible: true,
        key: "street",
        label: "Улица",
      }),
      new InputField({
        visible: true,
        key: "building",
        label: "Строение",
      }),
      new InputField({
        visible: true,
        key: "room",
        label: "Офис/Квартира",
      }),
      new InputField({
        visible: true,
        key: "zip",
        label: "Индекс",
      }),
    ];
    return fields;
  }
}
