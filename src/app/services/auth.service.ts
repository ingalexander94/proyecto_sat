import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { User } from '../model/auth';
import { AddUserAction } from '../reducer/auth/auth.actions';
import {
  StartLoadingAction,
  FinishLoadingAction,
} from '../reducer/ui/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<AppState>, private router: Router) {}

  login(user: User) {
    this.store.dispatch(new StartLoadingAction());
    setTimeout(() => {
      this.store.dispatch(new AddUserAction(user));
      this.router.navigate([`/${user.role.toLowerCase()}`]);
      this.store.dispatch(new FinishLoadingAction());
    }, 1000);
  }
}
