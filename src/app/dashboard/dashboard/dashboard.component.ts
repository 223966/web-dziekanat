import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models';
import * as MockCards from '../../core/mock/cards/cards.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  readonly cards: Card[] = MockCards.cards;

  constructor() {}

  ngOnInit(): void {}

  handleCardClick(event: boolean): void {}
}
