import { Component, OnInit ,Input, EventEmitter, Output, Directive} from '@angular/core';
import { RequestService } from '../../../services/RequestService';
import { Direction } from '../../../models/Direction';
import { HttpErrorResponse } from '@angular/common/http';
import {  HostListener } from '@angular/core';
import { MapappComponent } from '../../mapapp.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  @Input() direction : Direction
  @Output() deleteDir: EventEmitter<Direction> = new EventEmitter();
  isRequestError: boolean = false;
  activeIds: string[] = [];
  dirId:string;
  images

  constructor(private rr:MapappComponent, private req: RequestService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 60000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  
  ngOnInit(): void {
    this.rr.currentMessage.subscribe(
      dirId=>{
        if(dirId==this.direction.id){
          this.dirId=dirId;
          this.activeIds = ["id12"];
          this.direction.visible = true;
        }
         
      }
      
      );
      this.rr.currentMessageClose.subscribe(
        dirId=>{
          if(dirId==this.direction.id){
            this.dirId=dirId;
            this.activeIds = [];
            this.direction.visible = false;
          }
           
        }
      );
     
      this.images = this.direction.images;
  }
  setClasses(){
    let classes = {
        direction: true,
        'visible': this.direction.visible,
        stopover: false,
    }
    return classes
  }
  delete(direction){
    this.deleteDir.emit(direction);
  }

  showHide(){
    this.direction.visible = !this.direction.visible;
  }
 
  showHide1(){ 
    console.log("Fered");
    
  }

  addtoFavorites(direction:Direction){
    var dir = new Direction();
    dir.id = direction.id;
    dir.description = direction.description;
    dir.destination = direction.destination;
    dir.origin = direction.origin;
    dir.title = direction.title;
    dir.travelMode = direction.travelMode;
    dir.username = direction.username;
    
    
    if(direction.type){
      dir.intermidiatePoints = [];
      for(var i=0;i<direction.waypoints.length;i++){
        dir.intermidiatePoints[i] = direction.waypoints[i].location;
      }
    }
    
    console.log(dir);
    this.req.addToFovorites(dir).subscribe(
      (data : any)=>{
        
        console.log("Dir Added");
      },
      (err : HttpErrorResponse)=>{
        this.isRequestError = true;
        setTimeout( () => this.isRequestError = false , 2500 );     
    
  
      });
  }
}
