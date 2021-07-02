import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { User } from 'src/app/model/auth';
import { ResponseChat } from 'src/app/model/chat';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  chat: ResponseChat[];
  code: String;
  constructor(private uiService: UiService, private store: Store<AppState>) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(filter(({ auth }) => auth.user !== null))
      .subscribe(
        ({ chat, auth }) => (
          (this.chat = chat.chat), (this.code = auth.user.codigo)
        )
      );
    console.log(this.code);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
