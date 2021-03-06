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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

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
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    StoreModule.forFeature('header', headerReducer),
  ],
  exports: [
    CustomHeaderComponent,
    CustomOptionCardComponent,
    CustomButtonComponent,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
  ],
})
export class SharedModule {}
