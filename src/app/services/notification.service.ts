import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { AppState } from '../app.reducers';
import { User } from '../model/auth';
import { ResponseNotification } from '../model/notification';
import {
  DeleteNotificationAction,
  LoadingNotificationAction,
  UpdateNotificationAction,
} from '../reducer/notification/notification.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  url: String = environment.url_backend;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async sendNotification(notification) {
    try {
      const data = await this.http
        .post<ResponseNotification[]>(this.url + '/notification/', notification)
        .toPromise();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getNotifications(code: String) {
    try {
      const data = await this.http
        .get<ResponseNotification[]>(this.url + '/notification/' + code)
        .toPromise();
      this.store.dispatch(new LoadingNotificationAction(data));
    } catch (error) {
      console.error(error);
    }
  }

  async deleteNotification(id: String) {
    try {
      await this.http.delete(this.url + '/notification/' + id).toPromise();
      this.store.dispatch(new DeleteNotificationAction(id));
    } catch (error) {
      console.error(error);
    }
  }

  async updateNotification(id: String) {
    try {
      await this.http.put(this.url + '/notification/' + id, {}).toPromise();
      this.store.dispatch(new UpdateNotificationAction(id));
    } catch (error) {
      console.error(error);
    }
  }
}
