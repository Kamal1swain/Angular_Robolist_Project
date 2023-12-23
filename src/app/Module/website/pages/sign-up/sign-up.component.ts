import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  type:string ="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  signup!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){

  }
ngOnInit(): void {
  this.signup=this.fb.group({
    Email:['',Validators.required],
    password:['',Validators.required],
    FirstName:['',Validators.required],
    LastName:['',Validators.required]
  })
}
hideShowPass(){
  this.isText=!this.isText;
  this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
  this.isText?this.type="text":this.type="password"
}
onSignup(){
  if(this.signup.valid){
    console.log(this.signup.value)
    this.router.navigate(['login']);
//send the obj to database
  }else{
     alert("form is invald")
//throw the error using toaster using required fields
  }
}

}
