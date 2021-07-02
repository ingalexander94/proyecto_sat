import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from '../app.reducers';
import { ResponseChat } from '../model/chat';
import { LoadingChatAction } from '../reducer/Chat/chat.actions';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url: String = environment.url_backend;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router
  ) {}

  async getMessages() {
    try {
      const data = await this.http
        .post<ResponseChat[]>(this.url + '/chat/messages', {
          code: '1151157',
          email: 'niverdromero12@gmail.com',
          name: 'Niver Romero',
        })
        .toPromise();
      this.store.dispatch(new LoadingChatAction(data));
      this.router.navigate(['/estudiante/chat'], {
        fragment: 'contenedor',
      });
    } catch (error) {
      console.error(error);
    }
  }
}
