import { Component, Input, OnInit } from '@angular/core';
import { CardOptions } from 'src/app/data/app.arrays';
import { CardData } from 'src/app/data/app.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // @Input() cardData: CardData | null = null;
  // @Input() cardHeight!: string;
  @Input() isCardHasMoreOptionsBtn: boolean = true;

  @Input() cardData?: any;
  @Input() cardVisualSettingsAndData?: any;
  cardTitle?: string;
  cardInfo?: string;

  CardMoreOptions = CardOptions;

  isInformationOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // console.log('card', this.card);
    // this.cardTitle = this.cardData?.headerNumber;
    // this.cardInfo = this.cardData?.headerNumber;
    this.cardTitle = this.cardVisualSettingsAndData?.headerTitle;
    this.cardInfo = this.cardVisualSettingsAndData?.cardInfo;
  }

  toggleInformationContainer() {
    this.isInformationOpen = !this.isInformationOpen;
  }
  closeInformationContainer() {
    this.isInformationOpen = false;
  }
  openInformationContainer() {
    this.isInformationOpen = true;
  }
}
