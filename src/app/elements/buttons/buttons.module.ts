import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClearButtonComponent } from "./clear-button.component";
import { DeleteButtonComponent } from "./delete-button.component";
import { EditButtonComponent } from "./edit-button.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    ClearButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [ClearButtonComponent, DeleteButtonComponent, EditButtonComponent],
})
export class ButtonsModule {}
