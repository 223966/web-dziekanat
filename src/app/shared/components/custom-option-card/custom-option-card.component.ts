import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/core/models';

@Component({
  selector: 'custom-option-card',
  templateUrl: './custom-option-card.component.html',
  styleUrls: ['./custom-option-card.component.scss'],
})
export class CustomOptionCardComponent implements OnInit {
  @Input() card: Card;

  @Output() onActionClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitActionClick(): void {
    this.onActionClick.emit(this.card.routerUrl);
  }
}
