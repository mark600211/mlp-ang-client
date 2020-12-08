import { FieldBase } from "./field-base.model";
import { FfSelectComponent } from "src/app/elements/forms/ff-select/ff-select.component";

export class SelectField<T> extends FieldBase<T> {
  fieldType = FfSelectComponent;

  constructor(options: Partial<FieldBase<T>>) {
    super(options);
  }
}
