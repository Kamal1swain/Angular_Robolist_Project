import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule,ReactiveFormsModule, Validators } from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
    declarations:[SignInComponent],
    imports:[
        CommonModule,
        AuthenticationRoutingModule,NgImageSliderModule,FormsModule,ReactiveFormsModule

    ]
})
export class AuthenticationModule { }