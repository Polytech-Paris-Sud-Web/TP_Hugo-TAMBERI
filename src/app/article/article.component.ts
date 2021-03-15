import {Component, Input, Output, OnInit} from '@angular/core';
import {Article} from '../models/article';
import { EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article ?: Article;

  @Output()
  deletedArticle ?: EventEmitter<Article> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  delete() {
    this.deletedArticle.emit(this.article);
  }
}
