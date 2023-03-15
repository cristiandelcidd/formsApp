import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
