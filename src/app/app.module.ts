import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutCardComponent } from './about/about-card.component';
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
import { SharedModule } from './shared/shared.module';
import { AdolescentsComponent } from './specialities/adolescents/adolescents.component';
import { AnimalAssistedComponent } from './specialities/animal-assisted/animal-assisted.component';
import { ArtTherapyComponent } from './specialities/art-therapy/art-therapy.component';
import { CouplesTherapyComponent } from './specialities/couples-therapy/couples-therapy.component';
import { CulturalIdentityComponent } from './specialities/cultural-identity/cultural-identity.component';
import { EmdrComponent } from './specialities/emdr/emdr.component';
import { GriefComponent } from './specialities/grief/grief.component';
import { IfsPartsWorkComponent } from './specialities/ifs-parts-work/ifs-parts-work.component';
import { LgbtqiapComponent } from './specialities/lgbtqiap/lgbtqiap.component';
import { MoodDisordersComponent } from './specialities/mood-disorders/mood-disorders.component';
import { PreMaritalCounselingComponent } from './specialities/pre-marital-counseling/pre-marital-counseling.component';
import { ReikiComponent } from './specialities/reiki/reiki.component';
import { ShameWorkComponent } from './specialities/shame-work/shame-work.component';
import { ToxicRelationshipsComponent } from './specialities/toxic-relationships/toxic-relationships.component';
import { TraumaPtsdComponent } from './specialities/trauma-ptsd/trauma-ptsd.component';
import { WorkshopsComponent } from './specialities/workshops/workshops.component';
import { YogaComponent } from './specialities/yoga/yoga.component';

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
    TrainingWorkshopsComponent,
    ArtTherapyComponent,
    YogaComponent,
    ReikiComponent,
    AdolescentsComponent,
    CulturalIdentityComponent,
    CouplesTherapyComponent,
    PreMaritalCounselingComponent,
    MoodDisordersComponent,
    AboutCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
