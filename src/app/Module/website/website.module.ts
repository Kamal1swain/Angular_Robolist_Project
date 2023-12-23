import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website.routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ContactComponent } from './pages/contact/contact.component';
import { BlockArchieveComponent } from './pages/block-archieve/block-archieve.component';
import { BlogSingalComponent } from './pages/blog-singal/blog-singal.component';
import { ListingSingleComponent } from './pages/listing-single/listing-single.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule,ReactiveFormsModule, Validators } from "@angular/forms";
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ListingArchieveComponent } from './pages/listing-archieve/listing-archieve.component';
import { PageComponent } from './pages/page/page.component';
import { PageLeftComponent } from './pages/page-left/page-left.component';
import { PageRightComponent } from './pages/page-right/page-right.component';


@NgModule({
    declarations:[DashboardComponent,ContactComponent,BlockArchieveComponent,BlogSingalComponent,ListingSingleComponent,LoginComponent,SignUpComponent,ListingArchieveComponent,PageComponent,PageLeftComponent,PageRightComponent],
    imports:[
        CommonModule,
        WebsiteRoutingModule,NgImageSliderModule,FormsModule,ReactiveFormsModule

    ]
})
export class WebsiteModule { }