import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';
import { MapappComponent } from '../mapapp.component';
import { DirectionWhithWaypoints } from 'src/app/models/DirectionWithWaypoints';

import { latLon } from 'src/app/models/latLon';

@Component({
  selector: 'app-map-controll',
  templateUrl: './map-controll.component.html',
  styleUrls: ['./map-controll.component.css']
})
export class MapControllComponent implements OnInit {
  @Input() dirW : DirectionWhithWaypoints
  @Output() delDirW: EventEmitter<DirectionWhithWaypoints> = new EventEmitter();
  @Output() addDirW: EventEmitter<DirectionWhithWaypoints> = new EventEmitter();


  public oksT:boolean = true;
  public flagone:boolean = false;
  public flagtwo:boolean = false;
  public flagtree:boolean = false;

  public isRequestError:boolean = false;
  public cams: any[];

  public infosOfPoint: any;

  public origin: latLon;
  public dest: latLon;
  public wayPoints: latLon[]= [];
  

  constructor(private req: RequestService ,private map: MapappComponent) {
   }

  ngOnInit(): void {
  }
 
  arr: any;
  createArrFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.arr = reader.result;
      // console.log(reader.result);
    }, false);

    if (image) {
      reader.readAsArrayBuffer(image);
    }

  }

  startOne(){
    this.flagone=true;
    this.map.showMarker = true;
  }
  setOrigin(){
    this.wayPoints.push( 
      {
      lat: this.map.latitudeM,
      lng: this.map.longitudeM 
    }
    );
    this.flagtwo = true;
  }
  setWay(){
    this.wayPoints.push(
      {
        lat: this.map.latitudeM,
        lng: this.map.longitudeM
      }
    );
  }
  setDest(){
    this.wayPoints.push( 
      {
      lat: this.map.latitudeM ,
      lng: this.map.longitudeM 
    }
    );
 console.log( this.wayPoints);
  this.map.paintMap(this.wayPoints);
  }

imageToShow: any;
isImageLoading:boolean = false;
createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
      var img = new Image();
      img.src = this.imageToShow;
      var canvas = <HTMLCanvasElement> document.getElementById("mycanvas");
      var ctx = canvas.getContext("2d");
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        var pixel = ctx.getImageData(0,0,1,1);
        console.log(pixel.data[0],pixel.data[1],pixel.data[2],pixel.data[3]);
  
      }
   }, false);

   if (image) {
      reader.readAsDataURL(image);
    }
}

urlSpls = 'http://maps.googleapis.com/maps/api/staticmap?center=38.57546452749099,-9.204723923867316&zoom=16&size=1x1&maptype=roadmap&sensor=false&key=AIzaSyBY1VATzvx85tm56FL0C4Agf_gojmbE_XI'

  getInfosOfPoint(){
    this.isImageLoading = true;
    this.req.getInfosOfPoint(this.urlSpls).subscribe(
      data => {
        this.createImageFromBlob(data);
        this.createArrFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
    
  }

setUnexploredRoute(){
  
}
  getAllMyRoutes(){
    this.req.getmyCams().subscribe(
      (data : any)=>{
        this.cams = data;
        console.log("Dir recieved");
      },
      (err : HttpErrorResponse)=>{
        this.isRequestError = true;
        setTimeout( () => this.isRequestError = false , 2500 );     
      });
  }
  

}
