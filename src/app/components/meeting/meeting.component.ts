import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, pluck, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { Meet } from 'src/app/model/meet';
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
  loading: Boolean = true;

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
        pluck('userActive'),
        distinctUntilChanged(),
        tap(({ codigo }) => this.loadMeets(codigo))
      )
      .subscribe();
  }

  async loadMeets(code: String) {
    const data = await this.wellnessService.getMeetOfStudent(code);
    this.meet = data;
    this.loading = false;
  }

  async accept(option: boolean) {
    this.loading = true;
    await this.wellnessService.acceptMeet(this.meet._id.$oid, option);
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
