import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'new-tab-button',
  templateUrl: './new-tab-button.component.html',
  styleUrls: ['./new-tab-button.component.css']
})
export class NewTabButtonComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  goToNewTab() {
    console.log("CLICKED");
    this.router.navigate(['/tabs/new']);
  }

  userIsAuthenticated(): boolean {
    return this.auth.userIsAuthenticated();
  }
  
}
