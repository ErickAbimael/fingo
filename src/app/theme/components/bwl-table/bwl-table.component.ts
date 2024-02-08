import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output
}
  from "@angular/core";

@Component({
  selector: 'fg-table-component',
  templateUrl: 'bwl-table.component.html',
  styleUrls: ['bwl-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BWLTableComponent implements OnInit {

  @ViewChild('componentFactory', { read: ViewContainerRef })
  private componentFactory                   : ViewContainerRef;

  @Input() dataSource                 : any               =   [];
  @Input() columnDef                  : any               =   [];
  @Input() fullCellRenderedComponent  : any               =   null;
  @Output() isEditBusinessShowing : EventEmitter<any> = new EventEmitter<any>();
  @Output() isDeleteBusinessShowing : EventEmitter<any> = new EventEmitter<any>();
  public idBusiness : number;

  constructor(private componenteFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() { }

  showTableDetail(item, itemIndex){
    this.dataSource.forEach((d, index)=> {
      if (itemIndex == index){
        d.expanded = !d.expanded;
      } else {
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
          let expComponent: any = this.componentFactory.createComponent(this.componenteFactoryResolver.resolveComponentFactory(this.fullCellRenderedComponent));
          if (expComponent.instance) {
            expComponent.instance.dataFromParent = data;
            expComponent.instance.fullDataFromParent = this.dataSource;
          }
        }
      }
    });
  }

  openEditBusiness(id : any){
    if(this.dataSource.hasOwnProperty(id)){
      this.idBusiness = this.dataSource[id].identifier
      console.log("La clave es: ", id, "Y el valor es: ", this.idBusiness)
    }
    this.isEditBusinessShowing.emit(this.idBusiness);
  }

  openDeleteBusiness(id : any){
    //this.idBusiness = id;
      if(this.dataSource.hasOwnProperty(id)){
        console.log("la clave es: ", id, "y el valor es: ", this.dataSource[id].identifier)
        this.idBusiness = this.dataSource[id].identifier;
      }
    this.isDeleteBusinessShowing.emit(this.idBusiness);
  }
}
