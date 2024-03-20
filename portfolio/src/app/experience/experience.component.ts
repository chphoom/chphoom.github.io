import { Component } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Experience } from '../models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[];
  selected: Experience;

  constructor(private data: ExperienceService){
    this.experiences = data.getExperiences()
    this.selected = this.experiences[0]
  }

  onClick(e: Experience) {
    this.selected = e
  }

}
