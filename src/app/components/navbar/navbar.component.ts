import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { RemoveUserAction } from 'src/app/reducer/auth/auth.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  title: String;
  roleUser: String;
  subscription: Subscription = new Subscription();
  @ViewChild('menuNavBar') menuNavBar: ElementRef;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(
        map(({ auth, ui }) => ({
          role: auth.user.role,
          title: ui.titleNavbar,
        }))
      )
      .subscribe(({ title, role }) => {
        this.title = title;
        this.roleUser = role;
      });
  }

  logout() {
    this.store.dispatch(new RemoveUserAction());
    this.router.navigate(['/iniciar-sesion']);
  }

  closeMenu() {
    this.menuNavBar.nativeElement.checked = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
