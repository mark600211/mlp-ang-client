import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProcessHTTPMsgService } from "../process-httpmsg.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TemplatePreviewControlService {
  //   private client: TemplatePreviewClient;
  //   constructor(
  //     private http: HttpClient,
  //     private processHTTPMsgService: ProcessHTTPMsgService
  //   ) {
  //     this.client = new TemplatePreviewClient(environment.ENVOI);
  //   }
  //   async getAllTemplates(): Promise<TemplateList.AsObject> {
  //     return new Promise((resolve, reject) => {
  //       const req = new Null();
  //       this.client.getAllFiles(req, (err, responce: TemplateList) => {
  //         if (err) {
  //           reject(new Error(err.message));
  //         } else {
  //           console.log(responce);
  //           resolve(responce.toObject());
  //         }
  //       });
  //     });
}

// getAllFiles() {
//   return this.http
//     .get(
//       environment.URI + "/template-preview/all-files", {
//         responseType: 'blob'
//       }
//     )
//     .pipe(catchError(this.processHTTPMsgService.handleError));
// }
// }
