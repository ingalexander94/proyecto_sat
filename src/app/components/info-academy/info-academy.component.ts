import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { User } from 'src/app/model/auth';
import { courses } from 'src/app/model/data';
import { desCourse } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-info-academy',
  templateUrl: './info-academy.component.html',
  styleUrls: ['./info-academy.component.css'],
})
export class InfoAcademyComponent implements OnInit {
  listCourse: desCourse[] = courses;

  user: User = null;
  subcription: Subscription = new Subscription();

  constructor(
    private uiService: UiService, 
    private store: Store<AppState>,
    private router: Router
    ) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {
    this.subcription = this.store
    .pipe(map(({ auth, ui }) => ({ user: auth.user, title: ui.titleNavbar })))
      .subscribe(({ user, title }) => {
        this.user = user;
      });
  }
  onNavigateToCourseData() {
      this.router.navigate(['/vicerrector/datos-curso']);
  }
}
