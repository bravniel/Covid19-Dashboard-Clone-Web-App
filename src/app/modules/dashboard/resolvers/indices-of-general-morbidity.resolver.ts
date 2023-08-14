import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class IndicesOfGeneralMorbidityResolver implements Resolve<boolean> {
  constructor(private dashboardService: DashboardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.dashboardService.getIndicesOfGeneralMorbidityData();
  }
}
