import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  CreateConsumerDto,
  CreateCustomerGQL,
  CreateCustomerMutation,
  GetCustomersForOptionGQL,
  GetCustomersForOptionQuery,
  GetWholeCustomerGQL,
  GetWholeCustomerQuery,
  PatchConsumerDto,
  PatchCustomerGQL,
  PatchCustomerMutation,
} from "src/types/consumers/generated";
import { ProcessHTTPMsgService } from "../../process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class CustomerControlService {
  constructor(
    private readonly getWholeCustomerGQL: GetWholeCustomerGQL,
    private readonly postCustomerGQL: CreateCustomerGQL,
    private readonly patchCustomerGQL: PatchCustomerGQL,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getWholeCustomer(
    id: string
  ): Observable<GetWholeCustomerQuery["findByIdCustomer"]> {
    return this.getWholeCustomerGQL
      .watch({ data: id })
      .valueChanges.pipe(map(({ data }) => data.findByIdCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postCustomer(
    data: CreateConsumerDto
  ): Observable<CreateCustomerMutation["createCustomer"]> {
    return this.postCustomerGQL
      .mutate({ data })
      .pipe(map(({ data }) => data.createCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  patchCustomer(
    data: PatchConsumerDto,
    id: string
  ): Observable<PatchCustomerMutation["updateCustomer"]> {
    return this.patchCustomerGQL
      .mutate({ data, id })
      .pipe(map(({ data }) => data.updateCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
