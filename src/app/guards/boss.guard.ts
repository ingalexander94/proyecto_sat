import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Rollback } from '@ngrx/store-devtools/src/actions';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { saveInLocalStorage } from '../helpers/localStorage';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BossGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuth$.pipe(
      pluck('user'),
      distinctUntilChanged(),
      map((user) => {
        console.log(user.rol);
        if (user.rol === 'jefe' || user.rol === 'vicerrector') return true;
        else {
          saveInLocalStorage('user-show', user);
          this.router.navigate([`/${user.rol}`]);
          return false;
        }
      })
    );
  }
}
