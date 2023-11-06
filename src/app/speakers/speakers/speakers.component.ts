import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/model/Speakers';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  speakers!: Speakers[];
  constructor(private api: ApiServiceService) {}
  ngOnInit(): void {
    this.api.getconferenceSpeakers(1).subscribe((data:any)=>{
      this.speakers = data.speakers
      console.log(this.speakers)
    })
  }
}
