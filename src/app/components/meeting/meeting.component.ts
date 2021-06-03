import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor(private uiService:UiService) { 
    this.uiService.updateTitleNavbar("Asistencia Reunion")
  }
  
  ngOnInit(): void {
  }

}
