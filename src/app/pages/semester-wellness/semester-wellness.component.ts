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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('auth')
      .pipe(filter(({ user }) => user !== null))
      .subscribe(({ user }) => (this.title.title = user.programa));
    this.updateSemesters();
  }

  updateSemesters() {
    const number = this.route.snapshot.paramMap.get('numero');
    const period = `Periodo ${number}`;
    this.title2.title = period;
    this.uiService.updateTitleNavbar(period);
    this.bossService.getStudentsOfSemester(number);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
