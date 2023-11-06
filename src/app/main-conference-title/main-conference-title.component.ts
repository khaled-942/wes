import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-main-conference-title',
  templateUrl: './main-conference-title.component.html',
  styleUrls: ['./main-conference-title.component.scss'],
})
export class MainConferenceTitleComponent implements OnInit {
  title!: string;
  date!: string;
  constructor(private api: ApiServiceService) {}
  ngOnInit(): void {
    this.api.getconferenceById(1).subscribe((a:any) => {
      this.title = a.conference.banner_title_one
      this.date = a.conference.day_two_date
    });
  }
}
