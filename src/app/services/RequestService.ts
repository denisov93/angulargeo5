import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { randomImages } from '../mapapp/mapapp.component'; //lixo
import { Direction } from '../models/Direction';
import { Data } from '@angular/router';
import { Url } from 'url';
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

    userReg='/rest/register/confirm';
    userRegist(body):Observable<JSON>{ 
      return this.http.post<JSON>(`${this.todosUrl}${this.userReg}`,body,httpOptions);
    }
    activateAcc='/rest/user/activateAccount';
    userActAcc(body):Observable<JSON>{
      return this.http.post<JSON>(`${this.todosUrl}${this.activateAcc}`,body,httpOptions);
    }

    getUser = '/rest/user/get';
    getUserInfo(body):Observable<JSON>{
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.getUser}`,body,httpOption);
    }

    updateUser = '/rest/update';
    updateUserInfo(body):Observable<JSON>{
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.updateUser}`,body,httpOption);
    }

    upUserNP = 'rest/update/v2';
    upUserNPInfo(body):Observable<JSON>{
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.upUserNP}`,body,httpOption);
    }
    
    getJwtToken() {
      return localStorage.getItem('tokenID');
    }

    getCams='/rest/route/user';
    getmyCams():Observable<JSON>{
      const uname = localStorage.getItem('username');
      const body={
        "username":uname
      }
      console.log(uname);
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.getCams}`,body,httpOption);
    }
    getCamsWSearch = '/rest/route/searchActive';
    searchWithKeyword(body):Observable<JSON>{
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }
      return this.http.post<JSON>(`${this.getCamsWSearch}`,body,httpOption);
    }

    getInfosOfPoint(urlSpls):Observable<Blob>{
      return this.http.get( urlSpls , { responseType: 'blob' });
    }

    admintype = '';
    registerAdmins(body,type:string):Observable<JSON>{
      switch(type){
        case "BO":{
          this.admintype = '/rest/backOffice/addBO'
          break;
        }
        case "BOM":{
          this.admintype = '/rest/backOffice/addBOM'
          break;
        }
        case "BOP":{
          this.admintype = '/rest/backOffice/addBOP'
          break;
        }
      }
      const httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('tokenID')}`
        })
      }

      return this.http.post<JSON>(`${this.admintype}`,body,httpOption);

    }
}