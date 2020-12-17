import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
} from "@angular/core";
import { Subject } from "rxjs";
import { FilterItem } from "../../models/fileter.item.modle";

@Injectable({
  providedIn: "root",
})
export class CheapsetService {
  private cheap = new Subject<FilterItem[]>();
  cheapSource = this.cheap.asObservable();

  private removeSub = new Subject<FilterItem>();
  removeFilterSource = this.removeSub.asObservable();

  constructor() {}

  sendCheap(filter: FilterItem[]) {
    this.cheap.next(filter);
  }

  removeFilter(filter: FilterItem) {
    this.removeSub.next(filter);
  }
}
