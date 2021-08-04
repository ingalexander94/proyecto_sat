import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Meet, MeetResponse } from '../model/meet';
import { ResponseFacultie } from '../model/wellness';

@Injectable({
  providedIn: 'root',
})
export class WellnessService {
  URL_BACKEND = environment.url_backend;

  constructor(private http: HttpClient) {}

  getFaculties() {
    try {
      return this.http
        .get<ResponseFacultie>(`${this.URL_BACKEND}/wellness/faculties`)
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  createMeet(meet: Meet) {
    try {
      return this.http
        .post<MeetResponse>(`${this.URL_BACKEND}/meet/`, meet)
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getMeetOfStudent(code: String) {
    try {
      return this.http.get<any>(`${this.URL_BACKEND}/meet/${code}`).toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  acceptMeet(id: String, accept: Boolean) {
    try {
      return this.http
        .put<any>(`${this.URL_BACKEND}/meet/${id}`, { accept })
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  postulateMeet(page: string, state: string, date: string) {
    try {
      const params = new HttpParams()
        .set('page', page)
        .set('state', state)
        .set('date', date);
      return this.http
        .get<any>(`${this.URL_BACKEND}/meet/paginate`, { params })
        .toPromise();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
