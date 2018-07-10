import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatSnackBarModule
} from '@angular/material';

const MaterialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MaterialComponents
  ],
  exports: [
    ...MaterialComponents
  ],
  declarations: []
})
export class SharedModule { }
