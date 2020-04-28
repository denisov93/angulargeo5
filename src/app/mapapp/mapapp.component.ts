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
  imagesRandom:randomImages[];    
  latitude: number = 38.661076;
  longitude: number = -9.205908;
  zoom:number;
  previous;
  public origin: any
  public destination: any
  public travelMode: any
  markers = [
    {latitude: 38.657849552573595, longitude: -9.177789709716588,info:'this is 1'}, 
    {latitude: 38.6494375039336, longitude: -9.163289687782079,info:'this is 2'},
    {latitude: 38.66250759275842, longitude: -9.160076401382238,info:'this is 3'}
  ]

  constructor(private req:RequestService, private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone){    }
  
  
  ngOnInit(): void {
    this.setCurrentLocation(); 
    this.getDirection()
    this.travelMode = 'WALKING'  //DRIVING  BICYCLING TRANSIT 
  }
  getDirection() {
    this.origin = { lat: 38.661076, lng: -9.205908 }
    this.destination = { lat: 38.66250759275842, lng: -9.160076401382238 }
  }

// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
    });
  }
}

clickedMarker(infowindow) {
  if (this.previous) {
      this.previous.close();
  }
  this.previous = infowindow;
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

/*  part of Init
    this.req.getTodos().subscribe(reqw => {
      this.imagesRandom = reqw;
      console.log(reqw);
    });
  */ 

/* maybe new method form
markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}
*/