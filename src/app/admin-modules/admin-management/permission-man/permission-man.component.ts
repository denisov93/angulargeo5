import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export interface UserElement {
  username: string;
  email: string;
  role: string;
}

const ELEMENT_DATA: UserElement[] =[
  {username: 'Luis', email: 'luis@dashboard.com', role: 'User'},
  {username: 'Manuel', email: 'manuel@dashboard.com', role: 'User'},
  {username: 'Pedro', email: 'pedro@dashboard.com', role: 'User'},
  {username: 'Maria', email: 'maria@dashboard.com', role: 'User'},
  {username: 'Sara', email: 'sara@dashboard.com', role: 'Routes Admin'},  
  {username: 'Alex', email: 'alex@dashboard.com', role: 'Routes Admin'},
  {username: 'Edson', email: 'edson@dashboard.com', role: 'Comunity Moderator'},
  {username: 'Andre', email: 'andre@dashboard.com', role: 'Comunity Moderator'},
  {username: 'Alexandre', email: 'manuel@dashboard.com', role: 'Routes Admin'},
  {username: 'GEO5Sol', email: 'geo5sol@dashboard', role: 'Super Admin'},
];

@Component({
  selector: 'app-permission-man',
  templateUrl: './permission-man.component.html',
  styleUrls: ['./permission-man.component.scss']
})
export class PermissionManComponent implements OnInit {

  dataSource = new MatTableDataSource<UserElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['username', 'email', 'role'];
  selectedValue: string;

  //Validators:
  email = new FormControl('', [Validators.required]);
  username = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onSubmit(){

    const body={
       username: this.username.value.toString(),
       email: this.email.value.toString(),
       role: this.selectedValue
     }
     alert("A função do Administrador foi atualizada! The Admin role was updated successfully!");
     //Falta fazer a lig com o servidor!!
  }

  onCancel(){
    setTimeout( () => this.router.navigate(['/admin']) , 100 );
  }
}
