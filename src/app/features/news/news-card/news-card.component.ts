import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsItem } from '../newsItem.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() news !: NewsItem
}
