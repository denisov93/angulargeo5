import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  l: string;
  constructor(  public translate: TranslateService) 
  {
    translate.addLangs(['pt','en']);
    this.l = localStorage.getItem('language');
    if(this.l===null)
    this.l='pt';
    translate.setDefaultLang(this.l);
  }

  ngOnInit(): void {
  }

  switchLang(lang: string) {
    localStorage.setItem('language',lang);
    this.translate.use(lang);
  }
}
