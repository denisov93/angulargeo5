import { Component, OnInit } from '@angular/core';

import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

import {User} from 'src/app/models/User';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  isUInfoError: boolean = false;
  userI: User = new User();  

  constructor(private req: RequestService) { }

  ngOnInit(): void {  }

  getPersoneInfo(){
    this.req.getUserInfo().subscribe(
  
      (data : any )=>{
        
        this.userI.user_username = data.user_username;
        this.userI.user_name = data.user_name;
        this.userI.user_email = data.user_email;
        this.userI.user_role = data.user_role;
        if(data.user_street == ""){this.userI.user_street = "-";}
        else
          this.userI.user_street = data.user_street;
        if(data.user_place == ""){this.userI.user_place = "-";}
        else
          this.userI.user_place = data.user_place;
        if(data.user_country == ""){this.userI.user_country = "-";}
          else this.userI.user_country = data.user_country;
      },

      (err : HttpErrorResponse)=>{
        this.isUInfoError = true;}

    );
  }

  loadPersone(){
    const st = localStorage.getItem("userInfo");
    if(st==null){
      this.getPersoneInfo();
    }
    else this.userI = JSON.parse(st);
  }

  savePersone(){
    localStorage.setItem("userInfo", JSON.stringify(this.userI));
  }
}
