import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wellness-notification',
  templateUrl: './wellness-notification.component.html',
  styleUrls: ['./wellness-notification.component.css']
})
export class WellnessNotificationComponent implements OnInit {
  showDate :boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  ShowDateNotification (show: boolean = true){
    this.showDate=show;
  }

}
