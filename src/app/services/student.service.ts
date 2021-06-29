import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  ResponseCourse } from '../model/course';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { LoadingCourseAction } from '../reducer/course/course.actions';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: String = environment.url_backend;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
    ) { }

  async listCourses (code:String){
    try {
      const {data}=  await this.http.get<ResponseCourse>(this.url +'/students/course/' + code).toPromise();
      this.store.dispatch(new LoadingCourseAction(data));
    } catch (error) {
      console.error(error); 
    }
  }
}
