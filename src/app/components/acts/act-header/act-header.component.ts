import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-act-header",
  template: `
    <mat-toolbar
      fxLayout="row"
      fxLayoutGap="10px"
      [ngClass]="{ 'sticky-toolbar': true, sticky: isSticky }"
    >
      <h2>Акты</h2>
      <span fxFlex class="flex-space"></span>
      <app-act-header-central></app-act-header-central>
      <span fxFlex class="flex-spacer"></span>
      <a
        class="background-primary text-floral-white"
        mat-button
        [routerLink]="['./create']"
        >Новый Акт</a
      >
    </mat-toolbar>
  `,
  styleUrls: ["act-header.component.scss"],
})
export class ActHeaderComponent {
  isSticky: boolean = false;

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 65;
  }
  constructor() {}
}
