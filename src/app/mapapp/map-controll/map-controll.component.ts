import { Component, OnInit } from '@angular/core';
import { MapappComponent } from '../mapapp.component';

@Component({
  selector: 'app-map-controll',
  templateUrl: './map-controll.component.html',
  styleUrls: ['./map-controll.component.css']
})
export class MapControllComponent implements OnInit {

  constructor(private comp:MapappComponent ) {
   }

  ngOnInit(): void {
   
  }

  removeDirection(){
    this.comp.removeDirection();
  }

  showDirection(){
    this.comp.showDirection();
  }
}
