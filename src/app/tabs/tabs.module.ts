import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { TabsComponent } from './tabs.component';
import { TabsService } from './tabs.service';
import { TabPreviewComponent } from './tab-preview/tab-preview.component';
import { EditTabComponent } from './edit-tab/edit-tab.component';
import { NewTabComponent } from './new-tab/new-tab.component';
import { RemoveProtocolPipe } from './remove-protocol.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TabsComponent,
    EditTabComponent,
    NewTabComponent
  ],
  providers: [
    TabsService
  ],
  declarations: [
    TabsComponent,
    TabPreviewComponent,
    EditTabComponent,
    NewTabComponent,
    RemoveProtocolPipe
  ]
})
export class TabsModule { }
