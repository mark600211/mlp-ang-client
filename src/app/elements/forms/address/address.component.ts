import { Component, OnInit, Input, NgZone } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { FieldBase } from "src/app/components/acts/act-form/models/fields/field-base.model";
import { FormComponent } from "../models/form.component";
import { FormControlService } from "../services/form-control.service";
import { AddressFieldsService } from "./address-fields.service";
import { AddressModel } from "./models/address.model";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit, FormComponent {
  @Input() value: AddressModel;
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() key: string;
  @Input() required: boolean;

  group: FormGroup;

  address: Object;
  formattedAddress: string;
  fields: Array<FieldBase<any>>;

  constructor(
    private fb: FormBuilder,
    private addressFieldsService: AddressFieldsService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.fields = this.addressFieldsService.getFields();
    this.group = this.fb.group({});
    this.form.addControl(this.key, this.group);
    if (this.value) {
      this.fields.map((field) => {
        field.value = this.value[`${field.key}`];
      });
    }
  }

  getAddress(place: object) {
    this.address = place["formatted_address"];
    // this.phone = this.getPhone(place);
    this.formattedAddress = place["formatted_address"];
    this.zone.run(() => {
      this.formattedAddress = place["formatted_address"];
      let options = {
        zip: this.getPostCode(place) || "",
        country: this.getCountry(place) || "",
        region: this.getState(place) || "",
        city: this.getCity(place) || "",
        street: this.getStreet(place) || "",
        building: this.getStreetNumber(place) || "",
      };
      this.form.get(this.key).patchValue(new AddressModel(options));
    });
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  getStreetNumber(place) {
    const COMPONENT_TEMPLATE = { street_number: "short_name" },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: "long_name" },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: "long_name" },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: "short_name" },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: "short_name" },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: "short_name" },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: "long_name" },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: "long_name" },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = {
        formatted_phone_number: "formatted_phone_number",
      },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }
}
