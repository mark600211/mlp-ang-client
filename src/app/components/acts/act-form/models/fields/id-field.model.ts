import { FfIdComponent } from "src/app/elements/forms/ff-id/ff-id.component";
import { FieldBase } from "./field-base.model";

export class IdField<T> extends FieldBase<T> {
  fieldType = FfIdComponent;
  visible = true;

  constructor(options: Partial<FieldBase<any>>) {
    super(options);
  }
}
