import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-acts",
  template: ` <mat-toolbar fxLayout="row" fxLayoutGap="10px">
      <h2>Акты</h2>
      <span fxFlex class="flex-spacer"></span>
      <a
        class="background-primary text-floral-white"
        mat-button
        [routerLink]="['./create']"
        >Новый Акт</a
      >
    </mat-toolbar>
    <router-outlet> </router-outlet>`,
})
export class ActsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
