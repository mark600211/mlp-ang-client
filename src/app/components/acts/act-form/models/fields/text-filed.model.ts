import { FieldBase } from "./field-base.model";
import { FfTextareaComponent } from 'src/app/elements/forms/ff-textarea/ff-textarea.component';

export class TextField<T> extends FieldBase<T> {
  fieldType = FfTextareaComponent;

  constructor(options: Partial<FieldBase<T>>) {
    super(options);
  }
}
