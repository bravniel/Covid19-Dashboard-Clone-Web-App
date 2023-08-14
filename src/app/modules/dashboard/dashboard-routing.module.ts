import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDataComponent } from './pages/main-data/main-data.component';
import { ViewOnResolver } from './resolvers/view-on.resolver';
import { LightsInSettlementsResolver } from './resolvers/lights-in-settlements.resolver';
import { MorbidityFromAbroadResolver } from './resolvers/morbidity-from-abroad.resolver';
import { IndicesOfGeneralMorbidityResolver } from './resolvers/indices-of-general-morbidity.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainDataComponent,
    resolve: {
      viewOn: ViewOnResolver,
      LightsInSettlements: LightsInSettlementsResolver,
      MorbidityFromAbroad: MorbidityFromAbroadResolver,
      IndicesOfGeneralMorbidity: IndicesOfGeneralMorbidityResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
