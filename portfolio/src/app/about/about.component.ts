import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public text: string[];
  // TODO: add image the same way

  constructor(private data: DataService){
    this.text = data.getAboutMe()
  }
}
