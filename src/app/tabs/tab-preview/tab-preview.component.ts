import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'tab-preview',
  templateUrl: './tab-preview.component.html',
  styleUrls: ['./tab-preview.component.css']
})
export class TabPreviewComponent implements OnInit {
  @Input() tab: Tab;
  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleExpandedActions() {
    this.expanded = !this.expanded;
  }

}
