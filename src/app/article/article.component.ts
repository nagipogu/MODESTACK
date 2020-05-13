import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { AuthService } from '../shared/auth.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.getArticles().subscribe((articleList) => {
      this.articles = articleList;
      console.log(this.articles)
    })
  }

}
