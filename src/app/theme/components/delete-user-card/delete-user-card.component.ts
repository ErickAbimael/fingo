import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-delete-user-card',
  templateUrl: './delete-user-card.component.html',
  styleUrls: ['./delete-user-card.component.scss']
})
export class DeleteUserCardComponent implements OnInit {

  constructor() { }

  @Output () onCloseWindow : EventEmitter<any> = new EventEmitter<any>();
  @Output () onDeleteUser : EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  closeWindow(){
    this.onCloseWindow.emit();
  }

  deleteClicked(){
    this.onDeleteUser.emit();
  }

}
