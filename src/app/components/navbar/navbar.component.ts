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
import { filter, map } from 'rxjs/operators';
import { DeleteCourseAction } from 'src/app/reducer/course/course.actions';
import { UnsetUserActiveAction } from 'src/app/reducer/ui/ui.actions';

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
        filter(({ auth }) => auth.user !== null),
        map(({ auth, ui }) => ({
          role: auth.user.rol,
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
    this.store.dispatch(new DeleteCourseAction());
    this.store.dispatch(new UnsetUserActiveAction());
    localStorage.clear();
    this.router.navigate(['/iniciar-sesion']);
  }

  closeMenu() {
    this.menuNavBar.nativeElement.checked = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toHome() {
    this.router.navigate([`/${this.roleUser}`]);
    this.closeMenu();
  }
}
