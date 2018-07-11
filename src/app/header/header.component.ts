import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  goToHome() {
    if (this.auth.userIsAuthenticated()) {
      this.router.navigate(['/tabs']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  goToNewTab() {
    this.router.navigate(['/tabs/new']);
  }

  userIsAuthenticated(): boolean {
    return this.auth.userIsAuthenticated();
  }
}
