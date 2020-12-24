import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { merge } from "rxjs";
import { filter, startWith, take } from "rxjs/operators";
import { MenuItem } from "./models/menu-item.interface";

@Component({
  selector: "app-act-header",
  template: `
    <mat-toolbar
      fxLayout="row"
      fxLayoutGap="10px"
      [ngClass]="{ 'sticky-toolbar': true, sticky: isSticky }"
    >
      <app-act-header-breadcrumb
        class="header-breadcrumb"
        [menuItems]="menuItems"
      ></app-act-header-breadcrumb>
      <span fxFlex class="flex-space"></span>
      <app-act-header-central></app-act-header-central>
      <span fxFlex class="flex-spacer"></span>
      <app-act-header-right class="header-right"></app-act-header-right>
    </mat-toolbar>
  `,
  styleUrls: ["act-header.component.scss"],
})
export class ActHeaderComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCUMB = "breadcrumb";
  static readonly ROUTE_DATA_URL = "url";
  isSticky: boolean = false;

  menuItems: MenuItem[];

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 65;
  }
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    merge(
      this.router.events.pipe(
        filter((event) => event && event instanceof NavigationEnd)
      )
    )
      .pipe(startWith({}))
      .subscribe(() => {
        this.menuItems = this.createBreadcrumb(this.activatedRouter.root);
      });
  }

  private createBreadcrumb(
    route: ActivatedRoute,
    breadcrumbs: MenuItem[] = []
  ) {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const url = child.snapshot.data[ActHeaderComponent.ROUTE_DATA_URL];

      const label =
        child.snapshot.data[ActHeaderComponent.ROUTE_DATA_BREADCUMB];

      if (label) {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumb(child, breadcrumbs);
    }
  }
}
