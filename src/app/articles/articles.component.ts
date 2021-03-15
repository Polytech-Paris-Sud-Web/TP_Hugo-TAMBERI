import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

   articles ?: Article[];

  constructor(private articleService: ArticleService) {
  }

  updateArticles() {
    this.articleService.get().subscribe((articles) => {
      this.articles = articles;
    });
  }

  ngOnInit() {
    this.updateArticles();
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this.updateArticles();
    });
  }
}
