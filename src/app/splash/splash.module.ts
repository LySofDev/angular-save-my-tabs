import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SharedModule } from '../shared.module';
import { StatusService } from './status.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SplashComponent
  ],
  providers: [
    StatusService
  ],
  declarations: [
    SplashComponent
  ]
})
export class SplashModule { }
