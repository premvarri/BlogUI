import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  newsData: any = {
    title: 'Breaking News',
    content: 'Lorem ipsum...',
    postedDate: new Date(),
    likes: 100,
    comments: 25
  };
}
