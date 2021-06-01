import { Component, OnInit } from '@angular/core';
import { ItemRisk } from 'src/app/model/ui';
import { itemsaEconomicRisks } from '../../model/data';

@Component({
  selector: 'app-risk-economic',
  templateUrl: './risk-economic.component.html',
  styleUrls: ['./risk-economic.component.css'],
})
export class RiskEconomicComponent implements OnInit {
  economic: ItemRisk = itemsaEconomicRisks;
  constructor() {}

  ngOnInit(): void {}
}
