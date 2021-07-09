import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { ResponseNotification } from 'src/app/model/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css'],
})
export class FloatingButtonComponent implements OnInit, OnDestroy {
  @ViewChild('checkboxNotification') checkboxNotification: ElementRef;

  subscription: Subscription = new Subscription();
  code: String;
  role: String;
  notification: ResponseNotification[];
  unread: Number = 0;

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(filter(({ auth }) => auth.user !== null))
      .subscribe(({ auth, notification }) => {
        this.code = auth.user.codigo;
        this.role = auth.user.rol;
        this.notification = notification.notification;
        this.unread = notification.unread;
      });
  }
  deleteNotificatio(id: String) {
    this.notificationService.deleteNotification(id);
  }

  closeButton(notification: ResponseNotification) {
    if (notification.isActive)
      this.notificationService.updateNotification(notification._id.$oid);
    this.checkboxNotification.nativeElement.checked = false;
    this.loadUserShow(notification.codeTransmitter, notification.url);
  }

  loadUserShow(code: String, url: String) {
    const role = this.role === 'docente' ? 'students' : 'teachers';
    this.notificationService.getUserInformed(code, role, url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
