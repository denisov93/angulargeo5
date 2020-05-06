import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  public username = "John Doe";
  public profession = "Eng";
  public ranking = "Expert Geo";
  public email = "JohnDoe@gmail.com";
  public phonenumber = "000000000";
  public city = "Almada";
  public country = "Portugal";
  public numberP = 1111;

  constructor( public translate: TranslateService,) { 
    translate.addLangs(['pt','en']); 
    translate.setDefaultLang(localStorage.getItem('language'));
  }

  ngOnInit(): void {
  }

}
