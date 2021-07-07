import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  notification: ResponseNotification[];

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(filter(({ auth }) => auth.user !== null))
      .subscribe(({ auth, notification }) => {
        this.code = auth.user.codigo;
        this.notification = notification.notification;
      });
  }
  deleteNotificatio(id) {
    this.notificationService.deleteNotification(id);
  }

  closeButton() {
    this.checkboxNotification.nativeElement.checked = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
