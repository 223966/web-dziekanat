import { Card } from '../../models';

export const cards: Card[] = [
  {
    title: 'My Grades',
    description: 'Browse your grades from the current and previous semesters.',
    imgPath: 'assets/images/my-grades.png',
    actionName: 'Browse',
    routerUrl: 'dashboard/grades',
  },
  {
    title: 'My Applications',
    description: 'Browse all the applications that you have submitted.',
    imgPath: 'assets/images/my-applications.png',
    actionName: 'Browse',
    routerUrl: 'dashboard/applications',
  },
  {
    title: 'Sign Up for an Exam',
    description:
      'Choose the term that suits you best. The number of seats is limited.',
    imgPath: 'assets/images/exam-sign-up.png',
    actionName: 'Sign up',
    routerUrl: 'dashboard/exam',
  },
  {
    title: 'Sign Up for PE',
    description: 'Choose among more than 100 sport activities.',
    imgPath: 'assets/images/pe-sign-up.png',
    actionName: 'Sign up',
    routerUrl: 'dashboard/pe',
  },
];
