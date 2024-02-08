import { Component } from '@angular/core';


@Component({
  selector: 'pages',
  template: `
    <fg-sidebar (onOpenSidebar)="menuCollapse = !menuCollapse"></fg-sidebar>
    <div [ngClass]="menuCollapse ? 'main-page-layout collapse' : 'main-page-layout' ">
<!--      <fg-header></fg-header>-->
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ["./pages.component.scss"]
})


export class PagesComponent {
  menuCollapse = false
}
