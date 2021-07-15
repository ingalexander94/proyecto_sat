import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { convertSemesterInRoman } from 'src/app/helpers/ui';
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
    const numero = this.route.snapshot.paramMap.get('numero');
    const roman = `Semestre ${convertSemesterInRoman(parseInt(numero))}`;
    this.title2.title = roman;
    this.uiService.updateTitleNavbar(roman);
    this.bossService.getStudentsOfSemester(numero);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
