import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { AboutComponent } from './about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactInformationComponent,
    AboutComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
