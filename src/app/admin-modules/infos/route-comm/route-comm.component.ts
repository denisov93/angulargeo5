import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface RouteCommentElement {
  routeCommId: string;
  usernameR: string;
  geostopName: string;
  routeComment: string;
}

const ELEMENT_DATA: RouteCommentElement[] =[
  {routeCommId: '1A', usernameR: 'Luis', geostopName: 'Gruta Mira de Aire', routeComment: '#@&!#$%!'},
  {routeCommId: '2B', usernameR: 'Manuel', geostopName: 'Pedra da Mua', routeComment: '#@&!#$%!'},
  {routeCommId: '3C', usernameR: 'Pedro', geostopName: 'Fojo dos Morcegos', routeComment: '#@&!#$%!'},
  {routeCommId: '4D', usernameR: 'Maria', geostopName: 'Gruta do Frade', routeComment: '#@&!#$%!'},
  {routeCommId: '5E', usernameR: 'Sara', geostopName: 'Peninha', routeComment: '#@&!#$%!'},  
  {routeCommId: '6F', usernameR: 'Alex', geostopName: 'Serra de Sintra', routeComment: '#@&!#$%!'},
  {routeCommId: '7G', usernameR: 'Edson', geostopName: 'Serra da Arrabida', routeComment: '#@&!#$%!'},
  {routeCommId: '8H', usernameR: 'Andre', geostopName: 'Poço Iniciático', routeComment: '#@&!#$%!'},
  {routeCommId: '9I', usernameR: 'Alexandre', geostopName: 'Padrão dos Descobrimentos', routeComment: '#@&!#$%!'},
  {routeCommId: '10J', usernameR: 'GEO5Sol', geostopName: 'Arriba Fóssil da Arrábida', routeComment: '#@&!#$%!'},
];

@Component({
  selector: 'app-route-comm',
  templateUrl: './route-comm.component.html',
  styleUrls: ['./route-comm.component.scss']
})
export class RouteCommComponent implements OnInit {

  dataSource = new MatTableDataSource<RouteCommentElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['routeCommId', 'usernameR', 'routeName', 'routeComment'];

   //Validators:
   commentId = new FormControl('', [Validators.required]);
   badUsername = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onSubmit(){

    //Para desativar o comentario
    const body1={
      commentId: this.badUsername.value.toString(),
    }
    //Fazer ligação ao servidor

    //Para atribuir os pontos negativos ao utilizador
    const body2={
       badusername: this.badUsername.value.toString(),
     }
     //Fazer ligação ao servidor
     alert("O utilizador foi sancionado e o comentário desactivado! The user has been sanctioned and the comment has been disabled!");
  }

  cancel(){
    setTimeout( () => this.router.navigate(['/admin']) , 100 );
  }

}
