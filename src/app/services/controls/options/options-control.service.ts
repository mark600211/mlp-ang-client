import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  GetTypeOfSamplesForOptionGQL,
  GetTypeOfSamplesForOptionQuery,
} from "src/types/options/generated";

@Injectable({
  providedIn: "root",
})
export class OptionsControlService {
  constructor(private getTypeOfSamplesGQL: GetTypeOfSamplesForOptionGQL) {}

  getTypeOfSamples(): Observable<
    GetTypeOfSamplesForOptionQuery["findAllTypeOfSample"]
  > {
    return this.getTypeOfSamplesGQL
      .watch()
      .valueChanges.pipe(map(({ data }) => data.findAllTypeOfSample));
  }
}
