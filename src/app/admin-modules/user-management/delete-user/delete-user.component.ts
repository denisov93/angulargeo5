import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';
import { RequestService } from 'src/app/services/RequestService';

export interface DelUserElement {
  deleteUsername: string;
  deleteName: string,
  deleteEmail: string,
  deleteRole:string
}

const ELEMENT_DATA: DelUserElement[] =[
 
];

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
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
