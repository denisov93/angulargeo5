import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-admin-default',
  templateUrl: './admin-default.component.html',
  styleUrls: ['./admin-default.component.scss']
})
export class AdminDefaultComponent implements OnInit {

  sideBarOpen = true;
  l: string;

  constructor(private router:Router,public jwtHelper: JwtHelperService, public translate: TranslateService) { 
    translate.addLangs(['pt','en']);
  }

  ngOnInit(): void {

    this.l = localStorage.getItem('language');
    if(this.l==null){
      this.l='pt';
    } 

    localStorage.setItem('language',this.l);
    this.translate.setDefaultLang(this.l);

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
