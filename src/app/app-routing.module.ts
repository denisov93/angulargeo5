import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MapappComponent } from './mapapp/mapapp.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { PersoneComponent } from './person/persone/persone.component';
import { AuthGuard } from './auth/auth.guard';
import { MapControllComponent } from './mapapp/map-controll/map-controll.component'


const routes: Routes = [

  {path: 'home',component : TopBarComponent,
  children:[{path : '',component : HomeComponent}]},


  {path : 'map', component : MapappComponent,
    children:[{path :'', component:MapControllComponent}]
  },

  {
    path :'signup',component : TopBarComponent,
    children :[{ path : '',component: SignUpComponent }]
  },

  {
    path :'signin',component : TopBarComponent,
    children :[{ path : '',component: SignInComponent }]
  }, 

  {path:'person',component : TopBarComponent,
  children:[{path : '',component:PersoneComponent, canActivate:[AuthGuard]}]},

  {path :'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
