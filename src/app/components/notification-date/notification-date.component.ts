import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-date',
  templateUrl: './notification-date.component.html',
  styleUrls: ['./notification-date.component.css'],
})
export class NotificationDateComponent implements OnInit {
  @Output() isClosed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  close() {
    this.isClosed.emit(false);
  }

  onClick({ target }) {
    if (target.className === 'wrapper_alert') {
      this.close();
    }
  }
}
