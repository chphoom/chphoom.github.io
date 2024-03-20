import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public name: string;
  public text: string[];
  public email: string;

  constructor(private data: DataService){
    this.name = data.getName()
    this.text = data.getBio()
    this.email = data.getEmail()
  }
}
