import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { ArticleSectionComponent } from '../article-section/article-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderSectionComponent, ArticleSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
