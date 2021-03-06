import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatToolbarModule } from "@angular/material/toolbar";
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter,
  NativeDateAdapter,
} from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateModule,
  MomentDateAdapter,
} from "@angular/material-moment-adapter";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FileUploadModule } from "ng2-file-upload";
import { Md2Module, NoConflictStyleCompatibilityMode } from "angular-md2";
import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatTabsModule,
    MatRadioModule,
    PdfViewerModule,
  ],
  exports: [
    CommonModule,
    DragDropModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatToolbarModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MomentDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    Md2Module,
    NoConflictStyleCompatibilityMode,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MAT_DATE_LOCALE, useValue: "ru-RU" },
    // { provide: DateAdapter, useClass: NativeDateAdapter},
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ["L"],
        },
        display: {
          dateInput: "LL",
          timeInput: "LT",
          monthYearLabel: "MMM YYYY",
          dateA11yLabel: "LLL",
          monthYearA11yLabel: "MMMM YYYY",
        },
      },
    },
  ],
})
export class SharedModule {}
