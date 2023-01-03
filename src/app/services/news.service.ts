import { Injectable } from '@angular/core';
import { News } from '../interfaces/News';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private api = "http://localhost:3000/news";

  constructor(private http:HttpClient) { }
 
  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.api);
  }
}
