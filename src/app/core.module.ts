import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const FormModules = [
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...FormModules,
    BrowserAnimationsModule
  ],
  exports: [
    ...FormModules,
    BrowserAnimationsModule
  ],
  declarations: [

  ]
})
export class CoreModule { }
