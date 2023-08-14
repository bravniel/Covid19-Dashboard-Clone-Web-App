import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GeneralService } from '../services/general.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderResolver implements Resolve<boolean> {
  constructor(private generalService: GeneralService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.generalService.getLatestUpdateDate();
  }
}
