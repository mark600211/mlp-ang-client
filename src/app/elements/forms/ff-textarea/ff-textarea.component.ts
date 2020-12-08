import { Component, OnInit, Input, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OptionFormFieldsAbstractService } from 'src/app/components/acts/act-form/services/option-form-field-abstract.service';
import { ActsFormControlService } from 'src/app/services/controls/acts-form-control.service';
import { FormControlService } from '../services/form-control.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-ff-textarea',
  templateUrl: './ff-textarea.component.html',
  styleUrls: ['./ff-textarea.component.scss']
})
export class FfTextareaComponent implements OnInit {
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

  placeholder: string
  private subscriptions$: Subscription = new Subscription()

  constructor(
    private formService: FormControlService,
    private actsFormControlService: ActsFormControlService
  ) { }

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
    this.subscriptions$.add(
      this.actsFormControlService.getOptionsForOption().subscribe((items) => {
        this.optionsList = this.formService.createItemsForOption(items);
      })
    );
    this.placeholder = this.touchedAndNotValid ? `Поле ${this.label} обязательно к заполнению` : this.label
  }

}
