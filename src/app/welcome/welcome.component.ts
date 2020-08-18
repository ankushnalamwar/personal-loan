import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit  {

  fullName: string;

constructor(private router: Router) { }
ngOnInit(): void {
    this.fullName = localStorage.getItem('fullname');
  }  
}
