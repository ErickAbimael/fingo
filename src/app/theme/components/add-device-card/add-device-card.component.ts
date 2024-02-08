import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-add-device-card',
  templateUrl: './add-device-card.component.html',
  styleUrls: ['./add-device-card.component.scss']
})
export class AddDeviceCardComponent implements OnInit {

  @Output() value         : EventEmitter<any> = new EventEmitter<any>();
  @Output() onCloseModal  : EventEmitter<any> = new EventEmitter<any>();
  @Output() object        : EventEmitter<any> = new EventEmitter<any>();
  public businessName     : string;
  public model            : string;
  public uuid             : string;
  public vehicle          : string;
  public flag             : boolean = false;
  public json             : {} = [];
  public nameIsEmpty      : boolean = false;
  public vehicleIsEmpty   : boolean = false;
  public modelIsEmpty     : boolean = false;
  public uuidIsEmpty      : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.businessName = null;
    this.vehicle = null;
    this.model = null;
  }

  closeModal(){
    this.onCloseModal.emit();
  }

  handleChange(event){
    this.value.emit(event.target.value)
    console.log(event.target.value)
  }

  getBusinessName(event : any){
    this.businessName = event.target.value;
  }

  getVehicle(event : any){
    this.vehicle = event.target.value;
  }

  getModel(event : any){
    this.model = event.target.value;
  }

  getUUID(event : any){
    this.uuid = event.target.value;
  }

  createDeviceClicked(){
    this.validateForm();

  }

  validateForm(){
    this.makeAllFalse();
    if(!this.businessName){
      this.nameIsEmpty = true;
    }else{
      if(!this.vehicle){
        this.vehicleIsEmpty = true;
      }else{
        if(!this.model){
          this.modelIsEmpty = true;
        }else{
          if(!this.uuid){
            this.uuidIsEmpty = true;
          }else{
            this.json =
              {
                nameDistribution: this.businessName,
                descriptionVehicle: this.vehicle,
                keyCode: this.model,
                locationUuid: this.uuid
              }
              }
            this.object.emit(this.json);
          }
        }
      }
    }


  makeAllFalse(){
    this.nameIsEmpty = false;
    this.vehicleIsEmpty = false;
    this.modelIsEmpty = false;
  }


}
