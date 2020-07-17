import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-default',
  templateUrl: './admin-default.component.html',
  styleUrls: ['./admin-default.component.scss']
})
export class AdminDefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor(private router:Router,public jwtHelper: JwtHelperService ) { }

  ngOnInit(): void {


    const helper = new JwtHelperService();    
   // const decodedToken = helper.decodeToken(localStorage.getItem('tokenID'));
    //console.log(decodedToken);
    var date = new Date();
      if(this.jwtHelper.isTokenExpired(localStorage.getItem('tokenID'))){
      localStorage.removeItem('tokenID');
      this.router.navigate(['/signin']);
    }
   }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
