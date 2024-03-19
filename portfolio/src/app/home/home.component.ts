import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public name: string;
  public p1: string;
  public p2: string;
  public email: string;

  constructor(private data: DataService){
    this.name = data.getName()
    let bio = data.getBio()
    this.p1 = bio[0]
    this.p2 = bio[1]
    this.email = data.getEmail()
  }
}
