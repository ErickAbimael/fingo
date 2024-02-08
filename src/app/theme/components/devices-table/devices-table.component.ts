import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
}
  from '@angular/core';

@Component({
  selector: 'fg-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DevicesTableComponent implements OnInit {

  @ViewChild('componentFactory', {read: ViewContainerRef})
  private componentFactory    : ViewContainerRef;

  @Input() dataSource   : any       = [];
  @Input() columnDef    : any       = [];
  @Input() fullCellRenderedComponent : any  = null;
  @Output() isEditDeviceShowing : EventEmitter<any> = new EventEmitter<any>();
  @Output() isDeleteDeviceShowing : EventEmitter<any> = new EventEmitter<any>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void { }

  showTableDetail(item, itemIndex){
    this.dataSource.forEach((d, index)=>{
      if(itemIndex == index){
        d.expanded = !d.expanded;
      }else {
      }
    });
    this.getComponent(item)
  }

  getComponent(data){
    setTimeout(()=> {
      if(!this.componentFactory){
        return null;
      }else {
        if (this.fullCellRenderedComponent) {
          let expComponent: any = this.componentFactory.createComponent(this.componentFactoryResolver.resolveComponentFactory(this.fullCellRenderedComponent));
          if (expComponent.instance) {
            expComponent.instance.dataFromParent = data;
            expComponent.instance.fullDataFromParent = this.dataSource;
          }
        }
      }
    });
  }

  openEditDevice(){
    this.isEditDeviceShowing.emit();
  }

  openDeleteDevice(){
    this.isDeleteDeviceShowing.emit();
  }
}
