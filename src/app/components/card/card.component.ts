import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  body: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odio facere aliquam, fuga optio illo natus ipsa doloribus eveniet explicabo unde quia, eos totam iure nisi consequuntur similique tenetur exercitationem! Placeat vero perspiciatis adipisci laborum reiciendis perferendis cum exercitationem ratione sint ut soluta tempora eaque repudiandae saepe magni laudantium repellendus quas quod, rem dolorem quaerat officiis? Vitae, illum, earum atque fuga nulla eligendi incidunt dolorem repudiandae dignissimos laboriosam magnam qui reiciendis ut? Nulla ducimus debitis commodi tempora neque expedita id magnam atque maxime enim nihil eius, aut dolore vel praesentium laudantium rem voluptates libero, quas nam. Esse et, error deleniti eum sunt sit iure asperiores sapiente alias! Quos non mollitia in aspernatur eius ab commodi eum accusamus quaerat facere fugiat beatae voluptatem ducimus, soluta labore, vitae maiores quidem accusantium! Eveniet accusantium, quibusdam ipsa animi amet recusandae atque, officia ex quod aliquam saepe dolorem eum et beatae impedit iste quae cupiditate.";

  constructor() { }

  ngOnInit(): void {
  }

}
