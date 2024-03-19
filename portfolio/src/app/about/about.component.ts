import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public p1: string;
  public p2: string;
  // TODO: add image the same way

  constructor(private data: DataService){
    let temp = data.getAboutMe()
    this.p1 = temp[0]
    this.p2 = temp[1]
  }
}
