import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  readonly applications: string[] = [
    'Scholarship application',
    'Erasmus application',
  ];

  constructor() {}

  ngOnInit(): void {}
}
