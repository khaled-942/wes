import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { ConferenceComponent } from './conference/conference.component';


@NgModule({
  declarations: [
    ConferenceListComponent,
    ConferenceComponent
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule
  ]
})
export class ArchiveModule { }
