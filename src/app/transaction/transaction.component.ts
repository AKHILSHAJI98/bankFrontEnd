import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transaction : any;
  date : any;

  constructor( private router:Router) { 
    this.transaction = JSON.parse(localStorage.getItem("transaction") || "") ;
    console.log(this.transaction);
    
  }

  ngOnInit(): void {
  }
}




