import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {ProwebComponent} from './proweb/proweb.component';

const routes: Routes = [
  {
    path: 'usluge',
    component: MainLayoutComponent,
    children: [
      { path: 'proweb', component: ProwebComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UslugeRoutingModule { }