import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage.service";

@Component({
  selector: 'fg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private localStorage = StorageService.getInstance()
  @Output() onOpenSidebar = new EventEmitter();

  expand = false;

  menuCollection = [];


  constructor(private router: Router) {

    this.menuCollection = [
      {
        title: "Mapa",
        icon: "flap-i fg-e905",
        route: "/pages/dashboard/business"
      },
      {
        title: "Empresas",
        icon: "flap-i fg-e907 fg-2x",
        route: "/pages/dashboard"
      },
      /*{
        title: "Ruta recorrida",
        icon: "flap-i fg-e90b fg-2x",
        route: "/pages/dashboard/travels"
      },
      {
        title: "Historico de Viajes",
        icon: "flap-i fg-e90a fg-2x",
        route: "/pages/dashboard/history"
      },*/
      {
        title: "Dispositivos",
        icon: "flap-i fg-e908 fg-2x",
        route: "/pages/dashboard/devices"
      },
      {
        title: "Usuarios",
        icon: "flap-i fg-e906 fg-2x",
        route: "/pages/dashboard/users"
      }
    ];

    this.router.events.subscribe((event:any)=> {
      if (event.url) {
        this.clearSelection();
        let item = this.menuCollection.find(d=>d.route == event.url);
        if (item)
          item.active = true;
      }
    });


  }

  collapseSidebar() {
    this.expand = !this.expand
    this.onOpenSidebar.emit();
  }
  performSelection(item){
    this.clearSelection();
    item.active = true;
    this.router.navigateByUrl(item.route);
  }
  clearSelection() {
    this.menuCollection.forEach(d=>d.active = false);
  }

  logout(){
    this.localStorage.localDeleteAll();
    this.router.navigate(['login']);
  }


  ngOnInit() {
  }

}
