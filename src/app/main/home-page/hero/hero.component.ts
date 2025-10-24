import { Component } from '@angular/core';
import { Card } from '../hero-card/hero-card.component';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // imports:[HeroCardComponent]
})
export class HeroComponent {
cards: Card[] = [
    {
      img: 'assets/icon/delivery.svg',
      text: 'Бесплатная достака по всему Узбекистану'
    },
    {
      img: 'assets/icon/percentage.svg',
      text: 'Рассрочка безпроцентная и без предоплаты'
    },
    {
      img: 'assets/icon/gift.svg',
      text: 'Подарим смарт подарочная карта'
    },
    {
      img: 'assets/icon/currency_big.svg',
      text: 'Бесплатная оплата со 100% безопасность'
    },
    {
      img: 'assets/icon/headset.svg',
      text: '24/7 быстрая поддержка'
    },
  ]
}
