import { Component, OnInit, ViewChild, ElementRef, NgZone ,Renderer2 } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, MouseEvent } from '@agm/core';
import { Url } from 'url';
import { RequestService } from '../services/RequestService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mapapp',
  templateUrl: './mapapp.component.html',
  styleUrls: ['./mapapp.component.css']
})

export class MapappComponent implements OnInit {
    
  latitude: number
  longitude: number
  zoom:number;
  previous
  Options
  public show: boolean = false
  srt: any;
  latitudeM: number;
  longitudeM: number;

  public removeDirection(){
    this.show = false
  }
  public showDirection(){
    this.show = true
  }

  imagesRandom:randomImages[];

  constructor(
    private req:RequestService,  
    public translate: TranslateService
)
{  
    translate.addLangs(['pt','en']); 
    translate.setDefaultLang(localStorage.getItem('language'));
    this.str = localStorage.getItem("onMainPage");  
}
 str;
  ngOnInit(): void {
      
    if( this.srt === null || this.str =="true"){
      this.ChangeOnMainPageT();
    }
    else{
      this.ChangeOnMainPageF();
    }
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

  onMainPage:boolean;

  ChangeOnMainPageT(){
    localStorage.setItem("onMainPage","true");
    this.onMainPage = true;
  }
  ChangeOnMainPageF(){
    localStorage.setItem("onMainPage","false");
    this.onMainPage = false;
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
      this.latitudeM = position.coords.latitude;
      this.longitudeM = position.coords.longitude;

      this.zoom = 15;
    });
  }
}

markerDragEnd($event: MouseEvent) {
  this.latitudeM = $event.coords.lat;
  this.longitudeM = $event.coords.lng;
  
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
// this is an Start of Routine Define new Way
newDefInc=true
newDef1=false;
newDef2=false;
definirCaminho(){
  this.newDefInc =false;
  this.newDef2=true;
}
//Def way 2nd part
definirC2(){
  
}

public waywayway = [
{
  travelMode:"WALKING",
  origin:{lat: 42.030742, lng: -8.1594},
  destination:{lat: 42.031645,lng: -8.161525},
  waypoints:[
    {location: {lat: 42.03107,lng: -8.160093}},
    {location: {lat: 42.031072,lng: -8.161099}}
  ],
  visible:this.show
},
{
  travelMode:"WALKING", //WALKING TRANSIT BICYCLING DRIVING 
  origin:{ lat: 38.661076, lng: -9.205908 },
  destination: { lat: 38.66250759275842, lng: -9.160076401382238 },
  waypoints : [
    {location: {lat: 38.664092,lng: -9.196742}},
    {location: {lat: 38.661202,lng: -9.185289}}
  ],
  visible:this.show
}
]
//////////////////////////////////////////////////
public origin: any
public destination: any
public travelMode: any
public waypoints: any

markers = [
  {latitude: 38.657849552573595, longitude: -9.177789709716588,info:'this is 1'}, 
  {latitude: 38.6494375039336, longitude: -9.163289687782079,info:'this is 2'},
  {latitude: 38.66250759275842, longitude: -9.160076401382238,info:'this is 3'}
]  
public slides = [
  { src: "https://s1.1zoom.me/big0/703/Planets_Trees_Night_576489_1280x800.jpg" },
  { src: "https://s1.1zoom.me/big0/324/USA_Coast_Oregon_coast_sea_Crag_Trees_576509_1280x791.jpg" },
  { src: "https://s1.1zoom.me/big0/205/Greece_Sunrises_and_sunsets_Coast_Korfu_Crag_Rays_575551_1280x853.jpg" },
  { src: "https://s1.1zoom.me/big0/307/Forests_Autumn_Trees_Rays_of_light_575453_1280x720.jpg" }
];
}
export class randomImages {
      id : number;
      author: string;
      width: number;
      height: number;
      url: Url;
      download_url: Url
}