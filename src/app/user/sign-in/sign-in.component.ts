import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/RequestService';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;

  constructor(private request:RequestService,private router : Router) { }

  ngOnInit(): void {
   // this.request.ping();
  }
  OnSubmit(userName,password){
    this.request.userAuthentication(userName,password).subscribe((data : any)=>{
     console.log(data);
     localStorage.setItem('password',password);
     localStorage.setItem('username',data.username);
     localStorage.setItem('tokenID',data.tokenID);
     this.router.navigate(['/person']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
   console.log();
 }
}
