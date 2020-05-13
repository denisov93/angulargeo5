import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit {

  constructor( public translate: TranslateService,) { 
    translate.addLangs(['pt','en']); 
    translate.setDefaultLang(localStorage.getItem('language'));
  }
  ngOnInit() { }

}