import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private _isSideNavBarOpen = new BehaviorSubject<boolean>(false);
  public isSideNavBarOpen = this._isSideNavBarOpen.asObservable();

  private _latestDateToDisplay = new BehaviorSubject<string>('');
  public latestDateToDisplay = this._latestDateToDisplay.asObservable();

  constructor(private http: HttpClient) {}

  toggleSideNavBar() {
    this._isSideNavBarOpen.next(!this._isSideNavBarOpen.value);
  }

  getLatestUpdateDate(): Observable<any> {
    return this.http.get(`${environment.apiURL}/latest-states-date`).pipe(
      tap((data: any) => {
        this._latestDateToDisplay.next(data);
      })
    );
  }
}
