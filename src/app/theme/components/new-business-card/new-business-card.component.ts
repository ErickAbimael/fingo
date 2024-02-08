import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'fg-new-business-card',
  templateUrl: './new-business-card.component.html',
  styleUrls: ['./new-business-card.component.scss']
})
export class NewBusinessCardComponent implements OnInit {

  @Output () value          : EventEmitter<any> = new EventEmitter<any>();
  @Output () onCloseWindow  : EventEmitter<any> = new EventEmitter<any>();
  @Output() object          : EventEmitter<any> = new EventEmitter<any>();
  public storeName          : string = "";
  public socialReason       : string ="";
  public address            : string ="";
  public phoneNumber        : string ="";
  public mainContact        : string ="";
  public typeValue          : string ="";
  public json               : {} = [];
  public storeIsEmpty       : boolean = false;
  public reasonIsEmpty      : boolean = false;
  public addressIsEmpty     : boolean = false;
  public phoneIsEmpty       : boolean = false;
  public contactIsEmpty     : boolean = false;
  public typeVIsEmpty       : boolean = false;


  constructor(
  ) { }

  ngOnInit(): void {
    this.storeName = null;
    this.socialReason = null;
    this.address = null;
    this.phoneNumber = null;
    this.mainContact = null;
    this.typeValue = null;
  }

  handleChange(event) {
    this.value.emit(event.target.value)
    console.log(event.target.value)
  }

  closeIt(event){
    console.log(event);
    this.onCloseWindow.emit();
  }

  createClicked() {
    this.validateData();
    console.log("Click en crear");
    /*this.service.addCompany(this.json)*/
  }

  getStoreName(event : any ){
    this.storeName = event.target.value;
  }

  getSocialReason(event : any) {
    this.socialReason = event.target.value;
  }

  getAddress(event : any) {
    this.address = event.target.value;
  }

  getPhone(event : any) {
    this.phoneNumber = event.target.value;
  }

  getTypeValue(event : any){
    this.typeValue = event.target.value;
  }

  getMainContact(event : any){
    this.mainContact = event.target.value;
  }

  validateData(){
    this.makeAllFalse();
    if(!this.storeName){
      this.storeIsEmpty = true;
    }else{
      if(!this.socialReason){
        this.reasonIsEmpty = true;
      }else{
        if(!this.address){
          this.addressIsEmpty = true;
        }else{
          if(!this.phoneNumber){
            this.phoneIsEmpty = true;
          }else{
            if(!this.typeValue){
              this.typeVIsEmpty = true;
            }else{
              if(!this.mainContact){
                this.contactIsEmpty = true;
              }else{
                this.json =
                  {
                    nameCompany : this.storeName,
                    nameContact : this.mainContact,
                    businessName : this.socialReason,
                    telephoneNumber : this.phoneNumber,
                    address: this.address,
                    typeCompany: this.typeValue
                  }
                this.object.emit(this.json)
              }
            }
          }
        }
      }
    }

  }

  makeAllFalse(){
    this.storeIsEmpty   = false;
    this.reasonIsEmpty  = false;
    this.addressIsEmpty = false;
    this.phoneIsEmpty   = false;
    this.contactIsEmpty = false;
    this.typeVIsEmpty   = false;
  }


}
