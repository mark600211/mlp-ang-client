import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Injectable,
  Type,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { OptionFormFieldsAbstractService } from "src/app/components/acts/act-form/services/option-form-field-abstract.service";
import { OptionDialogData } from "../edit-options/model/dialog-data.model";
import { FormOptionDialogComponent } from "../edit-options/options-dialog.component";
import { OptionsBaseModel } from "../models/options-base.model";

@Injectable({
  providedIn: "root",
})
export class FormControlService {
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  createItemsForOption<T extends { id: string; label: string }>(
    items: T[]
  ): OptionsBaseModel[] {
    if (items) {
      return items.map((item) => this.createItemForOption(item));
    } else {
      return [];
    }
  }

  createItemForOption<T extends { id: string; label: string }>(
    item: T
  ): OptionsBaseModel {
    return new OptionsBaseModel(item);
  }

  initControl(value?: string, required?: boolean): AbstractControl {
    return this.fb.control(value ? value : "", {
      validators: required ? Validators.required : [],
    });
  }

  editItemOption(
    key: string,
    label: string,
    optionsFieldService: Type<OptionFormFieldsAbstractService>,
    item?: any
  ): Observable<any> {
    const dialogRef = this.dialog.open(FormOptionDialogComponent, {
      data: new OptionDialogData(label, key, optionsFieldService, item),
    });
    return dialogRef
      .afterClosed()
      .pipe(filter((result) => result != undefined));
  }
}
