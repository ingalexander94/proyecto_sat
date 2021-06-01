import { Component, OnInit } from '@angular/core';
import { ItemRisk } from 'src/app/model/ui';
import { itemsaInstitucionalRisks } from '../../model/data';

@Component({
  selector: 'app-risk-institucional',
  templateUrl: './risk-institucional.component.html',
  styleUrls: ['./risk-institucional.component.css'],
})
export class RiskInstitucionalComponent implements OnInit {
  institucional: ItemRisk = itemsaInstitucionalRisks;
  constructor() {}

  ngOnInit(): void {}
}
