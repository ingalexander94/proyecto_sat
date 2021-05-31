import { Component, OnInit } from '@angular/core';
import {itemsaIndividualRisks} from '../../model/data';

@Component({
  selector: 'app-risk-individual',
  templateUrl: './risk-individual.component.html',
  styleUrls: ['./risk-individual.component.css']
})
export class RiskIndividualComponent implements OnInit {
  individual : String[]= itemsaIndividualRisks;
  constructor() { }
  

  ngOnInit(): void {
  }

}
