import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  programmetitle: string = '';

  constructor(private serv: ApiServiceService) {}

  ngOnInit() {
    this.serv.getconferenceAbout(1).subscribe((a: any) => {
      this.programmetitle = a.conference.title;
    });
  }
}
