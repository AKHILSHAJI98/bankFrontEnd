import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  balance : any;
  fname : any;
  lname :any;
  phone : any;
  acno : any;
  constructor(private router:Router) { 
    this.balance = localStorage.getItem("balance");
    this.acno = localStorage.getItem("acno");
    this.fname = localStorage.getItem("fname");
    this.lname = localStorage.getItem("lname");
    this.phone = localStorage.getItem("phone")
  }

  ngOnInit(): void {
  }
  }

