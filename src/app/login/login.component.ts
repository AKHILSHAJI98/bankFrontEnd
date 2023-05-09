import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error = "";
  msg = "";

  loginForm = this.fb.group({
    acno: ["", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(4)]],
    password: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
  })


  constructor(private router: Router, private fb: FormBuilder, private api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }
  login() {
    if (this.loginForm.valid) {
      var acno = this.loginForm.value.acno;
      var password = this.loginForm.value.password;
      this.api.login(acno, password).subscribe((result: any) => {
        console.log(result);
        this.msg = result.message;
        localStorage.setItem("token",result.accessToken);
        localStorage.setItem("id",result.account._id);
        localStorage.setItem("fname",result.account.fname);
        localStorage.setItem("lname",result.account.lname);
        localStorage.setItem("phone",result.account.phone);
        localStorage.setItem("acno",result.account.acno);
        localStorage.setItem("transaction",JSON.stringify(result.account.transaction));
        localStorage.setItem("balance",result.account.balance);
        setTimeout(() => {
          //alert(result.message);
          this.snackBar.open(result.message,'done')
          this.router.navigateByUrl('dashboard');
        }, 3000);

      },
        (result: any) => {
          let v = true
          this.error = result.error.message;
        }
      )
    }



  }

  register() {
    this.router.navigateByUrl("register");
  }
}



