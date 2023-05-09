import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

user = ""
url : any
 
 


  constructor(private router:Router, private http:HttpClient,private snackBar: MatSnackBar) {
    let id = localStorage.getItem("id");
    this.url = `http://localhost:5001/api/users/delete/${id}`;
    
  }

  ngOnInit(): void {
    if (localStorage.getItem('fname')) {
      this.user = localStorage.getItem('fname') || "";
    }
  }


  logout (){
    localStorage.clear();
    this.router.navigateByUrl('')
  }

  delete(){
    let msg = "Are you sure do you want to delete your account?";
    if (confirm(msg)==true) {
      return<any> this.http.delete(this.url).subscribe((result:any)=>{
        console.log(result);
        setTimeout(() => {
          this.snackBar.open(result.message,'done');
        }, 1000);
        this.logout();
      })
  
    }else{
      this.router.navigateByUrl("/dashboard")
    }
    }
    
    
  

}
  
  














