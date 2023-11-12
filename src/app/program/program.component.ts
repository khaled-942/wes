import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  programmetitle: string = '';
  pdf:string='';
  constructor(private serv: ApiServiceService) {}

  ngOnInit() {
    this.serv.confIdobs.subscribe((dataId)=>{
    this.serv.getconferenceAbout(dataId).subscribe((a: any) => {
      this.programmetitle = a.conference.title;
    });
    this.serv.getconferenceById(dataId).subscribe((a: any) => {
      this.pdf = a.conference.programme_pdf;
    });
  })
}
}
