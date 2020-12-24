import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuItem } from "../../models/menu-item.interface";

@Component({
  selector: "app-act-header-breadcrumb",
  styleUrls: ["./breadcrumb-sector.component.scss"],
  template: `
    <div class="breadcrumb-raw" *ngFor="let menu of menuItems; let i = index">
      <div class="breadcrumb-items">
        <button
          mat-button
          (click)="rediredTo(menu.url)"
          class="breadcrumb-item"
        >
          {{ menu.label }}
        </button>
        <mat-icon *ngIf="menuItems[i + 1]" class="breadcrumb-item"
          >chevron_right</mat-icon
        >
      </div>
    </div>
  `,
})
export class ActHeaderBreadcrumbComponent implements OnInit {
  @Input() menuItems: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  rediredTo(url: string) {
    if (url) {
      this.router.navigate([`${url}`]);
    }
  }
}
