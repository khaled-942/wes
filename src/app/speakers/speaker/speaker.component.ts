import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Speakers } from 'src/app/model/Speakers';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {
  @Input() eachspeaker!: Speakers;
  constructor(private route: Router) {}

  navigateTo() {
    this.route.navigate([`speakers/speaker/${this.eachspeaker._id}`]);
  }
}
