import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-main-conference-title',
  templateUrl: './main-conference-title.component.html',
  styleUrls: ['./main-conference-title.component.scss'],
})
export class MainConferenceTitleComponent implements OnInit {
  title!: string;
  title_abbrev!:string;
  date!: string;
  constructor(private api: ApiServiceService) {}
  ngOnInit(): void {
    this.api.confId.subscribe((cid)=>{
    this.api.getconferenceById(cid).subscribe((a:any) => {
      this.title = a.conference.banner_title
      this.title_abbrev = a.conference.title_abbrev
      this.date = a.conference.date_text
    });
  });
  }
}
