import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatSnackBarModule
} from '@angular/material';

const FormModules = [
  FormsModule,
  ReactiveFormsModule,
];

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
    ...FormModules,
    ...MaterialComponents
  ],
  exports: [
    ...FormModules,
    ...MaterialComponents
  ],
  declarations: []
})
export class SharedModule { }
