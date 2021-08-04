import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter, pluck, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { Meet, MeetResponse } from 'src/app/model/meet';
import { UiService } from 'src/app/services/ui.service';
import { WellnessService } from 'src/app/services/wellness.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  meet: Meet = null;
  meets: Meet[] = [];
  loading: Boolean = true;
  res: Boolean = true;

  constructor(
    private uiService: UiService,
    private wellnessService: WellnessService,
    private store: Store<AppState>
  ) {
    this.uiService.updateTitleNavbar('Asistencia Reunion');
  }

  ngOnInit(): void {
    this.subscription = this.store
      .select('ui')
      .pipe(
        filter(({ userActive }) => userActive !== null),
        pluck('userActive'),
        distinctUntilChanged(),
        tap(({ codigo }) => {
          this.loadMeets(codigo);
          this.getMeetsStudent(codigo);
        })
      )
      .subscribe();
  }
  async getMeetsStudent(code: String) {
    this.meets = await this.wellnessService.getMeetsStudent(code);
  }

  async loadMeets(code: String) {
    const data = await this.wellnessService.getMeetOfStudent(code);
    this.meet = data;
    this.loading = false;
  }

  async accept(option: boolean) {
    this.res = false;
    this.loading = true;
    await this.wellnessService.acceptMeet(this.meet._id.$oid, option);
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
