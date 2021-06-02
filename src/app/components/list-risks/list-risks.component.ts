import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-risks',
  templateUrl: './list-risks.component.html',
  styleUrls: ['./list-risks.component.css'],
})
export class ListRisksComponent implements OnInit {
  showAlert: boolean = false;
  

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigateToRisk(url: String) {
    this.router.navigate([url]);
  }

  updateRisk(show: boolean = true) {
    this.showAlert = show;
  }
  
}
