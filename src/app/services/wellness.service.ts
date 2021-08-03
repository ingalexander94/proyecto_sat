import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ResponseFacultie } from '../model/wellness';

@Injectable({
  providedIn: 'root',
})
export class WellnessService {
  URL_BACKEND = environment.url_backend;

  constructor(private http: HttpClient, private location: Location) {}

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

  async validateProgram(nameProgram: String) {
    try {
      const res = await this.http
        .get<boolean>(
          `${this.URL_BACKEND}/wellness/semester/program/${nameProgram}`
        )
        .toPromise();
      if (!res) this.location.back();
    } catch (error) {
      console.error(error);
    }
  }
}
