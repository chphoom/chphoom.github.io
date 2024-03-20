import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public featured: Project[];

  constructor(private data: ProjectService){
    this.featured = data.getFeaturedProjects()
  }
}
