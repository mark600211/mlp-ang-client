import { FieldBase } from "./field-base.model";
import { FfDateTimeComponent } from "src/app/elements/forms/ff-date-time/ff-date-time.component";

export class DateTimeField<T> extends FieldBase<T> {
  fieldType = FfDateTimeComponent;

  constructor(options: Partial<FieldBase<T>>) {
    super(options);
  }
}
