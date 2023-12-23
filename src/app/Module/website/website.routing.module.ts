import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlockArchieveComponent } from './pages/block-archieve/block-archieve.component';
import { BlogSingalComponent } from './pages/blog-singal/blog-singal.component';
import { ListingSingleComponent } from './pages/listing-single/listing-single.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ListingArchieveComponent } from './pages/listing-archieve/listing-archieve.component';
import { PageComponent } from './pages/page/page.component';
import { PageLeftComponent } from './pages/page-left/page-left.component';
import { PageRightComponent } from './pages/page-right/page-right.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent  },
  {path:'contact us',component:ContactComponent},
  {path:'blog archieve',component:BlockArchieveComponent},
  {path:'blog-single',component:BlogSingalComponent},
  {path:'listing singal',component:ListingSingleComponent},
  {path:'sign-in',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'listing archieve',component:ListingArchieveComponent},
  {path:'page',component:PageComponent},
  {path:'page-left',component:PageLeftComponent},
  {path:'page-right',component:PageRightComponent},
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
