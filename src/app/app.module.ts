import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent, FooterComponent, HeaderComponent, NavbarComponent } from './layout/website-layout';
import { NgImageSliderModule } from 'ng-image-slider';

const Website_Layout= [ContainerComponent,FooterComponent,HeaderComponent,NavbarComponent]
@NgModule({
  declarations: [
    AppComponent, ContainerComponent,FooterComponent,HeaderComponent,NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
