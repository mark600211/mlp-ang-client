import { FfInputComponent } from "src/app/elements/forms/ff-input/ff-input.component";
import { FieldBase } from "./field-base.model";

export class InputField<T> extends FieldBase<T> {
  fieldType = FfInputComponent;

  constructor(options: Partial<FieldBase<any>>) {
    super(options);
  }
}
