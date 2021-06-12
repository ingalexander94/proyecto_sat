import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Request to Backend
import { HttpClientModule } from '@angular/common/http';

// Redux
import { StoreModule } from '@ngrx/store';
import { combineReducer } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListCourseComponent } from './pages/list-course/list-course.component';
import { CourseComponent } from './pages/course/course.component';
import { ComponentsModule } from './components/components.module';
import { ProfileStudentComponent } from './pages/profile-student/profile-student.component';
import { RiskAcademicComponent } from './pages/risk-academic/risk-academic.component';
import { RiskIndividualComponent } from './pages/risk-individual/risk-individual.component';
import { RiskInstitucionalComponent } from './pages/risk-institucional/risk-institucional.component';
import { RiskEconomicComponent } from './pages/risk-economic/risk-economic.component';
import { FacultiesComponent } from './pages/faculties/faculties.component';
import { SemesterComponent } from './pages/semester/semester.component';
import { PostulateListComponent } from './pages/postulate-list/postulate-list.component';
import { InRiskComponent } from './pages/in-risk/in-risk.component';
import { ProfileTeacherComponent } from './pages/profile-teacher/profile-teacher.component';
import { SemesterWellnessComponent } from './pages/semester-wellness/semester-wellness.component';
import { DashboardPsychologyComponent } from './dashboard-psychology/dashboard-psychology.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ListCourseComponent,
    CourseComponent,
    ProfileStudentComponent,
    RiskAcademicComponent,
    RiskIndividualComponent,
    RiskInstitucionalComponent,
    RiskEconomicComponent,
    FacultiesComponent,
    PostulateListComponent,
    InRiskComponent,
    ProfileTeacherComponent,
    SemesterComponent,
    SemesterWellnessComponent,
    ScheduleComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    StoreModule.forRoot(combineReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
