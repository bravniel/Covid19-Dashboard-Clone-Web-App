import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainDataComponent } from './pages/main-data/main-data.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewOnComponent } from './components/view-on/view-on.component';
import { MainMeasuresComponent } from './components/main-measures/main-measures.component';
import { MorbidityAndHospitalizationOfChildrenComponent } from './components/morbidity-and-hospitalization-of-children/morbidity-and-hospitalization-of-children.component';
import { TheEffectOfVaccinationOnIncidenceComponent } from './components/the-effect-of-vaccination-on-incidence/the-effect-of-vaccination-on-incidence.component';
import { DeathsComponent } from './components/deaths/deaths.component';
import { TestsComponent } from './components/tests/tests.component';
import { AdditionalInvestigationComponent } from './components/additional-investigation/additional-investigation.component';
import { RecoveryAndReturnSickComponent } from './components/recovery-and-return-sick/recovery-and-return-sick.component';
import { PopulationVaccinationComponent } from './components/population-vaccination/population-vaccination.component';
import { MorbidityFromAbroadComponent } from './components/morbidity-from-abroad/morbidity-from-abroad.component';
import { LightsInSettlementsComponent } from './components/lights-in-settlements/lights-in-settlements.component';
import { IndicesOfGeneralMorbidityComponent } from './components/indices-of-general-morbidity/indices-of-general-morbidity.component';
import { DashboardService } from './services/dashboard.service';
import { ViewOnResolver } from './resolvers/view-on.resolver';
import { LightsInSettlementsResolver } from './resolvers/lights-in-settlements.resolver';
import { MorbidityFromAbroadResolver } from './resolvers/morbidity-from-abroad.resolver';
import { IndicesOfGeneralMorbidityResolver } from './resolvers/indices-of-general-morbidity.resolver';

@NgModule({
  declarations: [
    MainDataComponent,
    ViewOnComponent,
    MainMeasuresComponent,
    MorbidityAndHospitalizationOfChildrenComponent,
    TheEffectOfVaccinationOnIncidenceComponent,
    DeathsComponent,
    TestsComponent,
    AdditionalInvestigationComponent,
    RecoveryAndReturnSickComponent,
    PopulationVaccinationComponent,
    MorbidityFromAbroadComponent,
    LightsInSettlementsComponent,
    IndicesOfGeneralMorbidityComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule, RouterModule, CommonModule],
  providers: [
    DashboardService,
    ViewOnResolver,
    LightsInSettlementsResolver,
    MorbidityFromAbroadResolver,
    IndicesOfGeneralMorbidityResolver,
  ],
})
export class DashboardModule {}
