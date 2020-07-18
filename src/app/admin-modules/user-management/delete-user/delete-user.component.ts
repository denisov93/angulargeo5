import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
<<<<<<< HEAD
import { HttpErrorResponse } from '@angular/common/http';
import { RequestService } from 'src/app/services/RequestService';
=======
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485

export interface DelUserElement {
  deleteUsername: string;
  deleteName: string,
<<<<<<< HEAD
  deleteEmail: string,
  deleteRole:string
}

const ELEMENT_DATA: DelUserElement[] =[
 
=======
  deleteEmail: string;
}

const ELEMENT_DATA: DelUserElement[] =[
  {deleteUsername:'Luiz90', deleteName: 'Luis', deleteEmail: 'luis@dashboard.com'},
  {deleteUsername:'Manuel20', deleteName: 'Manuel', deleteEmail: 'manuel@dashboard.com'},
  {deleteUsername:'Pedro95', deleteName: 'Pedro', deleteEmail: 'pedro@dashboard.com'},
  {deleteUsername:'Mary15', deleteName: 'Maria', deleteEmail: 'maria@dashboard.com'},
  {deleteUsername:'Hoshi92', deleteName: 'Sara', deleteEmail: 'sara@dashboard.com'},  
  {deleteUsername:'AltoFire', deleteName: 'Alex', deleteEmail: 'alex@dashboard.com'},
  {deleteUsername:'Edson50', deleteName: 'Edson', deleteEmail: 'edson@dashboard.com'},
  {deleteUsername:'Roda90', deleteName: 'Andre', deleteEmail: 'andre@dashboard.com'},
  {deleteUsername:'Alexandre94',deleteName: 'Alexandre', deleteEmail: 'alexandre@dashboard.com'},
  {deleteUsername:'Geo5', deleteName: 'GEO5Sol', deleteEmail: 'geo5sol@dashboard.com'},
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
];

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
<<<<<<< HEAD
  dataSource;
  displayedColumns: string[] = ['deleteUsername', 'deleteName', 'deleteEmail', 'deleteRole'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router,private req: RequestService) { }

  ngOnInit(): void {
    this.req.getAllInactiveUsers().subscribe(
      data=>{
        console.log(data);
        data.map(
          e=>{
            ELEMENT_DATA.push( {deleteUsername: e.key.path[0].name, deleteName: e.properties.user_name.value, deleteEmail: e.properties.user_email.value, deleteRole: e.properties.user_role.value} );
          }
        );
        this.dataSource = new MatTableDataSource<DelUserElement>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;  
      },(err:HttpErrorResponse)=>{console.log(err)}
    );

    
=======

  dataSource = new MatTableDataSource<DelUserElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['deleteUsername', 'deleteName', 'deleteEmail'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
  }

  deleteAllU(){

    //Ver os campos necessarios e ligar ao servidor...
    alert("Os utilizadores inactivos foram apagados! The inactive users was deleted successfully!");
    setTimeout( () => this.router.navigate(['/admin']) , 100 );
  }

  cancel(){
    setTimeout( () => this.router.navigate(['/admin']) , 100 );
  }
}
