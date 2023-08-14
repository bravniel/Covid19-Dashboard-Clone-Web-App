import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { Hospital, SettlementOption } from 'src/app/data/app.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _viewOnDataSubject = new Subject<any>();
  viewOnData = this._viewOnDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getWiewOnData(): Observable<any> {
    return this.http.get(`${environment.apiURL}/focus-on`);
  }

  getLightsInSettlementsData(): Observable<any> {
    return this.http.get(`${environment.apiURL}/lights-in-settlements`);
  }
  getMorbidityFromAbroadData(): Observable<any> {
    return this.http.get(
      `${environment.apiURL}/calculate-morbidity-sum-from-abroad`
    );
  }
  getIndicesOfGeneralMorbidityData(): Observable<any> {
    return this.http.get(`${environment.apiURL}/latest-hospitals-date`);
  }
}
