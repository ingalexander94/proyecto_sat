import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { User } from 'src/app/model/auth';
import { Subscription } from 'rxjs';
import { MenuOptions } from 'src/app/model/ui';
import { menuRoutes } from 'src/app/model/data';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @ViewChild('checkbox') checkbox: ElementRef;

  user: User = null;
  subscription: Subscription = new Subscription();
  routes: MenuOptions[] = menuRoutes;

  constructor(private location: Location, private store: Store<AppState>) {}

  showUpdateProfile: boolean = false;

  ngOnInit(): void {
    this.subscription = this.store.select('auth').subscribe(({ user }) => {
      this.user = user;
    });
  }

  goBack() {
    this.location.back();
  }

  toNavigate() {
    this.checkbox.nativeElement.checked = false;
  }

  updateProfile(show: boolean = true) {
    this.showUpdateProfile = show;
  }

  closeMenu(e: FocusEvent) {
    if (!e.relatedTarget) {
      this.toNavigate();
    }
  }
}
