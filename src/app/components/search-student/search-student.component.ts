import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  filter,
} from 'rxjs/operators';
import { Title } from 'src/app/model/ui';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css'],
})
export class SearchStudentComponent implements OnInit, OnDestroy {
  @Input() title: Title;

  @ViewChild('filter', { static: true }) filter: ElementRef;

  input$: Observable<String> = new Observable();
  subscription: Subscription = new Subscription();

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.input$ = fromEvent(this.filter.nativeElement, 'keyup');
    this.subscription = this.input$
      .pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((filter: any) => filter.length)
      )
      .subscribe(console.log);
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
