import { Component, Input, OnInit } from '@angular/core';
import { ItemRisk } from 'src/app/model/ui';
import { itemAcademicRisks } from '../../model/data';

@Component({
  selector: 'app-risk-academic',
  templateUrl: './risk-academic.component.html',
  styleUrls: ['./risk-academic.component.css'],
})
export class RiskAcademicComponent implements OnInit {
  academic: ItemRisk = itemAcademicRisks;

  constructor() {}
  ngOnInit(): void {}
}
