import { Component, OnInit, Input, ViewChild, Type } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { OptionsBaseModel } from "src/app/shared/models/interface/options-base.model";
import { MatSelect } from "@angular/material/select";
import { FormComponent } from "../models/form.component";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";
import { FormControlService } from "../services/form-control.service";
import { ActsFormControlService } from "src/app/services/controls/acts-form-control.service";
import { Subscription } from "rxjs";
import { filter, switchMap, take } from "rxjs/operators";
import { OptionFormFieldsGeneralService } from "src/app/components/acts/act-form/services/option-form-fields-general.service";

@Component({
  selector: "app-ff-many-select",
  templateUrl: "./ff-many-select.component.html",
  styleUrls: ["./ff-many-select.component.scss"],
})
export class FfManySelectComponent implements FormComponent, OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() required: boolean;
  @Input() editable: boolean;
  @Input() deletable: boolean;
  @Input() optionFieldsService: Type<OptionFormFieldsAbstractService>;
  @ViewChild("select") _select: MatSelect;
  get touchedActNotValid() {
    if (
      !this.form.controls[this.key].valid &&
      this.form.controls[this.key].touched
    ) {
      return true;
    } else {
      false;
    }
  }

  optionsList: OptionsBaseModel[] = [];
  _openControl: boolean = false;

  private subscriptions$: Subscription = new Subscription();

  constructor(
    private formService: FormControlService,
    private actsFormControlService: ActsFormControlService
  ) {}

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
    this.subscriptions$.add(
      this.actsFormControlService.getOptionsForOption().subscribe((items) => {
        this.optionsList = this.formService.createItemsForOption(items);
      })
    );
  }

  addItem(): void {
    this.formService
      .editItemOption(this.key, this.label, this.optionFieldsService)
      .subscribe((value) => {
        if (value) {
          this.actsFormControlService.postOption(value).subscribe((item) => {
            console.log(item);

            const option = this.formService.createItemForOption(item);
            this.optionsList = [...this.optionsList, option];
          });
        }
      });
  }

  editOpen(item: any) {
    this.editingWithUploadOpen(item);
  }

  editingWithUploadOpen(item: any): void {
    this.subscriptions$.add(
      this.actsFormControlService
        .getOptionByIdForOption(item.key)
        .pipe(
          take(1),
          switchMap((val) =>
            this.formService
              .editItemOption(
                this.key,
                this.label,
                this.optionFieldsService,
                val
              )
              .pipe(
                filter((value) => value !== undefined),
                switchMap((value) =>
                  this.actsFormControlService.patchOption(value, item.key)
                )
              )
          )
        )
        .subscribe((item) => {
          this.optionsList = [
            ...this.optionsList.map((option) => {
              if (option.key === item.id) {
                option = this.formService.createItemForOption(item);
              }
              return option;
            }),
          ];
        })
    );
  }

  editingWithoutLoad(item: any) {
    this.subscriptions$.add(
      this.formService
        .editItemOption(this.key, this.label, this.optionFieldsService, item)
        .pipe(
          filter((value) => value !== undefined),
          switchMap((value) =>
            this.actsFormControlService.patchOption(value, item.id)
          )
        )
        .subscribe(() => {})
    );
  }

  deleteOpen(id: string): void {
    // this._openControl = false;
    // // this.AFDs.deleteItemOptions(this.key, id);
    // this.optionsList = [
    //   ...this.optionsList.filter((option) => option.key !== id),
    // ];
  }

  buttonCondition(condition: boolean, opt: OptionsBaseModel): void {
    this.optionsList.find((option) => {
      if (option.key === opt.key) return option;
    }).buttonController = condition;
  }

  _diselect() {
    if (this._openControl) {
      this._openControl = false;
      let v: Array<any> = this.form.controls[this.key].value;
      this.form.controls[this.key].patchValue(v.slice(0, -2));
    }
  }
}
