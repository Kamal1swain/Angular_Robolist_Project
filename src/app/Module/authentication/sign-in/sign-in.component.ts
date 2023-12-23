import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public showPassword = false;
  constructor() { }

  ngOnInit() {
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    
  }

}
