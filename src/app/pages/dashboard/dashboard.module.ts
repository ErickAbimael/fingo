import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {ThemeModule} from "../../theme/theme.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ThemeModule,
    HttpClientModule
  ]
})
export class DashboardModule {}
