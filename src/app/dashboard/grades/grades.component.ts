import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  selected: string = '5th';

  readonly semesters: string[] = ['5th'];

  readonly dataSource: TableRow[] = [
    {
      id: 1,
      courseName: 'Digital Systems',
      tutorName: 'Piotr Dębiec',
      grade: 4.5,
    },
    {
      id: 2,
      courseName: 'PDSC',
      tutorName: 'Wojciech Sankowski',
      grade: 5,
    },
    {
      id: 3,
      courseName: 'Graphics',
      tutorName: 'Mariusz Zubertowicz',
      grade: 3.5,
    },
    {
      id: 4,
      courseName: 'GUI',
      tutorName: 'Jacek Nowakowski',
      grade: 4.5,
    },
    {
      id: 5,
      courseName: 'CAD',
      tutorName: 'Witold Kubiak',
      grade: 5,
    },
  ];

  readonly displayedColumns: string[] = [
    'id',
    'courseName',
    'tutorName',
    'grade',
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface TableRow {
  id: number;
  courseName: string;
  tutorName: string;
  grade: number;
}
