import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map, pluck, tap } from 'rxjs/operators';
import { FilterMeet } from 'src/app/model/meet';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';
import { WellnessService } from 'src/app/services/wellness.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  title: Title = {
    title: 'Lista de Citas',
    subtitle: '',
  };
  subscription: Subscription = new Subscription();
  totalPages: number[] = [];
  page: number = 0;
  meets: any[] = [];
  loading: Boolean = true;
  state: string = 'ACEPTADA';
  date: string = new Date().toISOString().split('T')[0];
  showModal: Boolean = false;

  constructor(
    private uiService: UiService,
    private route: ActivatedRoute,
    private wellnessService: WellnessService
  ) {
    this.uiService.updateTitleNavbar('Agenda');
  }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        pluck('pagina'),
        distinctUntilChanged(),
        map((page) => (!page ? '1' : page)),
        tap((page) => (this.page = parseInt(page)))
      )
      .subscribe((page) => this.loadMeets(page, this.state, this.date));
  }

  async loadMeets(page: string, state: string, date: string) {
    this.loading = true;
    const { totalPages, data } = await this.wellnessService.postulateMeet(
      page,
      state,
      date
    );
    this.totalPages = Array(totalPages)
      .fill(0)
      .map((_, i) => i + 1);
    this.meets = data;
    this.loading = false;
  }

  toStudent() {
    alert('debe ir al perfil del estudiante');
  }

  onShowModal(show: FilterMeet = { show: true }) {
    this.showModal = show.show;
    if (show.state || show.date) {
      this.loadMeets('1', show.state, show.date);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
