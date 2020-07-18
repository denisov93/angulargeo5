import { Component} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UserUpNPData } from 'src/app/models/UserUpNPData';
import { User } from 'src/app/models/User';
import { RequestService } from 'src/app/services/RequestService';
import { UserUpdateData } from 'src/app/models/UserUpdateData';

@Component({
  selector: 'app-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent {

  userInput = new UserUpdateData();
  isRequestError: boolean = false;
  
  //Validators...
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  nameControl = new FormControl('',[Validators.required, this.checkName]);
  birthdayControl = new FormControl('',[Validators.required]);
  passControl = new FormControl('',[Validators.required, this.checkPassword]);
  streetControl = new FormControl('',[Validators.required, this.checkStreet]);
  zipcodeControl = new FormControl('',[Validators.required, this.checkZipCode]);
  placeControl = new FormControl('',[Validators.required, this.checkPlaceAndCountry]);
  countryControl = new FormControl('',[Validators.required, this.checkPlaceAndCountry]);

  constructor(private request: RequestService, private router : Router) { }

  ngOnInit(): void { }

  // User Stored in the local storage.
  userI: User = JSON.parse(localStorage.getItem('userInfo'));
  userUpNoPass = new UserUpNPData();

  checkName(control){
    let enteredName = control.value;
    let nameCheck = /^(?=.*[a-z])(?=.{3,})/;
    return (!nameCheck.test(enteredName) && enteredName) ? { 'requirements': true } : null;
  }
  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }
  checkStreet(control){
    let enteredStreet = control.value;
    let streetCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=[0-9]{0,10})(?=.{8,45})/;
    return (!streetCheck.test(enteredStreet) && enteredStreet) ? { 'requirements': true } : null;
  }
  checkZipCode(control){
    let enteredzipcode = control.value;
    let zipcodeCheck = /^(?=[0-9]{4})(?=[0-9]{3})(?=.{8,})/;
    return (!zipcodeCheck.test(enteredzipcode) && enteredzipcode) ? { 'requirements': true } : null;
  }

  checkPlaceAndCountry(control){
    let enteredPlace = control.value;
    let placeCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.{3,25})/;
    return (!placeCheck.test(enteredPlace) && enteredPlace) ? { 'requirements': true } : null;
  }
 
  onSubmit(){

    //Para ja' esta' a funcionar como debug para nos XD...
    //alert("Thanks for update you're info Data: "+ JSON.stringify(this.userInput));
    alert("Os seus dados foram actualizados com sucesso! Information updated successfully!");

    //Verificacao de campos introduzidos
    //Os campos que nao foram preenchidos ou seja nao existe atualizacao a fazer vamos buscar o valor 'a localstore...
    //Se existir alteracao guardamos na variavel da datastore para depois a actualizarmos
    if(this.userInput.user_name == null){
      this.userInput.user_name = this.userI.user_name;
    }
    else{
      this.userI.user_name = this.userInput.user_name;
    }

    if(this.userInput.user_email == null){
      this.userInput.user_email = this.userI.user_email;
    }
    else{
      this.userI.user_email = this.userInput.user_email;
    }

    if(this.userInput.user_street == null){
      this.userInput.user_street = this.userI.user_street;
    }
    else{
      this.userI.user_street = this.userInput.user_street;
    }

    if(this.userInput.user_place == null){
      this.userInput.user_place = this.userI.user_place;
    }
    else{
      this.userI.user_place = this.userInput.user_place;
    }

    if(this.userInput.user_country==null){
      this.userInput.user_country = this.userI.user_country;
    }
    else{
      this.userI.user_country = this.userInput.user_country;
    }

    if(this.userInput.user_birthday == null){
      this.userInput.user_birthday = this.userI.user_birthday;
    }
    else{
      this.userI.user_birthday = this.userInput.user_birthday;
    }

    if(this.userInput.user_zip_code == null){
      this.userInput.user_zip_code = this.userI.user_zip_code;
    }
    else{
      this.userI.user_zip_code = this.userInput.user_zip_code;
    }

    var body;
    //Escolha do servico para fazer update
    if(this.userInput.user_password == null){
      body = {
        name: this.userInput.user_name,
        email: this.userInput.user_email,        
        street: this.userInput.user_street,
        place: this.userInput.user_place,
        country: this.userInput.user_country,
        birthday: this.userInput.user_birthday,
        zip_code: this.userInput.user_zip_code,
      }
      this.request.upUserNPInfo(body).subscribe(
       (data)=> {
                  this.saveUpdate();
                },(err : HttpErrorResponse)=>{
                  this.isRequestError = true;
                  setTimeout( () => this.isRequestError = false , 2500 );
          
          
                }
      );
    }
    //Need password update
    else{ 
      body = {
        name: this.userInput.user_name,
        email: this.userInput.user_email,
        password: this.userInput.user_password,
        street: this.userInput.user_street,
        place: this.userInput.user_place,
        country: this.userInput.user_country,
        birthday: this.userInput.user_birthday,
        zip_code: this.userInput.user_zip_code
      }     
      this.request.updateUserInfo(body).subscribe(
        (data)=>{
                  this.saveUpdate();
                },(err : HttpErrorResponse)=>{
                  this.isRequestError = true;
                  setTimeout( () => this.isRequestError = false , 2500 );
          
          
                }
      );
    }
  }

  saveUpdate(){
    localStorage.setItem("userInfo", JSON.stringify(this.userI));    
  }

  //Para apagar (inativa) a conta do utilizador.

  onDelete(){

    alert("A sua conta foi eliminada com sucesso! Esperamos que volte em breve! Your account was deleted successfully!");

    var body = {
      username: localStorage.getItem('username')
    }
  /*
    this.request.userMakeAccInact(body).subscribe(
      (data)=>{
        this.deleteUserInfo();
        setTimeout( () => this.router.navigate(['/admin/dashboard']) , 200 ); 
      },(err : HttpErrorResponse)=>{
        this.isRequestError = true;
        setTimeout( () => this.isRequestError = false , 2500 );
        }
    );*/
  }

  deleteUserInfo(){    
    localStorage.removeItem('tokenID');
    localStorage.removeItem('username');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('myDirections'); 
  }

  onCancel(){
    //setTimeout( () => this.router.navigate(['/home']) , 0.01 );
    setTimeout( () => this.router.navigate(['/admin/dashboard']) , 100 );
  }
}
