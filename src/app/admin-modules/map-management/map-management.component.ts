import {Component, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AgmCoreModule ,MouseEvent, LatLng} from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { numberFormat } from 'highcharts';
import Utm from 'geodesy/utm.js';
import Dms from 'geodesy/dms.js';

@Component({
  selector: 'app-map-management',
  templateUrl: './map-management.component.html',
  styleUrls: ['./map-management.component.css']
})
export class MapManagementComponent {

  //Copy paste do Form do mapa...

  @Output() newDirectionAdded: EventEmitter<boolean> = new EventEmitter();
  @Output() moved: EventEmitter<LatLng> = new EventEmitter();
  @ViewChild('labelImport')
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;

  titleDesc:FormGroup;
  title :string;
  description: string;


  markerDragable = true;
  descriptionChanged = true;
  imagesAddedtoSend = true;

  latitude: number; longitude:number; latitudeM: number; longitudeM: number; zoom:number;

  constructor(private router:Router) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.setCurrentLocation();
    

  }
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }


  import(): void {
    var ss = '';
 
    const reader = new FileReader();
    reader.onload = function(event) {
      ss = event.target.result.toString();
      var start = ss.lastIndexOf("<coordinates>");
      var end = ss.lastIndexOf("</coordinates>");
      var smore = ss.slice(start,end);
      var startn = smore.indexOf("-");
      var allmixup = smore.slice(startn);
      var ordered = [];
      
      ordered = allmixup.split('\n');
      var orderedWtoSpace = [];
      ordered.forEach(element => { 
          orderedWtoSpace.push(element.trim().split(","));
      });
      orderedWtoSpace.pop();
      localStorage.setItem("mySpecialDir",JSON.stringify(orderedWtoSpace));
      
    };
    
    reader.readAsText(this.fileToUpload);
    
    this.newDirectionAdded.emit(true);
       
  }


  private setCurrentLocation() {
    const posMLat = localStorage.getItem("posMLat");
    const posMLng = localStorage.getItem("posMLng");
    if(posMLat==null){
   /* if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.latitudeM = position.coords.latitude;
        this.longitudeM = position.coords.longitude;
  
        this.zoom = 15;
      });
    }else { 
      */
        this.latitudeM = 38.660109;
        this.longitudeM = -9.203209;
        this.latitude = 38.660109;
        this.longitude = -9.203209;

        this.zoom = 8;
    
  } else{
    this.latitudeM = parseFloat(posMLat);
    this.longitudeM = parseFloat(posMLng);
    this.latitude = parseFloat(posMLat);
    this.longitude = parseFloat(posMLng);
    this.zoom = 8;
  
    }
  }

  markerDragableChange(){    
    this.markerDragable = !this.markerDragable;
    console.log("changed to "+this.markerDragable)
  }

  descriptionChange(){
    this.descriptionChanged = !this.descriptionChanged;
    console.log("changed to "+this.descriptionChanged)
  }

  imagesAddedtoSendChange(){
    this.imagesAddedtoSend = !this.imagesAddedtoSend;
    console.log("changed to "+this.imagesAddedtoSend)
  }

  setTitDesc(Title,Description){
    this.title = Title.value;
    this.description = Description.value;
  }

  markerDragEnd($event: MouseEvent) {
    this.latitudeM = $event.coords.lat;
    this.longitudeM = $event.coords.lng;
    localStorage.setItem("posMLat",this.latitudeM.toString());
    localStorage.setItem("posMLng",this.longitudeM.toString()); 
  }
  getlatLngF(Latitude,Longitude){

    if(Latitude!=null&&Longitude!=null){
     
    this.latitudeM = Latitude.value;
    this.longitudeM = Longitude.value;
    this.latitude = Latitude.value;
    this.longitude = Longitude.value;  
    localStorage.setItem("posMLat",this.latitudeM.toString());
    localStorage.setItem("posMLng",this.longitudeM.toString());
    }
  }

  getLatLngDms(N,W){
    
    const Ndms = Dms.parse(N.value);
    const Wdms = Dms.parse(W.value);

    this.latitudeM = Ndms;
    this.longitudeM = Wdms;
    this.latitude = Ndms;
    this.longitude = Wdms;  
    localStorage.setItem("posMLat",this.latitudeM.toString());
    localStorage.setItem("posMLng",this.longitudeM.toString());

  }

  getlatLng($event){
    var input = $event;
    //var inp =<HTMLInputElement> document.getElementById("place");
    var autocomplete = new google.maps.places.Autocomplete(input);
    var place;
    autocomplete.addListener('place_changed', function() {
      place = autocomplete.getPlace();
      if(place.geometry){
        localStorage.setItem("posMLat",place.geometry.location.lat());
        localStorage.setItem("posMLng",place.geometry.location.lng());
      }
     
    });

    this.setCurrentLocation();
  }

  imageToShow:any;
  public imagePath;
  imgURL: any;
  images:any[];
  imageSend=false;
  filesToUpload: FileList = null;


  onFileChangeS(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.filesToUpload = files;
  }



  importImages():void{

    var reader = new FileReader();
    this.imagePath = this.filesToUpload;

    reader.readAsDataURL(this.filesToUpload[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }

    const arrayOfBase64 = fileListToBase64(this.filesToUpload);
   
    arrayOfBase64.then(data => {
      this.images = data;
      this.imageSend = true;
      
  });
  }


  SubmitGeoStop(){
    window.alert("Submited!");
   
    var toS:toSend ={
      images: this.filesToUpload[0],
      title:this.title,
      description:this.description,
      location:{
        lat:this.latitudeM,
        lng:this.longitudeM
      }
    }
   
    console.log(toS);
  }

  newInfoNotice( Title, Description, GeoMapLink, ExplicativeNotice){
    if(Title!=null && Description!=null && GeoMapLink!=null && ExplicativeNotice!=null){
      var th = {
        title: Title.value,
        description: Description.value,
        mapL: GeoMapLink.value,
        mapExp: ExplicativeNotice.value,
        location:{
          lat:this.latitudeM,
          lng:this.longitudeM
        }
      }

      console.log(th);

    }
  }


}
export interface toSend{
  
    images: File,
    title:string,
    description:string,
    location:{
       lat:number,
       lng:number
    }

}


export async function fileListToBase64(fileList) {
  // create function which return resolved promise
  // with data:base64 string
  function getBase64(file) {
    const reader = new FileReader()
    return new Promise(resolve => {
      reader.onload = ev => {
        resolve(ev.target.result)
      }
      reader.readAsDataURL(file)
    })
  }
  // here will be array of promisified functions
  const promises = []

  // loop through fileList with for loop
  for (let i = 0; i < fileList.length; i++) {
    promises.push(getBase64(fileList[i]))
  }

  // array with base64 strings
  return await Promise.all(promises)
}
