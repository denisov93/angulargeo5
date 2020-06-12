import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('',[Validators.required]);
  lastName = new FormControl('',[Validators.required]);
  username = new FormControl('',[Validators.required]);
  street = new FormControl('',[Validators.required]);
  zipcode = new FormControl('',[Validators.required]);
  place = new FormControl('',[Validators.required]);
  city = new FormControl('',[Validators.required]);
  country = new FormControl('',[Validators.required]);

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  selected = '';

  constructor() { }

  ngOnInit(): void {  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getFirstNErrorMessage() {
    if(this.firstName.hasError('required')){
      return 'You must enter a first name';
    }
    //return this.firstName.hasError('firstName') ? 'Not a valid First Name' : '';
  }

  getLastNErrorMessage() {
    if(this.lastName.hasError('required')){
      return 'You must enter a last name';
    }
    return this.lastName.hasError('lastName') ? 'Not a valid Last Name' : '';
  }

  getUNErrorMessage(){
    if(this.username.hasError('required')){
      return 'You must enter a username';
    }
    //return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  getStreetErrorMessage(){
    if(this.street.hasError('required')){
      return 'You must enter a street';
    }
    return this.street.hasError('street') ? 'Not a valid street' : '';
  }

  getZipCErrorMessage(){
    if(this.zipcode.hasError('required')){
      return 'You must enter a zip-code';
    }
    return this.zipcode.hasError('zipcode') ? 'Not a valid zip-code' : '';
  }

  getPlaceErrorMessage(){
    if(this.place.hasError('required')){
      return 'You must enter a place';
    }
    return this.place.hasError('place') ? 'Not a valid place' : '';
  }

  getCityErrorMessage(){
    if(this.city.hasError('required')){
      return 'You must enter a city';
    }
    return this.place.hasError('city') ? 'Not a valid city' : '';
  }

  getCountryErrorMessage(){
    if(this.country.hasError('required')){
      return 'You must enter a country';
    }
    return this.country.hasError('country') ? 'Not a valid country' : '';

  }
}
