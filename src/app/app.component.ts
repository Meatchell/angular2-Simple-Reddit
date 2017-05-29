import {Component} from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Meatchell', 'http://www.huangli13.cn', 10),
      new Article('Angular2', 'http://angular.cn', 23),
      new Article('stackOverflow', 'https://stackoverflow.com', 9)];
  };
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`添加新文章到后台title：${title.value} link：${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
