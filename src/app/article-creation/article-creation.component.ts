import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from "../services/article.service";
import {RawArticle} from "../models/raw-article";
import { EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm ?: FormGroup;

  @Output()
  newArticle ?: EventEmitter<RawArticle> = new EventEmitter();

  constructor(private fb: FormBuilder,
              private articleService: ArticleService,
              private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  createArticle(){
    const formModel = this.articleForm.value;
    const rawArticle: RawArticle = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    };
    this.articleService.add(rawArticle).subscribe((article) => {
      this.router.navigateByUrl('/articles');
    }
      );
  }
}
