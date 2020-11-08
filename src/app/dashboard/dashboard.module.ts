import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GradesComponent } from './grades/grades.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ExamComponent } from './exam/exam.component';
import { PeComponent } from './pe/pe.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  declarations: [DashboardComponent, GradesComponent, ApplicationsComponent, ExamComponent, PeComponent, CardsListComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
