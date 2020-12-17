import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ColumnModel } from "./models/column.model";
import { DataTableService } from "./data-table.service";
import { SelectionModel } from "@angular/cdk/collections";
import { ActControlService } from "src/app/services/controls/acts/act-control.service";
import { DataSourceModel } from "./models/datasource.model";
import { FilterItem } from "./models/fileter.item.modle";
import { FindAllActQuery, Where } from "src/types/acts/generated";
import { map, startWith, switchMap } from "rxjs/operators";
import { merge, Subscription } from "rxjs";
import { Uniqs } from "./models/uniqs.model";
import { DateRange } from "./models/date-range.model";

@Component({
  selector: "app-acts-table",
  templateUrl: "./acts-table.component.html",
  styleUrls: ["./acts-table.component.scss"],
})
export class ActsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[];
  columnsToDisplay: ColumnModel[];

  pagLength: number;
  wheres: Where[];
  dateRange: DateRange;

  dataSource = new MatTableDataSource<DataSourceModel>([]);
  selection = new SelectionModel(true, []);

  data: FindAllActQuery["getTableContent"]["acts"];

  constructor(
    private readonly dataTableService: DataTableService,
    private readonly acs: ActControlService,
    private cdf: ChangeDetectorRef
  ) {}

  private subscription$ = new Subscription();

  ngOnInit(): void {
    this.subscription$.add(
      this.dataTableService.columnSource
        .pipe(map((columns) => columns.filter((colunm) => colunm.isActive)))
        .subscribe((columns) => {
          this.columnsToDisplay = columns;
          this.initDisplayedColumns();
        })
    );
  }

  ngAfterViewInit() {
    this.cdf.detectChanges();

    this.subscription$.add(
      merge(
        this.paginator.page,
        this.sort.sortChange,
        this.dataTableService.wheresSource.pipe(
          map((data) => {
            this.wheres = data;
          })
        ),
        this.dataTableService.dateSource.pipe(
          map((data) => {
            this.dateRange = data;
          })
        )
      )
        .pipe(
          startWith({}),
          switchMap(() => {
            const skip = this.paginator.pageSize * this.paginator.pageIndex;

            return this.acs.getActs(
              skip,
              this.paginator.pageSize,
              this.dateRange?.dateRangeStart,
              this.dateRange?.dateRangeEnd,
              this.sort.active ? `${this.sort.active}.label` : undefined,
              this.sort.direction
                ? (this.sort.direction.toUpperCase() as "ASC" | "DESC")
                : undefined,
              this.wheres
            );
          }),
          map((data) => {
            this.pagLength = data.totalCount;

            const uniqs: Uniqs = {
              uniqCustomers: data.uniqCustomers,
              uniqGeneralCustomers: data.uniqGeneralCustomers,
              uniqLabs: data.uniqLabs,
              uniqTypeOfSamples: data.uniqTypeOfSamples,
            };

            this.dataTableService.initUniqSubject(uniqs);

            return data.acts;
          })
        )
        .subscribe((data) => {
          this.data = data;
          this.initDataSource(this.data);
        })
    );
  }

  initDataSource(data: FindAllActQuery["getTableContent"]["acts"]) {
    this.dataSource = new MatTableDataSource([
      ...data.map((d) => new DataSourceModel(d)),
    ]);
  }

  initDisplayedColumns() {
    this.displayedColumns = [
      "select",
      ...this.columnsToDisplay.map((row) => row.key),
    ];
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(raw?): string {
    if (!raw) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }

    return `${this.selection.isSelected(raw) ? "deselect" : "select"} row ${
      raw.position + 1
    }`;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
