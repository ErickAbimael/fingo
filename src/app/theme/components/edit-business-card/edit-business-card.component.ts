import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-edit-business-card',
  templateUrl: './edit-business-card.component.html',
  styleUrls: ['./edit-business-card.component.scss']
})
export class EditBusinessCardComponent implements OnInit {

  @Input () type        : string;
  @Input () label       : string;
  @Input () for           : string;
  @Input () autocomplete  : string;
  @Input () name          : string;
  @Input () placeholder   : string = '';
  @Input () hasError      : any;
  @Output () onCloseWindow : EventEmitter<any> = new EventEmitter<any>();
  @Output() object : EventEmitter<any> = new EventEmitter<any>();
  @Input() dataSource : any;

  constructor() { }

  ngOnInit(): void {

  }

  onEditClicked(){
    this.object.emit(this.dataSource);
  }

  onExit(){
    this.onCloseWindow.emit()
  }

}
