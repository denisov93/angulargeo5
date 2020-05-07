import { Component, OnInit } from '@angular/core';
import { MapappComponent } from '../mapapp.component';

import { Direction } from '../../models/Direction';

@Component({
  selector: 'app-caminho',
  templateUrl: './caminho.component.html',
  styleUrls: ['./caminho.component.css']
})
export class CaminhoComponent implements OnInit {
  directions:Direction[];
  constructor(private t:MapappComponent) { }

  ngOnInit(): void {
    this.directions = this.t.waywayway;    
  }

  
  public displayCaminho: boolean = true;

  toggleDisplay(){
    this.displayCaminho = !this.displayCaminho;
  }

  deleteDir(direction:Direction){
    this.directions = this.directions.filter(tr => tr.id !== direction.id);

    
    this.t.waywayway = this.directions;

    this.t.saveDirections();

  }


}
