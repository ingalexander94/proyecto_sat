import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
})
export class FacultiesComponent implements OnInit {
  constructor(private uiService: UiService, private router: Router) {
    this.uiService.updateTitleNavbar('Facultades');
  }

  ngOnInit(): void {}

  goToInRisk() {
    this.router.navigate(['/vicerrector/en-riesgo']);
  }
}
