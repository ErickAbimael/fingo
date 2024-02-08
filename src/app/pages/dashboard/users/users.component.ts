import { Component, OnInit } from '@angular/core';
import {usersColumnsDefinition} from "../models/users-columns-definition";
import {UsersService} from "./users.service";

@Component({
  selector: 'fg-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public dataSource : any = [];
  public columnToFill : any = [];
  public isAddUserModalShowing : boolean =false;
  public isEditUserModalShowing : boolean = false;
  public isDeleteUserModalShowing : boolean = false;

  constructor(
    private usersService : UsersService,
  ) { }

  ngOnInit(): void {
    this.dataSource=[
      {
        name: 'Luis Antonio',
        username: 'Antonio',
        email: 'lcrescencio@correo.com',
        phone: '272 123 4208',
        bussines: 'Minoni',
        rol: 'Administrador'
      },
      {
        name: 'Erick Abimael',
        username: 'Erick',
        email: 'emorales@correo.com',
        phone: '272 199 6182',
        bussines: 'Minoni',
        rol: 'Repartidor'
      },
      {
        name: 'Cristina Ferrer',
        username: 'usuario1',
        email: 'christinaf@correo.com',
        phone: '272 194 9022',
        bussines: 'Minoni',
        rol: 'Administrador'
      },
      {
        name: 'Diego Hernandez',
        username: 'usuario1',
        email: 'dhernandez@correo.com',
        phone: '272 194 9022',
        bussines: 'Minoni',
        rol: 'Repartidor'
      },
    ]
    this.fillColumns();
    this.setUpUsers().then();
  }


  onAddNewUser(){
    this.isAddUserModalShowing = true;
  }

  onCloseAddUserModal(){
    this.isAddUserModalShowing = false;
  }

  onUserCreated(){
    this.isAddUserModalShowing = false;
    const x = document.getElementById("snackbarCreate");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  onOpenEditUserWindow(){
    this.isEditUserModalShowing=true;
  }

  onCloseEditUserModal(){
    this.isEditUserModalShowing = false;
  }

  onEditedUser(){
    this.isEditUserModalShowing = false;
    const x = document.getElementById("snackbarEdited");

    x.className = "show";

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }

  onOpenDeleteUserWindow(){
    this.isDeleteUserModalShowing = true;
  }

  onCloseDeleteUserModal(){
    this.isDeleteUserModalShowing = false;
  }

  onDeletedUser(){
    this.isDeleteUserModalShowing = false;
    const x = document.getElementById("snackbarDeleted");

    x.className = "show";

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  fillColumns(){
    this.columnToFill = usersColumnsDefinition
  }

   async setUpUsers() {
     await this.usersService.getUsers().subscribe({
       next: (response: any) => {
         if (response) {
           this.dataSource[0] = response;
           console.log(this.dataSource);
         }
       }
     })
   }

}
