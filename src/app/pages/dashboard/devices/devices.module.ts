import {NgModule} from "@angular/core";
import {DevicesComponent} from "./devices.component";
import {CommonModule} from "@angular/common";
import {DevicesRoutingModule} from "./devices-routing-module";
import {ThemeModule} from "../../../theme/theme.module";

@NgModule({
  declarations: [
    DevicesComponent
  ],
    imports: [
      CommonModule,
      DevicesRoutingModule,
      ThemeModule
    ]
})

export class DevicesModule { }
