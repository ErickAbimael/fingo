import {Component, Input, OnInit} from '@angular/core';
import {dashboardColumnsDefinition} from "./models/dashboard-columns.definition";
import {DashboardComponentService} from "./dashboard.component.service";

@Component({
  selector: 'fg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public columnToFill : any = [];
  public dataSource : any;
  public isAddNewBusinessModalShowing : boolean = false;
  public isEditBusinessModalShowing : boolean = false;
  public isDeleteBusinessModalShowing : boolean = false;
  public dataIsEmpty : boolean = false;
  @Input () closeWindow : boolean;
  public storeName : string = "";
  public jsonToSend : string = "";
  public id : number;
  public infoToEdit : any;
  public jsonToUpdate : string = "";
  public isLoading : boolean = false;

  constructor(
    private dashboardService : DashboardComponentService,
  ) { }

  ngOnInit() {
    this.fillColumnDef()
    this.setUpBusiness().then();
  }

  onAddNewBusiness(){
    console.log("Agrega nueva empresa");
    this.isAddNewBusinessModalShowing = true;
  }

  onCloseNewWindow(){
    this.isAddNewBusinessModalShowing = false;
  }

  onOpenNewWindow(e){
    this.id = e;
    this.dashboardService.getCompanyById(this.id).subscribe({
      next : (response : any) => {
        this.infoToEdit = response;
        console.log("El info to Edit de business tiene: ", this.infoToEdit)
    }
    })
    this.isEditBusinessModalShowing = true;
  }

  onCloseEditWindow(){
    this.isEditBusinessModalShowing = false;
    this.ngOnInit();
  }

  openDeleteComponent(e){
    this.id = e;
    this.isDeleteBusinessModalShowing = true;
  }

  onCloseDeleteWindow(){
    this.isDeleteBusinessModalShowing = false;
  }


  fillColumnDef() : void {
    this.columnToFill = dashboardColumnsDefinition
  }

  setUpBusiness = async () => {
    this.isLoading = true;
   await this.dashboardService.getCompanies().subscribe({
      next:  (dashboardResponse: any) => {
        if(dashboardResponse && dashboardResponse.content.length > 0){
          this.dataSource = dashboardResponse.content;
          console.log(this.dataSource)
          this.isLoading = false;
        }else{
          this.dataIsEmpty = true;
        }
      }
    })
  }

  onSendObject(e){
    this.isAddNewBusinessModalShowing = false
    this.jsonToSend = e;
    this.dashboardService.addCompany(this.jsonToSend).subscribe({
      next : (response : any) => {
        const x = document.getElementById("businessCreated");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log(response)
        this.setUpBusiness().then();
      }
    });

  }

  onUpdateBusiness(e){
    this.isEditBusinessModalShowing = false;
    this.jsonToUpdate = e;
    console.log("el cambio que se realizará es: ", this.jsonToUpdate)
    this.dashboardService.updateCompany(this.jsonToUpdate, this.id).subscribe({
      next : (response : any) => {
        const x = document.getElementById("businessEdited");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log(response)
        this.setUpBusiness().then();
      }
    });

  }

  onDeleteBusiness(){
    this.isDeleteBusinessModalShowing = false;
    this.dashboardService.deleteCompany(this.id).subscribe({
      next : (response :any) => {
        const x = document.getElementById("businessDeleted");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        console.log(response);
        this.setUpBusiness().then();
      },
    });
  }
}
