import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './entrypoint/top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AgmCoreModule } from '@agm/core';
import { MapappComponent } from './mapcomponent/mapapp/mapapp.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MapappComponent,
    HomeComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SimplebarAngularModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBY1VATzvx85tm56FL0C4Agf_gojmbE_XI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
