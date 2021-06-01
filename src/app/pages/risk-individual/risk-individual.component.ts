import { Component, OnInit } from '@angular/core';
import { ItemRisk } from 'src/app/model/ui';
import { itemsaIndividualRisks } from '../../model/data';

@Component({
  selector: 'app-risk-individual',
  templateUrl: './risk-individual.component.html',
  styleUrls: ['./risk-individual.component.css'],
})
export class RiskIndividualComponent implements OnInit {
  individual: ItemRisk = itemsaIndividualRisks;
  constructor() {}

  ngOnInit(): void {}
}
