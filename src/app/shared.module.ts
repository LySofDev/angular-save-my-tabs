import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatExpansionModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
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
  MatSnackBarModule,
  MatIconModule,
  MatExpansionModule,
  MatProgressSpinnerModule
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
