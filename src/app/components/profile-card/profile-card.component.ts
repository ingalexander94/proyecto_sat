import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @ViewChild('checkbox') checkbox: ElementRef;

  constructor(private location: Location) {}

  showUpdateProfile: boolean = false;

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  toNavigate() {
    this.checkbox.nativeElement.checked = false;
  }

  updateProfile(show: boolean = true) {
    this.showUpdateProfile = show;
  }

  closeMenu(e: FocusEvent) {
    if (!e.relatedTarget) {
      this.toNavigate();
    }
  }
}
