import { Component, OnInit, Input, Type } from "@angular/core";
import { FormGroup, FormArray, FormGroupName } from "@angular/forms";
import { OptionsBaseModel } from "src/app/shared/models/interface/options-base.model";
import { ActFormDataService } from "src/app/services/data/act-form-data.service";
import { MatAutocomplete } from "@angular/material/autocomplete";
import { Observable } from "rxjs";
import { startWith, map, filter, take, switchMap } from "rxjs/operators";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";
import { FormControlService } from "../services/form-control.service";
import { ActsFormControlService } from "src/app/services/controls/acts-form-control.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-ff-autocomplete",
  templateUrl: "./ff-autocomplete.component.html",
  styleUrls: ["./ff-autocomplete.component.scss"],
})
export class FfAutocompleteComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() required: boolean;
  @Input() editable: boolean;
  @Input() deletable: boolean;
  @Input() optionFieldsService: Type<OptionFormFieldsAbstractService>;
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

  auto: MatAutocomplete;
  optionsList: string[];
  _openControl: boolean = false;
  filteredOptions: Observable<string[]>;
  placeholder: string;

  private subscriptions$: Subscription = new Subscription();

  constructor(
    private formService: FormControlService,
    private actsFormControlService: ActsFormControlService
  ) {}

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
    this.subscriptions$.add(
      this.actsFormControlService
        .getOptionsForOption(null, this.key)
        .subscribe((items) => {
          this.optionsList = items.map((item) => item.label);
          this.filteredOptions = this.form.controls[this.key].valueChanges.pipe(
            startWith(""),
            map((value) => {
              return this._filter(value);
            })
          );
        })
    );
    this.placeholder = this.touchedAndNotValid
      ? `Поле ${this.label} обязательно к заполнению`
      : this.label;
    // this.form.controls[this.key].valueChanges
    //   .pipe(
    //     debounceTime(3500),
    //     distinctUntilChanged(),
    //     filter((result) => result !== "")
    //   )
    //   .subscribe((result) => {
    //     // this.AFCS.postActItem(this.key, { label: result }).subscribe((item) => {
    //     //   console.log(item);
    //     //   this.optionsList = [...this.optionsList, new OptionsBaseModel(item)];
    //     //   console.log(this.optionsList);
    //     // });
    //   });
  }

  private _filter(value: string): string[] {
    const filteredValue = value.toLowerCase();

    return this.optionsList
      .filter((option) => option !== undefined)
      .filter((option) => option.toLowerCase().includes(filteredValue));
  }

  // _open() {
  //   if (this._openControl) {
  //     this._select.open();
  //   }
  // }
}
