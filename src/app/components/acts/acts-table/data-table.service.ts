import { Injectable } from "@angular/core";
import { concat, forkJoin, merge, Observable, of, Subject } from "rxjs";
import { map, startWith, switchMap, take } from "rxjs/operators";
import { ConsumersControlService } from "src/app/services/controls/consumers/consumers-control.service";
import { OptionsControlService } from "src/app/services/controls/options/options-control.service";
import { Where } from "src/types/acts/generated";
import { ColumnModel } from "./models/column.model";
import { DateRange } from "./models/date-range.model";
import { FilterItem, Item } from "./models/fileter.item.modle";
import { Uniqs } from "./models/uniqs.model";

@Injectable({
  providedIn: "root",
})
export class DataTableService {
  private subject = new Subject<ColumnModel[]>();
  columnSource: Observable<ColumnModel[]> = this.subject.asObservable();

  private uniqSubject = new Subject<Uniqs>();
  uniqsSource: Observable<Uniqs> = this.uniqSubject.asObservable();

  private whereSubject = new Subject<Where[]>();
  wheresSource: Observable<Where[]> = this.whereSubject.asObservable();

  private dateSubject = new Subject<DateRange>();
  dateSource: Observable<DateRange> = this.dateSubject.asObservable();

  customerItems: Item[];
  generalCustomerItems: Item[];
  labItems: Item[];
  typeOfSampleItems: Item[];

  constructor(
    private consumerControlService: ConsumersControlService,
    private optionsConstrolService: OptionsControlService
  ) {}

  initColumnSource(column: ColumnModel[]) {
    this.subject.next(column);
  }

  initUniqSubject(uniqs: Uniqs) {
    this.uniqSubject.next(uniqs);
  }

  initWhereSource(wheres: Where[]) {
    this.whereSubject.next(wheres);
  }

  initDateSource(range: DateRange) {
    this.dateSubject.next(range);
  }

  getColumns() {
    return [
      new ColumnModel(true, "Номер", "name", "Consumer"),
      new ColumnModel(true, "Заказчик", "customer", "Consumer"),
      new ColumnModel(
        true,
        "Генеральный заказчик",
        "generalCustomer",
        "Consumer"
      ),
      new ColumnModel(true, "Лаборатория", "lab", "Consumer"),
      new ColumnModel(true, "Тип отбираемой среды", "typeOfSample", "Consumer"),
      new ColumnModel(true, "Дата отбора", "date", "Date"),
      new ColumnModel(false, "Акт", "act", "ACT"),
      new ColumnModel(false, "Акт PDF", "act_pdf", "ACT_PDF"),
      new ColumnModel(false, "Протокол", "protocol", "PROTOCOL"),
    ];
  }

  getFileters(): Observable<FilterItem[]> {
    return forkJoin([
      this.consumerControlService.getCustomersForOption().pipe(
        take(1),
        map((data) => {
          this.customerItems = data.map(
            (item) => new Item(item.id, item.label, false, false)
          );
        })
      ),
      this.consumerControlService.getGeneralCustomersForOption().pipe(
        take(1),
        map((data) => {
          this.generalCustomerItems = data.map(
            (item) => new Item(item.id, item.label, false, false)
          );
        })
      ),
      this.consumerControlService.getLabsForOption().pipe(
        take(1),
        map((data) => {
          this.labItems = data.map(
            (item) => new Item(item.id, item.label, false, false)
          );
        })
      ),
      this.optionsConstrolService.getTypeOfSamples().pipe(
        take(1),
        map((data) => {
          this.typeOfSampleItems = data.map(
            (item) => new Item(item.id, item.label, false, false)
          );
        })
      ),
    ]).pipe(
      switchMap(() => {
        return of([
          new FilterItem(
            "Заказчик",
            "customer",
            true,
            "Consumer",
            "uniqCustomers",
            false,
            this.customerItems
          ),
          new FilterItem(
            "Генеральный заказчик",
            "generalCustomer",
            true,
            "Consumer",
            "uniqGeneralCustomers",
            false,
            this.generalCustomerItems
          ),
          new FilterItem(
            "Лаборатория",
            "lab",
            true,
            "Consumer",
            "uniqLabs",
            false,
            this.labItems
          ),
          new FilterItem(
            "Тип отбираемой среды",
            "typeOfSample",
            true,
            "Consumer",
            "uniqTypeOfSamples",
            false,
            this.typeOfSampleItems
          ),
          new FilterItem("Дата отбора", "date", true, "Date", null, false, []),
        ]);
      })
    );
  }
}
