import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AuthGuard,
    RoleGuard
  ],
  declarations: [
    AuthGuard,
    RoleGuard
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
