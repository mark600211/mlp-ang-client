import { Component } from "@angular/core";

@Component({
  selector: "app-main-component",
  template: `
    <div
      ngClass="groupLinks"
      fxLayout="row"
      fxLayoutAlign="start start"
      fxLayoutGap="10px"
    >
      <mat-card ngClass="linkCard" [routerLink]="['acts']">
        <mat-card-header>
          <mat-card-title> Акты </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Список актов</p>
        </mat-card-content>
      </mat-card>

      <mat-card [routerLink]="['rules']">
        <mat-card-header>
          <mat-card-title> Управление </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Настройка правил</p>
        </mat-card-content>
      </mat-card>
      <div></div>
    </div>
  `,
})
export class MainComponent {}
