import {NgModule} from "@angular/core";
import {HistoryComponent} from "./history.component";
import {CommonModule} from "@angular/common";
import {HistoryRoutingModule} from "./history-routing.module";
import {ThemeModule} from "../../../theme/theme.module";

@NgModule({
  declarations: [
    HistoryComponent
  ],
    imports: [
      CommonModule,
      HistoryRoutingModule,
      ThemeModule,
    ]
})

export class HistoryModule { }
