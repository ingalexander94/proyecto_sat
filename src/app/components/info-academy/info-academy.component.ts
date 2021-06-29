import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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

  user: User;
  subscription: Subscription = new Subscription();

  constructor(
    private uiService: UiService, 
    private store: Store<AppState>,
    private router: Router
    ) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {
      this.subscription = this.store
      .pipe( 
        map(({auth}) =>({auth})),
        filter(({auth}) => auth.user !== null)
      )
      .subscribe(({auth:{user}}) =>{
        this.user = user; 
        console.log(this.user)
      } );
  }
  onNavigateToCourseData() {
      this.router.navigate(['/vicerrector/datos-curso']);
  }
}
