import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { ListRisksComponent } from 'src/app/components/list-risks/list-risks.component';
import { ChildrenComponent } from './children.component';

const children: Routes = [
  { path: '', component: ListRisksComponent },
  { path: 'chat', component: ChatComponent },
];

const routes: Routes = [{ path: '', component: ChildrenComponent, children }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrenRoutingModule {}
