import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Url } from 'url';
import { RequestService } from '../services/RequestService';

@Component({
  selector: 'app-mapapp',
  templateUrl: './mapapp.component.html',
  styleUrls: ['./mapapp.component.css']
})
export class MapappComponent implements OnInit {
    lat: number = 38.661076;
    lng: number = -9.205908;

    imagesRandom:randomImages[];

    constructor(private req:RequestService){    }
  
  
  ngOnInit(): void {
    this.req.getTodos().subscribe(reqw => {
      this.imagesRandom = reqw;
      console.log(reqw);
    });

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