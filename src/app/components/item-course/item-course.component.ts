import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { saveInLocalStorage } from 'src/app/helpers/localStorage';
import { User } from 'src/app/model/auth';
import { Course } from 'src/app/model/course';
import {
  FinishLoadingAction,
  StartLoadingAction,
} from 'src/app/reducer/ui/ui.actions';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-item-course',
  templateUrl: './item-course.component.html',
  styleUrls: ['./item-course.component.css'],
})
export class ItemCourseComponent implements OnInit, OnDestroy {
  @Input() course: Course;

  user: User = null;
  subscription: Subscription = new Subscription();

  constructor(
    private studentService: StudentService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('auth')
      .pipe(filter(({ user }) => user !== null))
      .subscribe(({ user }) => (this.user = user));
  }

  async navigateToTeacher() {
    this.store.dispatch(new StartLoadingAction());
    if (this.user.rol === 'docente' || this.user.rol === 'jefe') {
      this.router.navigate(['/docente/materia']);
    } else {
      const { data } = await this.studentService.getTeacherOfCourse(
        this.course.materia.docente
      );
      saveInLocalStorage('user-show', data);
      this.router.navigate([`/docente/perfil/${this.course.materia.docente}`]);
    }
    this.store.dispatch(new FinishLoadingAction());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
