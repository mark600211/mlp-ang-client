import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  forwardRef,
  Host,
  HostListener,
  Injector,
  OnDestroy,
  OnInit,
  Optional,
  Self,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Moment } from "moment";
import { Subscription } from "rxjs";
import { FitlterHostDirective } from "src/app/directives/filter-host.directive";
import { SectionsService } from "../../act-header/sections/sections.service";
import { DataTableService } from "../data-table.service";
import { DateRange } from "../models/date-range.model";
import { FilterItem } from "../models/fileter.item.modle";
import { Where } from "../models/where.model";
import { CheapsetService } from "./filter-cheapset/cheapset.service";
import { FilterCheapsetComponent } from "./filter-cheapset/filter-cheapset.component";

@Component({
  selector: "app-table-filter",
  templateUrl: "./table-filter.component.html",
})
export class TableFilterComponent implements OnInit, OnDestroy {
  isSticky: boolean = false;

  cheapsetComponentRef: ComponentRef<FilterCheapsetComponent>;

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 65;
  }

  filterOptions: FilterItem[];

  rangeFilter: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(
    private tableService: DataTableService,
    private cheapsetService: CheapsetService,
    private sectionsService: SectionsService
  ) {}

  private subscription$: Subscription = new Subscription();

  ngOnInit() {
    this.sectionsService.creteCentralSection(FilterCheapsetComponent);
    this.subscription$.add(
      this.cheapsetService.removeFilterSource.subscribe((filter) => {
        console.log(filter);

        this.updateFilter(false, filter);
      })
    );
    this.subscription$.add(
      this.tableService.getFileters().subscribe((data) => {
        this.filterOptions = data;
      })
    );
    this.subscription$.add(
      this.tableService.uniqsSource.subscribe((uniqs) => {
        const keys = Object.keys(uniqs);
        this.filterOptions
          .filter((filter) => filter.uniqControlType)
          .map((filter) => {
            const key = keys.find((key) => key === filter.uniqControlType);
            filter.items.map((item) => {
              if (!(uniqs[`${key}`] as Array<string>).includes(item.id)) {
                item.disabled = true;
              } else {
                item.disabled = false;
              }
            });
            return filter;
          });
      })
    );
    this.subscription$.add(
      this.rangeFilter.valueChanges.subscribe(() => this.filteringDate())
    );
  }

  updateFilter(event: boolean, option: FilterItem) {
    option.isActive = event;
    this.sendFiltersToCheapset();

    const where: Where[] = [
      ...this.filterOptions.map((filter) => {
        const ids = [
          ...filter.items
            .filter((item) => item.isChecked)
            .map((item) => item.id),
        ];
        const relation = filter.key;
        return { relation, ids };
      }),
    ];

    this.tableService.initWhereSource(where);
  }

  filteringDate() {
    let startValue: Moment = this.rangeFilter.controls["start"].value;
    let endValue: Moment = this.rangeFilter.controls["end"].value;

    if (!startValue && !endValue) {
      this.tableService.initDateSource({
        dateRangeStart: null,
        dateRangeEnd: null,
      });
    }

    if (startValue && endValue) {
      this.filterOptions.find(
        (filter) => filter.key === "date"
      ).isActive = true;
      const dataRange: DateRange = {
        dateRangeStart: startValue.toDate(),
        dateRangeEnd: endValue.toDate(),
      };
      this.tableService.initDateSource(dataRange);
    }
  }

  sendFiltersToCheapset() {
    const cheaps = this.filterOptions.filter((filter) => filter.isActive);
    console.log(cheaps);

    this.cheapsetService.sendCheap(cheaps);
  }

  createComponent() {}

  removeFilter(option: FilterItem) {
    switch (option.controlType) {
      case "Date":
        this.rangeFilter.reset();
        option.isActive = false;
        break;
      default:
        option.items.forEach((item) => {
          item.isChecked = false;
        });
        this.updateFilter(false, option);
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.sectionsService.destroyCentralSection();
  }
}
