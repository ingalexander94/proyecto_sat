import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {

  constructor(private uiservice: UiService) { 
    this.uiservice.updateTitleNavbar("Perfil Docente")
  }

  ngOnInit(): void {
  }

}
