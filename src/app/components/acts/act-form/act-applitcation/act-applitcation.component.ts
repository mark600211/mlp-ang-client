import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  HostListener,
} from "@angular/core";
import {
  FormArray,
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ActFormService } from "src/app/services/forms/act-form.service";
import { from, Subscription } from "rxjs";
import { ApplicationControlService } from "src/app/services/controls/acts/application-constrol.service";
import {
  GetAppsByIdsQuery,
  GetWholeActWithIdsQuery,
} from "src/types/acts/generated";
import { ApplicationFieldsService } from "../services/application-fields.service";
import { group } from "console";
import { map, mergeAll, switchMap } from "rxjs/operators";

@Component({
  selector: "app-act-applitcation",
  templateUrl: "./act-applitcation.component.html",
  styleUrls: ["./act-applitcation.component.scss"],
})
export class ActApplitcationComponent implements OnInit, OnDestroy {
  private subscriptions$: Subscription = new Subscription();

  @Input() form: FormGroup;
  @Input() items: GetWholeActWithIdsQuery["findByIdAct"]["applications"];
  @Input() statusControl: boolean;
  @Input() copyControl: boolean;

  fields: any[];
  controls: AbstractControl[];
  apps: GetAppsByIdsQuery["findManyByIdsApplicationBase"];

  constructor(
    private AFS: ActFormService,
    private AFFS: ApplicationFieldsService,
    private cdr: ChangeDetectorRef,
    private appControlService: ApplicationControlService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.fields = this.AFFS.getFields();
    console.log(this.copyControl);

    if (this.copyControl) {
      console.log();

      this.form.setControl("applications", this.fb.array([]));
      this.controls = (<FormArray>this.form.controls["applications"]).controls;
      this.subscriptions$.add(
        this.appControlService
          .getApplicationsByIds(this.items.map((val) => val.id))
          .pipe(
            mergeAll(),
            switchMap((val) => {
              console.log(val.id);

              return this.appControlService.postApplication(val.place.id, {
                time: val.datetime.time,
                date: val.datetime.date,
              });
            })
          )
          .subscribe((item) => {
            console.log(item.id);

            (<FormArray>this.form.controls["applications"]).push(
              this.fb.group({
                id: item.id,
                place: item.place.id,
                datetime: this.fb.group({
                  date: this.fb.control(item.datetime.date, [
                    Validators.required,
                  ]),
                  time: this.fb.control(item.datetime.time, [
                    Validators.required,
                  ]),
                }),
              })
            );
          })
      );
    } else {
      this.initControl();
    }
  }

  initControl() {
    if (this.items && this.items.length >= 1) {
      this.subscriptions$.add(
        this.appControlService
          .getApplicationsByIds(this.items.map((val) => val.id))
          .subscribe((data) => {
            this.apps = data;
            const groups: FormGroup[] = data.map((val) => {
              return this.fb.group({
                id: val.id,
                place: val.place.id,
                datetime: this.fb.group(
                  {
                    date: this.fb.control(val.datetime.date, [
                      Validators.required,
                    ]),
                    time: this.fb.control(val.datetime.time, [
                      Validators.required,
                    ]),
                  },
                  [Validators.required]
                ),
              });
            });
            const control = this.fb.array(groups);
            this.form.setControl("applications", control);
            this.controls = (<FormArray>(
              this.form.controls["applications"]
            )).controls;
          })
      );
    } else {
      this.form.setControl("applications", this.fb.array([]));
      this.controls = (<FormArray>this.form.controls["applications"]).controls;
    }
  }

  addField(): void {
    this.subscriptions$.add(
      this.appControlService.postApplication().subscribe((app) => {
        console.log(app);

        (<FormArray>this.form.controls["applications"]).push(
          this.fb.group({ id: "" })
        );
        (<FormGroup>this.controls[this.controls.length - 1])
          .get("id")
          .patchValue(app.id);
        this.cdr.detectChanges();
      })
    );
  }

  copyField(body?: GetWholeActWithIdsQuery["findByIdAct"]): void {
    if (body) {
      body.applications.forEach((app) => {
        this.subscriptions$.add(
          this.appControlService.getAppliction(app.id).subscribe((data) => {
            (<FormArray>this.form.controls["applications"]).push(
              this.AFS.initForm("application", "act", data)
            );
          })
        );
      });
    }
  }

  deleteField(index: number) {
    (<FormArray>this.form.controls["applications"]).removeAt(index);
  }

  deleteAllFields(): void {
    while (this.controls.length !== 0) {
      this.deleteField(0);
    }
  }

  ngOnDestroy() {
    if (this.copyControl) {
      this.deleteAllFields();
    }

    this.subscriptions$.unsubscribe();
  }
  @HostListener("window:beforeunload") deleteAllFiles() {
    if (!this.statusControl && !this.copyControl) {
      this.deleteAllFields();
    }
  }
}
