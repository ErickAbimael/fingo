import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-delete-device-card',
  templateUrl: './delete-device-card.component.html',
  styleUrls: ['./delete-device-card.component.scss']
})
export class DeleteDeviceCardComponent implements OnInit {

  constructor() { }

  @Output() onCloseWindow : EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  closeWindow(){
    this.onCloseWindow.emit()
  }

  deleteClicked(){
    this.onDelete.emit();
  }

}
