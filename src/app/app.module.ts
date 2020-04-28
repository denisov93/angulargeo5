import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AgmCoreModule } from '@agm/core';
import { MapappComponent } from './mapapp/mapapp.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PersoneComponent } from './person/persone/persone.component';
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function tokenGetter() {
  return localStorage.getItem("tokenID");
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MapappComponent,
    HomeComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    PersoneComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    SimplebarAngularModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBY1VATzvx85tm56FL0C4Agf_gojmbE_XI'
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["http://localhost:4200/person/"],
        blacklistedRoutes: ["http://localhost:4200/map/"]
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}