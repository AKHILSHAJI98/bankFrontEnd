import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {

  transferForm = this.fb.group({
    acno: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    password: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
    amount: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    acno1: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    ifsc : ["",[Validators.required, Validators.pattern("[a-zA-z0-9]*")]]
  })

  balance : any;
  err : any;



  constructor(private fb: FormBuilder, private api: ApiService, private snackbar:MatSnackBar, private router : Router) {
  }


  transfer() {
    if (this.transferForm.valid) {
      var acno= this.transferForm.value.acno;
      var password = this.transferForm.value.password;
      var amount = this.transferForm.value.amount;
      var acno1 = this.transferForm.value.acno1;

         this.api.transfer(acno, password,amount,acno1).subscribe((result: any) => {
              console.log(result);
              localStorage.setItem("transaction",JSON.stringify(result.account.transaction));
              localStorage.setItem("balance",result.account.balance);
              this.balance =localStorage.getItem('balance');
              this.snackbar.open(result.message+","+` Balance: RS.${this.balance}`, "OK")
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
