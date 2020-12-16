import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";

import { FfAutocompleteComponent } from "./ff-autocomplete/ff-autocomplete.component";
import { FfCheapAutocompleteComponent } from "./ff-cheap-autocomplete/ff-cheap-autocomplete.component";
import { FfDateComponent } from "./ff-date-time/ff-date/ff-date.component";
import { FfDateTimeComponent } from "./ff-date-time/ff-date-time.component";
import { FfSelectComponent } from "./ff-select/ff-select.component";
import { FfInputComponent } from "./ff-input/ff-input.component";
import { FfManySelectComponent } from "./ff-many-select/ff-many-select.component";
import { FfTextareaComponent } from "./ff-textarea/ff-textarea.component";
import { FfTimeComponent } from "./ff-date-time/ff-time/ff-time.component";
import { ButtonsModule } from "../buttons/buttons.module";
import { FormRendererComponent } from "./renderer/form-renderer.component";
import { FormOptionComponent } from "./edit-options/form-option.component";
import { FormOptionDialogComponent } from "./edit-options/options-dialog.component";
import { DirectivesModule } from "src/app/directives/directives.module";
import { AddressComponent } from "./address/address.component";
import { AutocompleteComponent } from "./address/autocomplete/autocomplete.component";

@NgModule({
  declarations: [
    AddressComponent,
    AutocompleteComponent,
    FfAutocompleteComponent,
    FfCheapAutocompleteComponent,
    FfDateComponent,
    FfDateTimeComponent,
    FfSelectComponent,
    FfInputComponent,
    FfManySelectComponent,
    FfTextareaComponent,
    FfTimeComponent,
    FormRendererComponent,
    FormOptionComponent,
    FormOptionDialogComponent,
  ],
  imports: [CommonModule, ButtonsModule, DirectivesModule, SharedModule],
  exports: [FormRendererComponent],
})
export class FFModule {}
