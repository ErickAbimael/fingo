import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-delete-business-card',
  templateUrl: './delete-business-card.component.html',
  styleUrls: ['./delete-business-card.component.scss']
})
export class DeleteBusinessCardComponent implements OnInit {

  @Output () onCloseWindow : EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeWindow(){
    this.onCloseWindow.emit();
  }

  deleteClicked(){
    this.onDelete.emit();
  }
}
