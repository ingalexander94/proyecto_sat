import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TitleComponent } from './title/title.component';
import { ItemCourseComponent } from './item-course/item-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListRisksComponent } from './list-risks/list-risks.component';
import { ChatComponent } from './chat/chat.component';
import { DetailRisksComponent } from './detail-risks/detail-risks.component';
import { InfoAcademyComponent } from './info-academy/info-academy.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { MeetingComponent } from './meeting/meeting.component';
import { RecordComponent } from './record/record.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { WellnessNotificationComponent } from './wellness-notification/wellness-notification.component';
import { NotificationDateComponent } from './notification-date/notification-date.component';
<<<<<<< HEAD
import { SearchStudentComponent } from './search-student/search-student.component';
import { TableComponent } from './table/table.component';

=======
import { FormsModule } from '@angular/forms';
>>>>>>> 3361922f81638cf40d5a261ab6791f95483d5d67

@NgModule({
  declarations: [
    AlertComponent,
    ProfileCardComponent,
    TitleComponent,
    ItemCourseComponent,
    NavbarComponent,
    ListRisksComponent,
    ChatComponent,
    DetailRisksComponent,
    InfoAcademyComponent,
    UpdateProfileComponent,
    RecordComponent,
    FloatingButtonComponent,
    MeetingComponent,
    ActivitiesListComponent,
    WellnessNotificationComponent,
    NotificationDateComponent,
    SearchStudentComponent,
    TableComponent,
  ],
  exports: [
    AlertComponent,
    ProfileCardComponent,
    TitleComponent,
    ItemCourseComponent,
    NavbarComponent,
    FloatingButtonComponent,
    DetailRisksComponent,
    ActivitiesListComponent,
    MeetingComponent,
    SearchStudentComponent,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ComponentsModule {}
