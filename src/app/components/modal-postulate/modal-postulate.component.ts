import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-postulate',
  templateUrl: './modal-postulate.component.html',
  styleUrls: ['./modal-postulate.component.css'],
})
export class ModalPostulateComponent implements OnInit {
  @Output() isClosed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClick({ target }) {
    if (target.className === 'wrapper_alert') {
      this.close();
    }
  }

  close() {
    this.isClosed.emit(false);
  }
}
