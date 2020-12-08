import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  HostListener,
} from "@angular/core";
import { FormArray, FormGroup, AbstractControl } from "@angular/forms";
import { ActFormService } from "src/app/services/forms/act-form.service";
import { ActFormFieldsService } from "src/app/services/forms/act-form-fields.service";
import { Subscription } from "rxjs";
import { ApplicationControlService } from "src/app/services/controls/acts/application-constrol.service";
import { GetWholeActWithIdsQuery } from "src/types/acts/generated";

@Component({
  selector: "app-act-applitcation",
  templateUrl: "./act-applitcation.component.html",
  styleUrls: ["./act-applitcation.component.scss"],
})
export class ActApplitcationComponent implements OnInit, OnDestroy {
  private subscriptions$: Subscription = new Subscription();

  @Input() form: FormGroup;
  @Input() item: GetWholeActWithIdsQuery["findByIdAct"];
  @Input() statusControl: boolean;
  @Input() copyControl: boolean;

  fa: FormArray;
  fields: any[];
  _control: FormArray;
  controls: AbstractControl[];

  constructor(
    private AFS: ActFormService,
    private AFFS: ActFormFieldsService,
    private cdr: ChangeDetectorRef,
    private appControlService: ApplicationControlService
  ) {}

  ngOnInit() {
    this.fields = this.AFFS.getFields("applications", "act").filter(
      (field) => field.visible
    );
    if (this.copyControl) {
      this.form.setControl("applications", this.AFS.initArray("applications"));
      this.copyField(this.item);
    } else {
      this.form.setControl(
        "applications",
        this.AFS.initArray(
          "applications",
          this.item ? this.item.applications : null
        )
      );
    }
    this.controls = (<FormArray>this.form.controls["applications"]).controls;
  }

  addField(): void {
    this.subscriptions$.add(
      this.appControlService.postApplication().subscribe((app) => {
        (<FormArray>this.form.controls["applications"]).push(
          this.AFS.initForm("applications", "act")
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
    // this.subscriptions$.add(
    //   this.appControlService
    //     .deleteApplication(this.controls[index].get("id").value)
    //     .subscribe(() =>
    //       (<FormArray>this.form.controls["applications"]).removeAt(index)
    //     )
    // );
  }

  deleteAllFields(): void {
    for (let i = 0; i < this.controls.length; i++) {
      this.deleteField(i);
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
