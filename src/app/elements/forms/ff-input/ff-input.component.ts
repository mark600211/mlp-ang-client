import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormComponent } from "../models/form.component";
import { FormControlService } from "../services/form-control.service";

@Component({
  selector: "app-ff-input",
  templateUrl: "./ff-input.component.html",
  styleUrls: ["./ff-input.component.scss"],
})
export class FfInputComponent
  extends FormComponent
  implements OnInit, AfterViewInit {
  @Input() value: any;
  @Input() label: string;
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() required: boolean;
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

  constructor(private formService: FormControlService) {
    super();
  }

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
    this.placeholder = this.touchedAndNotValid ? `Поле ${this.label} обязательно к заполнению` : this.label
  }

  ngAfterViewInit() {}
}
