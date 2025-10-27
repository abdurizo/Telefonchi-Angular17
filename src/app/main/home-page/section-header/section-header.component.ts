import { Component } from '@angular/core';
import { CardProduct } from '../../../product-card/product-card.component';


@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css'],
})
export class SectionHeaderComponent {
  cardsproduct: CardProduct[] = [
    {
      id: 1,
      img: "assets/images/galaxy-s21.png",
      title: "vivo",
      text: "2f420923229d9",
      price: 1570,
      priceOld: 2021
    }, {
      id: 2,
      img: "assets/images/galaxy-s21.png",
      title: "BenQ",
      text: "7ba00b5fe6",
      price: 10,
      priceOld: 2005
    }, {
      id: 3,
      img: "Tommi",
      title: "Nokia",
      text: "ad25a0a8552d069b",
      price: 44,
      priceOld: 2011
    }, {
      id: 4,
      img: "Anastasia",
      title: "Celkon",
      text: "0c189026ba9135",
      price: 5785,
      priceOld: 2014
    }, {
      id: 5,
      img: "Kally",
      title: "Allview",
      text: "e653e61d4ab0ef3",
      price: 70,
      priceOld: 2014
    }, {
      id: 6,
      img: "Hodge",
      title: "BQ",
      text: "1025da09e4fa",
      price: 436,
      priceOld: 2015
    }]
}
