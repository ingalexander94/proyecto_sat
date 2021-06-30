import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { getValueOfLocalStorage } from '../helpers/localStorage';
import { SetUserActiveAction } from '../reducer/ui/ui.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
