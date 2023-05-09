import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _authService: ApiService, private _router: Router) { }
  canActivate() {
    if (this._authService.loginToken()) {
      this._router.navigateByUrl("dashboard")
      return false
  } else {
      return true
  }
  }
  
}


