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

  public slides = [
    { src: "https://s1.1zoom.me/big0/703/Planets_Trees_Night_576489_1280x800.jpg" },
    { src: "https://s1.1zoom.me/big0/324/USA_Coast_Oregon_coast_sea_Crag_Trees_576509_1280x791.jpg" },
    { src: "https://s1.1zoom.me/big0/205/Greece_Sunrises_and_sunsets_Coast_Korfu_Crag_Rays_575551_1280x853.jpg" },
    { src: "https://s1.1zoom.me/big0/307/Forests_Autumn_Trees_Rays_of_light_575453_1280x720.jpg" }
  ];
  
  constructor(private req:RequestService, private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone){    }
  
  
  ngOnInit(): void {
    this.setCurrentLocation();

    this.req.getTodos().subscribe(reqw => {
      this.imagesRandom = reqw;
      //reqw.forEach(randomImages, index: number, array: randomImages[])
      console.log(reqw);
    });
   
  }

// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
      console.log(position);
      console.log(this.latitude, this.longitude);
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