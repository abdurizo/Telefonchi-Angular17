import { Component } from '@angular/core';
import { HeadComponent } from './header/head.component';
import { MainModule } from './main/main.module';
import { Card } from './main/home-page/hero-card/hero-card.component';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadComponent, MainModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telefonchi-Angular17';
}
