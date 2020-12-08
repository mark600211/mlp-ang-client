import { FfManySelectComponent } from "src/app/elements/forms/ff-many-select/ff-many-select.component";
import { FieldBase } from "./field-base.model";

export class ManySelectField<T> extends FieldBase<T> {
  fieldType = FfManySelectComponent;

  constructor(options: Partial<FieldBase<T>>) {
    super(options);
  }
}
