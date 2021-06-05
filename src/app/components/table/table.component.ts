import { Component, Input, OnInit } from '@angular/core';
import { StudentInDanger } from 'src/app/model/ui';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() props: { students: StudentInDanger[]; type: String };

  constructor() {}

  ngOnInit(): void {}
}
