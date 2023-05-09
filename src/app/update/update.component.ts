import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  error = "";
  fname : any;
  lname : any;
  phone : any;

  updateForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
    secondName: ["", [Validators.required, Validators.pattern("[a-zA-Z]*")]],
    phoneNo: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]*")]]
  })

  url : any


  constructor(private router: Router, private fb: FormBuilder,  private snackBar: MatSnackBar, private http : HttpClient) { 
  }

  ngOnInit(): void { 
    let id = localStorage.getItem("id");
    this.url = `http://localhost:5001/api/users/update/${id}`
    
  }

  update() {
    if (this.updateForm.valid) {
      
      var fname = this.updateForm.value.firstName;
      var lname = this.updateForm.value.secondName;
      var phone = this.updateForm.value.phoneNo;
      const body = {
        fname,
        lname,
        phone
      };
      
      this.http.put(this.url, body).subscribe(
        (result:any) => {
          console.log(result);
          localStorage.setItem("fname",result.updatedUser.fname);
          localStorage.setItem("lname",result.updatedUser.lname);
          localStorage.setItem("phone",result.updatedUser.phone);
          setTimeout(() => {
            this.snackBar.open(result.message,'done');
          }, 1000);
        },
        (error:any) => {
          console.log(error);
          this.snackBar.open('An error occurred while updating user information.','error');
        }
      );
      
    } else {
      alert("Invalid form");
    }
  }
  
}


