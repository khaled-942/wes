import { Component } from '@angular/core';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent {
  conferences = [1, 1, 1, 1, 1];
}
