import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fg-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {

  @Input() buttonText     : string;

  constructor() { }

  ngOnInit() {
  }

}
