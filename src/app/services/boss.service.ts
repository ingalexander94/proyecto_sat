import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app.reducers';
import { StudentResponse } from '../model/auth';
import { Postulation, PostulationResponse } from '../model/risk';
import { LoadStudentsAction } from '../reducer/course/course.actions';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  endpoint: String = environment.url_backend;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async getStudentsOfSemester(period) {
    try {
      const { data } = await this.http
        .get<StudentResponse>(
          this.endpoint + '/boss/semesters/students/' + period
        )
        .toPromise();
      this.store.dispatch(new LoadStudentsAction(data));
    } catch (error) {
      console.error(error);
    }
  }

  getPostulates(page: number = 1, perPage: number = 5) {
    try {
      const params = new HttpParams()
        .set('page', page.toString())
        .set('perPage', perPage.toString());
      return this.http
        .get<PostulationResponse>(this.endpoint + '/students/postulate', {
          params,
        })
        .toPromise();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  filterPostulation(code: String) {
    try {
      return this.http
        .post<Postulation>(this.endpoint + '/students/postulate/filter', {
          code,
        })
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  counterPostulationUnattended() {
    try {
      return this.http
        .get<any>(this.endpoint + '/students/postulate/counter')
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
