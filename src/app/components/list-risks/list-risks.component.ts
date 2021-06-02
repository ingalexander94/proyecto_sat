import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-list-risks',
  templateUrl: './list-risks.component.html',
  styleUrls: ['./list-risks.component.css'],
})
export class ListRisksComponent implements OnInit {
  showAlert: boolean = false;

  constructor(private router: Router, private uiService: UiService) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {}

  onNavigateToRisk(url: String) {
    this.router.navigate([url]);
  }

  updateRisk(show: boolean = true) {
    this.showAlert = show;
  }
}
