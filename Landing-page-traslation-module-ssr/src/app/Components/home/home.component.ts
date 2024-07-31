import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { ArticleSectionComponent } from '../article-section/article-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderSectionComponent, ArticleSectionComponent, AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
