import { FindAllActQuery } from "src/types/acts/generated";

export class DataSourceModel {
  public name: string;
  public customer: string;
  public generalCustomer: string;
  public lab: string;
  public date: string;
  //   public act: FindAllActQuery["findAllAct"][0]["docs"][0];
  //   public act_pdf: FindAllActQuery["findAllAct"][0]["docs"][0];
  //   public protocol: FindAllActQuery["findAllAct"][0]["docs"][0];

  constructor(options: FindAllActQuery["getTableContent"]["acts"][0]) {
    this.name = options.name;
    this.customer = options.customer.label;
    this.generalCustomer = options.generalCustomer.label;
    this.lab = options.lab.label;
    const formatter = new Intl.DateTimeFormat("ru", {
      month: "numeric",
      year: "numeric",
    });
    const d = formatter.format(new Date(options.datetime.date));
    this.date = `${d}`;
    // this.act = actArr[actArr.length - 1];
    // this.act_pdf = act_pdfArr[act_pdfArr.length - 1];
    // this.protocol = protoArr[protoArr.length - 1];
  }
}
