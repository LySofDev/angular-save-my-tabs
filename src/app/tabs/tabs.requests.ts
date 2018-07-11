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
  id: number;
  title?: string;
  url?: string;
}

export interface CreateTabRequest extends Partial<Tab> {
  title?: string;
  url: string;
}
