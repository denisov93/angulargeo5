import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

export interface RateUserElement {
  rateUsername: string;
  rateName: string;
  rateEmail: string;
  inactive: string;
  posiPoints: number;
  negPoints: number;
}

const ELEMENT_DATA: RateUserElement[] = [
];

@Component({
  selector: 'app-rate-user',
  templateUrl: './rate-user.component.html',
  styleUrls: ['./rate-user.component.scss']
})
export class RateUserComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['rateUsername','rateName' , 'rateEmail', 'inactive','posiPoints','negPoints'];
  
  userTargetI;
  userTargetA;

  //Validators:
  usernameInact = new FormControl('',[Validators.required]);
  usernameAct = new FormControl('',[Validators.required]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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

    
  }

  onSubmitInact(){
    const body={
      username: this.userTargetI
    }
    console.log(body);
    console.log(this.userTargetI)
    this.req.deactivateAccCommunity(body).subscribe(
      data=>{alert("A conta foi desactivada! The user account is inactive!");},(err:HttpErrorResponse)=>{ console.log(err)}
    );
    //Falta ligação com o servidor!
    
  }

  onSubmitAct(){
    const body={
      username: this.userTargetA
    }

    this.req.activateAccCommunity(body).subscribe(
      data=>{alert("A conta foi activada! The user account is active!");},(err:HttpErrorResponse)=>{ console.log(err)}
    );    
  }

}
