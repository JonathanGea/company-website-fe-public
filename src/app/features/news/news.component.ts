import { Component, OnInit } from '@angular/core';
import { NewsCardComponent } from './news-card/news-card.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsItem } from './newsItem.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];
  currentPage = 1;
  pageSize = 6;
  totalPages = 1;
  totalItems = 0;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews(this.currentPage);
  }

  loadNews(page: number): void {
    this.newsService.getNews(page, this.pageSize).subscribe(response => {
      this.newsItems = response.data;
      this.totalItems = response.pagination.totalItems;
      this.totalPages = response.pagination.totalPages;
    });
  }

  getPageNumbers(): number[] {
    if (this.totalPages <= 5) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    let pages = [this.currentPage];
    if (this.currentPage > 1) pages.unshift(this.currentPage - 1);
    if (this.currentPage < this.totalPages) pages.push(this.currentPage + 1);
    if (!pages.includes(1)) pages.unshift(1);
    if (!pages.includes(this.totalPages)) pages.push(this.totalPages);

    return [...new Set(pages)].sort((a, b) => a - b);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadNews(page);
    }
  }
}
