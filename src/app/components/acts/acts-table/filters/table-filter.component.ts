import { Component, HostListener, Injector, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Moment } from "moment";
import { DataTableService } from "../data-table.service";
import { DateRange } from "../models/date-range.model";
import { FilterItem } from "../models/fileter.item.modle";
import { Where } from "../models/where.model";

@Component({
  selector: "app-table-filter",
  templateUrl: "./table-filter.component.html",
})
export class TableFilterComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 65;
  }

  filterOptions: FilterItem[];

  rangeFilter: FormGroup = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private tableService: DataTableService) {}

  ngOnInit() {
    this.tableService.getFileters().subscribe((data) => {
      console.log(data);

      this.filterOptions = data;

      console.log(this.filterOptions);
    });
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
    });
    this.rangeFilter.valueChanges.subscribe(() => this.filteringDate());
  }

  updateFilter(event: boolean, option: FilterItem) {
    option.isActive = event;

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
}
