import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { filter, switchMap, map } from "rxjs/operators";
// import { TemplatesComponent } from "src/app/elements/dialogs/templates/templates.component";
import { RulesControlService } from "../controls/rules-control.service";

@Injectable({
  providedIn: "root",
})
export class RulesService {
  constructor(
    private dialog: MatDialog,
    private readonly rulesControlService: RulesControlService
  ) {}

  //   choiseTemplate(
  //     update: boolean,
  //     labId?: string,
  //     typeId?: string,
  //     labTypeControle?: boolean
  //   ): Observable<string> {
  //     const choiseTemplateDialogRef = this.dialog.open(TemplatesComponent, {
  //       data: { labId, typeId, update },
  //     });

  //     return choiseTemplateDialogRef.afterClosed().pipe(
  //       filter((result) => result !== undefined),
  //       switchMap((result) => {
  //         if (!update) {
  //           return this.rulesControlService
  //             .postRuleLabTOSTemplate(
  //               labTypeControle ? labId : result.lab,
  //               labTypeControle ? typeId : result.typeOfSample,
  //               result.path
  //             )
  //             .pipe(map((result) => result.path));
  //         } else {
  //           console.log(JSON.stringify(result, null, 2));

  //           return this.rulesControlService
  //             .patchRuleLabTOSTemplate(typeId, result.path)
  //             .pipe(map((data) => data.path));
  //         }
  //       })
  //     );
  //   }
}
