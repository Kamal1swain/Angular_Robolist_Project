import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './layout/website-layout';


const routes: Routes = [
  {
    path:'authentication',
    loadChildren: () => import('./Module/authentication/authentication.module').then(module => module.AuthenticationModule),
  },
   {
    path: '',
    component: ContainerComponent,
    loadChildren: () => import('./Module/website/website.module').then(module => module.WebsiteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
