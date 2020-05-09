import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-map-controll',
  templateUrl: './map-controll.component.html',
  styleUrls: ['./map-controll.component.css']
})
export class MapControllComponent implements OnInit {
  public oksT:boolean = false;
  public isRequestError:boolean = false;
  public cams: any[];

  constructor(private req: RequestService ) {
   }

  ngOnInit(): void {
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
