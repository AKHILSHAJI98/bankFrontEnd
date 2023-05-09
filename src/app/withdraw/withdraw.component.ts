import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  err = "";
  balance : any;

  withdrawForm = this.fb.group({
    acno1: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    password1: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
    amount1: ["", [Validators.required, Validators.pattern("[0-9]*")]]
  })

  constructor(private fb: FormBuilder, private api: ApiService, private snackBar: MatSnackBar, private router:Router) {

  
  }


  withdraw() {
    if (this.withdrawForm.valid) {
      var acno= this.withdrawForm.value.acno1;
      var password = this.withdrawForm.value.password1;
      var amount = this.withdrawForm.value.amount1;


         this.api.withdraw(acno, password,amount).subscribe((result: any) => {
              console.log(result);
              localStorage.setItem("transaction",JSON.stringify(result.account.transaction));
              localStorage.setItem("balance",result.account.balance);
              this.balance = localStorage.getItem('balance');
              this.snackBar.open(result.message+","+` Balance: RS.${this.balance}`,"OK")
             //alert(result.message);
               //this.msg = result.message;
      
                  },
                    (result:any)=>{
                      //alert(result.error.message);
                      this.err = result.error.message;

                    //this.error = result.error.message;
            //}
             //)
           //
         }
    //        else {
    //         alert("Inavalid form")
    //        }

       

    )  }
    
}
}
