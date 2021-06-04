import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { servicesWellness } from 'src/app/model/data';
import { ServicesWellness } from 'src/app/model/ui';
=======
>>>>>>> 3361922f81638cf40d5a261ab6791f95483d5d67
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-wellness-notification',
  templateUrl: './wellness-notification.component.html',
  styleUrls: ['./wellness-notification.component.css'],
})
export class WellnessNotificationComponent implements OnInit {
<<<<<<< HEAD
  showDate :boolean =false;
  servicesWellnesslist: ServicesWellness[]=servicesWellness;
  constructor(private iuservices: UiService) {
    this.iuservices.updateTitleNavbar("Notificar Bienestar");
  

   }

  ngOnInit(): void {
=======
  showDate: boolean = false;
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Notificar Estudiante');
>>>>>>> 3361922f81638cf40d5a261ab6791f95483d5d67
  }

  ngOnInit(): void {}

  ShowDateNotification(show: boolean = true) {
    this.showDate = show;
  }
}
