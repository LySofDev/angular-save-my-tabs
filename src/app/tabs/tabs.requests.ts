import { Page } from './page';
import { Tab } from './tab';

export interface GetTabsRequest extends Page {

}

export interface DestroyTabRequest {
  id: number;
}

export interface GetTabRequest {
  id: number;
}

export interface UpdateTabRequest extends Partial<Tab> {

}
