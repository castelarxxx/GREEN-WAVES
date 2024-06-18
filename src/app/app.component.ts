import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section3Component } from './section3/section3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { Section2Component } from './section2/section2.component';
import { Section4Component } from './section4/section4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Section1Component,Section3Component, NavbarComponent,HeroComponent, HeaderComponent, Section2Component, Section4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'green-Waves';
}
