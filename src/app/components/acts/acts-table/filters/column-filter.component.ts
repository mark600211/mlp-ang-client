import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { DataTableService } from "../data-table.service";
import { ColumnModel } from "../models/column.model";

@Component({
  selector: "app-column-filter",
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title> Столбцы </mat-card-title>
        <mat-checkbox
          [checked]="allColumnActive"
          [indeterminate]="someActive()"
          (change)="setAll($event.checked)"
        >
          Все
        </mat-checkbox>
      </mat-card-header>
      <mat-card-content>
        <div cdkDropList (cdkDropListDropped)="drop($event)">
          <div *ngFor="let column of columnsToDisplay" cdkDrag class="drag">
            <mat-chip>
              <mat-checkbox
                class="checkbox"
                [(ngModel)]="column.isActive"
                (ngModelChange)="updateAllComponent()"
              >
              </mat-checkbox>
              <mat-icon>drag_indicator</mat-icon>
              {{ column.label }}
            </mat-chip>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: ["mat-chip { margin-bottom: 5px }"],
})
export class ColumnFileterComponent implements OnInit {
  allColumnActive: boolean = false;
  columnsToDisplay: ColumnModel[];

  constructor(private columnService: DataTableService) {
    this.columnsToDisplay = this.columnService.getColumns();
  }

  ngOnInit() {
    this.columnService.initColumnSource(this.columnsToDisplay);
  }

  someActive(): boolean {
    if (this.columnsToDisplay == null) {
      return false;
    }

    return (
      this.columnsToDisplay.filter((c) => c.isActive).length > 0 &&
      !this.allColumnActive
    );
  }

  setAll(active: boolean): void {
    this.allColumnActive = active;
    if (this.columnsToDisplay == null) {
      return;
    }
    this.columnsToDisplay = [
      ...this.columnsToDisplay.map((c) => {
        c.isActive = active;
        return c;
      }),
    ];
    this.columnService.initColumnSource(this.columnsToDisplay);
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);

    moveItemInArray(
      this.columnsToDisplay,
      event.previousIndex,
      event.currentIndex
    );
    this.columnService.initColumnSource(this.columnsToDisplay);
  }

  updateAllComponent(): void {
    this.columnService.initColumnSource(this.columnsToDisplay);
    this.allColumnActive =
      this.columnsToDisplay != null &&
      this.columnsToDisplay.every((c) => c.isActive);
  }
}
