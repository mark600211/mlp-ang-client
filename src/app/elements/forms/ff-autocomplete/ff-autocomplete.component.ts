import { Component, OnInit, Input, Type } from "@angular/core";
import { FormGroup, FormArray, FormGroupName } from "@angular/forms";
import { OptionsBaseModel } from "src/app/shared/models/interface/options-base.model";
import { ActFormDataService } from "src/app/services/data/act-form-data.service";
import { MatAutocomplete } from "@angular/material/autocomplete";
import { Observable } from "rxjs";
import {
  startWith,
  map,
  debounceTime,
  distinctUntilChanged,
  tap,
  filter,
} from "rxjs/operators";
import { ActFormControlService } from "src/app/components/acts/act-form/act-form-control.service";
import { OptionFormFieldsAbstractService } from 'src/app/components/acts/act-form/services/option-form-field-abstract.service';
import { FormControlService } from '../services/form-control.service';
import { ActsFormControlService } from 'src/app/services/controls/acts-form-control.service';
import { Subscription } from "rxjs";


@Component({
  selector: "app-ff-autocomplete",
  templateUrl: "./ff-autocomplete.component.html",
  styleUrls: ["./ff-autocomplete.component.scss"],
})
export class FfAutocompleteComponent implements OnInit {
  @Input() value: string
  @Input() label: string;
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() required: boolean
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
  optionsList: OptionsBaseModel[];
  _openControl: boolean = false;
  filteredOptions: Observable<OptionsBaseModel[]>;
  placeholder: string

  private subscriptions$: Subscription = new Subscription()

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
    this.filteredOptions = this.form.controls[this.key].valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
    this.placeholder = this.touchedAndNotValid ? `Поле ${this.label} обязательно к заполнению` : this.label
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

  addItem(): void {
    this.subscriptions$.add(this.formService
      .editItemOption(this.key, this.label, this.optionFieldsService)
      .subscribe((value) => {
        if (value) {
          this.actsFormControlService.postOption(value).subscribe((item) => {
            const option = this.formService.createItemForOption(item);
            this.optionsList = [...this.optionsList, option];
          });
        }
      }));
  }

  editOpen(item: any): void {
    this._openControl = true;
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

  deleteItem(id: string): void {
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

  private _filter(value: string): OptionsBaseModel[] {
    const filteredValue = value.toLowerCase();

    return this.optionsList
      .filter((option) => option.value !== undefined)
      .filter((option) => option.value.toLowerCase().includes(filteredValue));
  }

  // _open() {
  //   if (this._openControl) {
  //     this._select.open();
  //   }
  // }
}
