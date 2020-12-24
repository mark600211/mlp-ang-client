import {
  Component,
  OnInit,
  AfterContentInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Data, Router } from "@angular/router";

import * as _moment from "moment";
import { default as _rollupMoment } from "moment";
import { GetWholeActWithIdsQuery } from "src/types/acts/generated";
import { Subscription } from "rxjs";
import { UpdateActDto } from "src/app/shared/models/dto/update-act.dto";
import { ActControlService } from "src/app/services/controls/acts/act-control.service";
import { FieldBase } from "./models/fields/field-base.model";
import { ActFormFieldsService } from "./services/act-form-fields.service";
import { PatchActModel } from "./models/patch-act.model";

const moment = _moment || _rollupMoment;

@Component({
  selector: "app-act-form",
  templateUrl: "./act-form.component.html",
  styleUrls: ["./act-form.component.scss"],
})
export class ActFormComponent implements OnInit, AfterContentInit, OnDestroy {
  private subscriptions$: Subscription = new Subscription();
  act: GetWholeActWithIdsQuery["findByIdAct"];
  statusControl: boolean;
  formAct: FormGroup;
  copyControl: boolean = false;
  fields: FieldBase<any>[];

  constructor(
    private acs: ActControlService,
    private activatedroute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private fieldsService: ActFormFieldsService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.subscriptions$.add(
      this.activatedroute.data.subscribe((data: Data) => {
        if (data.update === true) {
          this.act = data["act"];
          this.statusControl = true;
        } else {
          this.act = data["act"];
          this.statusControl = false;
        }

        if (data.copy) {
          this.copyControl = true;
        }
      })
    );
  }

  ngOnInit() {
    this.formAct = this.fb.group({});
    this.fields = this.fieldsService.getFields();
    if (this.act) {
      this.addValue();
    }
  }

  ngAfterContentInit() {
    // this.formAct.get("place").valueChanges.forEach((value) => {
    //   if (
    //     value === "Приложение" ||
    //     value === "см. Приложение" ||
    //     value === "см.Приложение"
    //   ) {
    //     this.formAct.get("datetime").disable();
    //   } else {
    //     this.formAct.get("datetime").enable();
    //   }
    // });
    this.cdr.detectChanges();
  }

  onSubmit() {
    if (this.statusControl) {
      this.subscriptions$.add;
      this.acs
        .patchAct(
          new UpdateActDto({ ...this.formAct.value, id: this.act.id }),
          this.act.id
        )
        .subscribe((act) => {
          this.router.navigate(["acts/table"], {});
          this._snackBar.open(`Акт ${act.name}`, "Обновлён Успешно", {
            duration: 2000,
          });
        });
    } else {
      this.subscriptions$.add(
        this.acs
          .postAct(new PatchActModel(this.formAct.value))
          .subscribe((act) => {
            this.router.navigate(["acts/table"]);
            this._snackBar.open(`Акт ${act.createAct.name}`, "Создан", {
              duration: 2000,
            });
          })
      );
    }
  }

  addValue() {
    this.fields.map((field) => {
      const val = this.act[`${field.key}`];
      if (val?.id) {
        field.value = val.id;
      } else if (val?.date) {
        field.value = {};
        field.value["date"] = val.date;
        field.value["time"] = val.time;
      } else if (Array.isArray(val)) {
        console.log(val);

        (<Array<any>>val).map((value) => value.id);

        field.value = (<Array<any>>val).map((value) => value.id);
      } else {
        field.value = val;
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
