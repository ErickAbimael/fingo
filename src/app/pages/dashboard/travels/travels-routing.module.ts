import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import {TravelsComponent} from "./travels.component";

const routes: Routes = [
  {
    path: "",
    component: TravelsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelsRoutingModule { }
