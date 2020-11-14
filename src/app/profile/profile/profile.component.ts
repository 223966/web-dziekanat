import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  readonly myInfo: PersonalInfo = {
    fields: [
      {
        title: 'Full Name',
        description: 'Jan Lewandoski',
      },
      {
        title: 'Index no.',
        description: '223966',
      },
      {
        title: 'Faculty',
        description: 'International Faculty of Engineering',
      },
      {
        title: 'Course',
        description: 'Computer Science',
      },
      {
        title: 'Semester',
        description: '5th',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}

interface PersonalInfo {
  fields: FieldInfo[];
}

interface FieldInfo {
  title: string;
  description: string;
}
