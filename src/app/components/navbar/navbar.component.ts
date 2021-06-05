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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  title: String;
  subscription: Subscription = new Subscription();
  @ViewChild('menuNavBar') menuNavBar: ElementRef;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('ui')
      .subscribe(({ titleNavbar }) => (this.title = titleNavbar));
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
