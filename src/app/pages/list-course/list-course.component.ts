import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { User } from 'src/app/model/auth';
import { Course } from 'src/app/model/course';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';
import { StudentService } from 'src/app/services/student.service';
import { filter, map } from 'rxjs/operators';

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

  user: User;
  subscription: Subscription = new Subscription();
  listCourses: Course[];

  constructor(
    private router: Router,
    private uiService: UiService,
    private store: Store<AppState>,
    private studentService:StudentService
  ) {
    this.uiService.updateTitleNavbar();
  }
  
  ngOnInit(): void {
    this.subscription = this.store
      .pipe( 
        map(({auth,course}) =>({auth,course})),
        filter(({auth}) => auth.user !== null)
      ).subscribe(({auth:{user},course:{courses}}) =>{
        this.user = user; 
        this.listCourses = courses ;
      } );
      this.studentService.listCourses(); 
  }

  onNavigateToCourse() {
    if (this.user.rol === 'docente' || this.user.rol === 'jefe') {
      this.router.navigate(['/docente/materia']);
    } else {
      this.router.navigate(['/docente/perfil']);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}
