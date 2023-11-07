import { Component } from '@angular/core';
import { Conference } from 'src/app/model/Conference';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss'],
})
export class ConferenceListComponent {
  conferences!: Conference[];
  constructor(private api: ApiServiceService) {}
  ngOnInit(): void {
    this.api.getconference().subscribe((data: any) => {
      console.log(data.conferences)
      this.conferences = data.conferences;
    });
  }
}
