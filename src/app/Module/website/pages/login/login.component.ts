import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type:string ="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!:FormGroup;


  constructor(private fb:FormBuilder,private router:Router){

  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      Email:['',Validators.required],
      password:['',Validators.required]
    })
  }
hideShowPass(){
this.isText=!this.isText;
this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
this.isText?this.type="text":this.type="password"

}
onSubmit(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    this.router.navigate(['dashboard']);
//send the obj to database
  }else{
    alert("form is invald")
//throw the error using toaster using required fields
  }
}

}
