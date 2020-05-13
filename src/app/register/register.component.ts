import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(private _authService:AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  submit(){
    this._authService.register(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/article']);
      },
      (error: any) => console.log(error)
    );
  }
}
