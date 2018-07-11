import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { switchMap } from 'rxjs/operators';
import { TabsService } from '../tabs.service';
import { Tab } from '../tab';

@Component({
  selector: 'app-edit-tab',
  templateUrl: './edit-tab.component.html',
  styleUrls: ['./edit-tab.component.css']
})
export class EditTabComponent implements OnInit {
  id: number;
  loaded: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tabsService: TabsService,
    private flash: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tabsService.getTab({
        id: parseInt(params.get('id'))
       }).subscribe((tab: Tab) => {
         this.loaded = true;
         this.id = tab.id;
        this.form = this.fb.group({
          title: [ tab.title ],
          url: [ tab.url, [ Validators.required ]]
        });
      });
    });
  }

  onSubmit() {
    this.tabsService.updateTab({
      id: this.id,
      url: this.form.get('url').value,
      title: this.form.get('title').value
    }).subscribe((tab: Tab) => {
      this.form.get('url').setValue(tab.url);
      this.form.get('title').setValue(tab.title);
      this.flash.open('Tab updated!', 'Ok');
    });
  }

  goBackToTabs() {
    this.router.navigate(['/tabs']);
  }

}
