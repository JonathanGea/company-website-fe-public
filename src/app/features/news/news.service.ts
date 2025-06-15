import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNews(page: number, size: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/news?page=${page}&size=${size}`);
  }

  getNewsDetail(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/news/${id}`);
  }
}
