import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss'],
})
export class PercentageBarComponent {
  @Input() percentage!: number;

  getBarStyles(): any {
    // const barWidth = Math.min(this.percentage!, 100) + '%';
    const barWidth = this.percentage + '%';
    const isFull = this.percentage > 100;

    return {
      width: isFull ? '100%' : barWidth,
      // opacity: isFull ? 1 : 0.5,
    };
  }
  getBarColor(): any {
    const isFull = this.percentage > 100;

    return isFull ? 'red' : 'blue';
  }
}
