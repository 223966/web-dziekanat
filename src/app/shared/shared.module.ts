import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomOptionCardComponent } from './components/custom-option-card/custom-option-card.component';
import { StoreModule } from '@ngrx/store';
import { headerReducer } from '../shared/components/custom-header/state/header.reducer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomOptionCardComponent,
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature('header', headerReducer),
  ],
  exports: [
    CustomHeaderComponent,
    CustomOptionCardComponent,
    CustomButtonComponent,
  ],
})
export class SharedModule {}
