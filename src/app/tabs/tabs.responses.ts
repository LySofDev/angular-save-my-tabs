import { Tab } from './tab';
import { Page } from './page';

export interface GetTabsResponse {
  count: number;
  page: Page;
  tabs: Tab[];
}

export interface DestroyTabResponse {
  success: boolean;
}
