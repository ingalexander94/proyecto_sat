
import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';


@Component({
  selector: 'app-item-course',
  templateUrl: './item-course.component.html',
  styleUrls: ['./item-course.component.css'],
})
export class ItemCourseComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit(): void {}
}
