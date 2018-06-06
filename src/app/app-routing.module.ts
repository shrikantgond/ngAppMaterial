import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {breadcrumb: 'Home'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent];
