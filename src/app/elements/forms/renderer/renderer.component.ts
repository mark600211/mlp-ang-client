import { FormGroup } from "@angular/forms";
import { FieldBase } from "../../../components/acts/act-form/models/fields/field-base.model";
import { SelectField } from "../../../components/acts/act-form/models/fields/select-filed.model";

export interface RendererComponent {
  field: SelectField<any>;
  form: FormGroup;
}
