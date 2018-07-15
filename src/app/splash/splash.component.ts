import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
