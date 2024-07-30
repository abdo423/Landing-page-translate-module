import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
@Component({
  selector: 'app-article-section',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './article-section.component.html',
  styleUrl: './article-section.component.css'
})
export class ArticleSectionComponent {

}
