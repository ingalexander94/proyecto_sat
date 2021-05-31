import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-risks',
  templateUrl: './detail-risks.component.html',
  styleUrls: ['./detail-risks.component.css']
})
export class DetailRisksComponent implements OnInit {
  
  @Input() itemsRisks: String[];

  constructor() { }

  ngOnInit(): void {
  }
 

}
