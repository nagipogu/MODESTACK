import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Article } from '../models/article.model';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    body: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  constructor(private _authService: AuthService,private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  submit(){
    this._authService.addArticle(this.form.value).subscribe(
      (data: Article) => {
        console.log(data);
        this._router.navigate(['/article']);
      },
      (error: any) => console.log(error)
    );
    // console.log(this.form.value);
  }

}
