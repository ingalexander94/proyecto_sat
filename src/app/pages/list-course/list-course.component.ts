import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { User } from 'src/app/model/auth';
import { Course } from 'src/app/model/course';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';
import { StudentService } from 'src/app/services/student.service';
import { filter } from 'rxjs/operators';
import { tapN } from 'src/app/helpers/observers';
import { StartLoadingAction } from 'src/app/reducer/ui/ui.actions';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent implements OnInit, OnDestroy {
  title: Title = {
    title: 'Listado de Materias',
    subtitle: 'Materias que se encuentran activas durante el semestre actual.',
  };

  subscription: Subscription = new Subscription();
  listCourses: Course[];

  loading: boolean = false;

  constructor(
    private uiService: UiService,
    private store: Store<AppState>,
    private studentService: StudentService
  ) {
    this.uiService.updateTitleNavbar();
  }

  ngOnInit(): void {
    this.store.dispatch(new StartLoadingAction());
    this.subscription = this.store
      .pipe(
        filter(({ auth }) => auth.user !== null),
        tapN(1, ({ auth }) => this.studentService.listCourses(auth.user.codigo))
      )
      .subscribe(({ course: { courses }, ui: { loading } }) => {
        this.listCourses = courses;
        this.loading = loading;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
