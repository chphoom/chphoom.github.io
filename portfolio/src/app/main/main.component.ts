import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public email: string;
  public github: string;
  public linkedin: string;

  constructor(private data: DataService) {
    this.email = data.getEmail()
    this.github = data.getGithub()
    this.linkedin = data.getLinkedIn()
  }
}
