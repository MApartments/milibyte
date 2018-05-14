import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {StoreComponent} from './store.component';

const routes: Routes = [
  {
    path: 'store',
    component: MainLayoutComponent,
    children: [
      { path: '', component: StoreComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
