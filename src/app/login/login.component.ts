import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../models/users.model';
import { AuthService } from '../shared/auth.service';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(private _authService:AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  submit(){
    this._authService.login(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/article']);
      },
      (error: any) => console.log(error)
    );
  }
}
