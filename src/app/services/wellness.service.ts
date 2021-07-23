import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
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
}
