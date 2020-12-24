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
  GetAppsByIdsGQL,
  GetAppsByIdsQuery,
} from "src/types/acts/generated";

@Injectable({
  providedIn: "root",
})
export class ApplicationControlService {
  constructor(
    private processHTTPMsgService: ProcessHTTPMsgService,
    private readonly getApp: GetAppByIdGQL,
    private readonly getAppsByIdsGQL: GetAppsByIdsGQL,
    private readonly createApp: CreatAppGQL // private readonly deleteApp: DeleteAppGQL
  ) {}

  getAppliction(
    id: string
  ): Observable<GetAppByIdQuery["findByIdApplicationBase"]> {
    return this.getApp
      .watch({ data: id, relations: ["place"] })
      .valueChanges.pipe(map(({ data }) => data.findByIdApplicationBase))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getApplicationsByIds(
    ids: string[]
  ): Observable<GetAppsByIdsQuery["findManyByIdsApplicationBase"]> {
    return this.getAppsByIdsGQL
      .watch({ ids, relations: ["place"] }, { fetchPolicy: "no-cache" })
      .valueChanges.pipe(
        map(({ data }) => {
          console.log(data);

          return data.findManyByIdsApplicationBase;
        })
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postApplication(
    place?: string,
    datetime?: any
  ): Observable<CreatAppMutation["createApplicationBase"]> {
    return this.createApp
      .mutate({ data: { place, datetime } })
      .pipe(map(({ data }) => data.createApplicationBase))
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
