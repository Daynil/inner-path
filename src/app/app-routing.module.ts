import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  AsmaComponent,
  CassieComponent,
  ErynComponent,
  ShelleyComponent,
  SueComponent,
  UsComponent,
} from "./about";
import { ContactComponent } from "./contact/contact.component";
import { FormsComponent } from "./forms/forms.component";
import { HomeComponent } from "./home/home.component";
import {
  ClinicalConsultationComponent,
  ExpertWitnessComponent,
  LicensureSupervisionComponent,
  TherapistConsultComponent,
  TrainingWorkshopsComponent,
} from "./other-services";
import {
  AdolescentsComponent,
  AnimalAssistedComponent,
  ArtTherapyComponent,
  CouplesTherapyComponent,
  CulturalIdentityComponent,
  DbtComponent,
  EmdrComponent,
  GriefComponent,
  IfsPartsWorkComponent,
  LgbtqiapComponent,
  MoodDisordersComponent,
  PreMaritalCounselingComponent,
  ShameWorkComponent,
  SrrComponent,
  ToxicRelationshipsComponent,
  TraumaPtsdComponent,
  WorkshopsComponent,
} from "./specialities";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "forms", component: FormsComponent },
  { path: "contact", component: ContactComponent },
  { path: "us", component: UsComponent },
  { path: "shelley", component: ShelleyComponent },
  { path: "eryn", component: ErynComponent },
  // { path: 'monique', component: MoniqueComponent },
  { path: "asma", component: AsmaComponent },
  { path: "sue", component: SueComponent },
  { path: "cassie", component: CassieComponent },
  { path: "animal-assisted-therapy", component: AnimalAssistedComponent },
  { path: "emdr", component: EmdrComponent },
  { path: "grief", component: GriefComponent },
  { path: "ifs-parts-work", component: IfsPartsWorkComponent },
  { path: "lgbtqiap", component: LgbtqiapComponent },
  { path: "shame-work", component: ShameWorkComponent },
  { path: "toxic-relationships", component: ToxicRelationshipsComponent },
  { path: "art-therapy", component: ArtTherapyComponent },
  // { path: "yoga", component: YogaComponent },
  // { path: "reiki", component: ReikiComponent },
  { path: "adolescents", component: AdolescentsComponent },
  { path: "cultural-identity", component: CulturalIdentityComponent },
  { path: "couples-therapy", component: CouplesTherapyComponent },
  { path: "pre-marital-counseling", component: PreMaritalCounselingComponent },
  { path: "mood-disorders", component: MoodDisordersComponent },
  { path: "trauma-ptsd", component: TraumaPtsdComponent },
  { path: "workshops", component: WorkshopsComponent },
  { path: "clinical-consultation", component: ClinicalConsultationComponent },
  { path: "expert-witness", component: ExpertWitnessComponent },
  { path: "licensure-supervision", component: LicensureSupervisionComponent },
  { path: "therapist-consult", component: TherapistConsultComponent },
  { path: "training-workshops", component: TrainingWorkshopsComponent },
  { path: "srr", component: SrrComponent },
  { path: "dbt", component: DbtComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
