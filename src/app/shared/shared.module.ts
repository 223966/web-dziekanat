import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomOptionCardComponent } from './components/custom-option-card/custom-option-card.component';
import { StoreModule } from '@ngrx/store';
import { headerReducer } from '../shared/components/custom-header/state/header.reducer';
import { CustomSidebarComponent } from './components/custom-sidebar/custom-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomOptionCardComponent,
    CustomSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    StoreModule.forFeature('header', headerReducer),
  ],
  exports: [
    CustomHeaderComponent,
    CustomOptionCardComponent,
    CustomSidebarComponent,
  ],
})
export class SharedModule {}
