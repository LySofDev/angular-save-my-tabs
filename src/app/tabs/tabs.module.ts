import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { TabsComponent } from './tabs.component';
import { TabsService } from './tabs.service';
import { TabPreviewComponent } from './tab-preview/tab-preview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TabsComponent
  ],
  providers: [
    TabsService
  ],
  declarations: [
    TabsComponent,
    TabPreviewComponent
  ]
})
export class TabsModule { }
