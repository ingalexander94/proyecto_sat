import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app.reducers';
import { StudentResponse } from '../model/auth';
import { LoadStudentsAction } from '../reducer/course/course.actions';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  endpoint: String = environment.url_backend;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getSemesters() {
    try {
      return this.http.get<any>(this.endpoint + '/boss/semesters').toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getStudentsOfSemester(semester) {
    try {
      const { data } = await this.http
        .get<StudentResponse>(
          this.endpoint + '/boss/semesters/students/' + semester
        )
        .toPromise();
      this.store.dispatch(new LoadStudentsAction(data));
    } catch (error) {
      console.error(error);
    }
  }
}
