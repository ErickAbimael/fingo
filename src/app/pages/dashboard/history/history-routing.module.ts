import {RouterModule, Routes} from "@angular/router";
import {HistoryComponent} from "./history.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: HistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
