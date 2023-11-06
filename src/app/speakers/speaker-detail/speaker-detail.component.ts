import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Speakers } from 'src/app/model/Speakers';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss'],
})
export class SpeakerDetailComponent implements OnInit {
  speaker?: Speakers;
  id!:string
  constructor(private api :ApiServiceService, private activeRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:any)=>{
      this.id = param.id
      this.api.getspeakerById(this.id).subscribe((speakerDe:any)=>{
        this.speaker = speakerDe.speaker;
      })
    })
  }
}
