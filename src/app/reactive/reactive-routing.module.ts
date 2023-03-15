import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  BasicPageComponent,
  DynamicPage,
  SwitchesPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicPageComponent },
      { path: 'dynamic', component: DynamicPage },
      { path: 'switches', component: SwitchesPageComponent },
      { path: '**', redirectTo: 'basic' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveRoutingModule {}
