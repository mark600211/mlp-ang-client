import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  GetCustomersForOptionGQL,
  GetCustomersForOptionQuery,
  GetGeneralCustomersForOptionGQL,
  GetGeneralCustomersForOptionQuery,
  GetLabsForOptionGQL,
  GetLabsForOptionQuery,
} from "src/types/consumers/generated";
import { ProcessHTTPMsgService } from "../../process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class ConsumersControlService {
  constructor(
    private readonly getCustomersForOptionGQL: GetCustomersForOptionGQL,
    private readonly getGeneralCustomersForOptionGQL: GetGeneralCustomersForOptionGQL,
    private readonly getLabForOptionGQL: GetLabsForOptionGQL,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getCustomersForOption(): Observable<
    GetCustomersForOptionQuery["findAllCustomer"]
  > {
    return this.getCustomersForOptionGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findAllCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getGeneralCustomersForOption(): Observable<
    GetGeneralCustomersForOptionQuery["findAllGeneralCustomer"]
  > {
    return this.getGeneralCustomersForOptionGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findAllGeneralCustomer))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLabsForOption(): Observable<GetLabsForOptionQuery["findAllLab"]> {
    return this.getLabForOptionGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findAllLab))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
