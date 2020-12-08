import { Inject, Injectable, Type } from "@angular/core";
import * as Apollo from "apollo-angular";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ProcessHTTPMsgService } from "../process-httpmsg.service";

@Injectable({
  providedIn: "root",
})
export class ActsFormControlService {
  constructor(
    @Inject("getOptionsForOption") private getOptionsForOptionGQL: Apollo.Query,
    @Inject("getsType") private getsType: string,
    @Inject("getOptionForOption") private getOptionForOptionGQL: Apollo.Query,
    @Inject("getType") private getType: string,
    @Inject("postOption") private postOptionGQL: Apollo.Mutation,
    @Inject("postType") private postType: string,
    @Inject("patchOption") private patchOptionGQL: Apollo.Mutation,
    @Inject("patchType") private patchType: string,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getOptionsForOption<O extends Array<any>>(): Observable<O> {
    return this.getOptionsForOptionGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data[`${this.getsType}`] as O))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getOptionByIdForOption<O>(id: string): Observable<O> {
    return this.getOptionForOptionGQL
      .watch({ data: id })
      .valueChanges.pipe(
        map(({ data }) => {
          return data[`${this.getType}`];
        })
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postOption<O extends { id: string; label: string }, D>(
    data: D
  ): Observable<O> {
    return this.postOptionGQL
      .mutate({ data })
      .pipe(
        map(({ data }) => {
          console.log(data);

          return data[`${this.postType}`] as O;
        })
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  patchOption<O extends { id: string; label: string }, D>(
    data: D,
    id: string
  ): Observable<O> {
    return this.patchOptionGQL
      .mutate({ data: { ...data, id }, id })
      .pipe(map(({ data }) => data[`${this.patchType}`] as O))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
