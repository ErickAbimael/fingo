import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fg-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  /*
  * Esto es cómo el state en react
  * */
  searchValue   : string = "Busqueda";
  searchPlaceholder : string = "Busqueda";
  @Input () data : any = {};
  @Input () type        : string;
  @Input () label       : string;
  @Input () for           : string;
  @Input () autocomplete  : string;
  @Input () name          : string;
  @Input () hasError      : any;
  @Output () value: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {  }

  handleChange(event) {
    this.value.emit(event.target.value)
  }

}
