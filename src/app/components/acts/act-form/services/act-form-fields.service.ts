import { Injectable } from "@angular/core";
import {
  CreateCustomerGQL,
  GetCustomersForOptionGQL,
  PatchCustomerGQL,
  GetWholeCustomerGQL,
  GetGeneralCustomersForOptionGQL,
  GetWholeGeneralCustomerGQL,
  CreateGeneralCustomerGQL,
  PatchGeneralCustomerGQL,
  GetLabsForOptionGQL,
  GetWholeLabGQL,
  CreateLabGQL,
  PatchLabGQL,
} from "src/types/consumers/generated";
import {
  CreateClimaticEnvironmentalGQL,
  CreateDefinedIndicatorGQL,
  CreateEnvironmentalEngineerGQL,
  CreateGoalGQL,
  CreateMethodGQL,
  CreateNormativeDocumentGQL,
  CreateObjectNameGQL,
  CreatePassedSampleGQL,
  CreatePlaceGQL,
  CreatePlanningGQL,
  CreatePreparationGQL,
  CreateRepresentativeGQL,
  CreateSampleTypeGQL,
  CreateToolTypeGQL,
  CreateTypeOfSampleGQL,
  GetClimaticEnvironmentalGQL,
  GetClimaticEnvironmentalsForOptionGQL,
  GetDefinedIndicatorGQL,
  GetDefinedIndicatorsForOptionGQL,
  GetEnvironmentalEngineerGQL,
  GetEnvironmentalEngineersForOptionGQL,
  GetGoalForOptionGQL,
  GetGoalGQL,
  GetMethodGQL,
  GetMethodsForOptionGQL,
  GetNormativeDocumentGQL,
  GetNormativeDocumentsForOptionGQL,
  GetObjectNameGQL,
  GetObjectNamesForOptionGQL,
  GetPassedSampleGQL,
  GetPassedSamplesForOptionGQL,
  GetPlaceGQL,
  GetPlacesForOptionGQL,
  GetPlanningGQL,
  GetPlanningsForOptionGQL,
  GetPreparationGQL,
  GetPreparationsForOptionGQL,
  GetRepresentativeGQL,
  GetRepresentativesForOptionGQL,
  GetSampleTypeGQL,
  GetSampleTypesForOptionGQL,
  GetToolTypeGQL,
  GetToolTypesForOptionGQL,
  GetTypeOfSampleGQL,
  GetTypeOfSamplesForOptionGQL,
  PatchClimaticEnvironmentalGQL,
  PatchDefinedIndicatorGQL,
  PatchEnvironmentalEngineerGQL,
  PatchGoalGQL,
  PatchMethodGQL,
  PatchNormativeDocumentGQL,
  PatchObjectNameGQL,
  PatchPassedSampleGQL,
  PatchPlaceGQL,
  PatchPlanningGQL,
  PatchPreparationGQL,
  PatchRepresentativeGQL,
  PatchSampleTypeGQL,
  PatchToolTypeGQL,
  PatchTypeOfSampleGQL,
} from "src/types/options/generated";
import { ACT_FORM_FIELDS } from "../models/enum/act-form-fields.enum";
import { FieldBase } from "../models/fields/field-base.model";
import { InputField } from "../models/fields/input-field.model";
import { ManySelectField } from "../models/fields/many-select-filed.model";
import { SelectField } from "../models/fields/select-filed.model";
import { OptionFormFieldsGeneralService } from "./option-form-fields-general.service";

@Injectable({
  providedIn: "root",
})
export class ActFormFieldsService {
  constructor() {}

