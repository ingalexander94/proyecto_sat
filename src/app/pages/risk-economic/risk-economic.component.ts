import { Component, OnInit } from '@angular/core';
import { itemsaEconomicRisks} from '../../model/data';

@Component({
  selector: 'app-risk-economic',
  templateUrl: './risk-economic.component.html',
  styleUrls: ['./risk-economic.component.css']
})
export class RiskEconomicComponent implements OnInit {
  economic : String [] =itemsaEconomicRisks;
  constructor() { }

  ngOnInit(): void {
  }

}
