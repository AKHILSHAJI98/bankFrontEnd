import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }


  getToken() {
    return localStorage.getItem('token');
  }


  getId() {
    return localStorage.getItem('id');
  }

  loginToken() {
    if (this.getToken() == null) {
      return false;

    }
    else {
      return true;
    }
  }


  login(acno:any,password:any){
    const body = {
      acno,
      password
    }
    return this.http.post('http://localhost:5001/api/users/login',body)
  }


  register(fname:any,lname:any,phone:any,acno:any,password:any){
    const body = {
      fname,
      lname,
      phone,
      acno,
      password
    }
    return this.http.post('http://localhost:5001/api/users/register',body)
  }


  deposit(acno:any,password:any,amount:any){
    const body = {
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:5001/api/users/deposit',body)
  }

  withdraw(acno:any,password:any,amount:any){
    const body = {
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:5001/api/users/withdraw',body)
  }

  transfer(acno:any,password:any,amount:any,acno1:any){
    const body = {
      acno,
      password,
      amount,
      acno1
    }
    return this.http.post('http://localhost:5001/api/users/transfer',body)
  }
 
 
}
