import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../models';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {
  public archive: Project[];

  constructor(private data: ProjectService) {
    this.archive = data.getArchive()
  }

}
