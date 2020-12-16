import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormControlName,
  FormGroupName,
} from "@angular/forms";
import { DatePipe } from "@angular/common";
import { FormControlService } from "../../services/form-control.service";

@Component({
  selector: "app-ff-date",
  templateUrl: "./ff-date.component.html",
  styleUrls: ["./ff-date.component.scss"],
})
export class FfDateComponent implements OnInit {
  @Input() label: string;
  @Input() key: string;
  @Input() formGroup: FormGroup;
  @Input() form: FormGroup;
  @Input() value: any;
  @Input() requiered: boolean;

  get isValid() {
    return this.formGroup.controls[this.key].valid;
  }

  constructor(
    // private datePipe: DatePipe,
    private formService: FormControlService
  ) {}

  ngOnInit() {
    const control = this.formService.initControl(this.value, this.requiered);
    this.formGroup.addControl(this.key, control);
  }
}
