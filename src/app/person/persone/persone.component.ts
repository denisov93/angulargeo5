import { Component, OnInit,  ViewEncapsulation } from '@angular/core';

import { RequestService } from 'src/app/services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';

import {User} from 'src/app/models/User';
import { username } from 'src/app/models/username';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersoneComponent implements OnInit {

  isUInfoError: boolean = false;
  userI: User = new User();  
  index:any;
  public picSrc = 'https://storage.cloud.google.com/apdc-geoproj.appspot.com/';

  constructor(private req: RequestService,public jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit(): void { 
    this.loadPersone(); 
    this.index = JSON.parse(localStorage.getItem("ProfileTabIdx"));

    const helper = new JwtHelperService();    
    // const decodedToken = helper.decodeToken(localStorage.getItem('tokenID'));
     //console.log(decodedToken);
     var date = new Date();
    // console.log(date.getMilliseconds()+1000*60*60);
     if(this.jwtHelper.isTokenExpired(localStorage.getItem('tokenID'),date.getMilliseconds())){
       localStorage.removeItem('tokenID');
       this.router.navigate(['/signin']);
     }
  }

  getPersoneInfo(){
    var us = localStorage.getItem("username");
 //   console.log(us);
    const body = new username();
    body.username = us;
  //  console.log(body);
    
    this.req.getUserInfo(body).subscribe(
  
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

          this.savePersone(); 
      },

      (err : HttpErrorResponse)=>{
        this.isUInfoError = true;}

    );
  }

  getPersoneProPic(){

    this.req.getUserProfPic().subscribe(
      (data:any)=>{
        this.picSrc = this.picSrc + `${data.file_name}`;
      }
    );


  }

  loadPersone(){
    const st = localStorage.getItem("userInfo");
    if(st=="{}" || st==null){
      this.getPersoneInfo();
      this.getPersoneProPic();
      setTimeout( ()=> 200);
    }
    else this.userI = JSON.parse(st);
  }

  savePersone(){
    localStorage.setItem("userInfo", JSON.stringify(this.userI));
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    localStorage.setItem("ProfileTabIdx", JSON.stringify(tabChangeEvent.index));
  }
  
}