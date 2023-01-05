import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../interfaces/News';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() news: News = {id:"", title:"", imageUrl:"", body:""};

  constructor() { }

  ngOnInit(): void {
  }

}
