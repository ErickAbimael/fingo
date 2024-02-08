import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-edit-user-card',
  templateUrl: './edit-user-card.component.html',
  styleUrls: ['./edit-user-card.component.scss']
})
export class EditUserCardComponent implements OnInit {

  constructor() {
  }

  @Output() object: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditUser: EventEmitter<any> = new EventEmitter<any>();
  @Input() dataSource : any;

  ngOnInit(): void {
  }

  onEditClicked(){
    this.object.emit(this.dataSource);
    console.log(this.dataSource);
    this.onEditUser.emit();
  }

  closeModal(){
    this.onCloseModal.emit();
  }


}
