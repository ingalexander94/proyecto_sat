import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  loading: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('ui')
      .subscribe(({ loading }) => (this.loading = loading));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
