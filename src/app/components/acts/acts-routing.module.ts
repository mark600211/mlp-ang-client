import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActResolver } from "src/app/services/resolvers/act-resolver.service";

import { ActFormComponent } from "./act-form/act-form.component";
import { ActsTableComponent } from "./acts-table/acts-table.component";
import { ActsComponent } from "./acts.component";

const routes: Routes = [
  {
    path: "acts",
    component: ActsComponent,
    data: {
      breadcrumb: "Акты",
      url: "acts/table",
    },
    children: [
      {
        path: "table",
        component: ActsTableComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "Все Акты",
        },
      },
      {
        path: "create",
        component: ActFormComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "Создать Акт",
        },
      },
      {
        path: "update/:id",
        component: ActFormComponent,
        pathMatch: "full",
        resolve: { act: ActResolver },
        data: { update: true, breadcrumb: "Изменить Акт" },
      },
      {
        path: "copy/:id",
        component: ActFormComponent,
        pathMatch: "full",
        resolve: { act: ActResolver },
        data: { copy: true, breadcrumb: "Копировать Акт" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActsRoutingModule {}
