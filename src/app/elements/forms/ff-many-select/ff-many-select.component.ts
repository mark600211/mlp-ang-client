import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Type,
  AfterViewInit,
} from "@angular/core";
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
import { ACT_FORM_FIELDS } from "src/app/components/acts/act-form/models/enum/act-form-fields.enum";
import { ActFormFieldsService } from "src/app/components/acts/act-form/services/act-form-fields.service";

@Component({
  selector: "app-ff-many-select",
  templateUrl: "./ff-many-select.component.html",
  styleUrls: ["./ff-many-select.component.scss"],
})
export class FfManySelectComponent
  implements FormComponent, OnInit, AfterViewInit {
  @Input() value: string;
  @Input() label: string;
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() required: boolean;
  @Input() editable: boolean;
  @Input() deletable: boolean;
  @Input() optionFieldsService: Type<OptionFormFieldsAbstractService>;
  @Input() isDepended: boolean;
  @Input() dependedFrom: Array<{ field: ACT_FORM_FIELDS; label: string }>;
  get touchedAndNotValid() {
    if (
      !this.form.controls[this.key].valid &&
      this.form.controls[this.key].touched
    ) {
      return true;
    } else {
      false;
    }
  }

  disabledLabel: string;
  optionsList: OptionsBaseModel[] = [];
  _openControl: boolean = false;

  private subscriptions$: Subscription = new Subscription();

  constructor(
    private formService: FormControlService,
    private actsFormControlService: ActsFormControlService // private actFieldsService: ActFormFieldsService
  ) {}

  ngOnInit() {
    console.log(this.value);
    console.log(this.key);

    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
    this.initDisabledLabel();
    if (this.isDepended) {
      this.form.controls[this.key].disable();
      this.dependedFrom.forEach(({ field }) => {
        this.subscriptions$.add(
          this.form.controls[field].valueChanges.subscribe((val) => {
            this.chekingDependency();
          })
        );
      });
    } else this.initOptionList();
  }

  ngAfterViewInit() {
    this.chekingDependency();
  }

  initDisabledLabel() {
    this.disabledLabel = `Введите значение для полей: ${this.dependedFrom
      .map(({ label }) => label)
      .join(", ")}`;
  }

  isDisbaled(): boolean {
    return this.form.controls[this.key].disabled;
  }

  initWhere(): { [K in string]: string } {
    let where = {};
    this.dependedFrom.forEach(({ field }) => {
      where[field] = this.form.controls[field].value;
    });
    return where;
  }

  chekingDependency() {
    if (
      this.dependedFrom
        .map(({ field }) => {
          return this.form.controls[field].valid;
        })
        .every((val) => val)
    ) {
      this.form.controls[this.key].enable();
      this.initOptionList(this.initWhere());
    } else {
      this.form.controls[this.key].disable();
    }
  }

  initOptionList(where?: { [K in string]: string }): void {
    this.subscriptions$.add(
      this.actsFormControlService
        .getOptionsForOption(where)
        .subscribe((items) => {
          this.optionsList = this.formService.createItemsForOption(items);
        })
    );
  }

  addItem(): void {
    this.formService
      .editItemOption(this.key, this.label, this.optionFieldsService)
      .subscribe((value) => {
        if (value) {
          let populateValue: any = {};

          if (this.isDepended) {
            this.dependedFrom.forEach(({ field }) => {
              populateValue[`${field}`] = this.form.controls[field].value;
            });
            populateValue["label"] = value.label;
          } else {
            populateValue = value;
          }

          this.actsFormControlService
            .postOption(populateValue)
            .subscribe((item) => {
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
