import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, MouseEvent } from '@agm/core';
import { Url } from 'url';
import { RequestService } from '../services/RequestService';

@Component({
  selector: 'app-mapapp',
  templateUrl: './mapapp.component.html',
  styleUrls: ['./mapapp.component.css']
})
export class MapappComponent implements OnInit {
    
  latitude: number = 38.661076;
  longitude: number = -9.205908;
  zoom:number;
    
  
  imagesRandom:randomImages[];

    constructor(private req:RequestService, private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone){    }
  
  
  ngOnInit(): void {
    this.setCurrentLocation();

 /*   this.req.getTodos().subscribe(reqw => {
      this.imagesRandom = reqw;
      console.log(reqw);
    });
   */ 
  }

// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
    });
  }
}

markerDragEnd($event: MouseEvent) {
  console.log($event);
  this.latitude = $event.coords.lat;
  this.longitude = $event.coords.lng;
  
}

}
export class randomImages {
      id : number;
      author: string;
      width: number;
      height: number;
      url: Url;
      download_url: Url
}