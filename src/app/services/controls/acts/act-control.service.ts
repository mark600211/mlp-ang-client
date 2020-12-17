import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ProcessHTTPMsgService } from "../../process-httpmsg.service";
import {
  FindAllActGQL,
  FindAllActQuery,
  GetWholeActWithIdsGQL,
  GetWholeActWithIdsQuery,
  NewActDto,
  PatchActDto,
  PatchActGQL,
  PatchActMutation,
  PostActGQL,
  PostActMutation,
} from "src/types/acts/generated";
import { ACT_FORM_FIELDS } from "src/app/components/acts/act-form/models/enum/act-form-fields.enum";

@Injectable({
  providedIn: "root",
})
export class ActControlService {
  constructor(
    private readonly processHTTPMsgService: ProcessHTTPMsgService,
    private readonly getAllActs: FindAllActGQL,
    private readonly getWholeActWithIds: GetWholeActWithIdsGQL,
    private readonly createAct: PostActGQL,
    private readonly updateAct: PatchActGQL
  ) {}

  getActs(
    skip = 0,
    take = 50,
    dateRangeStart: Date,
    dateRangeEnd: Date,
    sort?: string,
    sortDirection: "ASC" | "DESC" = "DESC",
    wheres?: {
      relation: string;
      ids: string[];
    }[]
  ): Observable<FindAllActQuery["getTableContent"]> {
    console.log(sort);

    console.log(sortDirection);

    return this.getAllActs
      .watch(
        {
          conditions: {
            skip,
            take,
            sort,
            sortDirection,
            wheres,
            dateRangeStart,
            dateRangeEnd,
          },
        },
        { fetchPolicy: "no-cache" }
      )
      .valueChanges.pipe(
        map(({ data }) => {
          return data.getTableContent;
        })
      )
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getActForResolver(
    id: string
  ): Observable<GetWholeActWithIdsQuery["findByIdAct"]> {
    return this.getWholeActWithIds
      .watch({ data: id })
      .valueChanges.pipe(map(({ data }) => data.findByIdAct))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  postAct(body: NewActDto): Observable<PostActMutation> {
    console.log(body);
    return this.createAct
      .mutate({ data: body })
      .pipe(map(({ data }) => data))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  patchAct(
    body: PatchActDto,
    id: string
  ): Observable<PatchActMutation["updateAct"]> {
    return this.updateAct
      .mutate({ data: body, id })
      .pipe(map(({ data }) => data.updateAct))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

//   uploadFile(url: string, file: File): Observable<ActModel> {
//     let formData = new FormData();
//     formData.append("upload", file);

//     let params = new HttpParams();
//     let headers = new HttpHeaders();

//     headers.append("Content-Type", "multipart/form-data");
//     headers.append("Accept", "application/json");

//     const options = {
//       params: params,
//       reportProgress: true,
//       header: headers,
//     };

//     return this.http
//       .post<ActModel>(url, formData, options)
//       .pipe(catchError(this.processHTTPMsgService.handleError));
//   }

//   getActIds(): Observable<string[] | any> {
//     return this.getActIdsQuery
//       .watch()
//       .valueChanges.pipe(map(({ data }) => data.getActs.map((act) => act.id)))
//       .pipe(catchError(this.processHTTPMsgService.handleError));
//   }
//   newuploadFile(
//     file: File,
//     id: string,
//     type: string,
//     status: string
//   ): Observable<ActModel> {
//     let formData = new FormData();
//     formData.append("file", file);

//     let params = new HttpParams();
//     let headers = new HttpHeaders();

//     headers.append("Content-Type", "multipart/form-data");
//     headers.append("Accept", "application/json");

//     const options = {
//       params: params,
//       reportProgress: true,
//       header: headers,
//     };

//     return this.http
//       .post<ActModel>(
//         environment.API_URI + "docs/create/" + id + "/" + type + "/" + status,
//         formData,
//         options
//       )
//       .pipe(catchError(this.processHTTPMsgService.handleError));
//   }
