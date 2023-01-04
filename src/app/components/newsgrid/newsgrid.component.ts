import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/interfaces/News';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-newsgrid',
  templateUrl: './newsgrid.component.html',
  styleUrls: ['./newsgrid.component.css']
})
export class NewsgridComponent implements OnInit {
  newsArr: News[] = [];
  shownNews: News[] = [];
  searchValue: String = "";

  constructor(private newsService: NewsService, private searchService:SearchService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news: News[]) => {
      this.newsArr = news;
      this.shownNews = news;
    });

    this.searchService.searchEmmiter.subscribe((data:string) => { 
      this.searchValue = data;
      this.shownNews = this.newsArr.filter(news=> news.body.includes(data));
    });
  }

}
