import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(private activatedRouter: ActivatedRoute,
              private articleService: ArticleService,
              private router: Router) { }

  ngOnInit() {
    if (this.activatedRouter.snapshot.paramMap.get('id')) {
      this.articleService.getArticleById(Number(this.activatedRouter.snapshot.paramMap.get('id'))).subscribe(article => {
        this.article = article;
      });
    }
  }

  delete() {
    this.articleService.delete(this.article.id).subscribe(async() => {
      await this.router.navigateByUrl('/articles');
    });
  }
}
