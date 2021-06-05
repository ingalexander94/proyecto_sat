import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dataRoles } from '../shared/data';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  showPassword: boolean = false;
  typePassword: String = 'password';
  typeDocument: String = 'password';
  roleActive: String = 'docente';
  roles = dataRoles;
  loading: boolean = false;
  subscription: Subscription = new Subscription();

  createFormLogin(): FormGroup {
    return new FormGroup({
      code: new FormControl('1151157', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
      ]),
      document: new FormControl('1090765466', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]),
      password: new FormControl('987654321', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.formLogin = this.createFormLogin();
  }

  ngOnInit(): void {
    this.subscription = this.store
      .select('ui')
      .subscribe(({ loading }) => (this.loading = loading));
  }

  changeShowPassword() {
    this.showPassword = !this.showPassword;
    this.typePassword = this.showPassword ? 'number' : 'password';
  }

  changeTypeDocument(option: boolean) {
    option ? (this.typeDocument = 'number') : (this.typeDocument = 'password');
  }

  changeRole(role: String) {
    this.roles[this.roleActive.toString()].isActive = false;
    this.roles[role.toString()].isActive = true;
    this.roleActive = role;
  }

  onSubmit() {
    const user: User = {
      ...this.formLogin.value,
      role: this.roleActive,
      names: 'Niver Daniel',
      surnames: 'Romero Manrique',
      email: 'niverdanielrm@ufps.edu.co',
      photo:
        'https://static.wikia.nocookie.net/teniaqueserlawikidelchavo/images/e/e2/Jirafales1978.png/revision/latest?cb=20180720210139&path-prefix=es',
    };
    this.authService.login(user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
