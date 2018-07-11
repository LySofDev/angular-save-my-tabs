import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { TabsService } from './tabs.service';
import { GetTabsResponse } from './tabs.responses';
import { Page } from './page';
import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  page: Page = { count: 5, offset: 1 };
  count: number = 0;
  tabs: Tab[] = [];

  constructor(
    private tabsService: TabsService
  ) { }

  ngOnInit() {
    this.getTabsFromService();
  }

  getTabsFromService() {
    this.tabsService.getTabs(this.page).subscribe((response: GetTabsResponse) => {
      this.tabs = response.tabs;
      this.count = response.count;
    });
  }

  updateCurrentPage(nextPage: PageEvent) {
    this.page = { count: this.page.count, offset: nextPage.pageIndex + 1 };
    this.getTabsFromService();
  }

}
