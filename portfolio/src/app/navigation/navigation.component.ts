import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class NavigationComponent {
  public resume: string;
  public isOpen: boolean = false;

  constructor(private data: DataService){
    this.resume = data.getResume()
  }

  onClick(){
    this.isOpen = !this.isOpen;
  }

}
