import { Component, OnInit, Input } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Tab } from '../tab';

@Component({
  selector: 'tab-preview',
  templateUrl: './tab-preview.component.html',
  styleUrls: ['./tab-preview.component.css']
})
export class TabPreviewComponent implements OnInit {
  @Input() tab: Tab;
  @Input() refreshTabs: () => {};
  expanded: boolean = false;

  constructor(
    private tabsService: TabsService
  ) { }

  ngOnInit() {
  }

  toggleExpandedActions() {
    this.expanded = !this.expanded;
  }

  destroyTabWithService() {
    this.tabsService.destroyTab({ id: this.tab.id }).subscribe((success: boolean) => {
      if (success) this.refreshTabs();
    });
  }

}
