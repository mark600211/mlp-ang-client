import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FilterItem } from "../../models/fileter.item.modle";
import { CheapsetService } from "./cheapset.service";

@Component({
  selector: "app-filter-cheapset",
  templateUrl: "./filter-cheapset.component.html",
})
export class FilterCheapsetComponent implements OnInit {
  filterOptions: FilterItem[];

  constructor(private cheapsetServcie: CheapsetService) {}

  ngOnInit() {
    this.cheapsetServcie.cheapSource
      .pipe(
        map((val) => {
          return val;
        })
      )
      .subscribe((val) => (this.filterOptions = val));
  }

  removeFilter(option: FilterItem) {
    option.items.forEach((item) => (item.isChecked = false));
    this.cheapsetServcie.removeFilter(option);
  }
}
