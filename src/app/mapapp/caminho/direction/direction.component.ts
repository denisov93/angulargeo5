import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { RequestService } from '../../../services/RequestService';
import { Direction } from '../../../models/Direction';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  @Input() direction : Direction
  @Output() deleteDir: EventEmitter<Direction> = new EventEmitter();
  isRequestError: boolean = false;

  constructor( private req: RequestService ) { }

  ngOnInit(): void {
  }
  setClasses(){
    let classes = {
        direction: true,
        'visible': this.direction.visible
    }
    return classes
  }
  delete(direction){
    this.deleteDir.emit(direction);
  }
  showHide(){
    this.direction.visible = !this.direction.visible;
  }

  addtoFavorites(direction){
    this.req.addToFovorites(direction).subscribe(
      (data : any)=>{
        
        console.log("Dir Added");
      },
      (err : HttpErrorResponse)=>{
        this.isRequestError = true;
        setTimeout( () => this.isRequestError = false , 2500 );     
    
  
      });
  }
}
