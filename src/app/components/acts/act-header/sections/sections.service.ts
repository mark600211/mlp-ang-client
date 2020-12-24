import { Injectable, Type } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { FilterCheapsetComponent } from "../../acts-table/filters/filter-cheapset/filter-cheapset.component";

@Injectable({
  providedIn: "root",
})
export class SectionsService {
  private createCentralSub = new BehaviorSubject<Type<any>>(
    FilterCheapsetComponent
  );
  createCentralSource = this.createCentralSub.asObservable();

  private destroyCentralSub = new Subject();
  destroyCentralSource = this.destroyCentralSub.asObservable();

  creteCentralSection(component: Type<any>) {
    this.createCentralSub.next(component);
  }

  destroyCentralSection() {
    this.destroyCentralSub.next();
  }

  private createRightSub = new BehaviorSubject<Type<any>>(
    FilterCheapsetComponent
  );
  createRightSource = this.createRightSub.asObservable();

  private destroyRightSub = new Subject();
  destroyRightSource = this.destroyRightSub.asObservable();

  creteRightSection(component: Type<any>) {
    console.log("createSections");

    this.createRightSub.next(component);
  }

  destroyRightSection() {
    this.destroyRightSub.next();
  }
}
