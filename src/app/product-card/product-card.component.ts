import { Component, Input } from '@angular/core';

export interface CardProduct {
  id: number,
  img: string,
  title: string,
  text: string,
  price: number,
  priceOld: number
}
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  cardProduct!: CardProduct
}
