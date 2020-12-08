@Injectable({
    provideIn: 'root'
})
export class DateTimeFields {
    getFields(): Array<{}> {
        let fields: Array<{}> = [
            {
                controlType: 'date',
              required: true,
              key: "date",
              label: "Дата",
            },
    
            {
                controlType: 'time',
              required: true,
              key: "time",
              label: "Время",
            },
          ];
    
          return fields;
    }
}