import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  depositForm = this.fb.group({
    acno: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    password: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
    amount: ["", [Validators.required, Validators.pattern("[0-9]*")]]
  })

  msg = "";
  error = "";
  balance = "";
  value = "";


  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
    
  }

  ngOnInit(): void {
   
  }

  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno;
      var password = this.depositForm.value.password;
      var amount = this.depositForm.value.amount;


      this.api.deposit(acno, password, amount).subscribe((result: any) => {
        console.log(result);
        this.value = JSON.stringify(result.account.transaction);
        console.log(this.value);
        
        localStorage.setItem("transaction",JSON.stringify(result.account.transaction));
        localStorage.setItem("balance",result.account.balance);
        this.balance = localStorage.getItem("balance") || "";
        this.snackBar.open(result.message+","+` Balance: RS.${this.balance}`, "OK");
        //alert(result.message);
        this.msg = result.message;

      }, (result: any) => {
        this.error = result.error.message;
      }
      )
    } else {
      alert("Inavalid form")
    }

  }
}
