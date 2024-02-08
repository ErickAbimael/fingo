import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import {ThemeModule} from "../../../theme/theme.module";
import {AgmCoreModule} from "@agm/core";
import {AgmOverlays} from "agm-overlays";


@NgModule({
  declarations: [
    BusinessComponent
  ],
    imports: [
        CommonModule,
        BusinessRoutingModule,
        ThemeModule,
        AgmOverlays,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCFhUyafRoOL_ZD4z2gQdywnobjY5MR5e4'
      })
    ]
})
export class BusinessModule { }
