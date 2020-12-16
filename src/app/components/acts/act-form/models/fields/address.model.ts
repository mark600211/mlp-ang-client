import { FieldBase } from "./field-base.model";
import { AddressComponent } from "src/app/elements/forms/address/address.component";

export class AddressField<T> extends FieldBase<T> {
  fieldType = AddressComponent;

  constructor(options: Partial<FieldBase<T>>) {
    super(options);
  }
}
