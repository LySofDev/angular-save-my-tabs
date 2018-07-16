import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TabsService } from '../tabs.service';
import { Tab } from '../tab';

@Component({
  selector: 'app-new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.css']
})
export class NewTabComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tabsService: TabsService,
    private flash: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      url: ['', [Validators.required] ],
      title: ['']
    });
  }

  onSubmit() {
    this.tabsService.createTab({
      url: this.sanitizeUrl(this.form.get('url').value),
      title: this.form.get('title').value
    }).subscribe((tab: Tab) => {
      this.flash.open('Tab created!', 'Ok');
      this.router.navigate(['/tabs']);
    });
  }

  goBackToTabs() {
    this.router.navigate(['/tabs']);
  }

  sanitizeUrl(url: string): string {
    if (!url.startsWith('http')) {
      url = `http://${url}`;
    }
    return url;
  }

  isDisabled(): boolean {
    return !this.form.valid;
  }
  
}
