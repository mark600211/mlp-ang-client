import { Injectable } from "@angular/core";
import {
  CreatePlaceGQL,
  GetPlaceGQL,
  GetPlacesForOptionGQL,
  PatchPlaceGQL,
} from "src/types/options/generated";
import { ACT_FORM_FIELDS } from "../models/enum/act-form-fields.enum";
import { DateTimeField } from "../models/fields/date-time.model";
import { FieldBase } from "../models/fields/field-base.model";
import { IdField } from "../models/fields/id-field.model";
import { SelectField } from "../models/fields/select-filed.model";
import { OptionFormFieldsGeneralService } from "./option-form-fields-general.service";

@Injectable({
  providedIn: "root",
})
export class ApplicationFieldsService {
  getFields(): FieldBase<any>[] {
    let fields = [
      new SelectField({
        visible: true,
        key: ACT_FORM_FIELDS.PLACE,
        label: "Место отбора пробы",
        editable: true,
        getOptionsService: GetPlacesForOptionGQL,
        getsType: "findAllPlace",
        getOptionService: GetPlaceGQL,
        getType: "findByIdPlace",
        postOptionService: CreatePlaceGQL,
        postType: "createPlace",
        patchOptionService: PatchPlaceGQL,
        patchType: "updatePlace",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new DateTimeField({
        required: true,
        visible: true,
        key: "datetime",
      }),
    ];
    return fields;
  }
}
