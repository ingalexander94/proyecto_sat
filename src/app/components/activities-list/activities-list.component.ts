import { Component, Input, OnInit } from '@angular/core';
import { activities } from 'src/app/model/data';
import {ActivitiesList}  from 'src/app/model/ui';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
activitiesList: ActivitiesList[]=activities;
  constructor() { }

  ngOnInit(): void {
  }

}
