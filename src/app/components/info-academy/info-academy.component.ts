import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-info-academy',
  templateUrl: './info-academy.component.html',
  styleUrls: ['./info-academy.component.css'],
})
export class InfoAcademyComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {}
}
