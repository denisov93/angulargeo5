import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/RequestService';

export interface RateUserElement {
  rateUsername: string;
  rateEmail: string;
  inactive: string;
  posiPoints: number;
  negPoints: number;
}

const ELEMENT_DATA: RateUserElement[] =[
  {rateUsername: 'Luis', rateEmail: 'luis@dashboard.com', inactive:"Não", posiPoints:1000, negPoints:1500},
  {rateUsername: 'Manuel', rateEmail: 'manuel@dashboard.com', inactive:"Não", posiPoints:1000, negPoints:1500 },
  {rateUsername: 'Pedro', rateEmail: 'pedro@dashboard.com', inactive:"Sim", posiPoints:500, negPoints:1000},
  {rateUsername: 'Maria', rateEmail: 'maria@dashboard.com', inactive:"Sim", posiPoints:250, negPoints:500},
  {rateUsername: 'Sara', rateEmail: 'sara@dashboard.com', inactive:"Não", posiPoints:2000, negPoints:50},  
  {rateUsername: 'Alex', rateEmail: 'alex@dashboard.com', inactive:"Não", posiPoints:2500, negPoints:100},
  {rateUsername: 'Edson', rateEmail: 'edson@dashboard.com', inactive:"Sim", posiPoints:1500, negPoints:1000},
  {rateUsername: 'Andre', rateEmail: 'andre@dashboard.com', inactive:"Sim", posiPoints:1000, negPoints:2000},
  {rateUsername: 'Alexandre', rateEmail: 'manuel@dashboard.com', inactive:"Não", posiPoints:100, negPoints:0},
  {rateUsername: 'GEO5Sol', rateEmail: 'geo5sol@dashboard.com', inactive:"Não", posiPoints:0, negPoints:0},
];

@Component({
  selector: 'app-rate-user',
  templateUrl: './rate-user.component.html',
  styleUrls: ['./rate-user.component.scss']
})
export class RateUserComponent implements OnInit {

  dataSource = new MatTableDataSource<RateUserElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['rateUsername', 'rateEmail', 'inactive','posiPoints','negPoints'];

  //Validators:
  usernameInact = new FormControl('',[Validators.required]);
  usernameAct = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private req: RequestService) { }

  ngOnInit(): void {
    

    this.dataSource.paginator = this.paginator;
  }

  onSubmitInact(){
    const body={
      username: this.usernameInact.value.toString(),
     
    }
    //Falta ligação com o servidor!
    alert("A conta foi desactivada! The user account is inactive!");
  }

  onSubmitAct(){
    const body={
      username: this.usernameAct.value.toString(),
     
    }
    //Falta ligação com o servidor!
    alert("A conta foi activada! The user account is active!");
  }

}
