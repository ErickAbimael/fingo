import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fg-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {

  @Input() number : string = ""
  @Input() business : string = ""
  @Input() user : string = ""
  @Input() client : string = ""
  @Input() status: string = ""
  @Input() destiny : string = ""
  @Input() address : string = ""

  constructor() { }

  ngOnInit(): void {
  }


}


