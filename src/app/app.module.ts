import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainConferenceTitleComponent } from './main-conference-title/main-conference-title.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeakersModule } from './speakers/speakers.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MainConferenceTitleComponent,
    AboutComponent,
    ProgramComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpeakersModule,
    RouterLink,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
