import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/course';

@Component({
  selector: 'app-table-risk',
  templateUrl: './table-risk.component.html',
  styleUrls: ['./table-risk.component.css'],
})
export class TableRiskComponent implements OnInit {
  constructor(private router: Router) {}

  listStudents: Student[] = [
    {
      id: 1,
      code: '9876543',
      names: 'Pablo',
      surnames: 'Montoya',
      risk: 'red',
    },
    {
      id: 2,
      code: '7364758',
      names: 'Juan',
      surnames: 'Quintero',
      risk: 'red',
    },
    {
      id: 3,
      code: '8736337',
      names: 'Duvan',
      surnames: 'Zapata',
      risk: 'red',
    },
    {
      id: 4,
      code: '9843644',
      names: 'Pablo',
      surnames: 'Armero',
      risk: 'orange',
    },
    {
      id: 5,
      code: '5462784',
      names: 'Falcao',
      surnames: 'Garcia',
      risk: 'orange',
    },
    {
      id: 6,
      code: '7645367',
      names: 'Stefan',
      surnames: 'Medina',
      risk: 'yellow',
    },
  ];

  ngOnInit(): void {}

  navigateToStudent() {
    this.router.navigate(['/estudiante']);
  }
}
