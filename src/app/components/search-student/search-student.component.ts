import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css'],
})
export class SearchStudentComponent implements OnInit {
  @Input() title: Title;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
