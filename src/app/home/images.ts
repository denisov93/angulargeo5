import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'image-home',
    styleUrls: ['./home.component.css'],
    template: `
    <div class="section">
    <picture>
    <source media="(min-width: 1280px)" srcset="./assets/1024.jpg">
    <source media="(min-width: 900px)" srcset="./assets/bg.jpg">
    <source media="(min-width: 600px)" srcset="./assets/img_avatar.png">
    <img id="img"  alt="" src = './assets/img_avatar.png' >
 
  </picture>
  <div id = "text"><h2 id= "text2">GeoPlaces</h2></div>
  </div >
    `
  })
  export class ImageComponent  {
    constructor(public translate: TranslateService){

    }
  
      
  }