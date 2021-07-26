import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { WellnessService } from 'src/app/services/wellness.service';
import { Facultie } from 'src/app/model/wellness';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { saveInLocalStorage } from 'src/app/helpers/localStorage';
import { showAlert } from 'src/app/helpers/alert';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
})
export class FacultiesComponent implements OnInit {
  faculties: Facultie[] = [];
  loading: boolean = true;
  loadingSearch: boolean = false;

  formSearch: FormGroup;

  createFormSearch(): FormGroup {
    return new FormGroup({
      filter: new FormControl('1072235', Validators.required),
    });
  }

  constructor(
    private uiService: UiService,
    private studentService: StudentService,
    private router: Router,
    private wellnessService: WellnessService
  ) {
    this.formSearch = this.createFormSearch();
    this.uiService.updateTitleNavbar('Facultades');
  }

  ngOnInit(): void {
    this.getFaculties();
  }

  async getFaculties() {
    const { data } = await this.wellnessService.getFaculties();
    this.faculties = data;
    this.loading = false;
  }

  async onSubmit() {
    if (!this.formSearch.invalid) {
      this.loadingSearch = true;
      const code = this.formSearch.get('filter');
      const { data, msg } = await this.studentService.getByCode(code.value);
      if (!data) {
        showAlert('warning', msg);
      } else {
        saveInLocalStorage('receiver', data);
        saveInLocalStorage('user-show', data);
        this.loadingSearch = false;
        this.router.navigate(['/estudiante']);
      }
    }
  }

  get filter() {
    return this.formSearch.get('filter');
  }

  goToInRisk() {
    this.router.navigate(['/vicerrector/en-riesgo']);
  }
}
