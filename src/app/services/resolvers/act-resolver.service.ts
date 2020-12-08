import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ActControlService } from "../controls/acts/act-control.service";
import { Injectable } from "@angular/core";
import { ActModel } from "../../shared/models/act.model";
import { take } from "rxjs/operators";
import { GetWholeActWithIdsQuery } from "src/types/acts/generated";

@Injectable({ providedIn: "root" })
export class ActResolver
  implements Resolve<GetWholeActWithIdsQuery["findByIdAct"]> {
  constructor(private acs: ActControlService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | GetWholeActWithIdsQuery["findByIdAct"]
    | Promise<GetWholeActWithIdsQuery["findByIdAct"]>
    | Observable<GetWholeActWithIdsQuery["findByIdAct"]> {
    console.log("resolver");

    return this.acs.getActForResolver(route.params["id"]).pipe(take(1));
  }
}
