import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface CommentElement {
  id: string;
  usernameW: string;
  emailW: string;
  usernameRep:String
  emailRep: string;
  comment: string;
}

const ELEMENT_DATA: CommentElement[] =[
  {id: '1A', usernameW: 'Luis', emailW: 'luis@dashboard.com', usernameRep:'GEO5Sol', emailRep: 'geo5sol@dashboard',comment: '#@&!#$%!'},
  {id: '2B', usernameW: 'Manuel', emailW: 'manuel@dashboard.com', usernameRep: 'Alexandre',emailRep: 'manuel@dashboard.com',comment: '#@&!#$%!'},
  {id: '3C', usernameW: 'Pedro', emailW: 'pedro@dashboard.com', usernameRep: 'Andre', emailRep: 'andre@dashboard.com', comment: '#@&!#$%!'},
  {id: '4D', usernameW: 'Maria', emailW: 'maria@dashboard.com', usernameRep: 'Edson', emailRep: 'edson@dashboard.com', comment: '#@&!#$%!'},
  {id: '5E', usernameW: 'Sara', emailW: 'sara@dashboard.com', usernameRep: 'Alex', emailRep: 'alex@dashboard.com', comment: '#@&!#$%!'},  
  {id: '6F', usernameW: 'Alex', emailW: 'alex@dashboard.com', usernameRep: 'Sara', emailRep: 'sara@dashboard.com', comment: '#@&!#$%!'},
  {id: '7G', usernameW: 'Edson', emailW: 'edson@dashboard.com', usernameRep: 'Maria', emailRep: 'maria@dashboard.com', comment: '#@&!#$%!'},
  {id: '8H', usernameW: 'Andre', emailW: 'andre@dashboard.com', usernameRep: 'Pedro', emailRep: 'pedro@dashboard.com', comment: '#@&!#$%!'},
  {id: '9I', usernameW: 'Alexandre', emailW: 'manuel@dashboard.com', usernameRep:'Manuel', emailRep: 'manuel@dashboard.com', comment: '#@&!#$%!'},
  {id: '10J', usernameW: 'GEO5Sol', emailW: 'geo5sol@dashboard', usernameRep: 'Luis', emailRep: 'luis@dashboard.com', comment: '#@&!#$%!'},
];

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}  
}
