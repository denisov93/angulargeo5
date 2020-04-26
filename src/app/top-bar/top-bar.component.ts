import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 SignOut =
   {pt:"Sair",
   en:"Exit"}
  
  Language:string = 'pt'

  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
