import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ThemeModule} from "../../../theme/theme.module";
import {TravelsComponent} from "./travels.component";
import {TravelsRoutingModule} from "./travels-routing.module";
import {AgmCoreModule} from "@agm/core";
import {AgmOverlays} from "agm-overlays";


@NgModule({
  declarations: [
    TravelsComponent
  ],
    imports: [
      CommonModule,
      TravelsRoutingModule,
      ThemeModule,
      AgmOverlays,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCFhUyafRoOL_ZD4z2gQdywnobjY5MR5e4'
      })
    ]
})
export class TravelsModule { }
