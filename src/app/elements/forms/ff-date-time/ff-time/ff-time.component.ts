import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControlService } from "../../services/form-control.service";

@Component({
  selector: "app-ff-time",
  templateUrl: "./ff-time.component.html",
  styleUrls: ["./ff-time.component.scss"],
})
export class FfTimeComponent implements OnInit {
  @Input() label: string;
  @Input() key: string;
  @Input() formGroup: FormGroup;
  @Input() form: FormGroup;
  @Input() value: any;
  @Input() requiered: boolean;

  get isValid() {
    return this.formGroup.controls[this.key].valid;
  }

  constructor(private formService: FormControlService) {}

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.requiered);
    this.formGroup.addControl(this.key, control);
  }
}
