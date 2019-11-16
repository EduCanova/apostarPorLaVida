import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }
    login (email: string, password: string){
      return this.AFauth.auth.signInWithEmailAndPassword(email, password); 
  }
  getAuth (){
    return this.AFauth.auth;
  }

  logout (){
    return this.AFauth.auth.signOut();
  }
}
