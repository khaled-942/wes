import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {
  constructor(private route: Router) {}

  navigateTo() {
    this.route.navigate(['']);
  }
}
