import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.uiService.updateTitleNavbar('Perfil');
  }

  ngOnInit(): void {}
}
