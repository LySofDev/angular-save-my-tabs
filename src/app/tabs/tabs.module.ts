import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { TabsComponent } from './tabs.component';
import { TabsService } from './tabs.service';
import { TabPreviewComponent } from './tab-preview/tab-preview.component';
import { EditTabComponent } from './edit-tab/edit-tab.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TabsComponent,
    EditTabComponent
  ],
  providers: [
    TabsService
  ],
  declarations: [
    TabsComponent,
    TabPreviewComponent,
    EditTabComponent
  ]
})
export class TabsModule { }
