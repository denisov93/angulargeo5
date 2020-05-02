import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caminho',
  templateUrl: './caminho.component.html',
  styleUrls: ['./caminho.component.css']
})
export class CaminhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public displayCaminho: boolean = false;

  toggleDisplay(){
    this.displayCaminho = !this.displayCaminho;
  }


}
