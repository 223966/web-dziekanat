import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/core/models';

@Component({
  selector: 'custom-option-card',
  templateUrl: './custom-option-card.component.html',
  styleUrls: ['./custom-option-card.component.scss'],
})
export class CustomOptionCardComponent implements OnInit {
  @Input() card: Card;

  @Output() onActionClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  emitActionClick(): void {
    this.onActionClick.emit(true);
  }
}
