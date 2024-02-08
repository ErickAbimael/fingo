import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-edit-device-card',
  templateUrl: './edit-device-card.component.html',
  styleUrls: ['./edit-device-card.component.scss']
})
export class EditDeviceCardComponent implements OnInit {

  @Output() onCloseModal : EventEmitter<any> = new EventEmitter<any>();
  @Output() object : EventEmitter<any> = new EventEmitter<any>();
  @Input() dataToFill : any;

  constructor() { }

  ngOnInit(): void {
  }


  onEditClicked(){
    this.object.emit(this.dataToFill);
  }

  onExit(){
    this.onCloseModal.emit()
  }

}
