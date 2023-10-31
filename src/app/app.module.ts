import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainConferenceTitleComponent } from './main-conference-title/main-conference-title.component';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { SpeakersModule } from './speakers/speakers.module';

@NgModule({
  declarations: [
    AppComponent,
    MainConferenceTitleComponent,
    AboutComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SpeakersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
