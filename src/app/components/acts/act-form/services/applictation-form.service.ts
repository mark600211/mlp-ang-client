import { Injectable } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ApplicationFormService {
  constructor(private fb: FormBuilder) {}

  // initArray(key: string, items?: any[]): FormArray {
  //     if (items && items.length > 0) {
  //       let arrform = this.fb.array([]);
  //       items.forEach((item) => {
  //         let gr = this.initForm(key, "act", item);
  //         arrform.push(gr);
  //       });
  //       return arrform;
  //     } else {
  //       let gr = this.initForm(key, "act");
  //       let arr = [];
  //       let arrform = this.fb.array(arr);
  //       //   arrform.push(gr);
  //       return arrform;
  //     }
}
