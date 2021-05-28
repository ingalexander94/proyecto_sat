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
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCourseComponent } from './pages/list-course/list-course.component';
import { ItemCourseComponent } from './components/item-course/item-course.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent, NavbarComponent, ListCourseComponent, ItemCourseComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
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
