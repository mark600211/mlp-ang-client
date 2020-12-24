import { ApplicationModel } from "src/app/shared/models/application.model";

export class PatchActModel {
  public id: string;
  public name: string;
  public customer: string;
  public generalCustomer: string;
  public lab: string;
  public typeOfSample: string;
  public objectName: string;
  public place: string;
  public datetime: {
    date: Date;
    time: string;
  };
  public method: string;
  public toolType: string;
  public climaticEnvironmental: string;
  public planning: string;
  public normativeDocuments: string[];
  public sampleType: string;
  public sample: string;
  public preparations: string[];
  public goal: string;
  public definedIndicators: string[];
  public additions: string;
  public informationAboutSelection: string;
  public environmentalEngineer: string;
  public representative: string;
  public passedSample: string;
  public createdAt: string;
  public updatedAt: string;
  public applications: ApplicationModel[];

  constructor(options: {
    id?: string;
    name?: string;
    customer?: string;
    generalCustomer?: string;
    lab?: string;
    typeOfSample?: string;
    objectName?: string;
    place?: string;
    datetime?: {
      date: Date;
      time: string;
    };
    method?: string;
    toolType?: string;
    climaticEnvironmental?: string;
    planning?: string;
    normativeDocuments?: string[];
    sampleType?: string;
    sample?: string;
    preparations?: string[];
    goal?: string;
    definedIndicators?: string[];
    additions?: string;
    informationAboutSelection?: string;
    environmentalEngineer?: string;
    representative?: string;
    passedSample?: string;
    applications?: ApplicationModel[];
  }) {
    this.id = options.id || undefined;
    this.name = options.name;
    this.customer = options.customer;
    this.generalCustomer = options.generalCustomer;
    this.lab = options.lab;
    this.typeOfSample = options.typeOfSample;
    this.objectName = options.objectName || undefined;
    this.place = options.place || undefined;
    this.datetime = options.datetime || undefined;
    this.method = options.method || undefined;
    this.toolType = options.toolType || undefined;
    this.climaticEnvironmental = options.climaticEnvironmental || undefined;
    this.planning = options.planning || undefined;
    this.normativeDocuments = options.normativeDocuments || undefined;
    this.sampleType = options.sampleType || undefined;
    this.sample = options.sample || undefined;
    this.preparations = options.preparations || undefined;
    this.goal = options.goal || undefined;
    this.definedIndicators = options.definedIndicators || undefined;
    this.additions = options.additions || undefined;
    this.informationAboutSelection =
      options.informationAboutSelection || undefined;
    this.environmentalEngineer = options.environmentalEngineer || undefined;
    this.representative = options.representative || undefined;
    this.passedSample = options.passedSample || undefined;
    this.applications =
      options.applications && options.applications.length > 0
        ? options.applications
        : [];
  }
}
