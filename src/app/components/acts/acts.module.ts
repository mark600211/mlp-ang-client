import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";

registerLocaleData(localeRu, "ru-ru");

import { ActsRoutingModule } from "./acts-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { ActsComponent } from "./acts.component";
import { ActFormComponent } from "./act-form/act-form.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { DatePipe } from "@angular/common";
import { EditActOptionsComponent } from "./act-form/edit-act-options/edit-act-options.component";
import { ActApplitcationComponent } from "./act-form/act-applitcation/act-applitcation.component";
import { ActsTableComponent } from "./acts-table/acts-table.component";
import { DocsComponent } from "./act-details/docs/docs.component";
import { DetailsPdfComponent } from "./act-details/details-pdf/details-pdf.component";
import { FilterOptionsPipe } from "./acts-table/pipes/filter-options.pipe";
import { DirectivesModule } from "src/app/directives/directives.module";
import { FFModule } from "src/app/elements/forms/ff.module";
import { ColumnFileterComponent } from "./acts-table/filters/column-filter.component";
import { TableFilterComponent } from "./acts-table/filters/table-filter.component";

@NgModule({
  declarations: [
    ActsComponent,
    ActFormComponent,
    EditActOptionsComponent,
    ActApplitcationComponent,
    ActsTableComponent,
    DocsComponent,
    DetailsPdfComponent,
    FilterOptionsPipe,
    ColumnFileterComponent,
    TableFilterComponent,
  ],
  imports: [
    SharedModule,
    FFModule,
    ActsRoutingModule,
    MatCheckboxModule,
    MatExpansionModule,
    DirectivesModule,
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: "ru-ru" }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActsModule {}
