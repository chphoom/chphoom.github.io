import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public email: string;
  public stars: { top: number, left: number, size: number, svg: string }[] = [];
  starSvgs: string[] = [
    '/assets/stars/star1.svg',
    '/assets/stars/star2.svg',
    '/assets/stars/star3.svg',
    '/assets/stars/star4.svg',
    '/assets/stars/star5.svg',
    '/assets/stars/star6.svg',
    '/assets/stars/star7.svg',
    '/assets/stars/star8.svg'
  ];

  constructor(private data: DataService) {
    this.email = data.getEmail()
    this.generateStars(25);
  }

  generateStars(count: number): void {
      const centerXMin = 30;  // Minimum left % for the exclusion zone (e.g., 30%)
      const centerXMax = 70;  // Maximum left % for the exclusion zone (e.g., 70%)
      const centerYMin = 25;  // Minimum top % for the exclusion zone (e.g., 30%)
      const centerYMax = 90;  // Maximum top % for the exclusion zone (e.g., 70%)
    
      for (let i = 0; i < count; i++) {
        let top, left;
    
        // Generate positions until they are outside the center exclusion zone
        do {
          top = Math.random() * 160 - 10;
          left = Math.random() * 140 - 20;
        } while ((left >= centerXMin && left <= centerXMax) &&
                 (top >= centerYMin && top <= centerYMax));
    
        const star = {
          top: top,
          left: left,
          size: Math.random() * 10 + 5,    // Random size between 5px and 15px
          svg: this.starSvgs[Math.floor(Math.random() * this.starSvgs.length)] // Randomly select an SVG
        };
      this.stars.push(star);
    }
  }
}
