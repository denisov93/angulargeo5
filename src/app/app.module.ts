import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from "@auth0/angular-jwt";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TopBarComponent } from './top-bar/top-bar.component';
import { SimplebarAngularModule } from 'simplebar-angular';

import { ParallaxDirective } from './home/parallax.directive';
import { CarouselComponent } from './carousel/carousel.component';

import { MapappComponent } from './mapapp/mapapp.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PersoneComponent } from './person/persone/persone.component';
import { SettingsComponent } from './person/persone/settings/settings.component';
import { RoutsComponent } from './person/persone/routs/routs.component';
import { GalleryComponent } from './person/persone/gallery/gallery.component';
import { RockTrophyComponent } from './person/persone/rock-trophy/rock-trophy.component';
import { CommunityMainComponent } from './community-main/community-main.component';
import { PostItemComponent } from './community-main/post-item/post-item.component';
import { CaminhoComponent } from './mapapp/caminho/caminho.component';
import { MapControllComponent } from './mapapp/map-controll/map-controll.component';
import { DirectionComponent } from './mapapp/caminho/direction/direction.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import { ImageComponent } from './home/images';
import { FormpolilineComponent } from './mapapp/formpoliline/formpoliline.component';
import { LoadDummyComponent } from './models/loaddummy';
import { AdminDefaultModule } from './layouts/admin-default/admin-default.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MapCamInfoComponent } from './mapapp/map-cam-info/map-cam-info.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MapappComponent,
    HomeComponent,
    ParallaxDirective,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    PersoneComponent,
    CarouselComponent,
    CommunityMainComponent,
    PostItemComponent,
    CaminhoComponent,
    MapControllComponent,
    DirectionComponent,
    RoutsComponent,
    GalleryComponent,
    RockTrophyComponent,
    SettingsComponent,
    AboutusComponent,
    ImageComponent,
    FormpolilineComponent,
    LoadDummyComponent,
    MapCamInfoComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SimplebarAngularModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBY1VATzvx85tm56FL0C4Agf_gojmbE_XI',//'AIzaSyDaxjTT7ejDx8ykQs7UU3_fuKnPLIIztjo',// 
      libraries: ['places', 'drawing', 'geometry'],
    }),
    AgmDirectionModule,
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
    BrowserAnimationsModule,
    AdminDefaultModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function tokenGetter() {
  return localStorage.getItem("tokenID");
}
