import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormComponent } from "../models/form.component";
import { FormControlService } from "../services/form-control.service";

@Component({
  selector: "app-ff-input",
  template: ` <div class="notDisplay"></div> `,
  styles: [".notDisplay { display: none; }"],
})
export class FfIdComponent
  extends FormComponent
  implements OnInit, AfterViewInit {
  @Input() value: any;
  @Input() key: string;
  @Input() form: FormGroup;
  @Input() required: boolean;

  constructor(private formService: FormControlService) {
    super();
  }

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.required);
    this.form.addControl(this.key, control);
  }

  ngAfterViewInit() {}
}
