import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { randomImages } from '../mapapp/mapapp.component'; //lixo
import { Direction } from '../models/Direction';
import { Data } from '@angular/router';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  @Injectable({
    providedIn: 'root'
  })
export class RequestService {

  url = 'https://picsum.photos/v2/list?page=2&limit=1'; //lixo
   
  getTodos():Observable<randomImages[]> { //lixo
    return this.http.get<randomImages[]>(`${this.url}`);
    }
      
    
  isLoggedIn() {
      return !!this.getJwtToken();
  }
  

    todosUrl:string = '';

    todosLimit = '?_limit=5';
    forecast:string = '';


    constructor(private http:HttpClient) {
      
      if( window.location.origin == "http://localhost:4200"){
        this.todosUrl = "https://apdc-geoproj.ey.r.appspot.com";
      }
     
     }

     addToFav = '/rest/route/submit';
     addToFovorites(direction:Direction):Observable<JSON>{
       
        const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.addToFav}`,direction,httpOption);
     }


    ping() {
      this.http.get("http://example.com/api/things").subscribe(
        data => console.log(data),
        err => console.log(err)
      );
    }

    userLogs='/rest/login/user';
    getlogs( me : any ):Observable<string[]>{
        return this.http.post<string[]>(`${this.todosUrl}${this.userLogs}`,me,httpOptions);
    }

    userlogin='/rest/login';
    userAuthentication(body):Observable<JSON>{  
      
      
      return this.http.post<JSON>(`${this.todosUrl}${this.userlogin}`,body,httpOptions);
    }

    userlogout='/rest/logout';
    logOutUser(token){
      return this.http.post<JSON>(`${this.todosUrl}${this.userlogout}`,token,httpOptions);
    }

    userReg='/rest/register';
    userRegist(body):Observable<JSON>{ 
      return this.http.post<JSON>(`${this.todosUrl}${this.userReg}`,body,httpOptions);
    }
    
    getJwtToken() {
      return localStorage.getItem('tokenID');
    }

    getCams="'/rest/route/user";
    getmyCams(){
      const thisss ={};
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.getCams}`,thisss,httpOption);
    }
    
/*
    urlSpls = 'http://maps.googleapis.com/maps/api/staticmap?center=38.658598517398275,-9.166824321240243&zoom=16&size=50x50&maptype=roadmap&sensor=false&key=AIzaSyBY1VATzvx85tm56FL0C4Agf_gojmbE_XI'
    getInfosOfPoint(){
      return this.http.put(this.urlSpls).subscribe(
                  
        ( data: ImageData) => { 
          console.log(data.data); 
        }
      )
      ;
    }
*/

}