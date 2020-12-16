import { Type } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ACT_FORM_FIELDS } from "src/app/components/acts/act-form/models/enum/act-form-fields.enum";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";

export abstract class FormComponent {
  value: any;
  label: string;
  key: string;
  form: FormGroup;
  required: boolean;
  editable?: boolean;
  optionFieldsService?: Type<OptionFormFieldsAbstractService>;
  isDepended?: boolean;
  dependedFrom?: { field: ACT_FORM_FIELDS; label: string }[];
}
