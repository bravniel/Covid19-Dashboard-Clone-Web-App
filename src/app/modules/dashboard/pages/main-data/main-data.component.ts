import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {
  CardData,
  Country,
  Hospital,
  LightInSettlement,
  MorbidityFromAbroad,
  SettlementOption,
  StatisticsViewOn,
} from 'src/app/data/app.interfaces';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDataComponent implements OnInit {
  viewOnData?: StatisticsViewOn;
  LightsInSettlementsData: LightInSettlement[] = [];
  MorbidityFromAbroadData: Country[] = [];
  IndicesOfGeneralMorbidityData: Hospital[] = [];

  // constructor(private dashboardService: DashboardService) {}
  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any): void => {
      console.log('viewOn', data['viewOn']);
      this.viewOnData = data['viewOn'];
      this.LightsInSettlementsData = data['LightsInSettlements'];
      this.MorbidityFromAbroadData = data['MorbidityFromAbroad'];
      this.IndicesOfGeneralMorbidityData = data['IndicesOfGeneralMorbidity'];
    });

    this.generalService.getLatestUpdateDate().subscribe((data) => {
      console.log('data dashboard', data);
    });
  }
}
