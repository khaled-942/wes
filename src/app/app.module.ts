import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainConferenceTitleComponent } from './main-conference-title/main-conference-title.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpeakersModule } from './speakers/speakers.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { TimelineModule } from 'primeng/timeline';
import { TabViewModule } from 'primeng/tabview'; 

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
    FooterComponent,
    AccordionComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpeakersModule,
    HttpClientModule,
    RouterLink,
    NgbModule,
    BrowserAnimationsModule,
    NgbAccordionModule,
    TimelineModule,
    TabViewModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
