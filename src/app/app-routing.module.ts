import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AsmaComponent,
  CassieComponent,
  ErynComponent,
  MoniqueComponent,
  ShelleyComponent,
  UsComponent
} from './about';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import {
  ClinicalConsultationComponent,
  ExpertWitnessComponent,
  LicensureSupervisionComponent,
  TherapistConsultComponent
} from './other-services';
import {
  AnimalAssistedComponent,
  EmdrComponent,
  GriefComponent,
  IfsPartsWorkComponent,
  LgbtqiapComponent,
  ShameWorkComponent,
  ToxicRelationshipsComponent,
  TraumaPtsdComponent,
  WorkshopsComponent
} from './specialities';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'us', component: UsComponent },
  { path: 'shelley', component: ShelleyComponent },
  { path: 'eryn', component: ErynComponent },
  { path: 'monique', component: MoniqueComponent },
  { path: 'asma', component: AsmaComponent },
  { path: 'cassie', component: CassieComponent },
  { path: 'animal-assisted-therapy', component: AnimalAssistedComponent },
  { path: 'emdr', component: EmdrComponent },
  { path: 'grief', component: GriefComponent },
  { path: 'ifs-parts-work', component: IfsPartsWorkComponent },
  { path: 'lgbtqiap', component: LgbtqiapComponent },
  { path: 'shame-work', component: ShameWorkComponent },
  { path: 'toxic-relationships', component: ToxicRelationshipsComponent },
  { path: 'trauma-ptsd', component: TraumaPtsdComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'clinical-consultation', component: ClinicalConsultationComponent },
  { path: 'expert-witness', component: ExpertWitnessComponent },
  { path: 'licensure-supervision', component: LicensureSupervisionComponent },
  { path: 'therapist-consult', component: TherapistConsultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
