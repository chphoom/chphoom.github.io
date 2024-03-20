import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  public resume: string;

  constructor(private data: DataService){
    this.resume = data.getResume()
  }

}
