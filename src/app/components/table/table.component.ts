import { Component,  OnInit } from '@angular/core';
import { postulates } from 'src/app/model/data';
import { Postulates } from 'src/app/model/ui';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 postulateList :Postulates[]=postulates;
  constructor( private uiservice: UiService) { 
  
    console.log(postulates);
  }

  ngOnInit(): void {
    
  }

}
