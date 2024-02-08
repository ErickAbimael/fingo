import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

  public data : any = {title: 'Ruta recorrida', place: 'Buscar un usuario u orden'}
  //public info : any = {number: '#123456', business: 'Tortas Pablo', user: 'Erick' , client: 'Abimael' , status: 'En transito', destiny: 'Ote. 6 767', address: 'Avenida Oriente 18 Sur 15 y, Sur 17'}

  public info : any = [
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

  public lat  : number = 18.855838777247442;
  public lng  : number = -97.10002864581593;
  public zoom : number = 14;

  public location : any = [
                            {
                              lat: "18.855656",
                              long:"-97.099366"
                            },
                            {
                              lat: "18.862595654452004",
                              long:"-97.0982778300253"
                            }
                          ]
  public iconUrl : any = {
    url: "https://w7.pngwing.com/pngs/753/264/png-transparent-map-marker-icon-google-map-maker-google-maps-map-marker-blue-angle-triangle.png",
    scaledSize: {
      width: 50,
      height: 40,
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
