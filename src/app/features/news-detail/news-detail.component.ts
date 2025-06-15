import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, NavigationEnd } from '@angular/router';
import { NewsService } from '../news/news.service';
import { NewsItem } from '../news/newsItem.model';

interface NewsDetail {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  urlThumbnail: string;
  category: string;
}

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent {

  newsItem: NewsDetail | null = null;
  anotherNews: NewsItem[] | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

  }
  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.loadNews(newsId || '');

  }

  loadNews(newsId: string): void {
    this.newsService.getNewsDetail(newsId).subscribe(response => {
      console.log('response :>> ', response);
      this.newsItem = response.data.newsDetail
      this.anotherNews = response.data.anotherNews
      this.loading = false;
    });
  }

  encodeURIComponent(url: string): string {
    return encodeURIComponent(url);
  }
}
