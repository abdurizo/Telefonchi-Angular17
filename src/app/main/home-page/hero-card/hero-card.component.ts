import { Component, Input } from '@angular/core';


export interface Card {
  img: string,
  text: string,
}

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  @Input()
  card!: Card
}
