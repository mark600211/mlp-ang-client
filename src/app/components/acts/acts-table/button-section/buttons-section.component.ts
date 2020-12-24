import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ActControlService } from "src/app/services/controls/acts/act-control.service";
import { ButtonsSectionsService } from "./buttons-section.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-table-buttons-section",
  styleUrls: ["./buttons-section.component.scss"],
  template: `
    <div class="blocks-container">
      <div *ngIf="selectedItems.length >= 1">
        <label>Кол-во копий</label>
        <input type="number" [formControl]="copyFormControl" />
        <mat-error *ngIf="copyFormControl.hasError('pattern')"
          >Можно ввести только положительное число</mat-error
        >
      </div>

      <div class="buttons-container">
        <button
          class="headerButton"
          mat-button
          class="background-primary text-floral-white"
          *ngIf="selectedItems.length == 1"
          (click)="fastCopy()"
          [disabled]="!copyFormControl.valid"
        >
          Скопировать Без Изменений
        </button>
        <button
          class="headerButton"
          mat-button
          class="background-primary text-floral-white"
          *ngIf="selectedItems.length == 1"
          (click)="copyAct()"
        >
          Скопировать С Изменениями
        </button>
        <button
          class="headerButton"
          mat-button
          class="background-primary text-floral-white"
          *ngIf="selectedItems.length > 1"
          (click)="fastCopy()"
          [disabled]="!copyFormControl.valid"
        >
          Скопировать Все Акты
        </button>
        <button
          class="headerButton"
          mat-button
          class="background-primary text-floral-white"
          *ngIf="selectedItems.length == 1"
          (click)="changeAct()"
        >
          Изменить Акт
        </button>
        <button
          class="headerButton"
          mat-button
          class="background-primary text-floral-white"
          (click)="newAct()"
        >
          Новый Акт
        </button>
      </div>
    </div>
  `,
})
export class ButtonsSectionComponent implements OnInit {
  selectedItems: string[] = [];

  copyFormControl = new FormControl("", [Validators.pattern("^[0-9]*$")]);
  copyMathcher = new MyErrorStateMatcher();

  constructor(
    private service: ButtonsSectionsService,
    private router: Router,
    private actsControlService: ActControlService,
    private _snackBar: MatSnackBar
  ) {}

  private subscription$ = new Subscription();

  ngOnInit(): void {
    this.subscription$.add(
      this.service.itemsSource.subscribe(
        (items) => (this.selectedItems = items)
      )
    );
  }

  newAct() {
    this.router.navigate(["acts/create"]);
  }

  changeAct() {
    const id = this.selectedItems[0];
    this.router.navigate(["acts/update", `${id}`]);
  }

  copyAct() {
    const id = this.selectedItems[0];
    this.router.navigate(["acts/copy", `${id}`]);
  }

  fastCopy() {
    const num = this.copyFormControl.value ? this.copyFormControl.value : 1;

    this.actsControlService
      .copyManyActsByIds(this.selectedItems, num)
      .subscribe((data) => {
        this.copyFormControl.reset();
        this.service.sentCopy(data);
      });
    this._snackBar.open(`Копии акта(актов) созданы (${num})`, null, {
      duration: 2000,
    });
    this._snackBar;
  }
}
