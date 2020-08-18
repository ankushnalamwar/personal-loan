import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-varification-form',
  templateUrl: './varification-form.component.html',
  styleUrls: ['./varification-form.component.css'],
})
export class VarificationFormComponent implements OnInit {
  vForm: FormGroup;
  panCardPattern = '^[A-Z]{5}[0-9]{4}[A-Z]$';
  flagForOtp = false;

  @Input() fullname: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.vForm = new FormGroup({
      city: new FormControl(null, [Validators.required]),
      panNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(this.panCardPattern),
      ]),
      fullname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(140),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(255),
      ]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      otp: new FormControl(null, 
       [Validators.maxLength(4),
        Validators.minLength(4)]),
    });
  }
  get f() {
    return this.vForm.controls;
  }
  callGetOTP(formValues) {
    if (this.vForm.valid) {
      this.apiService.getOTP(formValues).subscribe(responceData => {
        console.log(responceData);
        setTimeout(()=>{
          if(responceData){
            this.flagForOtp = true;
          }
        },3000)
              
      })
      
      localStorage.setItem('fullname', this.vForm.controls.fullname.value);
    }
  }
  callVerifyOTP(obj) {
    if (this.vForm.valid && this.vForm.controls.otp.valid) {
      this.apiService.verifyOTP(obj)
      
      .subscribe(responceData => {
        console.log(responceData);
       this.router.navigate(['/welcome']);
     })
    }
  }
  public isNumberKey(evt) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
