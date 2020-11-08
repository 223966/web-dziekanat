import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input() type: 'default' | 'stroked' | 'raised' | 'flat' | 'icon';
  @Input() color: 'primary' | 'accent' | 'warn';
  @Input() iconName: string;
  @Input() actionName: string;

  constructor() {}

  ngOnInit(): void {}
}
