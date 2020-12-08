import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  CreateConsumerDto,
  CreateLabGQL,
  CreateLabMutation,
  GetLabsForOptionGQL,
  GetLabsForOptionQuery,
  GetWholeLabGQL,
  GetWholeLabQuery,
  PatchConsumerDto,
  PatchLabGQL,
  PatchLabMutation,
} from "src/types/consumers/generated";
import { ProcessHTTPMsgService } from "../../process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class LabControlService {
  constructor(
    private readonly getLabForOptionGQL: GetLabsForOptionGQL,
    private readonly getWholeLabGQL: GetWholeLabGQL,
    private readonly postLabGQL: CreateLabGQL,
    private readonly patchLabGQL: PatchLabGQL,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getLabsForOption(): Observable<GetLabsForOptionQuery["findAllLab"]> {
    return this.getLabForOptionGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findAllLab))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getWholeLab(id: string): Observable<GetWholeLabQuery["findByIdLab"]> {
    return this.getWholeLabGQL
      .watch({ data: id })
      .valueChanges.pipe(map(({ data }) => data.findByIdLab))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postLab(data: CreateConsumerDto): Observable<CreateLabMutation["createLab"]> {
    return this.postLabGQL
      .mutate({ data })
      .pipe(map(({ data }) => data.createLab))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  pathLab(
    data: PatchConsumerDto,
    id: string
  ): Observable<PatchLabMutation["updateLab"]> {
    return this.patchLabGQL
      .mutate({ data, id })
      .pipe(map(({ data }) => data.updateLab))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
