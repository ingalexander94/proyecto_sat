import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
})
export class FacultiesComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Facultades');
  }

  ngOnInit(): void {}
}
