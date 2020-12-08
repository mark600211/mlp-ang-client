import { FieldBase } from "./field-base.model";
import { FfSelectComponent } from "src/app/elements/forms/ff-select/ff-select.component";
import { FfAutocompleteComponent } from 'src/app/elements/forms/ff-autocomplete/ff-autocomplete.component';

export class AutocompleteField<T> extends FieldBase<T> {
  fieldType = FfAutocompleteComponent;

  constructor(options: Partial<FieldBase<T>>) {
    super(options);
  }
}
