import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-acts",
  styleUrls: ["acts.component.scss"],
  template: `
    <mat-toolbar
      fxLayout="row"
      fxLayoutGap="10px"
      [ngClass]="{ 'sticky-toolbar': true, sticky: isSticky }"
    >
      <h2>Акты</h2>
      <span fxFlex class="flex-spacer"></span>
      <a
        class="background-primary text-floral-white"
        mat-button
        [routerLink]="['./create']"
        >Новый Акт</a
      >
    </mat-toolbar>
    <div [ngClass]="{ outlet: true, sticky: isSticky }">
      <router-outlet> </router-outlet>
    </div>
  `,
})
export class ActsComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 65;
  }

  constructor() {}

  ngOnInit() {}
}
