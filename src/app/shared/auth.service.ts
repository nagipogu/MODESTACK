import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/users.model';
import { Article } from '../models/article.model';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/articles'
  loginUrl = 'http://localhost:5000/api/users/login'
  registerUrl = 'http://localhost:5000/api/users/register'
  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.baseUrl, article, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  login(user: User): Observable<Article> {
    return this.httpClient.post<Article>(this.loginUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
  register(user: User): Observable<Article> {
    return this.httpClient.post<Article>(this.registerUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<Article[], any> {
    throw new Error("Method not implemented.");
  }
}
