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
  get isValid() {
    return this.form.controls[this.key].valid;
  }

  constructor(private formService: FormControlService) {
    super();
  }

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
  }

  ngAfterViewInit() {}
}
