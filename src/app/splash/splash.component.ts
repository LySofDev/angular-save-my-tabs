import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  public loaded: boolean = false;

  constructor(
    private status: StatusService,
  ) { }

  ngOnInit() {
    this.status.healthCheck().subscribe((success: boolean) => {
      this.loaded = success;
    });
  }

}
