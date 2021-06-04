import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css'],
})
export class FloatingButtonComponent implements OnInit {
  @ViewChild('checkboxNotification') checkboxNotification: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  closeButton() {
    this.checkboxNotification.nativeElement.checked = false;
  }
}
