import { Tab } from './tab';
import { Page } from './page';

export interface GetTabsResponse {
  count: number;
  page: Page;
  tabs: Tab[];
}

export interface DestroyTabResponse {
  success?: boolean;
}

export interface GetTabResponse extends Tab {

}

export interface UpdateTabResponse extends Tab {

}

export interface CreateTabResponse extends Tab {

}
