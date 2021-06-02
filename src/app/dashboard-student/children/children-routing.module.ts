import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { DetailRisksComponent } from 'src/app/components/detail-risks/detail-risks.component';
import { InfoAcademyComponent } from 'src/app/components/info-academy/info-academy.component';
import { ListRisksComponent } from 'src/app/components/list-risks/list-risks.component';
import { RecordComponent } from 'src/app/components/record/record.component';
import { RiskAcademicComponent } from 'src/app/pages/risk-academic/risk-academic.component';
import { RiskEconomicComponent } from 'src/app/pages/risk-economic/risk-economic.component';
import { RiskIndividualComponent } from 'src/app/pages/risk-individual/risk-individual.component';
import { RiskInstitucionalComponent } from 'src/app/pages/risk-institucional/risk-institucional.component';
import { ChildrenComponent } from './children.component';

const children: Routes = [
  { path: '', component: ListRisksComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'ver-historial', component: RecordComponent },
  { path: 'perfil-academico', component: InfoAcademyComponent },
  { path: 'riesgo-academico', component: RiskAcademicComponent },
  { path: 'riesgo-economico', component: RiskEconomicComponent },
  { path: 'riesgo-individual', component: RiskIndividualComponent },
  { path: 'riesgo-institucional', component: RiskInstitucionalComponent },
];

const routes: Routes = [{ path: '', component: ChildrenComponent, children }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrenRoutingModule {}
