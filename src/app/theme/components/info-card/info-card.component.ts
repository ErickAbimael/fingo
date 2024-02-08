import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fg-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() info : any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
