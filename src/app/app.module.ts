import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiCrudService} from "./shared/services/ApiCrud.service";
import {StorageService} from "./shared/services/storage.service";
import { PagesModule } from './pages/pages.module';

// Generador de token para el jwt
// export function tokenGetter() {
//   let uncodeToken: any = localStorage.getItem("session_data");
//   if (uncodeToken)
//     return uncodeToken.token;
//   else
//     return null;
// }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ["*"],
    //     blacklistedRoutes: []
    //   }
    // }),
    // NgxPermissionsModule.forRoot()
  ],
  providers: [
    ApiCrudService,
    StorageService,
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}// Para la intercepción por cada consulta de http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
