import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {
  public test: string[];

  constructor(private data: ProjectService) {
    this.test = data.getSkills()
    console.log(this.test)
  }

}
