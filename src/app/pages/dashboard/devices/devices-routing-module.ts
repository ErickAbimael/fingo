import {RouterModule, Routes} from "@angular/router";
import {DevicesComponent} from "./devices.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: DevicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
