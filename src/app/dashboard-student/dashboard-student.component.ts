import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from '../app.reducers';
import { getValueOfLocalStorage } from '../helpers/localStorage';
import { tapN } from '../helpers/observers';
import { SetUserActiveAction } from '../reducer/ui/ui.actions';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css'],
})
export class DashboardStudentComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  loading: boolean = true;

  constructor(
    private store: Store<AppState>,
    private studentService: StudentService
  ) {
    this.subscription = this.store
      .pipe(
        filter(({ auth }) => auth.user !== null),
        tapN(1, ({ auth }) => this.studentService.listCourses(auth.user.codigo))
      )
      .subscribe(({ ui }) => {
        this.loading = ui.loading;
      });
  }

  ngOnInit(): void {
    const userShow = getValueOfLocalStorage('user-show');
    this.store.dispatch(new SetUserActiveAction(userShow));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
