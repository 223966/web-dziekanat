import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { GradesComponent } from './grades/grades.component';
import { PeComponent } from './pe/pe.component';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CardsListComponent,
      },
      {
        path: 'grades',
        component: GradesComponent,
      },
      {
        path: 'applications',
        component: ApplicationsComponent,
      },
      {
        path: 'exam',
        component: ExamComponent,
      },
      {
        path: 'pe',
        component: PeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
