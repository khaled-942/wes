import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  abouttitle: string = '';
  abouttext: string = '';

  constructor(private serv: ApiServiceService) {}
  ngOnInit() {
    this.serv.getconferenceAbout(1).subscribe((a: any) => {
      this.abouttitle = a.conference.title;
      this.abouttext = a.conference.about;
    });
  }
}
