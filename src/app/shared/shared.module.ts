import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CustomOptionCardComponent } from './components/custom-option-card/custom-option-card.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [CustomHeaderComponent, CustomOptionCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule
  ],
  exports: [CustomHeaderComponent, CustomOptionCardComponent]
})
export class SharedModule { }
