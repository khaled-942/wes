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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from './services/admin.guard.service';
import { ApiServiceService } from './services/api-service.service';
import { LoginComponent } from './Admin-page/login/login.component';
import { ResetComponent } from './Admin-page/reset/reset.component';
import { ViewConferencesComponent } from './Admin-page/conference/view-conferences/view-conferences.component';
import { EditConferencesComponent } from './Admin-page/conference/edit-conferences/edit-conferences.component';
import { CreateConferencesComponent } from './Admin-page/conference/create-conferences/create-conferences.component';
import { CreateSpeakersComponent } from './Admin-page/speakers/create-speakers/create-speakers.component';
import { EditSpeakersComponent } from './Admin-page/speakers/edit-speakers/edit-speakers.component';
import { ViewSpeakersComponent } from './Admin-page/speakers/view-speakers/view-speakers.component';
import { AdminHomeComponent } from './Admin-page/admin-home/admin-home.component';



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
    LoginComponent,
    ResetComponent,
    ViewConferencesComponent,
    EditConferencesComponent,
    CreateConferencesComponent,
    CreateSpeakersComponent,
    EditSpeakersComponent,
    ViewSpeakersComponent,
    AdminHomeComponent
    

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
    TabViewModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [AdminGuard,ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
