import { Component, Input } from '@angular/core';
import { CellStyle, IconStyle, LegendSettings, RiskLevel } from 'src/app/data/app.interfaces';

interface LegendItem {
  color: string;
  description: string;
}

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent {
  @Input()  items: LegendSettings[] = [
    // {
    //   iconStyle: IconStyle.SmallSquare,
    //   iconColor: '#ff0000',
    //   // cellStyle: CellStyle.CellSquareIcon,
    //   descriptionText: 'Small Square Icon',
    // },
    // {
    //   iconStyle: IconStyle.Dot,
    //   iconColor: '#00ff00',
    //   // cellStyle: CellStyle.CellSquareBackgroundWithUnderlineText,
    //   descriptionText: 'Dot Icon',
    // },
    // {
    //   iconStyle: IconStyle.BigSquare,
    //   iconColor: '#0000ff',
    //   // cellStyle: CellStyle.CellBoldTextWithPercent,
    //   descriptionText: 'Big Square Icon',
    //   detailedDescriptionText: 'This is a detailed description.',
    //   // minRangeNum: 0,
    //   // maxRangeNum: 100,
    //   // riskLevel: RiskLevel.Medium,
    // },
  ];
}
