import { Component, OnInit } from '@angular/core';
import { MapappComponent } from '../mapapp.component';

import { Direction } from '../../models/Direction';
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';
import { Etty } from 'src/app/models/Etty';

@Component({
  selector: 'app-caminho',
  templateUrl: './caminho.component.html',
  styleUrls: ['./caminho.component.css']
})
export class CaminhoComponent implements OnInit {
  directions:Direction[];
  isFavError: boolean = false;
  loadingFav: boolean = false;
  constructor(private t:MapappComponent,private req: RequestService) { }

  ngOnInit(): void {
    this.directions = this.t.waywayway;    
  }

  
  public displayCaminho: boolean = true;

  toggleDisplay(){
    this.displayCaminho = !this.displayCaminho;
  }

  deleteDir(direction:Direction){
    this.directions = this.directions.filter(tr => tr !== direction);

    
    this.t.waywayway = this.directions;

    this.t.saveDirections();

  }
  getAllMyRoutes(){
    this.req.getmyCams().subscribe(
  
      (data : any )=>{

    data.forEach( (element: Etty) => {
     const mf = new Direction();
     mf.travelMode = "WALKING";
    mf.destination = 
    {
      lat: parseFloat(  element.properties.route_end_lat.value.valueOf() ),
      lng: parseFloat(  element.properties.route_end_lon.value.valueOf())
    };
    mf.origin = 
    {
      lat: parseFloat(  element.properties.route_start_lat.value.valueOf()) ,
      lng: parseFloat(  element.properties.route_start_lon.value.valueOf())
    };
     
     this.t.waywayway.push(mf);
    });
    this.t.saveDirections();
    this.loadingFav = true;
    setTimeout(()=>this.loadingFav = false,1000);
},
(err : HttpErrorResponse)=>{
 this.isFavError = true;
});
}

}
