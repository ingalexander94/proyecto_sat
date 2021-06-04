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
<<<<<<< HEAD
import { SemesterComponent } from './pages/semester/semester.component';
import { PostulateListComponent } from './pages/postulate-list/postulate-list.component';

=======
>>>>>>> 3361922f81638cf40d5a261ab6791f95483d5d67

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
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
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
