import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private getOtpUrl ='http://lab.thinkoverit.com/api/getOTP.php';
private verifyOtpUrl = 'http://lab.thinkoverit.com/api/verifyOTP.php';

  constructor(private http:HttpClient, private router:Router) { }

  getOTP(obj:{city:string, panNumber:string, fullname:string, email:string, mobile:string}){
   return this.http.post(this.getOtpUrl,obj)
  }
  verifyOTP(obj:{mobile:string, otp:string}){
     return this.http.post(this.verifyOtpUrl,obj)
    }   
  }




