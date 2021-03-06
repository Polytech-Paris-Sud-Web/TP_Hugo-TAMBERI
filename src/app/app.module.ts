import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticleService} from "./services/article.service";
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import {RouterModule, Routes} from '@angular/router';
import { ArticleViewComponent } from './article-view/article-view.component';


const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article-view/:id', component: ArticleViewComponent },
  { path: '', component: ArticlesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleViewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
