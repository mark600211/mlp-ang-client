import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActResolver } from "src/app/services/resolvers/act-resolver.service";

import { ActFormComponent } from "./act-form/act-form.component";
import { ActsTableComponent } from "./acts-table/acts-table.component";
import { ActsComponent } from "./acts.component";

const routes: Routes = [
  {
    path: "acts",
    redirectTo: "acts/table",
    pathMatch: "full",
  },
  {
    path: "acts",
    component: ActsComponent,
    children: [
      {
        path: "table",
        component: ActsTableComponent,
        pathMatch: "full",
      },
      { path: "create", component: ActFormComponent, pathMatch: "full" },
      {
        path: "update/:id",
        component: ActFormComponent,
        pathMatch: "full",
        resolve: { act: ActResolver },
        data: { update: true },
      },
      {
        path: "copy/:id",
        component: ActFormComponent,
        pathMatch: "full",
        resolve: { act: ActResolver },
        data: { copy: true },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActsRoutingModule {}
