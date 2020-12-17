import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-acts",
  styleUrls: ["acts.component.scss"],
  template: `
    <app-act-header></app-act-header>
    <router-outlet> </router-outlet>
  `,
})
export class ActsComponent {}
