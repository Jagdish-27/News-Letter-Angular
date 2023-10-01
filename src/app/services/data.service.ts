import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  email?:string;

  setEmail(email:string){
    this.email = email
  }

  getEmail(){
    return this.email;
  }
}
