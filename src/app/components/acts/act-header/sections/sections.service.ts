import { Injectable, Type } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { FilterCheapsetComponent } from "../../acts-table/filters/filter-cheapset/filter-cheapset.component";

@Injectable({
  providedIn: "root",
})
export class SectionsService {
  private createSub = new BehaviorSubject<Type<any>>(FilterCheapsetComponent);
  createSource = this.createSub.asObservable();

  private destroySub = new Subject();
  destroySource = this.destroySub.asObservable();

  creteCentralSection(component: Type<any>) {
    console.log(component);

    this.createSub.next(component);
  }

  destroyCentralSection() {
    this.destroySub.next();
  }
}
