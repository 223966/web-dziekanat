import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  hideHeader,
  showHeader,
} from 'src/app/shared/components/custom-header/state/header.actions';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private _loginForm: FormGroup;

  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(hideHeader());
    this._loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  get email(): AbstractControl {
    return this._loginForm.controls.email;
  }

  get password(): AbstractControl {
    return this._loginForm.controls.password;
  }

  submit(): void {
    this.router.navigate(['/dashboard']);
    this.store.dispatch(showHeader());
  }
}
