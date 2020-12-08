import { Injectable } from "@angular/core";
import { FieldBase } from "../models/fields/field-base.model";

@Injectable({
  providedIn: "root",
})
export abstract class OptionFormFieldsAbstractService {
  abstract getFields(): FieldBase<any>[];
}
