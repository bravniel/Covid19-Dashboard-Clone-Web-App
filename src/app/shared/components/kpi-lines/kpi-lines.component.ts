import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-lines',
  templateUrl: './kpi-lines.component.html',
  styleUrls: ['./kpi-lines.component.scss'],
})
export class KpiLinesComponent {
  @Input() mainNumber?: any;
  @Input() subDataLines?: any;
  @Input() subDataLinesVisualSettingsAndData?: any;
}
