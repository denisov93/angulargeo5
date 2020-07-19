import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

export interface RouteCommentElement {
  routeCommId: string;
  usernameR: string;
  routeName: string;
  routeComment: string;
}


@Component({
  selector: 'app-route-comm',
  templateUrl: './route-comm.component.html',
  styleUrls: ['./route-comm.component.scss']
})
export class RouteCommComponent implements OnInit {

  ELEMENT_DATA: RouteCommentElement[] =[];
  dataSource;
  displayedColumns: string[] = ['routeCommId', 'usernameR', 'routeName', 'routeComment'];

   //Validators:
   commentId = new FormControl('', [Validators.required]);
   badUsername = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router, private req: RequestService) { }

  ngOnInit(): void {
    this.req.getAllActiveCommentRoute().subscribe(
      data=>{
        var arr:RouteCommentElement[]=[];
        data.map(
          e=>{
            arr.push( { routeCommId: e.commentID , usernameR: e.username , routeName: e.routeID , routeComment: e.content } );
          }
        );
        this.dataSource = new MatTableDataSource<RouteCommentElement>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },(err:HttpErrorResponse)=>{console.log(err)}
    );

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
