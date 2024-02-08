import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputComponent } from './components/basic-input/basic-input.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BWLTableComponent } from './components/bwl-table/bwl-table.component';
import { NewBusinessCardComponent } from './components/new-business-card/new-business-card.component';
import { EditBusinessCardComponent } from './components/edit-business-card/edit-business-card.component';
import { DeleteBusinessCardComponent } from './components/delete-business-card/delete-business-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { DevicesTableComponent } from './components/devices-table/devices-table.component';
import { AddUserCardComponent } from './components/add-user-card/add-user-card.component';
import { EditUserCardComponent } from './components/edit-user-card/edit-user-card.component';
import { DeleteUserCardComponent } from './components/delete-user-card/delete-user-card.component';
import { AddDeviceCardComponent } from './components/add-device-card/add-device-card.component';
import { EditDeviceCardComponent } from './components/edit-device-card/edit-device-card.component';
import { DeleteDeviceCardComponent } from './components/delete-device-card/delete-device-card.component';
import {FormsModule} from "@angular/forms";

// Use this for block pages for permissions
// const THIRD_PARTY_IMPORTS = [
//   NgxPermissionsModule
// ];

@NgModule({
  declarations: [
    BasicInputComponent,
    BasicButtonComponent,
    HeaderComponent,
    SidebarComponent, InformationCardComponent, SearchBarComponent,
     BWLTableComponent,
     NewBusinessCardComponent,
     EditBusinessCardComponent,
     DeleteBusinessCardComponent,
     InfoCardComponent,
     DevicesTableComponent,
     AddUserCardComponent,
     EditUserCardComponent,
     DeleteUserCardComponent,
     AddDeviceCardComponent,
     EditDeviceCardComponent,
     DeleteDeviceCardComponent,
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [
    BasicInputComponent,
    BasicButtonComponent,
    HeaderComponent,
    SidebarComponent,
    InformationCardComponent,
    SearchBarComponent,
    BWLTableComponent,
    NewBusinessCardComponent,
    EditBusinessCardComponent,
    DeleteBusinessCardComponent,
    InfoCardComponent,
    DevicesTableComponent,
    AddUserCardComponent,
    EditUserCardComponent,
    DeleteUserCardComponent,
    AddDeviceCardComponent,
    EditDeviceCardComponent,
    DeleteDeviceCardComponent,

    // BWLTableComponent,
  ],
   entryComponents: [
     BWLTableComponent,
     DevicesTableComponent,
   ]
})
export class ThemeModule { }
