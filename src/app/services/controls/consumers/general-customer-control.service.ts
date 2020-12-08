import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  CreateConsumerDto,
  CreateGeneralCustomerGQL,
  CreateGeneralCustomerMutation,
  GetGeneralCustomersForOptionGQL,
  GetGeneralCustomersForOptionQuery,
  GetWholeGeneralCustomerGQL,
  GetWholeGeneralCustomerQuery,
  PatchConsumerDto,
  PatchGeneralCustomerGQL,
  PatchGeneralCustomerMutation,
} from "src/types/consumers/generated";
import { ProcessHTTPMsgService } from "../../process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class GeneralCustomerControlService {
  constructor(
    private readonly getGeneralCustomersForOptionGQL: GetGeneralCustomersForOptionGQL,
    private readonly getWholeGeneralCustomerGQL: GetWholeGeneralCustomerGQL,
    private readonly postGeneralCustomerGQL: CreateGeneralCustomerGQL,
    private readonly patchGeneralCustomerGQL: PatchGeneralCustomerGQL,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getGeneralCustomersForOption(): Observable<
    GetGeneralCustomersForOptionQuery["findAllGeneralCustomer"]
  > {
    return this.getGeneralCustomersForOptionGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findAllGeneralCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getWholeCustomer(
    id: string
  ): Observable<GetWholeGeneralCustomerQuery["findByIdGeneralCustomer"]> {
    return this.getWholeGeneralCustomerGQL
      .watch({ data: id })
      .valueChanges.pipe(map(({ data }) => data.findByIdGeneralCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postCustomer(
    data: CreateConsumerDto
  ): Observable<CreateGeneralCustomerMutation["createGeneralCustomer"]> {
    return this.postGeneralCustomerGQL
      .mutate({ data })
      .pipe(map(({ data }) => data.createGeneralCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  pathCustomer(
    data: PatchConsumerDto,
    id: string
  ): Observable<PatchGeneralCustomerMutation["updateGeneralCustomer"]> {
    return this.patchGeneralCustomerGQL
      .mutate({ data, id })
      .pipe(map(({ data }) => data.updateGeneralCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
