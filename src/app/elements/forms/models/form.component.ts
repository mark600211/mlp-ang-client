import { Type } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";

export abstract class FormComponent {
  value: any;
  label: string;
  key: string;
  form: FormGroup;
  required: boolean;
  editable: boolean;
  optionFieldsService?: Type<OptionFormFieldsAbstractService>;
}
