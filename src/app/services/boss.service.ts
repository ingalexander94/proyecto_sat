import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
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
  role: String = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store
      .select('auth')
      .pipe(
        filter(({ user }) => user !== null),
        map(({ user }) => user.rol)
      )
      .subscribe((rol) => (this.role = rol));
  }

  async getStudentsOfSemester(program: String, period: String) {
    try {
      const { data } = await this.http
        .post<StudentResponse>(this.endpoint + '/boss/semesters/students', {
          program,
          period,
        })
        .toPromise();
      this.store.dispatch(new LoadStudentsAction(data));
    } catch (error) {
      console.error(error);
    }
  }

  getPostulates(page: number = 1, perPage: number = 5) {
    try {
      const path =
        this.role === 'jefe' ? '/students/postulate' : '/wellness/postulations';
      const params = new HttpParams()
        .set('page', page.toString())
        .set('perPage', perPage.toString());
      return this.http
        .get<PostulationResponse>(this.endpoint + path, {
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

  counterPostulation() {
    try {
      return this.http
        .get<any>(this.endpoint + '/students/postulate/counter')
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  attendPostulation(id: String) {
    try {
      return this.http
        .put<any>(this.endpoint + '/boss/postulation/update', {
          id,
          state: 'EN REVISIÓN',
        })
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
