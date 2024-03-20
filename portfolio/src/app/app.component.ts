import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  public email: string;
  public github: string;
  public linkedin: string;

  constructor(private data: DataService) {
    this.email = data.getEmail()
    this.github = data.getGithub()
    this.linkedin = data.getLinkedIn()
  }
}
