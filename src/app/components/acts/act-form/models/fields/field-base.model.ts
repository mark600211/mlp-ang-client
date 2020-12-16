import { Type } from "@angular/core";
import * as Apollo from "apollo-angular";
import { FormComponent } from "src/app/elements/forms/models/form.component";
import { OptionFormFieldsAbstractService } from "../../services/option-form-field-abstract.service";
import { ACT_FORM_FIELDS } from "../enum/act-form-fields.enum";

export class FieldBase<T> {
  value: T;
  key: string | ACT_FORM_FIELDS;
  label: string;
  getOptionsService: Type<Apollo.Query>;
  getsType: string;
  getOptionService: Type<Apollo.Query>;
  getType: string;
  postOptionService: Type<Apollo.Mutation>;
  postType: string;
  patchOptionService: Type<Apollo.Mutation>;
  patchType: string;
  fieldType: Type<FormComponent>;
  optionFieldsService: Type<OptionFormFieldsAbstractService>;
  order: number;
  visible: boolean;
  required: boolean;
  editable: boolean;
  deletable: boolean;
  isDepened: boolean;
  dependFrom: { field: ACT_FORM_FIELDS; label: string }[];

  constructor(options: {
    value?: T;
    key?: ACT_FORM_FIELDS | string;
    label?: string;
    getOptionsService?: Type<Apollo.Query>;
    getsType?: string;
    getOptionService?: Type<Apollo.Query>;
    getType?: string;
    postOptionService?: Type<Apollo.Mutation>;
    postType?: string;
    patchOptionService?: Type<Apollo.Mutation>;
    patchType?: string;
    fieldType?: Type<FormComponent>;
    optionFieldsService?: Type<OptionFormFieldsAbstractService>;
    order?: number;
    visible?: boolean;
    required?: boolean;
    editable?: boolean;
    deletable?: boolean;
    isDepened?: boolean;
    dependFrom?: { field: ACT_FORM_FIELDS; label: string }[];
  }) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.getOptionsService = options.getOptionsService;
    this.getsType = options.getsType;
    this.getOptionService = options.getOptionService;
    this.getType = options.getType;
    this.postOptionService = options.postOptionService;
    this.postType = options.postType;
    this.patchOptionService = options.patchOptionService;
    this.patchType = options.patchType;
    this.fieldType = options.fieldType;
    this.optionFieldsService = options.optionFieldsService;
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.visible = !!options.visible;
    this.editable = options.editable || false;
    this.deletable = options.deletable || false;
    this.isDepened = options.isDepened || false;
    this.dependFrom = options.dependFrom || [];
  }
}
