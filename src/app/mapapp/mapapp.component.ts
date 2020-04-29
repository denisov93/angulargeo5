import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, MouseEvent } from '@agm/core';
import { Url } from 'url';
import { RequestService } from '../services/RequestService';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mapapp',
  templateUrl: './mapapp.component.html',
  styleUrls: ['./mapapp.component.css']
})

export class MapappComponent implements OnInit {
    
  latitude: number = 38.661076;
  longitude: number = -9.205908;
  zoom:number;
  public origin: any
  public destination: any
  public travelMode: any
  public waypoints: any
  previous
  Options
  public show: boolean = false

  public removeDirection(){
    this.show = false
  }
  public showDirection(){
    this.show = true
  }

  markers = [
    {latitude: 38.657849552573595, longitude: -9.177789709716588,info:'this is 1'}, 
    {latitude: 38.6494375039336, longitude: -9.163289687782079,info:'this is 2'},
    {latitude: 38.66250759275842, longitude: -9.160076401382238,info:'this is 3'}
  ]  
  
  imagesRandom:randomImages[];

  public slides = [
    { src: "https://s1.1zoom.me/big0/703/Planets_Trees_Night_576489_1280x800.jpg" },
    { src: "https://s1.1zoom.me/big0/324/USA_Coast_Oregon_coast_sea_Crag_Trees_576509_1280x791.jpg" },
    { src: "https://s1.1zoom.me/big0/205/Greece_Sunrises_and_sunsets_Coast_Korfu_Crag_Rays_575551_1280x853.jpg" },
    { src: "https://s1.1zoom.me/big0/307/Forests_Autumn_Trees_Rays_of_light_575453_1280x720.jpg" }
  ];
  
  constructor(
    private req:RequestService, 
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, 
    public translate: TranslateService
)
{  
    translate.addLangs(['pt','en']); 
    translate.setDefaultLang(localStorage.getItem('language'));  
}
  
  ngOnInit(): void {
    this.setCurrentLocation();
    this.getDirection()
    this.req.getTodos().subscribe(reqw => {
      this.imagesRandom = reqw;
      //reqw.forEach(randomImages, index: number, array: randomImages[])
      console.log(reqw);
    });
   
  }


  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
  }


 public infoOptionLat: any
 public infoOptionLng: any

 public show2: boolean = false;
 
 //right click display Options
  getOptions($event: MouseEvent, inf){  
  this.infoOptionLat = $event.coords.lat;
  this.infoOptionLng = $event.coords.lng;
  if(this.show2){
    inf.close();
  }else inf.open();
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
getDirection() {
  this.travelMode = "WALKING" //WALKING TRANSIT BICYCLING DRIVING 
  this.origin = { lat: 38.661076, lng: -9.205908 }
  this.destination = { lat: 38.66250759275842, lng: -9.160076401382238 }
  this.waypoints = [
    {location: {lat: 38.664092,lng: -9.196742}},
    {location: {lat: 38.661202,lng: -9.185289}}
  ]
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