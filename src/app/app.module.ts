import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsmaComponent } from './about/asma/asma.component';
import { CassieComponent } from './about/cassie/cassie.component';
import { ErynComponent } from './about/eryn/eryn.component';
import { MoniqueComponent } from './about/monique/monique.component';
import { ShelleyComponent } from './about/shelley/shelley.component';
import { UsComponent } from './about/us/us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material';
import { ClinicalConsultationComponent } from './other-services/clinical-consultation/clinical-consultation.component';
import { ExpertWitnessComponent } from './other-services/expert-witness/expert-witness.component';
import { LicensureSupervisionComponent } from './other-services/licensure-supervision/licensure-supervision.component';
import { TherapistConsultComponent } from './other-services/therapist-consult/therapist-consult.component';
import { TrainingWorkshopsComponent } from './other-services/training-workshops/training-workshops.component';
import { AnimalAssistedComponent } from './specialities/animal-assisted/animal-assisted.component';
import { EmdrComponent } from './specialities/emdr/emdr.component';
import { GriefComponent } from './specialities/grief/grief.component';
import { IfsPartsWorkComponent } from './specialities/ifs-parts-work/ifs-parts-work.component';
import { LgbtqiapComponent } from './specialities/lgbtqiap/lgbtqiap.component';
import { ShameWorkComponent } from './specialities/shame-work/shame-work.component';
import { ToxicRelationshipsComponent } from './specialities/toxic-relationships/toxic-relationships.component';
import { TraumaPtsdComponent } from './specialities/trauma-ptsd/trauma-ptsd.component';
import { WorkshopsComponent } from './specialities/workshops/workshops.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    ContactComponent,
    ShelleyComponent,
    ErynComponent,
    AsmaComponent,
    MoniqueComponent,
    UsComponent,
    CassieComponent,
    AnimalAssistedComponent,
    EmdrComponent,
    GriefComponent,
    ToxicRelationshipsComponent,
    IfsPartsWorkComponent,
    LgbtqiapComponent,
    ShameWorkComponent,
    TraumaPtsdComponent,
    WorkshopsComponent,
    ClinicalConsultationComponent,
    ExpertWitnessComponent,
    LicensureSupervisionComponent,
    TherapistConsultComponent,
    TrainingWorkshopsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
