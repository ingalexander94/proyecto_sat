import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { Title } from 'src/app/model/ui';
import { BossService } from 'src/app/services/boss.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-semester-wellness',
  templateUrl: './semester-wellness.component.html',
  styleUrls: ['./semester-wellness.component.css'],
})
export class SemesterWellnessComponent implements OnInit, OnDestroy {
  title: Title = {
    title: '',
    subtitle: '',
  };

  title2: Title = {
    title: '',
    subtitle: 'Listado total de estudiantes matriculados',
  };

  subscription: Subscription = new Subscription();

  constructor(
    private uiService: UiService,
    private bossService: BossService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('auth')
      .pipe(filter(({ user }) => user !== null))
      .subscribe(({ user }) =>
        user.rol === 'jefe'
          ? (this.title.title = user.programa)
          : (this.title.title = decodeURI(
              this.route.snapshot.paramMap.get('programa')
            ))
      );
    this.updateSemesters();
  }

  updateSemesters() {
    const number = this.route.snapshot.paramMap.get('numero');
    console.log('me llega esto ' + number);
    const program = decodeURI(this.route.snapshot.paramMap.get('programa'));
    const period = `Periodo ${number}`;
    this.title2.title = period;
    this.uiService.updateTitleNavbar(period);
    this.bossService.getStudentsOfSemester(program, number);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
