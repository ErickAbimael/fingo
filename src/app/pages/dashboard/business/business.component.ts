import {Component, OnInit} from '@angular/core';
import {BusinessService} from "./business.service";

@Component({
  selector: 'fg-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  public bodySource : any = [];
  public bodyCard : any = [
      {
        number: '#125693',
        business : 'Minoni',
        user : 'Robert',
        client : 'Javier',
        status: 'En transito',
        destiny: 'Ote. 6 767',
        address: 'Avenida Oriente 18 Sur 15 y, Sur 17'
      },
      {
        number: '#123456',
        business: 'Little Caesars',
        user : 'Toño',
        client : 'Luis',
        status: 'En transito',
        destiny: 'Ote. 6 767',
        address: 'Calle Real Sur 17 y, Sur 19'
      },
      {
        number: '#456789',
        business: 'Pizza Hut',
        user: 'Yanglee',
        client: 'Jose',
        status: 'En transito',
        destiny: 'Ote. 6 767',
        address: 'Avenida Oriente 18 Sur 15 y, Sur 17'
      }
    ]
  public data : any = {title: 'Órdenes', place: 'Buscar una orden'}

  public lat  : number = 18.855838777247442;
  public lng  : number = -97.10002864581593;
  public zoom : number = 14;
  public isLoading : boolean = false;
  public dataSource : any = [];
  public resultado : number;

  public markers : any = []

  constructor(
    private businessService : BusinessService,
  ) { }

  ngOnInit(): void {
    this.setUpBusiness();
    this.setUpLocations().then();
  }

  setUpBusiness(){
    this.bodySource = this.bodyCard
  }

  onSearching(event){
    let search = [];

    console.log("Buscando...",event);

    if(event.length > 0){
      search = [...this.bodyCard].filter(((searchItem:any) => searchItem.business.toLowerCase().includes(event.toLowerCase())))
      this.bodyCard = search;
      return;
    }

    this.refillBusinessWithOriginalSource()

  }

  refillBusinessWithOriginalSource = () => {
    console.log("Rellenando...");
    this.bodyCard = this.bodySource;
  }

  async setUpLocations() {
    this.isLoading = true;
    await this.businessService.getLocations().subscribe({
      next: (businessResponse : any) => {
        if(businessResponse && businessResponse.length > 0){
          this.isLoading = false;
          console.log("El api nos trae",businessResponse)
          this.dataSource = businessResponse;
        }
      }
    })
  }

  setUpMarkers(){
    for(let elemento of this.dataSource){
      let a = this.parseCoordenades(elemento.location_latitude);
      let b = this.parseCoordenades(elemento.location_length);
      this.markers = [
        {
          latitude: a,
          long : b
        }
      ]
    }
  }

  parseCoordenades(toParse){
    let division1 = toParse.split("°")
    let division2 = division1[1].split(",")
    console.log(division1[0], division2[0], division2[1])
    let a = parseFloat(division1[0]);
    let b = parseFloat(division2[0]);
    let c = parseFloat(division2[1])
    console.log(a+b/60+c/3600);
    return(a+b/60+c/3600);
  }



}
