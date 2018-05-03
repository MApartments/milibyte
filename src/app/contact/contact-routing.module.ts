import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {ContactComponent} from './contact.component';

const routes: Routes = [
  {
    path: 'contact',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ContactComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
