import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-wellness-notification',
  templateUrl: './wellness-notification.component.html',
  styleUrls: ['./wellness-notification.component.css'],
})
export class WellnessNotificationComponent implements OnInit {
  showDate: boolean = false;
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Notificar Estudiante');
  }

  ngOnInit(): void {}

  ShowDateNotification(show: boolean = true) {
    this.showDate = show;
  }
}
