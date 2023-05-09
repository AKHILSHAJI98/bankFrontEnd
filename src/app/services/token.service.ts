import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private inj :Injector) { }

  intercept(req:any,next:any){
    let authToken=this.inj.get(ApiService);
    let cloneReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${authToken.getToken()}`,
       user_id:`${authToken.getId()}`
      }
    })
    return next.handle(cloneReq)
  }
}

