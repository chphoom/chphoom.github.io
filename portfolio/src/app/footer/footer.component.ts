import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public github: string;
  public linkedin: string;

  constructor(private data: DataService) {
    this.github = data.getGithub()
    this.linkedin = data.getLinkedIn()
  }
}
