import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SelectedItems } from "./selected-items.model";

@Injectable({
  providedIn: "root",
})
export class ButtonsSectionsService {
  private sub = new Subject<string[]>();
  itemsSource = this.sub.asObservable();

  sentItems(items: string[]): void {
    this.sub.next(items);
  }

  private copySub = new Subject<boolean>();
  copySource = this.copySub.asObservable();

  sentCopy(condition: boolean) {
    this.copySub.next(condition);
  }
}
