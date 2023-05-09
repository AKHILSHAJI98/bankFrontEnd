import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {

  balance : any
  constructor(private router : Router) { 
    this.balance = localStorage.getItem("balance")
  }

  ngOnInit(): void {
  }
   
}
