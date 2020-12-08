import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { ProcessHTTPMsgService } from "../process-httpmsg.service";
import { Observable } from "rxjs";
import {
  CreateRulesLabTosGQL,
  CreateRulesLabTosMutation,
  GetRuleForLabTosGQL,
  GetRuleForLabTosQuery,
  PatchRulesLabTosGQL,
  PatchRulesLabTosMutation,
} from "src/types/rules/generated";

@Injectable({
  providedIn: "root",
})
export class RulesControlService {
  constructor(
    private processHTTPMsgService: ProcessHTTPMsgService,
    private readonly getRuleForLabTosGQL: GetRuleForLabTosGQL,
    private readonly createRulesLabTos: CreateRulesLabTosGQL,
    private readonly patchRulesLabTos: PatchRulesLabTosGQL
  ) {}

  getRuleLabTosTemplate(
    labId: string,
    typeId: string
  ): Observable<
    GetRuleForLabTosQuery["findOneWhereLabTypeOfSampleTemplateModel"]
  > {
    return this.getRuleForLabTosGQL
      .watch({ data: { customerId: labId, generalCustomerId: typeId } })
      .valueChanges.pipe(
        map(({ data }) => data.findOneWhereLabTypeOfSampleTemplateModel)
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postRuleLabTOSTemplate(
    labId: string,
    typeOfSampleId: string,
    path: string
  ): Observable<
    CreateRulesLabTosMutation["createLabTypeOfSampleTemplateModel"]
  > {
    console.log(labId, typeOfSampleId, path);

    return this.createRulesLabTos
      .mutate({ data: { labId, typeOfSampleId, path } })
      .pipe(map(({ data }) => data.createLabTypeOfSampleTemplateModel))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  patchRuleLabTOSTemplate(
    id: string,
    path: string
  ): Observable<
    PatchRulesLabTosMutation["updateLabTypeOfSampleTemplateModel"]
  > {
    return this.patchRulesLabTos
      .mutate({ id, data: path })
      .pipe(map(({ data }) => data.updateLabTypeOfSampleTemplateModel))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
