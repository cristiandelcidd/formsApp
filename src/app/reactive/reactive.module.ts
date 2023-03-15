import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';

import {
  BasicPageComponent,
  DynamicPage,
  SwitchesPageComponent,
} from './pages';

@NgModule({
  declarations: [BasicPageComponent, DynamicPage, SwitchesPageComponent],
  imports: [CommonModule, ReactiveRoutingModule],
})
export class ReactiveModule {}
