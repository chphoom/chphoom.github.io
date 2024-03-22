import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public text: string[];
  public skills: string[];
  public image: string;
  // TODO: add image the same way

  constructor(private data: DataService,private projects: ProjectService) {
    this.text = data.getAboutMe()    
    this.skills = projects.getSkills()
    this.image = data.getMyImage()
  }
}
