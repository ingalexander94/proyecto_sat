import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { showAlert } from 'src/app/helpers/alert';
import { saveInLocalStorage } from 'src/app/helpers/localStorage';
import { getSemestersInRoman } from 'src/app/helpers/ui';
import { BossService } from 'src/app/services/boss.service';
import { StudentService } from 'src/app/services/student.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css'],
})
export class SemesterComponent implements OnInit, OnDestroy {
  semesters: String[] = [];
  loading: boolean = false;
  loadingSearch: boolean = false;
  program: String = '';
  subscription: Subscription = new Subscription();
  formSearch: FormGroup;

  createFormSearch(): FormGroup {
    return new FormGroup({
      filter: new FormControl('1072235', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  constructor(
    private uiService: UiService,
    private bossService: BossService,
    private studentService: StudentService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.uiService.updateTitleNavbar('Semestres');
    this.formSearch = this.createFormSearch();
  }

  ngOnInit(): void {
    this.subscription = this.store
      .select('auth')
      .pipe(filter(({ user }) => user !== null))
      .subscribe(({ user }) => (this.program = user.programa));
    this.getSemesters();
  }

  async getSemesters() {
    this.loading = true;
    const { data } = await this.bossService.getSemesters();
    this.semesters = getSemestersInRoman(data);
    this.loading = false;
  }

  async onSubmit() {
    if (!this.formSearch.invalid) {
      this.loadingSearch = true;
      const code = this.formSearch.get('filter');
      const { data, msg } = await this.studentService.getByCode(code.value);
      if (!data) {
        showAlert('warning', msg);
      } else {
        saveInLocalStorage('receiver', data);
        saveInLocalStorage('user-show', data);
        this.loadingSearch = false;
        this.router.navigate(['/estudiante']);
      }
    }
  }

  get filter() {
    return this.formSearch.get('filter');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
