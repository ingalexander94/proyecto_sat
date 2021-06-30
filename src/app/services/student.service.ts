import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  ResponseCourse } from '../model/course';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { LoadingCourseAction } from '../reducer/course/course.actions';
import { User } from '../model/auth';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: String = environment.url_backend;
  user:User;
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
    ) { 
      this.store.select('auth')
      .pipe(
        filter(({user}) => user !== null )
      ).subscribe(({user}) => this.user =user )
    }

  async listCourses (){
    try {
      const {data}=  await this.http.get<ResponseCourse>(this.url +'/students/course/' + this.user.codigo).toPromise();
      this.store.dispatch(new LoadingCourseAction(data));
    } catch (error) {
      console.error(error); 
    }
  }
}
