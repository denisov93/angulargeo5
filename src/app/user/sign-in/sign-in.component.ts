import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import{ PersoneComponent } from '../../person/persone/persone.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;

  constructor(private request:RequestService,private router : Router, private person:PersoneComponent) { }

  ngOnInit(): void {
   // this.request.ping();

  }
  OnSubmit(userName,Password){
    const body={
      username:userName,
      password:Password
    }
    this.request.userAuthentication(body).subscribe((data : any)=>{
     console.log(data);
     
     localStorage.setItem('username',userName);
     localStorage.setItem('tokenID',data);

     this.person.getPersoneInfo();
     this.person.savePersone();
     setTimeout( () => this.router.navigate(['/person']) , 300 );     
    
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
  
 }
}
