import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-binnacle',
  templateUrl: './binnacle.component.html',
  styleUrls: ['./binnacle.component.css'],
})
export class BinnacleComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {}
}
