import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  constructor(private location: Location) {}
  showUpdateProfile: boolean = false;
  
  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  updateProfile(show: boolean = true) {
    this.showUpdateProfile = show;
  }
}
