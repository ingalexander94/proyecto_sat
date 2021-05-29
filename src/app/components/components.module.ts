import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TitleComponent } from './title/title.component';
import { ItemCourseComponent } from './item-course/item-course.component';

@NgModule({
  declarations: [
    AlertComponent,
    ProfileCardComponent,
    TitleComponent,
    ItemCourseComponent,
  ],
  exports: [
    AlertComponent,
    ProfileCardComponent,
    TitleComponent,
    ItemCourseComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
