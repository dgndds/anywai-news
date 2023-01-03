import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/interfaces/News';

@Component({
  selector: 'app-newsgrid',
  templateUrl: './newsgrid.component.html',
  styleUrls: ['./newsgrid.component.css']
})
export class NewsgridComponent implements OnInit {
  newsArr: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => this.newsArr = news );
  }

}
