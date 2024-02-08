import { Component, OnInit } from '@angular/core';
import {devicesColumnsDefinition} from "../models/devices-columns-definition";
import {DevicesService} from "./devices.service";
@Component({
  selector: 'fg-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  public dataSource                 : any = [];
  public columnToFill               : any = [];
  public isAddNewDeviceShowing      : boolean = false;
  public isEditDeviceModalShowing   : boolean = false;
  public isDeleteDeviceModalShowing : boolean = false;
  public json                       : any;
  public id                         : number;
  public infoToEdit                 : any;
  public jsonToUpdate               : any;
  public isLoading                  : boolean = false;

  constructor(
    private devicesService : DevicesService,
  ) { }

  ngOnInit(): void {
    this.setUpDevices().then();
    this.fillColumnDef()
  }

  onAddNewDevice(){
    this.isAddNewDeviceShowing = true;
  }

  onCloseAddDeviceWindow(){
    this.isAddNewDeviceShowing = false;
  }

  onOpenEditDeviceWindow(e){
    this.id = e;
    this.devicesService.getDeviceById(this.id).subscribe({
      next : (response : any) => {
        console.log(response[0].nameDistribution)
        this.infoToEdit = response;
        console.log("Info to Edit contiene: ", this.infoToEdit)
    }
    })
    this.isEditDeviceModalShowing = true;
  }

  onCloseEditDeviceWindow(){
    this.isEditDeviceModalShowing = false;
  }

  onOpenDeleteDeviceWindow(e){
    this.id = e;
    this.isDeleteDeviceModalShowing = true;
  }

  onCloseDeleteDeviceWindow(){
    this.isDeleteDeviceModalShowing = false;
  }

  fillColumnDef(){
    this.columnToFill = devicesColumnsDefinition
  }

  async setUpDevices() {
    this.isLoading = true;
    await this.devicesService.getDevices().subscribe({
      next: (devicesResponse: any) => {
        if (devicesResponse && devicesResponse.content.length > 0) {
          this.isLoading = false;
          console.log(devicesResponse.content)
          this.dataSource = devicesResponse.content;
        }
      }
    })
  }

  onCreateNewDevice(e){
    this.isAddNewDeviceShowing = false;
    this.json = e;
    console.log("El update se realizará así: ", this.json)
    this.devicesService.addDevice(this.json).subscribe({
      next : (response : any) => {
        const x = document.getElementById("deviceCreated");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log(response)
        this.setUpDevices().then();
      }
    });
  }

  onUpdateDevice(e){
    this.isEditDeviceModalShowing = false;
    this.jsonToUpdate = e[0];
    console.log("El cambio que se realizará es: ", this.jsonToUpdate)
    this.devicesService.updateDevice(this.jsonToUpdate, this.id).subscribe({
      next : (response : any) => {
        const x = document.getElementById("deviceEdited");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log(response)
        this.setUpDevices().then();
      }
    });
  }

  onDeleteDevice(){
    this.isDeleteDeviceModalShowing = false;
    this.devicesService.deleteDevice(this.id).subscribe({
      next : (response : any) => {
        const x = document.getElementById("deviceDeleted");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log(response)
        this.setUpDevices().then();
    }
    });
  }
}
