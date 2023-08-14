import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderResolver } from './core/resolvers/header.resolver';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  // { path: "**", redirectTo: "/dashboard" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  // providers: [HeaderResolver],
})
export class AppRoutingModule {}
