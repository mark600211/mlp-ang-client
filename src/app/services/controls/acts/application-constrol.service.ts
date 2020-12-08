import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { ProcessHTTPMsgService } from "../../process-httpmsg.service";
import { Observable } from "rxjs";
import {
  CreatAppGQL,
  CreatAppMutation,
  //   DeleteAppGQL,
  //   DeleteAppMutation,
  GetAppByIdGQL,
  GetAppByIdQuery,
} from "src/types/acts/generated";

@Injectable({
  providedIn: "root",
})
export class ApplicationControlService {
  constructor(
    private processHTTPMsgService: ProcessHTTPMsgService,
    private readonly getApp: GetAppByIdGQL,
    private readonly createApp: CreatAppGQL
  ) // private readonly deleteApp: DeleteAppGQL
  {}

  getAppliction(
    id: string
  ): Observable<GetAppByIdQuery["findByIdApplication"]> {
    return this.getApp
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findByIdApplication))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postApplication(): Observable<CreatAppMutation["createApplication"]> {
    return this.createApp
      .mutate()
      .pipe(map(({ data }) => data.createApplication))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  //   deleteApplication(
  //     id: string
  //   ): Observable<DeleteAppMutation["deleteByIdApplication"]> {
  //     return this.deleteApp
  //       .mutate({ data: id })
  //       .pipe(map(({ data }) => data.deleteByIdApplication))
  //       .pipe(catchError(this.processHTTPMsgService.handleError));
  //   }
}
