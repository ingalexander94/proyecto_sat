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
  ],
  exports: [
    AlertComponent,
    ProfileCardComponent,
    TitleComponent,
    ItemCourseComponent,
    NavbarComponent,
    DetailRisksComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