  getFields(): FieldBase<any>[] {
    let fields = [
      new InputField({
        required: true,
        visible: true,
        key: "name",
        label: "Номер пробы",
      }),
      new SelectField({
        required: true,
        visible: true,
        editable: true,
        key: ACT_FORM_FIELDS.CUSTOMER,
        label: "Заказчик",
        getOptionsService: GetCustomersForOptionGQL,
        getsType: "findAllCustomer",
        getOptionService: GetWholeCustomerGQL,
        getType: "findByIdCustomer",
        postOptionService: CreateCustomerGQL,
        postType: "createCustomer",
        patchOptionService: PatchCustomerGQL,
        patchType: "updateCustomer",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),
      new SelectField({
        required: true,
        visible: true,
        key: ACT_FORM_FIELDS.GENERAL_CUSTOMER,
        label: "Генеральный заказчик",
        editable: true,
        getOptionsService: GetGeneralCustomersForOptionGQL,
        getsType: "findAllGeneralCustomer",
        getOptionService: GetWholeGeneralCustomerGQL,
        getType: "findByIdGeneralCustomer",
        postOptionService: CreateGeneralCustomerGQL,
        postType: "createGeneralCustomer",
        patchOptionService: PatchGeneralCustomerGQL,
        patchType: "updateGeneralCustomer",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        required: true,
        visible: true,
        key: ACT_FORM_FIELDS.LAB,
        label: "Лаборатория",
        editable: true,
        getOptionsService: GetLabsForOptionGQL,
        getsType: "findAllLab",
        getOptionService: GetWholeLabGQL,
        getType: "findByIdLab",
        postOptionService: CreateLabGQL,
        postType: "createLab",
        patchOptionService: PatchLabGQL,
        patchType: "updateLab",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        visible: true,
        required: false,
        key: ACT_FORM_FIELDS.TYPE_OF_SAMPLE,
        label: "Тип отбираемой Среды",
        editable: true,
        getOptionsService: GetTypeOfSamplesForOptionGQL,
        getsType: "findAllTypeOfSample",
        getOptionService: GetTypeOfSampleGQL,
        getType: "findByIdTypeOfSample",
        postOptionService: CreateTypeOfSampleGQL,
        postType: "createTypeOfSample",
        patchOptionService: PatchTypeOfSampleGQL,
        patchType: "updateTypeOfSample",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new InputField({
        visible: true,
        key: ACT_FORM_FIELDS.OBJECT_NAME,
        label: "Наименование объекта",
        getOptionsService: GetObjectNamesForOptionGQL,
        getsType: "findAllObjectName",
        getOptionService: GetObjectNameGQL,
        getType: "findByIdObjectName",
        postOptionService: CreateObjectNameGQL,
        postType: "createObjectName",
        patchOptionService: PatchObjectNameGQL,
        patchType: "updateObjectName",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

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

      //   new NestedAct({
      //     controlType: "datetime",
      //     required: true,
      //     visible: true,
      //     key: "datetime",
      //   }),

      new SelectField({
        visible: true,
        key: ACT_FORM_FIELDS.METHOD,
        label: "Метод отбора проб",
        editable: true,
        getOptionsService: GetMethodsForOptionGQL,
        getsType: "findAllMethod",
        getOptionService: GetMethodGQL,
        getType: "findByIdMethod",
        postOptionService: CreateMethodGQL,
        postType: "createMethod",
        patchOptionService: PatchMethodGQL,
        patchType: "updateMethod",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        visible: true,
        key: ACT_FORM_FIELDS.TOOL_TYPE,
        label: "Tип пробоотборного устройства",
        editable: true,
        getOptionsService: GetToolTypesForOptionGQL,
        getsType: "findAllToolType",
        getOptionService: GetToolTypeGQL,
        getType: "findByIdToolType",
        postOptionService: CreateToolTypeGQL,
        postType: "createToolType",
        patchOptionService: PatchToolTypeGQL,
        patchType: "updateToolType",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new InputField({
        visible: true,
        key: ACT_FORM_FIELDS.CLIMATIC_ENVIRONMENTAL,
        label: "Климатические условия окружающей среды при отборе проб",
        getOptionsService: GetClimaticEnvironmentalsForOptionGQL,
        getsType: "findAllClimaticEnvironmental",
        getOptionService: GetClimaticEnvironmentalGQL,
        getType: "findByIdClimaticEnvironmental",
        postOptionService: CreateClimaticEnvironmentalGQL,
        postType: "createClimaticEnvironmental",
        patchOptionService: PatchClimaticEnvironmentalGQL,
        patchType: "updateClimaticEnvironmental",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new InputField({
        visible: true,
        key: ACT_FORM_FIELDS.PLANNING,
        label: "План (программа) отбора",
        getOptionsService: GetPlanningsForOptionGQL,
        getsType: "findAllPlanning",
        getOptionService: GetPlanningGQL,
        getType: "findByIdPlanning",
        postOptionService: CreatePlanningGQL,
        postType: "createPlanning",
        patchOptionService: PatchPlanningGQL,
        patchType: "updatePlanning",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new ManySelectField({
        visible: true,
        key: ACT_FORM_FIELDS.NORMATIVE_DOCUMENT,
        label: "НД на метод отбора",
        editable: true,
        getOptionsService: GetNormativeDocumentsForOptionGQL,
        getsType: "findAllNormativeDocument",
        getOptionService: GetNormativeDocumentGQL,
        getType: "findByIdNormativeDocument",
        postOptionService: CreateNormativeDocumentGQL,
        postType: "createNormativeDocument",
        patchOptionService: PatchNormativeDocumentGQL,
        patchType: "updateNormativeDocument",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        visible: true,
        key: ACT_FORM_FIELDS.SAMPLE_TYPE,
        label: "Тип пробы",
        editable: true,
        getOptionsService: GetSampleTypesForOptionGQL,
        getsType: "findAllSampleType",
        getOptionService: GetSampleTypeGQL,
        getType: "findByIdSampleType",
        postOptionService: CreateSampleTypeGQL,
        postType: "createSampleType",
        patchOptionService: PatchSampleTypeGQL,
        patchType: "updateSampleType",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      //   new AutocompleteAct({
      //     visible: true,
      //     key: "sample",
      //     label: "Объем отобранной пробы, материал тары",
      //     editable: true,
      //     deletable: true,
      //   }),

      new ManySelectField({
        visible: true,
        key: ACT_FORM_FIELDS.PREPARATIONS,
        label: "Подготовка пробы к хранению",
        editable: true,
        getOptionsService: GetPreparationsForOptionGQL,
        getsType: "findAllPreparation",
        getOptionService: GetPreparationGQL,
        getType: "findByIdPreparation",
        postOptionService: CreatePreparationGQL,
        postType: "createPreparation",
        patchOptionService: PatchPreparationGQL,
        patchType: "updatePreparation",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        visible: true,
        key: ACT_FORM_FIELDS.GOAL,
        label: "Цель исследования воды",
        editable: true,
        getOptionsService: GetGoalForOptionGQL,
        getsType: "findAllGoal",
        getOptionService: GetGoalGQL,
        getType: "findByIdGoal",
        postOptionService: CreateGoalGQL,
        postType: "createGoal",
        patchOptionService: PatchGoalGQL,
        patchType: "updateGoal",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new ManySelectField({
        visible: true,
        key: "definedIndicators",
        label: "Определяемые показатели",
        editable: true,
        getOptionsService: GetDefinedIndicatorsForOptionGQL,
        getsType: "findAllDefinedIndicator",
        getOptionService: GetDefinedIndicatorGQL,
        getType: "findByIdDefinedIndicator",
        postOptionService: CreateDefinedIndicatorGQL,
        postType: "createDefinedIndicator",
        patchOptionService: PatchDefinedIndicatorGQL,
        patchType: "updateDefinedIndicator",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      //   new TextFieldAct({
      //     visible: true,
      //     key: "additions",
      //     label: "Дополнительные сведения",
      //   }),

      //   new TextFieldAct({
      //     visible: true,
      //     key: "informationAboutSelection",
      //     label: "Сведения о проведенных при отборе измерениях",
      //   }),

      new SelectField({
        visible: true,
        key: "environmentalEngineer",
        label: "Должность, Ф.И.О., подпись лица, отбирающего пробу",
        editable: true,
        getOptionsService: GetEnvironmentalEngineersForOptionGQL,
        getsType: "findAllEnvironmentalEngineer",
        getOptionService: GetEnvironmentalEngineerGQL,
        getType: "findByIdEnvironmentalEngineer",
        postOptionService: CreateEnvironmentalEngineerGQL,
        postType: "createEnvironmentalEngineer",
        patchOptionService: PatchEnvironmentalEngineerGQL,
        patchType: "updateEnvironmentalEngineer",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        visible: true,
        key: "representative",
        label: "Должность, Ф.И.О., подпись представителя",
        editable: true,
        getOptionsService: GetRepresentativesForOptionGQL,
        getsType: "findAllRepresentative",
        getOptionService: GetRepresentativeGQL,
        getType: "findByIdRepresentative",
        postOptionService: CreateRepresentativeGQL,
        postType: "createRepresentative",
        patchOptionService: PatchRepresentativeGQL,
        patchType: "updateRepresentative",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),

      new SelectField({
        visible: true,
        key: "passedSample",
        label: "Пробу сдал",
        editable: true,
        getOptionsService: GetPassedSamplesForOptionGQL,
        getsType: "findAllPassedSample",
        getOptionService: GetPassedSampleGQL,
        getType: "findByIdPassedSample",
        postOptionService: CreatePassedSampleGQL,
        postType: "createPassedSample",
        patchOptionService: PatchPassedSampleGQL,
        patchType: "updatePassedSample",
        optionFieldsService: OptionFormFieldsGeneralService,
      }),
    ];
    return fields;
  }
}