import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from 'src/app/model/Conference';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent{
  @Input() eachConference!: Conference;
  constructor(private route:Router, private api:ApiServiceService){}
  navigateTo(destination:string){
    this.route.navigate([`/${destination}`])
    this.api.confId.next(this.eachConference._id)
  }
}
