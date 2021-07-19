import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Course } from 'src/app/model/course';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-academy-list-course',
  templateUrl: './academy-list-course.component.html',
  styleUrls: ['./academy-list-course.component.css'],
})
export class AcademyListCourseComponent implements OnInit, OnDestroy {
  title: Title = {
    title: 'Listado de Materias',
    subtitle: 'Materias que se encuentran activas durante el semestre actual.',
  };

  subscription: Subscription = new Subscription();
  listCourses: Course[];
  loading: boolean = false;

  constructor(private uiService: UiService, private store: Store<AppState>) {
    this.uiService.updateTitleNavbar();
    this.subscription = this.store.subscribe(
      ({ course: { courses }, ui: { loading } }) => {
        this.listCourses = courses;
        this.loading = loading;
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {}
}
