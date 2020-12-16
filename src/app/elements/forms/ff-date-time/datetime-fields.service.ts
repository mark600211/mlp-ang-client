import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DateTimeFields {
  getFields(): {
    value?: any;
    controlType: string;
    required: boolean;
    key: string;
    label: string;
    visible: boolean;
  }[] {
    let fields: {
      value?: any;
      controlType: string;
      required: boolean;
      key: string;
      label: string;
      visible: boolean;
    }[] = [
      {
        controlType: "date",
        required: true,
        key: "date",
        label: "Дата",
        visible: true,
      },
      {
        controlType: "time",
        required: true,
        key: "time",
        label: "Время",
        visible: true,
      },
    ];

    return fields;
  }
}
