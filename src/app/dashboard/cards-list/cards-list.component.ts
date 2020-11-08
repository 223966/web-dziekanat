import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as MockCards from '../../core/mock/cards/cards.mock';
import { Card } from '../../core/models';

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  readonly cards: Card[] = MockCards.cards;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleCardClick(routerUrl: string): void {
    this.router.navigate([routerUrl]);
  }
}
