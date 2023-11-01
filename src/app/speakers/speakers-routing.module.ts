import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';

const routes: Routes = [
  {path:'',component:SpeakersComponent},
  {path:'speaker/:id',component:SpeakerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
