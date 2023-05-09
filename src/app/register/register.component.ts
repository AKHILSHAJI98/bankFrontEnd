import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  error = "";

  registerForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
    secondName: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
    phoneNo: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]*")]],
    acno: ["", [Validators.required, Validators.maxLength(4), Validators.pattern("[0-9]*")]],
    password: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
  })

 



 
  constructor(private router: Router, private fb: FormBuilder, private api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  register() {
    if (this.registerForm.valid) {
      var firstName = this.registerForm.value.firstName;
      var secondName = this.registerForm.value.secondName;
      var phoneNo = this.registerForm.value.phoneNo
      var acno = this.registerForm.value.acno;
      var password = this.registerForm.value.password;
      this.api.register(firstName, secondName, phoneNo, acno, password).subscribe((result: any) => {
        console.log(result);
        setTimeout(() => {
          //alert(result.message);
          this.snackBar.open(result.message,'done')
          this.router.navigateByUrl('');
        }, 1000);

           },
             (result:any)=>{
             this.error = result.error.message;
      }
      )
    } else {
      alert("Inavalid form")
    }

  }
}
