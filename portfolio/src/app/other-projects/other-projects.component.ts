import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrl: './other-projects.component.css'
})
export class OtherProjectsComponent {
  public other: Project[];
  public expanded: boolean;
  public length: number;
  public buttonLabel: string;

  constructor(private data: ProjectService){
    this.other = data.getOtherProjects()
    this.expanded = false
    this.length = this.other.length
    this.buttonLabel = this.expanded ? "Show Less" : "Show More"
  }

  onClick(){
    this.expanded = !this.expanded
    this.buttonLabel = this.expanded ? "Show Less" : "Show More"
  }
}
