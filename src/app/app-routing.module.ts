import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './entrypoint/top-bar/top-bar.component';
import { MapappComponent } from './mapcomponent/mapapp/mapapp.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'main',component : TopBarComponent},
  {path : 'map', component : MapappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
