import {
  AfterContentInit,
  Component,
  HostListener,
  OnInit,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { SectionsService } from "./act-header/sections/sections.service";

@Component({
  selector: "app-acts",
  styleUrls: ["acts.component.scss"],
  template: `
    <app-act-header></app-act-header>
    <router-outlet> </router-outlet>
  `,
})
export class ActsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(["acts/table"]);
  }
}
