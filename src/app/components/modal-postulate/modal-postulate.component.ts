import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Postulation } from 'src/app/model/risk';

@Component({
  selector: 'app-modal-postulate',
  templateUrl: './modal-postulate.component.html',
  styleUrls: ['./modal-postulate.component.css'],
})
export class ModalPostulateComponent implements OnInit {
  @Output() isClosed = new EventEmitter<boolean>();
  @Input() postulation: Postulation;

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
