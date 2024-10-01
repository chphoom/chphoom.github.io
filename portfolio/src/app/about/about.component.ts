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
  public image2: string;

  constructor(private data: DataService,private projects: ProjectService) {
    this.text = data.getAboutMe()    
    this.skills = projects.getSkills()
    this.image = data.getMyImage()
    this.image2 = data.getMyImage2()
  }
}
