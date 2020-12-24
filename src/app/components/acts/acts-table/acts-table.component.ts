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
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { ColumnModel } from "./models/column.model";
import { DataTableService } from "./data-table.service";
import { SelectionModel } from "@angular/cdk/collections";
import { ActControlService } from "src/app/services/controls/acts/act-control.service";
import { DataSourceModel } from "./models/datasource.model";
import { FilterItem } from "./models/fileter.item.modle";
import { FindAllActQuery, Where } from "src/types/acts/generated";
import {
  delay,
  filter,
  map,
  startWith,
  switchMap,
  take,
  timeout,
} from "rxjs/operators";
import { merge, Subscription } from "rxjs";
import { Uniqs } from "./models/uniqs.model";
import { DateRange } from "./models/date-range.model";
import { SectionsService } from "../act-header/sections/sections.service";
import { ButtonsSectionComponent } from "./button-section/buttons-section.component";
import { ButtonsSectionsService } from "./button-section/buttons-section.service";

@Component({
  selector: "app-acts-table",
  templateUrl: "./acts-table.component.html",
  styleUrls: ["./acts-table.component.scss"],
})
export class ActsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;

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
    private readonly sectionsService: SectionsService,
    private readonly buttonService: ButtonsSectionsService,
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

    this.sectionsService.creteRightSection(ButtonsSectionComponent);

    this.subscription$.add(
      merge(
        this.paginator.page.pipe(
          map((val) => {
            this.selection.clear();
            this.buttonService.sentItems(
              this.selection.selected.map((val) => val.id)
            );
            return val;
          })
        ),
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
        ),
        this.buttonService.copySource.pipe(
          filter((val) => val === true),
          map(() => {
            this.selection.clear();
            this.buttonService.sentItems(
              this.selection.selected.map((val) => val.id)
            );
          }),
          delay(1000)
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
          console.log(data.length);

          this.data = data;
          this.initDataSource(this.data);
        })
    );
  }

  initDataSource(data: FindAllActQuery["getTableContent"]["acts"]) {
    this.dataSource = new MatTableDataSource([
      ...data.map((d) => new DataSourceModel(d)),
    ]);
    this.table.renderRows();
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
    this.buttonService.sentItems(this.selection.selected.map((val) => val.id));
  }

  checkboxLabel(raw?): string {
    if (!raw) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }

    return `${this.selection.isSelected(raw) ? "deselect" : "select"} row ${
      raw.position + 1
    }`;
  }

  toggleOne(raw) {
    this.selection.toggle(raw);

    this.buttonService.sentItems(this.selection.selected.map((val) => val.id));
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.sectionsService.destroyRightSection();
  }
}

@Component({
  template: `
    <a
      class="background-primary text-floral-white"
      mat-button
      [routerLink]="['./create']"
      >Новый Акт</a
    >
  `,
})
export class NewAct {}
