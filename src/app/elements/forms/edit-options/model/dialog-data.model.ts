import { Type } from "@angular/core";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";

export class OptionDialogData {
  constructor(
    public label: string,
    public key: string,
    public optionsFieldService: Type<OptionFormFieldsAbstractService>,
    public item: any
  ) {}
}
