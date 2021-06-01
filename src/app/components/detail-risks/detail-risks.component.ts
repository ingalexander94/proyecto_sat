import { Component, Input, OnInit } from '@angular/core';
import { ItemRisk } from 'src/app/model/ui';

@Component({
  selector: 'app-detail-risks',
  templateUrl: './detail-risks.component.html',
  styleUrls: ['./detail-risks.component.css'],
})
export class DetailRisksComponent implements OnInit {
  @Input() itemsRisks: ItemRisk;

  constructor() {}

  ngOnInit(): void {}
}
