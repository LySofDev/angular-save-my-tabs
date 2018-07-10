import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthModule
  ],
  declarations: []
})
export class UsersModule { }
