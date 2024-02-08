import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {CommonModule} from "@angular/common";
import {ThemeModule} from "../../../theme/theme.module";
import {UsersRoutingModule} from "./users-routing.module";

@NgModule({
  declarations: [
    UsersComponent
  ],
    imports: [
      CommonModule,
      ThemeModule,
      UsersRoutingModule
    ]
})

export class UsersModule { }
