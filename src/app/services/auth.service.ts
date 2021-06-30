import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app.reducers';
import { showAlert } from '../helpers/alert';
import { AuthResponse, UserAuth } from '../model/auth';
import { AddUserAction, RemoveUserAction } from '../reducer/auth/auth.actions';
import {
  StartLoadingAction,
  FinishLoadingAction,
  SetUserActiveAction,
} from '../reducer/ui/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: String = environment.url_backend;
  withOutToken: HttpClient;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private httpClient: HttpClient,
    private httpBackend: HttpBackend
  ) {
    this.withOutToken = new HttpClient(this.httpBackend);
  }

  async login(dataLogin: UserAuth, typeUser: String) {
    this.store.dispatch(new StartLoadingAction());
    try {
      const req = await this.withOutToken
        .post<AuthResponse>(
          this.endpoint + '/auth/' + typeUser + '/login',
          dataLogin
        )
        .toPromise();
      const { msg, data, token } = req;
      localStorage.setItem('x-token', token.toString());
      showAlert('success', msg);
      this.store.dispatch(new AddUserAction(data));
      this.store.dispatch(new SetUserActiveAction(data));
      this.router.navigate([`/${data.rol.toLowerCase()}`]);
    } catch (error) {
      console.log(error);
      showAlert('error', error.error.msg);
    }
    this.store.dispatch(new FinishLoadingAction());
  }

  async renewToken() {
    try {
      const req = await this.httpClient
        .get<AuthResponse>(this.endpoint + '/auth/renew')
        .toPromise();
      const { data, token } = req;
      localStorage.setItem('x-token', token.toString());
      this.store.dispatch(new AddUserAction(data));
    } catch (error) {
      this.store.dispatch(new RemoveUserAction());
      this.router.navigate(['/iniciar-sesion']);
    }
  }
}
