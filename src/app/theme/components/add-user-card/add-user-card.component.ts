import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fg-add-user-card',
  templateUrl: './add-user-card.component.html',
  styleUrls: ['./add-user-card.component.scss']
})
export class AddUserCardComponent implements OnInit {

  constructor() { }
  @Output() value         : EventEmitter<any> = new EventEmitter<any>();
  @Output() onCloseModal  : EventEmitter<any> = new EventEmitter<any>();
  @Output() onCreateUser  : EventEmitter<any> = new EventEmitter<any>();
  public name             : string = "";
  public userName         : string = "";
  public phone            : number = null;
  public mail             : string = "";
  public role             : string = "";
  public businessValue    : string = "";
  public lastName         : string = "";
  public password         : string = "";
  public nameIsEmpty      : boolean = false;
  public lastNameIsEmpty  : boolean = false;
  public userIsEmpty      : boolean = false;
  public passwordIsEmpty  : boolean = false;
  public mailIsEmpty      : boolean = false;
  public phoneIsEmpty     : boolean = false;
  public businessIsEmpty  : boolean = false;
  public roleIsEmpty      : boolean = false;



  ngOnInit(): void {

  }

  closeModal(){
    this.onCloseModal.emit();
  }

  handleChange(event){
    this.value.emit(event.target.value)
    console.log(event.target.value)
  }

  getName(event : any){
    this.name = event.target.value;
  }

  getLastName(event : any){
    this.lastName = event.target.value;
  }

  getUserName(event : any){
    this.userName = event.target.value;
  }

  getPassword(event : any){
    this.password = event.target.value;
  }

  getMail(event: any){
    this.mail = event.target.value;
  }

  getPhone(event : any){
    this.phone = event.target.value;
  }

  getBusinessValue(event : any){
    this.businessValue = event.target.value;
    console.log(this.businessValue);
  }

  getRole(event: any){
    this.role = event.target.value;
  }

  createUserClicked(){
    this.validateData();
  }

  validateData(){
    this.makeAllFalse();
    if(!this.name) {
      this.nameIsEmpty = true;
    }else{
      if(!this.lastName) {
        this.lastNameIsEmpty = true;
      }  else{
        if(!this.userName) {
          this.userIsEmpty = true;
        }else{
          if(!this.password) {
            this.passwordIsEmpty = true;
          }else{
            if(!this.mail) {
              this.mailIsEmpty = true;
            }else{
              if(!this.phone) {
                this.phoneIsEmpty = true;
              }else{
                if(!this.businessValue) {
                  this.businessIsEmpty = true;
                }else{
                  if(!this.role) {
                    this.roleIsEmpty = true;
                  }else{
                    this.onCreateUser.emit();
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  makeAllFalse(){
    this.nameIsEmpty  = false;
    this.lastNameIsEmpty  = false;
    this.userIsEmpty  = false;
    this.passwordIsEmpty  = false;
    this.mailIsEmpty  = false;
    this.phoneIsEmpty  = false;
    this.businessIsEmpty  = false;
    this.roleIsEmpty  = false;
  }

}
