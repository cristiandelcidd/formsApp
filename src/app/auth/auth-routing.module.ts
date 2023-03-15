import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'register', component: RegisterPageComponent },
      { path: '**', redirectTo: 'register' },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AuthRoutingModule {}
