import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from 'src/app/model/Conference';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent {
  @Input() eachConference!: Conference;
  constructor(private route:Router){}
  navigateTo(destination:string){
    this.route.navigate([`/${destination}`])
  }
}
