import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [

  ]
})
export class CoreModule { }
