import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';
<<<<<<< HEAD
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

export interface RateUserElement {
  rateUsername: string;
  rateName: string;
=======

export interface RateUserElement {
  rateUsername: string;
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
  rateEmail: string;
  inactive: string;
  posiPoints: number;
  negPoints: number;
}

<<<<<<< HEAD
const ELEMENT_DATA: RateUserElement[] = [
=======
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
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
];

@Component({
  selector: 'app-rate-user',
  templateUrl: './rate-user.component.html',
  styleUrls: ['./rate-user.component.scss']
})
export class RateUserComponent implements OnInit {

<<<<<<< HEAD
  dataSource;
  displayedColumns: string[] = ['rateUsername','rateName' , 'rateEmail', 'inactive','posiPoints','negPoints'];
  
  userTargetI;
  userTargetA;
=======
  dataSource = new MatTableDataSource<RateUserElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['rateUsername', 'rateEmail', 'inactive','posiPoints','negPoints'];
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485

  //Validators:
  usernameInact = new FormControl('',[Validators.required]);
  usernameAct = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

<<<<<<< HEAD
  constructor(private req: RequestService) { }

  ngOnInit(): void {
    this.req.getAllUsers().subscribe(
      data=>{
        console.log(data);
        data.map(
          e=>{

            var val = "Não"
            if(e.properties.active_account.value) val="Sim";

            ELEMENT_DATA.push( {rateUsername: e.key.path[0].name, rateName: e.properties.user_name.value, rateEmail: e.properties.user_email.value, inactive:val , posiPoints:0, negPoints:0} );
          }
        );
        this.dataSource = new MatTableDataSource<RateUserElement>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;  
      },(err:HttpErrorResponse)=>{console.log(err)}
    );

    
=======
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
  }

  onSubmitInact(){
    const body={
<<<<<<< HEAD
      username: this.userTargetI
    }
    console.log(body);
    console.log(this.userTargetI)
    this.req.deactivateAccCommunity(body).subscribe(
      data=>{alert("A conta foi desactivada! The user account is inactive!");},(err:HttpErrorResponse)=>{ console.log(err)}
    );
    //Falta ligação com o servidor!
    
=======
      username: this.usernameInact.value.toString(),
     
    }
    //Falta ligação com o servidor!
    alert("A conta foi desactivada! The user account is inactive!");
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
  }

  onSubmitAct(){
    const body={
<<<<<<< HEAD
      username: this.userTargetA
    }

    this.req.activateAccCommunity(body).subscribe(
      data=>{alert("A conta foi activada! The user account is active!");},(err:HttpErrorResponse)=>{ console.log(err)}
    );    
=======
      username: this.usernameAct.value.toString(),
     
    }
    //Falta ligação com o servidor!
    alert("A conta foi activada! The user account is active!");
>>>>>>> 0c8d70f019b46d7b1181dab50c1779fdcbffb485
  }

}
