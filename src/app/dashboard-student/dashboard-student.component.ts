import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { getValueOfLocalStorage } from '../helpers/localStorage';
import { SetUserActiveAction } from '../reducer/ui/ui.actions';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css'],
})
export class DashboardStudentComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    const userShow = getValueOfLocalStorage('user-show');
    this.store.dispatch(new SetUserActiveAction(userShow));
  }
}
